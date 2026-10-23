import { useState, useEffect } from "react";
import { X, Calendar, Clock, ChevronUp, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WEBINAR_PAGE_URL } from "@/pages/WebinarRedirect";

// Timestream x OctAlpha — reconSTREAM webinar, 10 Nov 2026, 11:30 AM GST
const WEBINAR_ENDS_AT = new Date("2026-11-10T12:30:00+04:00");
// Set by the landing page (public/webinar/app.js) after a successful registration
const REGISTERED_KEY = "timestream_octalpha_webinar_10nov2026_registration";
const DISMISSED_KEY = "oa_webinar_popup_dismissed";

const safeGet = (storage, key) => {
    try { return window[storage].getItem(key); } catch { return null; }
};
const safeSet = (storage, key, value) => {
    try { window[storage].setItem(key, value); } catch { /* storage unavailable */ }
};

const WebinarPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        // Don't show after the webinar has ended.
        if (new Date() > WEBINAR_ENDS_AT) return;
        // Shown to everyone; people who already registered get a "View Details" button.
        setIsRegistered(!!safeGet("localStorage", REGISTERED_KEY));

        // If dismissed earlier in this visit, come back as the small pill only.
        if (safeGet("sessionStorage", DISMISSED_KEY)) setIsMinimized(true);

        const timer = setTimeout(() => setIsOpen(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleMinimize = (e) => {
        e?.stopPropagation();
        setIsMinimized(true);
        safeSet("sessionStorage", DISMISSED_KEY, "1");
    };

    const handleMaximize = () => setIsMinimized(false);

    const handleRegister = () => {
        window.location.href = WEBINAR_PAGE_URL;
    };

    if (!isOpen) return null;

    if (isMinimized) {
        return (
            <div
                className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 animate-bounce-slow cursor-pointer group"
                style={{ zIndex: 10000 }}
                onClick={handleMaximize}
            >
                <div className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-full px-4 py-3 sm:p-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/20">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12"></div>
                    <Calendar className="h-6 w-6 relative z-10" />
                    <span className="font-bold whitespace-nowrap relative z-10 text-sm sm:text-base">Webinar · 10 Nov</span>
                    <ChevronUp className="h-4 w-4 relative z-10" />
                </div>
                <style>{bounceCss}</style>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-4" style={{ zIndex: 10000 }}>
            <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300" onClick={handleMinimize}></div>

            <Card className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto p-0 border-0 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 fade-in duration-500 overflow-hidden rounded-2xl ring-1 ring-white/20">

                <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-5 pt-7 pb-5 sm:p-8 text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-10 -left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>

                    <button
                        onClick={handleMinimize}
                        className="absolute right-2 top-2 sm:right-3 sm:top-3 z-20 flex h-10 w-10 items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 rounded-full transition-all"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="relative z-10 space-y-3 sm:space-y-4 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                            <Sparkles className="h-3 w-3 text-yellow-400" />
                            Free Live Webinar on Zoom
                        </div>

                        <h2 className="text-[1.4rem] sm:text-3xl font-bold tracking-tight leading-snug sm:leading-tight">
                            Retail Reconciliation Made Simple
                        </h2>

                        <p className="text-blue-100/90 text-sm sm:text-base max-w-sm mx-auto">
                            Discover <span className="font-semibold text-sky-300">reconSTREAM</span> – An Automated
                            Financial Reconciliation Platform for Retailers
                        </p>
                    </div>
                </div>

                <div className="bg-background p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 sm:gap-3 rounded-xl border border-primary/10 bg-primary/5 p-2.5 sm:p-3">
                            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                            <span className="font-semibold text-foreground">10 Nov 2026</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 rounded-xl border border-primary/10 bg-primary/5 p-2.5 sm:p-3">
                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                            <span className="font-semibold text-foreground">11:30 AM GST</span>
                        </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground text-center -mt-1 sm:-mt-2">
                        Speakers: Fariha Akhtar Mangi &amp; Mohammad Arif
                    </p>

                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={handleRegister}
                            className="w-full h-11 sm:h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all bg-gradient-to-r from-primary to-blue-600 border-0 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            <span>{isRegistered ? "You're Registered: View Details" : "Register Free"}</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                        <button
                            onClick={handleMinimize}
                            className="text-xs text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all text-center"
                        >
                            Maybe later
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

const bounceCss = `
  @keyframes bounce-custom {
    0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
    50% { transform: translateY(-10px); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
  }
  .animate-bounce-slow { animation: bounce-custom 1.8s infinite; }
`;

export default WebinarPopup;