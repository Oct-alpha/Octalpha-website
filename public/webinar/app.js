/**
 * Timestream x OctAlpha — reconSTREAM Webinar Landing Page Script
 * Single-Step Registration (No Double-Form Entry on Zoom, one registration per email)
 */

window.TIMESTREAM_ZOOM_CONFIG = {
  // Your Live Zoom Webinar Link
  defaultZoomRegistrationUrl: 'https://us06web.zoom.us/webinar/register/WN_e5h1zakjTj6rLqO4IVas8Q',

  // Optional 11-digit numeric Zoom Webinar ID (for direct Server-to-Server API)
  defaultZoomWebinarId: '',

  // Backend endpoints (tries PHP endpoint first for cPanel/WordPress, then Node.js endpoint)
  phpApiEndpoint: '/webinar/zoom-register.php',
  nodeApiEndpoint: '/api/zoom-register',

  // Optional Zapier / Make / Zoho / Power Automate Webhook URL
  crmWebhookUrl: '',

  // Webinar Metadata (10 November, 2026, 11:30 AM GST)
  webinarMeta: {
    title: 'Simplifying Retail Financial Reconciliation for UAE Retailers (reconSTREAM by Timestream x OctAlpha)',
    startIsoGst: '2026-11-10T11:30:00+04:00',
    endIsoGst: '2026-11-10T12:30:00+04:00',
    displayDate: '10 November, 2026',
    displayTime: '11:30 AM GST (Dubai / UAE)',
    speakers: 'Fariha Akhtar Mangi & Mohammad Arif',
    zoomUrl: 'https://us06web.zoom.us/webinar/register/WN_e5h1zakjTj6rLqO4IVas8Q'
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const yearEls = document.querySelectorAll('.current_year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach((el) => { el.textContent = currentYear; });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('ts-mobile-menu-btn');
  const mobileDropdown = document.getElementById('ts-mobile-dropdown');
  if (mobileMenuBtn && mobileDropdown) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = mobileDropdown.classList.toggle('is_open');
      mobileMenuBtn.classList.toggle('is_active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileDropdown.setAttribute('aria-hidden', String(!isOpen));
    });
  }

  // International Telephone Input (+971 UAE Default)
  const phoneInput = document.querySelector('#Mobile');
  const dialCodeInput = document.querySelector('#Dial_Code');
  const countryInput = document.querySelector('#Country');
  const pageUrlInput = document.querySelector('#LEADCF37');
  let itiInstance = null;

  if (pageUrlInput) {
    pageUrlInput.value = window.location.href;
  }

  if (phoneInput && window.intlTelInput) {
    itiInstance = window.intlTelInput(phoneInput, {
      initialCountry: 'ae',
      separateDialCode: false,
      preferredCountries: ['ae', 'sa', 'qa', 'kw', 'bh', 'om', 'gb', 'us'],
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
    });

    const syncCountryData = () => {
      const countryData = itiInstance.getSelectedCountryData();
      if (countryData && countryData.dialCode && dialCodeInput) {
        dialCodeInput.value = '+' + countryData.dialCode;
      }
      if (countryData && countryData.name && countryInput) {
        countryInput.value = countryData.name.replace(/\s*\(.*?\)\s*/g, '');
      }
    };
    syncCountryData();
    phoneInput.addEventListener('countrychange', syncCountryData);
  }

  // Zoom settings come only from TIMESTREAM_ZOOM_CONFIG above (no per-browser overrides).
  function getZoomConfig() {
    try { localStorage.removeItem('timestream_zoom_settings'); } catch (e) {} // clear old saved settings
    return window.TIMESTREAM_ZOOM_CONFIG;
  }

  let splashTimer = null;
  function showSplashMessage(msg, isError = false) {
    let splash = document.getElementById('custom-splash-message');
    let textSpan = document.getElementById('splash-message-text');
    // Create the message box if the page doesn't have one.
    if (!splash || !textSpan) {
      splash = document.createElement('div');
      splash.id = 'custom-splash-message';
      splash.setAttribute('role', 'alert');
      splash.style.cssText = 'position:fixed;top:2rem;left:50%;transform:translateX(-50%);z-index:10000;' +
        'display:none;align-items:center;gap:0.8rem;max-width:min(92vw,52rem);padding:1.4rem 2rem;' +
        'background:#fff;border:2px solid #a9d3ab;border-radius:1.2rem;box-shadow:0 1rem 3rem rgba(15,42,85,.18);' +
        'font-size:1.5rem;font-weight:600;color:#0f2a55;line-height:1.4;';
      textSpan = document.createElement('span');
      textSpan.id = 'splash-message-text';
      splash.appendChild(textSpan);
      document.body.appendChild(splash);
    }
    textSpan.textContent = msg;
    splash.style.display = 'flex';
    splash.style.borderColor = isError ? '#f5a623' : '#a9d3ab';
    clearTimeout(splashTimer);
    splashTimer = setTimeout(() => { splash.style.display = 'none'; }, 6000);
  }

  function isWorkEmail(email) {
    const basicRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return basicRegex.test(email);
  }

  // Generate .ics Calendar File (Includes your live Zoom Webinar link)
  function downloadWebinarICS(registrant) {
    const meta = window.TIMESTREAM_ZOOM_CONFIG.webinarMeta;
    const joinLink = registrant.joinUrl || meta.zoomUrl;
    const icsLines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Timestream x OctAlpha//reconSTREAM Webinar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:reconstream-octalpha-20261110@octalpha.com',
      'DTSTAMP:20261021T080000Z',
      'DTSTART:20261110T073000Z',
      'DTEND:20261110T083000Z',
      'SUMMARY:' + meta.title,
      'DESCRIPTION:Live Webinar with ' + meta.speakers + '.\\n\\nJoin via Zoom: ' + joinLink +'\\n\\nRegistered Attendee: ' + registrant.firstName + ' ' + registrant.lastName + ' (' + registrant.email + ')',
      'LOCATION:' + joinLink,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ];
    const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Timestream-OctAlpha-reconSTREAM-Webinar-10Nov.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ---------------------------------------------------------------------------
  // Registration (one step, one registration per person)
  //  - Registers in Zoom through the backend (PHP or Node) — no second Zoom form.
  //  - The backend refuses to register the same email twice and returns the
  //    existing Zoom join link instead.
  //  - This browser remembers the registration, so a returning visitor sees
  //    "You're registered" instead of the form.
  //  - The submit button is locked while a request is in flight (no double clicks).
  // ---------------------------------------------------------------------------
  const webinarForm = document.getElementById('timestream-zoom-webinar-form');
  const submitBtn = document.getElementById('formsubmit');
  const formBlock = document.getElementById('demo-form-custom-block');
  const zoomConfirmModal = document.getElementById('zoom-confirmation-modal');
  const closeZoomModalBtn = document.getElementById('close-zoom-modal');
  const proceedToZoomBtn = document.getElementById('proceed-to-zoom-btn');
  const downloadIcsBtn = document.getElementById('download-ics-btn');
  const registrantDetailsEl = document.getElementById('zoom-registrant-details');
  const zoomModalTitle = document.getElementById('zoom-modal-title');
  const zoomModalStatus = document.getElementById('zoom-modal-status-text');

  const REGISTRATION_STORAGE_KEY = 'timestream_octalpha_webinar_10nov2026_registration';
  const SUBMIT_LABEL = submitBtn ? submitBtn.value : 'Register for Webinar';

  let latestRegistrant = null;
  let isSubmitting = false;

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function loadSavedRegistration() {
    try {
      const saved = localStorage.getItem(REGISTRATION_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch (e) { return null; }
  }
  function saveRegistration(reg) {
    try { localStorage.setItem(REGISTRATION_STORAGE_KEY, JSON.stringify(reg)); } catch (e) {}
  }
  function clearSavedRegistration() {
    try { localStorage.removeItem(REGISTRATION_STORAGE_KEY); } catch (e) {}
  }

  function setSubmitState(busy) {
    if (!submitBtn) return;
    submitBtn.disabled = busy;
    submitBtn.value = busy ? 'Registering…' : SUBMIT_LABEL;
  }

  // Email alert to the OctAlpha team (only for genuinely new registrations).
  function sendTeamNotification(registrant, cfg, statusNote) {
    const emailPayload = {
      _subject: `New Webinar Registration (10 Nov): ${registrant.firstName} ${registrant.lastName}`,
      _template: 'table',
      _captcha: 'false',
      First_Name: registrant.firstName,
      Last_Name: registrant.lastName,
      Work_Email: registrant.email,
      Mobile: registrant.fullPhone,
      Country: registrant.countryName,
      Webinar_Date: '10 November, 2026 | 11:30 AM GST',
      Zoom_Status: statusNote,
      Zoom_Webinar_Link: cfg.defaultZoomRegistrationUrl
    };
    ['info.dxb@octalpha.com', 'rehan@octalpha.com'].forEach((to) => {
      fetch('https://formsubmit.co/ajax/' + to, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(emailPayload)
      }).catch(() => {});
    });

    if (cfg.crmWebhookUrl) {
      fetch(cfg.crmWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...registrant, zoom_status: statusNote }),
        mode: 'no-cors'
      }).catch(() => {});
    }
  }

  // Calls the backend. Returns its JSON, or null if no backend could be reached.
  async function registerWithBackend(registrant, cfg) {
    const payload = JSON.stringify({
      first_name: registrant.firstName,
      last_name: registrant.lastName,
      email: registrant.email,
      phone: registrant.fullPhone,
      country: registrant.countryCode.toUpperCase(),
      webinar_id: cfg.defaultZoomWebinarId || '',
      zoom_url: cfg.defaultZoomRegistrationUrl,
      source: 'Timestream x OctAlpha Landing Page (10 Nov 2026)'
    });

    for (const endpoint of [cfg.phpApiEndpoint, cfg.nodeApiEndpoint]) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload
        });
        if (res.status === 409) return { ok: false, in_progress: true };
        if (res.ok) {
          const data = await res.json();
          if (data && data.ok) return data;
        }
      } catch (e) {}
    }
    return null;
  }

  function closeConfirmModal() {
    if (zoomConfirmModal) zoomConfirmModal.classList.remove('is_open');
    document.body.classList.remove('is_scroll_locked');
  }

  function openResultModal({ title, status, registrant, statusLine, linkUrl, linkLabel }) {
    if (zoomModalTitle) zoomModalTitle.textContent = title;
    if (zoomModalStatus) zoomModalStatus.textContent = status;
    if (registrantDetailsEl) {
      registrantDetailsEl.innerHTML = `
        <div><strong>Attendee:</strong> ${escapeHtml(registrant.firstName)} ${escapeHtml(registrant.lastName)}</div>
        <div><strong>Work Email:</strong> ${escapeHtml(registrant.email)}</div>
        ${registrant.fullPhone ? `<div><strong>Mobile:</strong> ${escapeHtml(registrant.fullPhone)}</div>` : ''}
        <div><strong>Session:</strong> 10 November, 2026 &bull; 11:30 AM GST</div>
        <div><strong>Status:</strong> ${statusLine}</div>
      `;
    }
    if (proceedToZoomBtn) {
      if (linkUrl) {
        proceedToZoomBtn.href = linkUrl;
        proceedToZoomBtn.setAttribute('target', '_blank');
        proceedToZoomBtn.innerHTML = linkLabel;
        proceedToZoomBtn.onclick = null;
      } else {
        proceedToZoomBtn.href = '#';
        proceedToZoomBtn.removeAttribute('target');
        proceedToZoomBtn.innerHTML = '&#10003; Done — Return to Page';
        proceedToZoomBtn.onclick = function (ev) { ev.preventDefault(); closeConfirmModal(); };
      }
    }
    if (zoomConfirmModal) {
      zoomConfirmModal.classList.add('is_open');
      document.body.classList.add('is_scroll_locked');
    }
  }

  // Replaces the form with a "You're registered" panel for returning visitors.
  function showRegisteredPanel(reg) {
    if (!formBlock || !webinarForm) return;
    let panel = document.getElementById('oa-registered-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'oa-registered-panel';
      panel.className = 'oa_registered_panel';
      formBlock.insertBefore(panel, webinarForm);
    }
    panel.innerHTML = `
      <div class="oa_registered_check" aria-hidden="true">&#10003;</div>
      <h3>You're registered</h3>
      <p>${escapeHtml(reg.firstName)} ${escapeHtml(reg.lastName)} &bull; ${escapeHtml(reg.email)}<br>
         10 November, 2026 &bull; 11:30 AM GST</p>
      <div class="zoom_modal_actions">
        ${reg.joinUrl ? `<a class="zoom_btn_primary" href="${escapeHtml(reg.joinUrl)}" target="_blank" rel="noopener noreferrer">Open Your Zoom Join Link &rarr;</a>` : ''}
        <button type="button" class="zoom_btn_secondary" id="oa-panel-ics-btn">Add to Calendar (.ics)</button>
      </div>
      <button type="button" class="oa_register_other" id="oa-register-other-btn">Registering a colleague? Use the form again</button>
    `;
    panel.style.display = '';
    webinarForm.style.display = 'none';

    document.getElementById('oa-panel-ics-btn').addEventListener('click', () => {
      downloadWebinarICS(reg);
      showSplashMessage('Calendar invite (.ics) downloaded!');
    });
    document.getElementById('oa-register-other-btn').addEventListener('click', () => {
      // Only resets this browser's memory; the server still blocks repeat emails.
      clearSavedRegistration();
      panel.style.display = 'none';
      webinarForm.style.display = '';
      webinarForm.reset();
      setSubmitState(false);
      document.getElementById('First_Name')?.focus();
    });
  }

  // Returning visitor? Show their registration instead of the form.
  const savedRegistration = loadSavedRegistration();
  if (savedRegistration && savedRegistration.email) {
    latestRegistrant = savedRegistration;
    showRegisteredPanel(savedRegistration);
  }

  if (webinarForm) {
    webinarForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (isSubmitting) return; // ignore double clicks / repeated Enter

      const firstName = (document.getElementById('First_Name')?.value || '').trim();
      const lastName = (document.getElementById('Last_Name')?.value || '').trim();
      const email = (document.getElementById('Email')?.value || '').trim();
      const mobileRaw = (document.getElementById('Mobile')?.value || '').trim();

      if (!firstName) {
        showSplashMessage('Please enter your First Name.', true);
        document.getElementById('First_Name')?.focus();
        return;
      }
      if (!lastName) {
        showSplashMessage('Please enter your Last Name.', true);
        document.getElementById('Last_Name')?.focus();
        return;
      }
      if (!email || !isWorkEmail(email)) {
        showSplashMessage('Please enter a valid Work Email address.', true);
        document.getElementById('Email')?.focus();
        return;
      }
      if (!mobileRaw || mobileRaw.replace(/\D/g, '').length < 6) {
        showSplashMessage('Please enter a valid Mobile number.', true);
        document.getElementById('Mobile')?.focus();
        return;
      }

      const dialCode = dialCodeInput ? dialCodeInput.value : '+971';
      const countryData = itiInstance ? itiInstance.getSelectedCountryData() : { iso2: 'ae', name: 'United Arab Emirates' };
      const fullPhone = mobileRaw.startsWith('+') ? mobileRaw : `${dialCode} ${mobileRaw}`;

      const registrant = {
        firstName,
        lastName,
        email,
        fullPhone,
        countryCode: countryData.iso2 || 'ae',
        countryName: countryInput ? countryInput.value : 'United Arab Emirates'
      };
      latestRegistrant = registrant;

      const cfg = getZoomConfig();
      isSubmitting = true;
      setSubmitState(true);

      let result = null;
      try {
        result = await registerWithBackend(registrant, cfg);
      } finally {
        isSubmitting = false;
      }

      // A request for this email is already being processed (e.g. double tap).
      if (result && result.in_progress) {
        setSubmitState(false);
        showSplashMessage('Your registration is already being processed — please wait a moment.', true);
        return;
      }

      // 0) Mobile number already used by another registration → stop here.
      if (result && result.duplicate_phone) {
        setSubmitState(false);
        showSplashMessage('This mobile number is already registered for this webinar. Please use the same email you registered with.', true);
        document.getElementById('Mobile')?.focus();
        return;
      }

      // 1) Already registered earlier → no new registration, show their existing seat.
      if (result && result.already_registered) {
        const reg = {
          ...registrant,
          firstName: result.first_name || firstName,
          lastName: result.last_name || lastName,
          joinUrl: result.join_url || ''
        };
        latestRegistrant = reg;
        saveRegistration(reg);
        webinarForm.reset();
        showRegisteredPanel(reg);
        showSplashMessage('You are already registered for this webinar.');
        openResultModal({
          title: "You're Already Registered",
          status: 'This email is already registered for the 10 November webinar, so there is nothing more to fill in. Use your personal Zoom link below.',
          registrant: reg,
          statusLine: '<span style="color:#12aa67; font-weight:700;">&#10003; Already registered</span>',
          linkUrl: reg.joinUrl,
          linkLabel: 'Open Personal Zoom Join Link &rarr;'
        });
        return;
      }

      // 2) New registration that reached Zoom → confirmed.
      if (result && result.zoom_api_synced) {
        const reg = { ...registrant, joinUrl: result.join_url || '' };
        latestRegistrant = reg;
        saveRegistration(reg);
        sendTeamNotification(registrant, cfg, 'Registered in Zoom (ID: ' + (result.registrant_id || '-') + ')');
        webinarForm.reset();
        showRegisteredPanel(reg);
        showSplashMessage('Registration confirmed! You are registered for the 10 November webinar.');
        openResultModal({
          title: "You're Registered!",
          status: 'Your Zoom Webinar seat is confirmed. Zoom will also email your confirmation. Save the calendar invite or open your personal join link below.',
          registrant: reg,
          statusLine: '<span style="color:#12aa67; font-weight:700;">&#10003; Confirmed (Zoom Webinar)</span>',
          linkUrl: reg.joinUrl,
          linkLabel: 'Open Personal Zoom Join Link &rarr;'
        });
        return;
      }

      // 3) Zoom could not be reached automatically → send them to Zoom's own
      //    registration page so they are not left thinking they're registered.
      sendTeamNotification(registrant, cfg, 'NOT synced to Zoom automatically — visitor sent to Zoom registration page');
      setSubmitState(false);
      openResultModal({
        title: 'One More Step',
        status: "We couldn't confirm your seat with Zoom automatically. Please finish your registration on Zoom's page — it only takes a moment.",
        registrant,
        statusLine: '<span style="color:#f5a623; font-weight:700;">Pending — complete on Zoom</span>',
        linkUrl: cfg.defaultZoomRegistrationUrl,
        linkLabel: 'Complete Registration on Zoom &rarr;'
      });
    });
  }

  if (closeZoomModalBtn && zoomConfirmModal) {
    closeZoomModalBtn.addEventListener('click', closeConfirmModal);
  }

  if (downloadIcsBtn) {
    downloadIcsBtn.addEventListener('click', function () {
      const reg = latestRegistrant || {
        firstName: 'Valued',
        lastName: 'Attendee',
        email: 'attendee@company.com'
      };
      downloadWebinarICS(reg);
      showSplashMessage('Calendar invite (.ics) downloaded!');
    });
  }

  // Interactive & Auto-Cycling reconSTREAM Process Flowchart
  const flowStepBtns = document.querySelectorAll('.ts-flow-step-btn');
  const stageNodes = document.querySelectorAll('.ts-stage-node');
  const flowBoard = document.querySelector('.ts-flowchart-board');
  const simTextEl = document.getElementById('ts-sim-text');
  const playToggleBtn = document.getElementById('ts-flow-play-btn');

  const stageTraces = {
    1: 'Stage 01 [Ingest]: Capturing POS Receipt <strong>#POS-4419</strong>, E-Commerce Order <strong>#UAE-8942</strong> &amp; Gateway Batch in real time...',
    2: 'Stage 02 [Match]: Linking Sales Order <strong>AED 1,450.00</strong> &harr; Acquirer Settlement &harr; Inventory SKU &amp; General Ledger...',
    3: 'Stage 03 [Verify]: Auditing Marketplace Commission (<strong>-AED 24.00</strong>), Gateway MDR (<strong>-AED 5.00</strong>), Refunds &amp; Leakage...',
    4: 'Stage 04 [Resolve &amp; Report]: <strong>99.4% Posted to GL</strong> &bull; Unmatched Discrepancies Routed to Finance with OctAlpha Support.'
  };

  let currentFlowStep = 1;
  let autoPlayActive = true;

  function setActiveFlowStep(step) {
    currentFlowStep = Number(step);
    flowStepBtns.forEach((btn) => {
      btn.classList.toggle('is-active', Number(btn.dataset.flowStep) === currentFlowStep);
    });
    stageNodes.forEach((node) => {
      node.classList.toggle('is-active', Number(node.dataset.stageNode) === currentFlowStep);
    });
    if (flowBoard) {
      flowBoard.setAttribute('data-active-stage', String(currentFlowStep));
    }
    if (simTextEl && stageTraces[currentFlowStep]) {
      simTextEl.innerHTML = stageTraces[currentFlowStep];
    }
  }

  flowStepBtns.forEach((btn) => {
    btn.addEventListener('click', () => setActiveFlowStep(btn.dataset.flowStep));
  });

  stageNodes.forEach((node) => {
    node.addEventListener('click', () => setActiveFlowStep(node.dataset.stageNode));
  });

  if (playToggleBtn) {
    playToggleBtn.addEventListener('click', () => {
      autoPlayActive = !autoPlayActive;
      playToggleBtn.setAttribute('aria-pressed', String(autoPlayActive));
      playToggleBtn.innerHTML = autoPlayActive
        ? '<span class="live-dot"></span> Auto-Simulating Flow'
        : '<span>&#9654; Resume Simulation</span>';
    });
  }

  setInterval(() => {
    if (autoPlayActive && flowStepBtns.length) {
      const nextStep = currentFlowStep >= 4 ? 1 : currentFlowStep + 1;
      setActiveFlowStep(nextStep);
    }
  }, 3600);
});