import { useState, useRef, useEffect } from "react";

const WHATSAPP = "971526543343";
const EMAIL    = "info.dxb@octalpha.com";

const SYSTEM = `You are Octalpha's AI support assistant. Always respond in structured JSON only.

Company: Octalpha Business Solutions, Dubai Internet City, Tower B, 24th Floor.
Email: info.dxb@octalpha.com | Phone: (+971) 424 24 920 | WhatsApp: +971 52 654 3343

Services: IT Infrastructure, Cybersecurity (Fortinet, VAPT, GRC, vCISO), Cloud Solutions (migration, virtual desktops), Managed IT (24/7 helpdesk, AMC), Microsoft 365 / SAP / SharePoint, Device Management (MDM, EDR).

Always return this exact JSON format:
{
  "label": "section title or omit",
  "intro": "one sentence or omit",
  "points": ["short bullet", "short bullet"],
  "note": "one line CTA or omit"
}
Rules: max 5 bullets, each under 10 words. No paragraphs. No pricing. For cost questions direct to WhatsApp or email. Return raw JSON only, no markdown.`;

// ── Inject CSS once ────────────────────────────────────────────────────────
const CSS = `
  @keyframes oa-spin    { to { transform: rotate(360deg); } }
  @keyframes oa-pulse   { 0%,100%{box-shadow:0 4px 18px rgba(0,136,194,.45),0 0 0 0 rgba(0,174,239,.4)} 70%{box-shadow:0 4px 18px rgba(0,136,194,.45),0 0 0 12px rgba(0,174,239,0)} }
  @keyframes oa-up      { from{opacity:0;transform:translateY(14px) scale(.97)} to{opacity:1;transform:none} }
  @keyframes oa-in      { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
  @keyframes oa-pop     { from{opacity:0;transform:translateY(8px) scale(.95)} to{opacity:1;transform:none} }
  @keyframes oa-blink   { 0%,88%,100%{transform:scaleY(1)} 93%{transform:scaleY(.1)} }
  @keyframes oa-arc     { 0%,100%{opacity:.2} 50%{opacity:1} }
  @keyframes oa-bounce  { 0%,60%,100%{transform:translateY(0);opacity:.3} 30%{transform:translateY(-6px);opacity:1} }
  @keyframes oa-glow    { from{opacity:.35} to{opacity:.9} }
  .oa-chip:hover { background:#E6F7FD !important; }
  .oa-wa:hover   { filter:brightness(1.1); }
  .oa-down:hover { background:rgba(255,255,255,.22) !important; }
  .oa-fab:hover  { transform:scale(1.07) !important; }
  .oa-send:hover { transform:scale(1.06) !important; }
  .oa-inp:focus  { border-color:#00AEEF !important; box-shadow:0 0 0 3px rgba(0,174,239,.1) !important; }
`;

function injectCSS() {
  if (document.getElementById("oa-css")) return;
  const s = document.createElement("style");
  s.id = "oa-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

// ── Bot SVG (reused in FAB, header, inline) ────────────────────────────────
function BotFace({ size = 26, color = "#00AEEF", eyeColor = "#00AEEF", strokeColor = "#00AEEF" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" style={{ position: "relative", zIndex: 1 }}>
      <path style={{ animation: "oa-arc 1.8s ease-in-out infinite 0s" }}   d="M15 3 Q22 3 22 9"      stroke={strokeColor} strokeWidth="1.3" strokeLinecap="round" />
      <path style={{ animation: "oa-arc 1.8s ease-in-out infinite .25s" }} d="M15 5.5 Q20 5.5 20 9.5" stroke={strokeColor} strokeWidth="1.1" strokeLinecap="round" />
      <path style={{ animation: "oa-arc 1.8s ease-in-out infinite .5s" }}  d="M15 8 Q18 8 18 10"      stroke={strokeColor} strokeWidth=".9"  strokeLinecap="round" />
      <line x1="15" y1="10" x2="15" y2="7.5" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" />
      <circle cx="15" cy="6.5" r="1.2" fill={strokeColor} style={{ animation: "oa-arc 1.4s ease-in-out infinite" }} />
      <rect x="6" y="10" width="18" height="14" rx="3.5" fill={color} stroke={strokeColor} strokeWidth=".9" />
      <rect x="9"  y="13.5" width="4" height="3.8" rx="1.1" fill={eyeColor} style={{ animation: "oa-blink 4.5s ease-in-out infinite",      transformOrigin: "center" }} />
      <rect x="17" y="13.5" width="4" height="3.8" rx="1.1" fill={eyeColor} style={{ animation: "oa-blink 4.5s ease-in-out infinite .08s", transformOrigin: "center" }} />
      <rect x="10.5" y="19.5" width="9" height="1.6" rx=".8" fill={eyeColor} opacity=".8" />
      <rect x="4"    y="14" width="2.2" height="4.5" rx="1.1" fill={color} stroke={strokeColor} strokeWidth=".7" />
      <rect x="23.8" y="14" width="2.2" height="4.5" rx="1.1" fill={color} stroke={strokeColor} strokeWidth=".7" />
    </svg>
  );
}

// ── Render structured JSON bot response ────────────────────────────────────
function BotBubble({ raw }) {
  let d = null;
  try { d = JSON.parse(raw.replace(/```json|```/g, "").trim()); } catch {}

  const base = {
    padding: "10px 13px", background: "#fff", color: "#1A2A40",
    border: "1px solid #DDE3EE", borderRadius: "14px", borderBottomLeftRadius: "4px",
    fontSize: "13.5px", lineHeight: 1.55, boxShadow: "0 2px 8px rgba(15,42,85,.06)",
    animation: "oa-in .25s ease both",
  };

  if (!d) return <div style={base}>{raw}</div>;

  return (
    <div style={base}>
      {d.label && <span style={{ display:"block", fontSize:"10px", fontWeight:700, color:"#0077C0", textTransform:"uppercase", letterSpacing:".08em", marginBottom:"5px" }}>{d.label}</span>}
      {d.intro && <span style={{ display:"block", marginBottom: d.points?.length ? "6px" : 0, fontSize:"13.5px" }}>{d.intro}</span>}
      {d.intro && d.points?.length > 0 && <hr style={{ border:"none", borderTop:"1px solid #DDE3EE", margin:"7px 0" }} />}
      {d.points?.map((p, i) => (
        <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"7px", marginBottom: i < d.points.length-1 ? "4px" : 0 }}>
          <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#00AEEF", flexShrink:0, marginTop:"7px" }} />
          <span style={{ fontSize:"13.5px", lineHeight:1.45 }}>{p}</span>
        </div>
      ))}
      {d.note && <>
        <hr style={{ border:"none", borderTop:"1px solid #DDE3EE", margin:"7px 0" }} />
        <span style={{ display:"block", fontSize:"11.5px", color:"#4A5878", fontStyle:"italic" }}>{d.note}</span>
      </>}
    </div>
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

  useEffect(() => { injectCSS(); }, []);

  // Welcome message on first open
  useEffect(() => {
    if (!open) return;
    if (msgs.length === 0) {
      setMsgs([{
        role: "bot",
        text: JSON.stringify({
          intro: "Hi! I'm Octalpha's AI assistant.",
          points: ["IT infrastructure & cloud","Cybersecurity & GRC compliance","Managed IT & 24/7 support","Microsoft 365, SAP & business apps"],
          note: "What can I help you with today?",
        }),
        chips: ["Cloud migration","Cybersecurity","Managed IT","Schedule a call"],
        time: now(),
      }]);
    }
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, busy]);

  function now() { return new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" }); }

  function chips(text, len) {
    const t = text.toLowerCase();
    if (len <= 1)                                        return ["Cloud migration","Cybersecurity","Managed IT","Schedule a call"];
    if (t.includes("price")||t.includes("cost"))        return ["Chat on WhatsApp","Email us"];
    if (t.includes("cloud")||t.includes("365"))         return ["SAP / ERP","SharePoint","Virtual desktops"];
    if (t.includes("cyber")||t.includes("security"))    return ["Fortinet","vCISO","Free assessment"];
    if (t.includes("managed")||t.includes("support"))   return ["Cloud solutions","Business apps","Talk to specialist"];
    return ["Learn more","Schedule a call"];
  }

  async function send(textArg) {
    const text = (textArg ?? input).trim();
    if (!text || busy) return;
    setInput("");
    setMsgs(p => [...p, { role:"user", text, time: now() }]);
    setBusy(true);
    history.current.push({ role:"user", content: text });
    try {
      // ✅ CHANGED: now calls Vercel proxy instead of Anthropic directly
      const res = await fetch("https://octalpha-chat-proxy.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: SYSTEM,
          messages: history.current,
        }),
      });
      const data = await res.json();
      // ✅ CHANGED: OpenAI response format (choices[0].message.content)
      const reply = data.choices?.[0]?.message?.content
        || JSON.stringify({ intro:"Something went wrong.", note:`Reach us at ${EMAIL}` });
      history.current.push({ role:"assistant", content: reply });
      setMsgs(p => [...p, { role:"bot", text:reply, chips:chips(text, history.current.length), time:now() }]);
    } catch {
      setMsgs(p => [...p, { role:"bot", text: JSON.stringify({ intro:"Connection issue.", note:`Contact ${EMAIL}` }), time:now() }]);
    } finally { setBusy(false); setTimeout(() => inputRef.current?.focus(), 50); }
  }

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div style={{ position:"fixed", bottom:24, right:24, zIndex:9999, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:10, fontFamily:"'DM Sans','Inter',sans-serif" }}>

      {/* ── Popup pill ── */}
      {!open && showPop && (
        <div style={{ position:"relative", animation:"oa-pop .42s cubic-bezier(0.16,1,0.3,1) both" }}>
          <div
            onClick={() => { setOpen(true); setShowPop(false); }}
            style={{ display:"flex", alignItems:"center", gap:10, background:"#fff", border:"1.5px solid rgba(0,174,239,.45)", borderRadius:40, padding:"8px 40px 8px 8px", boxShadow:"0 6px 20px rgba(15,42,85,.12)", cursor:"pointer", whiteSpace:"nowrap" }}>
            <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(140deg,#00AEEF,#0077C0)", border:"2px solid #fff", boxShadow:"0 2px 8px rgba(0,136,194,.3)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <BotFace size={20} color="rgba(255,255,255,.15)" eyeColor="#fff" strokeColor="rgba(255,255,255,.9)" />
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:1 }}>
              <span style={{ fontSize:"12.5px", fontWeight:700, color:"#0F2A55" }}>👋 Hi! How can we help you?</span>
              <span style={{ fontSize:"11px", color:"#5A6A80" }}>IT · Cloud · Security · Managed Services</span>
            </div>
          </div>
          <div style={{ position:"absolute", bottom:-7, right:26, width:0, height:0, borderLeft:"7px solid transparent", borderTop:"7px solid #fff", filter:"drop-shadow(0 2px 1px rgba(15,42,85,.07))" }} />
          <button
            onClick={() => setShowPop(false)}
            style={{ position:"absolute", top:"50%", right:10, transform:"translateY(-50%)", width:20, height:20, borderRadius:"50%", background:"#F0F2F7", border:"1px solid #DDE3EE", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#8A9BB8", padding:0, lineHeight:1 }}>
            ✕
          </button>
        </div>
      )}

      {/* ── Chat panel ── */}
      {open && (
        <div style={{ width:385, height:580, background:"#fff", border:"1px solid #DDE3EE", borderRadius:20, display:"flex", flexDirection:"column", overflow:"hidden", boxShadow:"0 16px 48px rgba(15,42,85,.15)", animation:"oa-up .36s cubic-bezier(0.16,1,0.3,1) both" }}>

          {/* Header */}
          <div style={{ background:"#0F2A55", padding:"12px 14px", display:"flex", alignItems:"center", gap:11, flexShrink:0, position:"relative" }}>
            <div style={{ position:"relative", width:40, height:40, flexShrink:0 }}>
              <div style={{ position:"absolute", inset:-3, borderRadius:"50%", border:"2px solid transparent", borderTopColor:"#00AEEF", borderRightColor:"rgba(0,174,239,.25)", animation:"oa-spin 3.5s linear infinite" }} />
              <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(145deg,#1A3A6B,#0F2A55)", border:"2px solid rgba(0,174,239,.55)", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", position:"relative" }}>
                <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"radial-gradient(circle at 50% 35%,rgba(0,174,239,.3),transparent 65%)", animation:"oa-glow 2.8s ease-in-out infinite alternate" }} />
                <BotFace size={24} color="#162A4A" eyeColor="#00AEEF" strokeColor="#00AEEF" />
              </div>
            </div>
            <span style={{ flex:1, fontSize:14, fontWeight:700, color:"#fff", letterSpacing:".02em" }}>Octalpha AI Assistant</span>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="oa-wa"
              style={{ display:"flex", alignItems:"center", gap:5, background:"#25D366", color:"#fff", border:"none", borderRadius:20, padding:"6px 11px", fontSize:11, fontWeight:500, cursor:"pointer", textDecoration:"none", boxShadow:"0 3px 10px rgba(37,211,102,.35)", flexShrink:0 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <button className="oa-down" onClick={() => setOpen(false)}
              style={{ background:"rgba(255,255,255,.13)", border:"none", borderRadius:8, width:30, height:30, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"#fff", flexShrink:0, padding:0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"linear-gradient(90deg,#00AEEF,#00D4FF,#00AEEF)" }} />
          </div>

          {/* Messages */}
          <div style={{ flex:1, overflowY:"auto", padding:14, display:"flex", flexDirection:"column", gap:12, background:"#F4F6FA", scrollbarWidth:"thin" }}>
            <div style={{ alignSelf:"center", fontSize:10, color:"#8A9BB8", background:"#E8ECF3", border:"1px solid #DDE3EE", padding:"2px 12px", borderRadius:20, letterSpacing:".05em" }}>Today</div>

            {msgs.map((m, i) => m.role === "bot" ? (
              <div key={i} style={{ display:"flex", flexDirection:"column", maxWidth:"86%", gap:3, alignSelf:"flex-start" }}>
                <div style={{ display:"flex", alignItems:"flex-end", gap:7 }}>
                  <div style={{ width:28, height:28, borderRadius:9, background:"#0F2A55", border:"1.5px solid rgba(0,174,239,.45)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <BotFace size={17} color="#162A4A" eyeColor="#00AEEF" strokeColor="#00AEEF" />
                  </div>
                  <div style={{ flex:1 }}>
                    <BotBubble raw={m.text} />
                    <div style={{ fontSize:10, color:"#8A9BB8", padding:"0 2px" }}>{m.time}</div>
                    {m.chips?.length > 0 && (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginTop:6 }}>
                        {m.chips.map((c, ci) => (
                          <button key={ci} className="oa-chip" onClick={() => send(c)}
                            style={{ background:"#fff", border:"1px solid rgba(0,174,239,.6)", color:"#0077C0", borderRadius:20, padding:"4px 12px", fontSize:"11.5px", fontWeight:500, cursor:"pointer", fontFamily:"inherit" }}>
                            {c}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div key={i} style={{ display:"flex", flexDirection:"column", maxWidth:"86%", gap:3, alignSelf:"flex-end" }}>
                <div style={{ padding:"10px 13px", background:"linear-gradient(135deg,#0097D6,#00AEEF)", color:"#fff", borderRadius:14, borderBottomRightRadius:4, fontSize:"13.5px", lineHeight:1.55, boxShadow:"0 4px 16px rgba(0,174,239,.28)", animation:"oa-in .25s ease both" }}>{m.text}</div>
                <div style={{ fontSize:10, color:"#8A9BB8", padding:"0 2px", textAlign:"right" }}>{m.time}</div>
              </div>
            ))}

            {/* Typing indicator */}
            {busy && (
              <div style={{ display:"flex", alignItems:"flex-end", gap:7 }}>
                <div style={{ width:28, height:28, borderRadius:9, background:"#0F2A55", border:"1.5px solid rgba(0,174,239,.45)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <BotFace size={17} color="#162A4A" eyeColor="#00AEEF" strokeColor="#00AEEF" />
                </div>
                <div style={{ padding:"11px 14px", display:"flex", alignItems:"center", gap:5, background:"#fff", border:"1px solid #DDE3EE", borderRadius:14, borderBottomLeftRadius:4, boxShadow:"0 2px 8px rgba(15,42,85,.06)" }}>
                  {[0,.15,.3].map((d,i) => <span key={i} style={{ width:6, height:6, borderRadius:"50%", background:"#00AEEF", animation:`oa-bounce 1.3s ease-in-out infinite ${d}s` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ display:"flex", alignItems:"center", gap:9, padding:"11px 13px", background:"#fff", borderTop:"1px solid #DDE3EE", flexShrink:0 }}>
            <input ref={inputRef} className="oa-inp" value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Ask about IT, cloud, security…"
              style={{ flex:1, background:"#F4F6FA", border:"1px solid #DDE3EE", borderRadius:22, padding:"9px 16px", fontSize:"13.5px", fontFamily:"inherit", color:"#1A2A40", outline:"none" }} />
            <button className="oa-send" disabled={busy} onClick={() => send()}
              style={{ width:40, height:40, borderRadius:11, background:"linear-gradient(135deg,#0097D6,#00AEEF)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", flexShrink:0, boxShadow:"0 4px 14px rgba(0,174,239,.35)", opacity: busy?0.5:1 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}

      {/* ── FAB ── */}
      <button className="oa-fab" onClick={() => { setOpen(o => !o); setShowPop(false); }}
        style={{ width:58, height:58, borderRadius:"50%", background:"linear-gradient(140deg,#00AEEF,#0077C0)", border:"3px solid #fff", boxShadow:"0 4px 18px rgba(0,136,194,.45),0 0 0 0 rgba(0,174,239,.4)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", outline:"none", flexShrink:0, animation:"oa-pulse 2.6s ease-in-out infinite" }}>
        <BotFace size={28} color="rgba(255,255,255,.15)" eyeColor="#fff" strokeColor="rgba(255,255,255,.9)" />
      </button>

    </div>
  );
}