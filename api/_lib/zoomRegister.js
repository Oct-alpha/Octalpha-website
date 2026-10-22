// Shared Zoom webinar registration logic (used by Vercel and Netlify functions).
//
// Secrets are read from environment variables set in the hosting dashboard —
// never commit them to this repository:
//   ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET, ZOOM_WEBINAR_ID
//   ZOOM_REGISTRATION_URL (optional: public Zoom registration page used as fallback)
//
// The Zoom Server-to-Server OAuth app needs these scopes:
//   webinar:write:registrant:admin (or webinar:write:admin)       — register people
//   webinar:read:list_registrants:admin (or webinar:read:admin)    — duplicate check

const env = (key, fallback = "") => (process.env[key] || fallback).trim();

const FALLBACK_URL = () =>
  env("ZOOM_REGISTRATION_URL", "https://us06web.zoom.us/webinar/register/WN_e5h1zakjTj6rLqO4IVas8Q");

async function getAccessToken() {
  const basic = Buffer.from(`${env("ZOOM_CLIENT_ID")}:${env("ZOOM_CLIENT_SECRET")}`).toString("base64");
  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${encodeURIComponent(env("ZOOM_ACCOUNT_ID"))}`,
    { method: "POST", headers: { Authorization: `Basic ${basic}` } }
  );
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) throw new Error(`Zoom OAuth failed (${res.status})`);
  return data.access_token;
}

// Digits only, compared on the last 9 digits so "+971 50 123 4567",
// "971501234567" and "0501234567" all count as the same number.
export function phoneKey(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length >= 7 ? digits.slice(-9) : "";
}

// Looks up existing registrants directly in Zoom, by email and by mobile number.
// Returns { byEmail, byPhone }, or undefined if the lookup isn't allowed.
async function findRegistrant(token, webinarId, email, phone) {
  const wantedPhone = phoneKey(phone);
  let byPhone = null;
  for (const status of ["approved", "pending"]) {
    let pageToken = "";
    for (let page = 0; page < 40; page++) {
      const url =
        `https://api.zoom.us/v2/webinars/${webinarId}/registrants?status=${status}&page_size=300` +
        (pageToken ? `&next_page_token=${encodeURIComponent(pageToken)}` : "");
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) return undefined;
      const data = await res.json();
      for (const r of data.registrants || []) {
        if ((r.email || "").toLowerCase() === email) return { byEmail: r, byPhone: null };
        if (!byPhone && wantedPhone && phoneKey(r.phone) === wantedPhone) byPhone = r;
      }
      pageToken = data.next_page_token || "";
      if (!pageToken) break;
    }
  }
  return { byEmail: null, byPhone };
}

export async function handleRegistration(body = {}) {
  const firstName = String(body.first_name || "").trim();
  const lastName = String(body.last_name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const phone = String(body.phone || "").trim();
  const company = String(body.company || (email.includes("@") ? email.split("@")[1] : "")).trim();

  if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return { status: 400, json: { ok: false, error: "Missing or invalid fields" } };
  }

  const webinarId = env("ZOOM_WEBINAR_ID").replace(/\D/g, "");
  if (!webinarId || !env("ZOOM_CLIENT_SECRET")) {
    // Not configured on this host: the page will send the visitor to Zoom's page.
    return { status: 200, json: { ok: true, already_registered: false, zoom_api_synced: false, join_url: FALLBACK_URL(), zoom_error: "not_configured" } };
  }

  try {
    const token = await getAccessToken();

    // 1) Already registered? No second registration.
    const found = (await findRegistrant(token, webinarId, email, phone)) || {};

    // Same mobile number, different email: block, without revealing whose it is.
    if (!found.byEmail && found.byPhone) {
      return { status: 200, json: { ok: true, duplicate_phone: true, already_registered: false, zoom_api_synced: false } };
    }

    const existing = found.byEmail;
    if (existing) {
      return {
        status: 200,
        json: {
          ok: true,
          already_registered: true,
          zoom_api_synced: true,
          registrant_id: existing.id || "",
          join_url: existing.join_url || FALLBACK_URL(),
          first_name: existing.first_name || firstName,
          last_name: existing.last_name || lastName,
        },
      };
    }

    // 2) New registrant.
    const res = await fetch(`https://api.zoom.us/v2/webinars/${webinarId}/registrants`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        org: company,
        comments: "Registered via octalpha.com/webinar",
      }),
    });
    const data = await res.json().catch(() => ({}));
    if ((res.status === 201 || res.status === 200) && data.join_url) {
      return {
        status: 200,
        json: { ok: true, already_registered: false, zoom_api_synced: true, registrant_id: data.registrant_id || "", join_url: data.join_url },
      };
    }
    console.error("Zoom registrant error", res.status, data);
    return { status: 200, json: { ok: true, already_registered: false, zoom_api_synced: false, join_url: FALLBACK_URL(), zoom_error: data.message || `HTTP ${res.status}` } };
  } catch (err) {
    console.error("Zoom registration failed", err.message);
    return { status: 200, json: { ok: true, already_registered: false, zoom_api_synced: false, join_url: FALLBACK_URL(), zoom_error: err.message } };
  }
}
