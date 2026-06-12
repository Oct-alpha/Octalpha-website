import { useState, useRef, useEffect } from "react";

const WHATSAPP = "971526543343";
const EMAIL    = "info.dxb@octalpha.com";
const PHONE    = "+971 4 424 24 920";

const SYSTEM = `You are Octalpha's AI support assistant. Always respond in structured JSON only.

Company: Octalpha Business Solutions
Address: Office 904, Tower B, Dubai Internet City, Dubai, UAE
Email: info.dxb@octalpha.com
Phone: +971 4 424 24 920
WhatsApp: +971 52 654 3343

Services:
- IT Infrastructure: network design, servers, structured cabling, AV systems
- Cybersecurity: Fortinet solutions, VAPT, GRC consulting, vCISO, security audits
- Cloud Solutions: cloud migration, virtual desktops (VDI), Azure/AWS, cloud management
- Managed IT: 24/7 helpdesk, AMC contracts, remote monitoring, on-site support
- Microsoft 365: licensing, migration, Teams, Exchange, SharePoint, OneDrive
- SAP & Business Apps: SAP implementation, ERP, SharePoint portals
- Device Management: MDM, EDR, endpoint security

Always return this exact JSON format:
{
  "label": "section title or omit",
  "intro": "one sentence or omit",
  "points": ["short bullet", "short bullet"],
  "note": "one line CTA or omit"
}
Rules: max 5 bullets, each under 12 words. No paragraphs. No pricing. For cost or pricing questions always direct to WhatsApp +971 52 654 3343 or email info.dxb@octalpha.com. Return raw JSON only, no markdown.

Predefined responses for common queries:
- Contact details: provide phone, email, WhatsApp, address
- Office location: Office 904, Tower B, Dubai Internet City, Dubai UAE
- Services: list main service categories
- Schedule a call: direct to WhatsApp or email
- Pricing/quote: direct to WhatsApp or email with note that team will respond within 1 business hour`;

// ── Inject CSS once ────────────────────────────────────────────────────────
const CSS = `
  @keyframes oa-spin    { to { transform: rotate(360deg); } }
  @keyframes oa-pulse   { 0%,100%{box-shadow:0 4px 18px rgba(0,136,194,.30),0 0 0 0 rgba(0,174,239,.25)} 70%{box-shadow:0 4px 18px rgba(0,136,194,.30),0 0 0 9px rgba(0,174,239,0)} }
  @keyframes oa-up      { from{opacity:0;transform:translateY(16px) scale(.96)} to{opacity:1;transform:none} }
  @keyframes oa-in      { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
  @keyframes oa-pop     { from{opacity:0;transform:translateY(10px) scale(.94)} to{opacity:1;transform:none} }
  @keyframes oa-blink   { 0%,88%,100%{transform:scaleY(1)} 93%{transform:scaleY(.1)} }
  @keyframes oa-arc     { 0%,100%{opacity:.2} 50%{opacity:1} }
  @keyframes oa-bounce  { 0%,60%,100%{transform:translateY(0);opacity:.35} 30%{transform:translateY(-5px);opacity:1} }
  @keyframes oa-glow    { from{opacity:.25} to{opacity:.7} }
  @keyframes oa-fadein  { from{opacity:0} to{opacity:1} }
  .oa-chip:hover  { background:#E0F4FF !important; border-color:#00AEEF !important; }
  .oa-wa:hover    { filter:brightness(1.08); }
  .oa-down:hover  { background:rgba(255,255,255,.20) !important; }
  .oa-fab:hover   { transform:scale(1.05) !important; }
  .oa-send:hover  { opacity:.88 !important; }
  .oa-inp:focus   { border-color:#00AEEF !important; box-shadow:0 0 0 3px rgba(0,174,239,.12) !important; outline:none; }
  .oa-qa:hover    { background:#E8F6FF !important; border-color:#00AEEF !important; color:#0077C0 !important; }
  .oa-msgs::-webkit-scrollbar { width:4px; }
  .oa-msgs::-webkit-scrollbar-track { background:transparent; }
  .oa-msgs::-webkit-scrollbar-thumb { background:#CBD5E1; border-radius:4px; }
`;

function injectCSS() {
  if (document.getElementById("oa-css")) return;
  const s = document.createElement("style");
  s.id = "oa-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

// ── Octalpha Logo SVG ──────────────────────────────────────────────────────
function OctLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Octagon shape */}
      <polygon points="14,4 26,4 36,14 36,26 26,36 14,36 4,26 4,14" fill="#0F2A55" stroke="#00AEEF" strokeWidth="1.5"/>
      {/* Inner alpha / O mark */}
      <circle cx="20" cy="20" r="6" fill="none" stroke="#00AEEF" strokeWidth="2"/>
      <line x1="20" y1="14" x2="20" y2="10" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="26" x2="20" y2="30" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="20" x2="10" y2="20" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="26" y1="20" x2="30" y2="20" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// ── Bot SVG ────────────────────────────────────────────────────────────────
function BotFace({ size = 26, color = "#00AEEF", eyeColor = "#00AEEF", strokeColor = "#00AEEF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" style={{ position:"relative", zIndex:1 }}>
      <path style={{ animation:"oa-arc 1.8s ease-in-out infinite 0s" }}    d="M15 3 Q22 3 22 9"       stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round"/>
      <path style={{ animation:"oa-arc 1.8s ease-in-out infinite .25s" }}  d="M15 5.5 Q20 5.5 20 9.5" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round"/>
      <path style={{ animation:"oa-arc 1.8s ease-in-out infinite .5s" }}   d="M15 8 Q18 8 18 10"      stroke={strokeColor} strokeWidth=".9"  strokeLinecap="round"/>
      <line x1="15" y1="10" x2="15" y2="7.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round"/>
      <circle cx="15" cy="6.5" r="1.2" fill={strokeColor} style={{ animation:"oa-arc 1.4s ease-in-out infinite" }}/>
      <rect x="6" y="10" width="18" height="14" rx="3.5" fill={color} stroke={strokeColor} strokeWidth=".9"/>
      <rect x="9"  y="13.5" width="4" height="3.8" rx="1.1" fill={eyeColor} style={{ animation:"oa-blink 4.5s ease-in-out infinite",      transformOrigin:"center" }}/>
      <rect x="17" y="13.5" width="4" height="3.8" rx="1.1" fill={eyeColor} style={{ animation:"oa-blink 4.5s ease-in-out infinite .08s", transformOrigin:"center" }}/>
      <rect x="10.5" y="19.5" width="9" height="1.6" rx=".8" fill={eyeColor} opacity=".8"/>
      <rect x="4"    y="14" width="2.2" height="4.5" rx="1.1" fill={color} stroke={strokeColor} strokeWidth=".7"/>
      <rect x="23.8" y="14" width="2.2" height="4.5" rx="1.1" fill={color} stroke={strokeColor} strokeWidth=".7"/>
    </svg>
  );
}

// ── Render structured JSON bot response ────────────────────────────────────
function BotBubble({ raw }) {
  let d = null;
  try { d = JSON.parse(raw.replace(/```json|```/g, "").trim()); } catch {}

  const base = {
    padding:"10px 13px", background:"#fff", color:"#1A2A40",
    border:"1px solid #DDE3EE", borderRadius:"14px", borderBottomLeftRadius:"4px",
    fontSize:"13.5px", lineHeight:1.55, boxShadow:"0 2px 8px rgba(15,42,85,.06)",
    animation:"oa-in .22s ease both",
  };

  if (!d) return <div style={base}>{raw}</div>;

  return (
    <div style={base}>
      {d.label && <span style={{ display:"block", fontSize:"10px", fontWeight:700, color:"#0077C0", textTransform:"uppercase", letterSpacing:".08em", marginBottom:"5px" }}>{d.label}</span>}
      {d.intro && <span style={{ display:"block", marginBottom:d.points?.length ? "6px" : 0, fontSize:"13.5px" }}>{d.intro}</span>}
      {d.intro && d.points?.length > 0 && <hr style={{ border:"none", borderTop:"1px solid #EEF1F7", margin:"6px 0" }}/>}
      {d.points?.map((p, i) => (
        <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"7px", marginBottom:i < d.points.length-1 ? "4px" : 0 }}>
          <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#00AEEF", flexShrink:0, marginTop:"7px" }}/>
          <span style={{ fontSize:"13.5px", lineHeight:1.45 }}>{p}</span>
        </div>
      ))}
      {d.note && <>
        <hr style={{ border:"none", borderTop:"1px solid #EEF1F7", margin:"6px 0" }}/>
        <span style={{ display:"block", fontSize:"11.5px", color:"#4A5878", fontStyle:"italic" }}>{d.note}</span>
      </>}
    </div>
  );
}

// ── WhatsApp nudge bar ────────────────────────────────────────────────────
function WANudge() {
  return (
    <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
      style={{ display:"flex", alignItems:"center", gap:8, background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:10, padding:"8px 12px", textDecoration:"none", margin:"0 14px 10px", cursor:"pointer", animation:"oa-fadein .3s ease" }}>
      <div style={{ width:28, height:28, borderRadius:8, background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </div>
      <div>
        <div style={{ fontSize:"12px", fontWeight:600, color:"#166534" }}>Need immediate assistance?</div>
        <div style={{ fontSize:"11px", color:"#16a34a" }}>Chat with our team on WhatsApp →</div>
      </div>
    </a>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [showPop, setShowPop] = useState(true);
  const [msgs, setMsgs]       = useState([]);
  const [input, setInput]     = useState("");
  const [busy, setBusy]       = useState(false);
  const history   = useRef([]);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);
  const panelRef  = useRef(null);

  useEffect(() => { injectCSS(); }, []);

  // Handle mobile keyboard — scroll panel up when keyboard opens
  useEffect(() => {
    if (!open) return;
    const handler = () => {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior:"smooth" }), 300);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [open]);

  // Welcome message on first open
  useEffect(() => {
    if (!open) return;
    if (msgs.length === 0) {
      setMsgs([{
        role: "bot",
        text: JSON.stringify({
          intro: "Hi! I'm Octalpha's AI assistant — how can I help you today?",
          points: [
            "IT infrastructure & cloud solutions",
            "Cybersecurity & compliance (GRC, VAPT)",
            "Managed IT & 24/7 support",
            "Microsoft 365, SAP & business apps",
          ],
          note: "Select a topic below or type your question.",
        }),
        chips: ["Cloud Migration","Cybersecurity","Managed IT","Microsoft 365","Get a Quote","Talk to Expert"],
        time: now(),
      }]);
    }
    setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:"smooth" });
  }, [msgs, busy]);

  function now() {
    return new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" });
  }

  function chips(text, len) {
    const t = text.toLowerCase();
    if (len <= 1)                                          return ["Cloud Migration","Cybersecurity","Managed IT","Microsoft 365","Get a Quote","Talk to Expert"];
    if (t.includes("price")||t.includes("cost")||t.includes("quote")) return ["Get a Quote","Talk to Expert","Chat on WhatsApp"];
    if (t.includes("cloud")||t.includes("365")||t.includes("azure"))  return ["SAP / ERP","SharePoint","Virtual Desktops","Get a Quote"];
    if (t.includes("cyber")||t.includes("security")||t.includes("vapt")) return ["Fortinet","vCISO","Free Assessment","Get a Quote"];
    if (t.includes("managed")||t.includes("support")||t.includes("helpdesk")) return ["Cloud Solutions","Business Apps","Talk to Expert"];
    if (t.includes("contact")||t.includes("office")||t.includes("location")) return ["Get a Quote","Talk to Expert","Chat on WhatsApp"];
    return ["Get a Quote","Talk to Expert","Schedule a Call"];
  }

  // Handle special quick-action chips locally (no API call needed)
  function handleChip(c) {
    const label = c.toLowerCase();
    if (label === "get a quote") {
      setMsgs(p => [...p,
        { role:"user", text:"Get a Quote", time:now() },
        { role:"bot", text: JSON.stringify({
            label:"Request a Quote",
            intro:"Our team will respond within 1 business hour.",
            points:[
              "Email: info.dxb@octalpha.com",
              "WhatsApp: +971 52 654 3343",
              "Phone: +971 4 424 24 920",
            ],
            note:"Send us a message and we'll tailor a proposal for you.",
          }),
          chips:["Chat on WhatsApp","Schedule a Call"],
          time:now(),
        },
      ]);
      return;
    }
    if (label === "talk to expert" || label === "talk to human" || label === "chat on whatsapp") {
      window.open(`https://wa.me/${WHATSAPP}`, "_blank");
      return;
    }
    if (label === "schedule a call") {
      setMsgs(p => [...p,
        { role:"user", text:"Schedule a Call", time:now() },
        { role:"bot", text: JSON.stringify({
            label:"Schedule a Call",
            intro:"Reach us directly — we're available Sunday–Thursday, 9am–6pm GST.",
            points:[
              "Phone: +971 4 424 24 920",
              "WhatsApp: +971 52 654 3343",
              "Email: info.dxb@octalpha.com",
              "Office: Office 904, Tower B, Dubai Internet City",
            ],
            note:"WhatsApp is the fastest way to connect with our team.",
          }),
          chips:["Chat on WhatsApp","Get a Quote"],
          time:now(),
        },
      ]);
      return;
    }
    if (label === "free assessment") {
      setMsgs(p => [...p,
        { role:"user", text:"Free Assessment", time:now() },
        { role:"bot", text: JSON.stringify({
            label:"Free Security Assessment",
            intro:"We offer a complimentary cybersecurity health check for your business.",
            points:[
              "Network & firewall vulnerability scan",
              "Endpoint & device security review",
              "Policy & compliance gap analysis",
              "Detailed report with recommendations",
            ],
            note:"Contact us on WhatsApp to book your free assessment.",
          }),
          chips:["Chat on WhatsApp","vCISO","Fortinet"],
          time:now(),
        },
      ]);
      return;
    }
    // Otherwise send to AI
    send(c);
  }

  async function send(textArg) {
    const text = (textArg ?? input).trim();
    if (!text || busy) return;
    setInput("");
    setMsgs(p => [...p, { role:"user", text, time:now() }]);
    setBusy(true);
    history.current.push({ role:"user", content:text });
    try {
      const res  = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:1000,
          system:SYSTEM,
          messages:history.current,
        }),
      });
      const data  = await res.json();
      const reply = data.content?.find(b => b.type==="text")?.text
        || JSON.stringify({ intro:"Something went wrong.", note:`Reach us at ${EMAIL}` });
      history.current.push({ role:"assistant", content:reply });
      setMsgs(p => [...p, { role:"bot", text:reply, chips:chips(text, history.current.length), time:now() }]);
    } catch {
      setMsgs(p => [...p, { role:"bot", text:JSON.stringify({ intro:"Connection issue.", note:`Contact ${EMAIL}` }), time:now() }]);
    } finally {
      setBusy(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  // ── Responsive panel sizing ──────────────────────────────────────────────
  const isMobile = typeof window !== "undefined" && window.innerWidth < 480;
  const panelStyle = isMobile
    ? { position:"fixed", bottom:0, left:0, right:0, top:0, width:"100%", height:"100%", borderRadius:0, zIndex:10000 }
    : { width:380, height:"min(600px, calc(100vh - 110px))", borderRadius:20 };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div style={{ position:"fixed", bottom:24, right:24, zIndex:9999, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:10, fontFamily:"'DM Sans','Inter',system-ui,sans-serif" }}>

      {/* ── Popup pill ── */}
      {!open && showPop && (
        <div style={{ position:"relative", animation:"oa-pop .38s cubic-bezier(0.16,1,0.3,1) both" }}>
          <div
            onClick={() => { setOpen(true); setShowPop(false); }}
            style={{ display:"flex", alignItems:"center", gap:10, background:"#fff", border:"1.5px solid rgba(0,174,239,.4)", borderRadius:40, padding:"8px 38px 8px 8px", boxShadow:"0 6px 24px rgba(15,42,85,.13)", cursor:"pointer", whiteSpace:"nowrap" }}>
            <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(140deg,#00AEEF,#0077C0)", border:"2px solid #fff", boxShadow:"0 2px 8px rgba(0,136,194,.25)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <BotFace size={20} color="rgba(255,255,255,.15)" eyeColor="#fff" strokeColor="rgba(255,255,255,.9)"/>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:1 }}>
              <span style={{ fontSize:"12.5px", fontWeight:700, color:"#0F2A55" }}>👋 Hi! How can we help you?</span>
              <span style={{ fontSize:"11px", color:"#5A6A80" }}>IT · Cloud · Security · Managed Services</span>
            </div>
          </div>
          <div style={{ position:"absolute", bottom:-7, right:26, width:0, height:0, borderLeft:"7px solid transparent", borderTop:"7px solid #fff", filter:"drop-shadow(0 2px 1px rgba(15,42,85,.07))" }}/>
          <button onClick={e => { e.stopPropagation(); setShowPop(false); }}
            style={{ position:"absolute", top:"50%", right:10, transform:"translateY(-50%)", width:20, height:20, borderRadius:"50%", background:"#F0F2F7", border:"1px solid #DDE3EE", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#8A9BB8", padding:0, lineHeight:1 }}>
            ✕
          </button>
        </div>
      )}

      {/* ── Chat panel ── */}
      {open && (
        <div ref={panelRef}
          style={{ background:"#fff", border:"1px solid #DDE3EE", display:"flex", flexDirection:"column", overflow:"hidden", boxShadow:"0 20px 60px rgba(15,42,85,.18)", animation:"oa-up .3s cubic-bezier(0.16,1,0.3,1) both", ...panelStyle }}>

          {/* Header */}
          <div style={{ background:"linear-gradient(120deg,#0F2A55 0%,#163660 100%)", padding:"11px 13px", display:"flex", alignItems:"center", gap:10, flexShrink:0, position:"relative" }}>
            {/* Logo + title */}
            <div style={{ display:"flex", alignItems:"center", gap:9, flex:1, minWidth:0 }}>
              <div style={{ width:38, height:38, borderRadius:10, background:"rgba(0,174,239,.15)", border:"1.5px solid rgba(0,174,239,.4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <OctLogo size={24}/>
              </div>
              <div style={{ minWidth:0 }}>
                <div style={{ fontSize:"13.5px", fontWeight:700, color:"#fff", letterSpacing:".01em", lineHeight:1.2 }}>Octalpha AI Assistant</div>
                <div style={{ display:"flex", alignItems:"center", gap:4, marginTop:2 }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:"#4ade80", display:"inline-block", boxShadow:"0 0 5px #4ade80" }}/>
                  <span style={{ fontSize:"10.5px", color:"rgba(255,255,255,.65)" }}>Online · Typically replies instantly</span>
                </div>
              </div>
            </div>
            {/* WhatsApp button */}
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="oa-wa"
              style={{ display:"flex", alignItems:"center", gap:5, background:"#25D366", color:"#fff", border:"none", borderRadius:18, padding:"6px 10px", fontSize:"11px", fontWeight:600, cursor:"pointer", textDecoration:"none", boxShadow:"0 3px 10px rgba(37,211,102,.3)", flexShrink:0 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            {/* Close */}
            <button className="oa-down" onClick={() => setOpen(false)}
              style={{ background:"rgba(255,255,255,.1)", border:"none", borderRadius:8, width:30, height:30, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"#fff", flexShrink:0, padding:0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            {/* Accent line */}
            <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"linear-gradient(90deg,transparent,#00AEEF,#00D4FF,#00AEEF,transparent)" }}/>
          </div>

          {/* Messages */}
          <div className="oa-msgs" style={{ flex:1, overflowY:"auto", padding:"12px 14px", display:"flex", flexDirection:"column", gap:10, background:"#F5F7FB" }}>
            <div style={{ alignSelf:"center", fontSize:"10px", color:"#94A3B8", background:"#E8ECF5", border:"1px solid #DDE3EE", padding:"2px 12px", borderRadius:20, letterSpacing:".05em" }}>Today</div>

            {msgs.map((m, i) => m.role === "bot" ? (
              <div key={i} style={{ display:"flex", flexDirection:"column", maxWidth:"88%", gap:3, alignSelf:"flex-start" }}>
                <div style={{ display:"flex", alignItems:"flex-end", gap:7 }}>
                  <div style={{ width:26, height:26, borderRadius:8, background:"#0F2A55", border:"1.5px solid rgba(0,174,239,.4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <BotFace size={16} color="#162A4A" eyeColor="#00AEEF" strokeColor="#00AEEF"/>
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <BotBubble raw={m.text}/>
                    <div style={{ fontSize:"10px", color:"#94A3B8", padding:"2px 2px 0" }}>{m.time}</div>
                    {m.chips?.length > 0 && (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginTop:7 }}>
                        {m.chips.map((c, ci) => (
                          <button key={ci} className="oa-chip" onClick={() => handleChip(c)}
                            style={{ background:"#fff", border:"1px solid #CBD5E1", color:"#0F2A55", borderRadius:18, padding:"4px 11px", fontSize:"11.5px", fontWeight:500, cursor:"pointer", fontFamily:"inherit", transition:"all .15s" }}>
                            {c}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div key={i} style={{ display:"flex", flexDirection:"column", maxWidth:"80%", gap:3, alignSelf:"flex-end" }}>
                <div style={{ padding:"10px 13px", background:"linear-gradient(135deg,#0097D6,#00AEEF)", color:"#fff", borderRadius:14, borderBottomRightRadius:4, fontSize:"13.5px", lineHeight:1.55, boxShadow:"0 3px 12px rgba(0,174,239,.22)", animation:"oa-in .22s ease both" }}>{m.text}</div>
                <div style={{ fontSize:"10px", color:"#94A3B8", padding:"0 2px", textAlign:"right" }}>{m.time}</div>
              </div>
            ))}

            {busy && (
              <div style={{ display:"flex", alignItems:"flex-end", gap:7 }}>
                <div style={{ width:26, height:26, borderRadius:8, background:"#0F2A55", border:"1.5px solid rgba(0,174,239,.4)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <BotFace size={16} color="#162A4A" eyeColor="#00AEEF" strokeColor="#00AEEF"/>
                </div>
                <div style={{ padding:"11px 14px", display:"flex", alignItems:"center", gap:5, background:"#fff", border:"1px solid #DDE3EE", borderRadius:14, borderBottomLeftRadius:4, boxShadow:"0 2px 8px rgba(15,42,85,.06)" }}>
                  {[0,.15,.3].map((d,i) => <span key={i} style={{ width:6, height:6, borderRadius:"50%", background:"#00AEEF", animation:`oa-bounce 1.3s ease-in-out infinite ${d}s` }}/>)}
                </div>
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* WhatsApp nudge */}
          <WANudge/>

          {/* Input */}
          <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 12px", background:"#fff", borderTop:"1px solid #EEF1F7", flexShrink:0 }}>
            <input ref={inputRef} className="oa-inp" value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Ask about IT, cloud, security…"
              style={{ flex:1, background:"#F5F7FB", border:"1px solid #DDE3EE", borderRadius:22, padding:"9px 15px", fontSize:"13.5px", fontFamily:"inherit", color:"#1A2A40", transition:"border-color .15s, box-shadow .15s" }}/>
            <button className="oa-send" disabled={busy} onClick={() => send()}
              style={{ width:38, height:38, borderRadius:10, background:"linear-gradient(135deg,#0097D6,#00AEEF)", border:"none", cursor: busy?"not-allowed":"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", flexShrink:0, boxShadow:"0 3px 12px rgba(0,174,239,.3)", opacity:busy?0.5:1, transition:"opacity .15s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>

        </div>
      )}

      {/* ── FAB ── */}
      <button className="oa-fab" onClick={() => { setOpen(o => !o); setShowPop(false); }}
        style={{ width:56, height:56, borderRadius:"50%", background:"linear-gradient(140deg,#00AEEF,#0077C0)", border:"3px solid #fff", boxShadow:"0 4px 16px rgba(0,136,194,.35)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", outline:"none", flexShrink:0, animation:"oa-pulse 3s ease-in-out infinite", transition:"transform .2s" }}>
        <BotFace size={27} color="rgba(255,255,255,.15)" eyeColor="#fff" strokeColor="rgba(255,255,255,.9)"/>
      </button>

    </div>
  );
}