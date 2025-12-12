import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Calendar, Gift, ChevronUp, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WebinarPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Show popup after a short delay
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleMinimize = (e) => {
        e.stopPropagation();
        setIsMinimized(true);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
    };

    const handleRegister = () => {
        window.open("https://www.lockthreat.ai/adhics-in-a-box-2-with-octalpha", "_blank");
        setIsOpen(false);
    };

    if (!isOpen) return null;

    if (isMinimized) {
        return (
            <div
                className="fixed bottom-6 right-6 z-50 animate-bounce-slow cursor-pointer group"
                onClick={handleMaximize}
            >
                <div className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-primary-foreground rounded-full p-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-white/20">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out skew-x-12"></div>
                    <Calendar className="h-6 w-6 relative z-10" />
                    <span className="font-bold whitespace-nowrap relative z-10 text-sm sm:text-base">Webinar Alert!</span>
                    <ChevronUp className="h-4 w-4 relative z-10" />
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
            {/* Backdrop with blur - clickable to minimize maybe? No, let's keep it modal-like but non-blocking visually if possible. actually standard modal behavior is safer. */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300" onClick={handleMinimize}></div>

            {/* Main Card */}
            <Card className="relative w-full max-w-lg p-0 border-0 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 fade-in duration-500 overflow-hidden rounded-2xl ring-1 ring-white/20">

                {/* Colorful Gradient Header */}
                <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-8 text-white relative overflow-hidden">
                    {/* Abstract Shapes/Glows */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-10 -left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>

                    <button
                        onClick={handleMinimize}
                        className="absolute right-4 top-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full p-1 transition-all"
                        aria-label="Minimize"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="relative z-10 space-y-4 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                            <Sparkles className="h-3 w-3 text-yellow-400" />
                            Dec 18 • Free Webinar
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                            ADHICS Compliance <br /> Made Simple
                        </h2>

                        <p className="text-blue-100/80 text-sm max-w-xs mx-auto">
                            Struggling to retain DOH passing score while managing routine tasks of healthcare?
                            Introducing ADHICS in a Box – LockThreat Gartner Certified GRC AI Platform.
                        </p>
                    </div>
                </div>

                {/* Content Body */}
                <div className="bg-background p-6 space-y-6">

                    {/* Bonus Box */}
                    <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/10 rounded-xl p-4 flex items-start gap-4 shadow-inner">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                            <Gift className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-foreground text-sm">1 attendee wins FREE Year-1 on a 3-year ADHICS-in-a-Box contract.</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                                One lucky attendee wins big. Don't miss out!
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={handleRegister}
                            className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all bg-gradient-to-r from-primary to-blue-600 border-0 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            <span>Secure My Spot</span>
                            <ExternalLink className="ml-2 h-4 w-4" />
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

            <style>{`
        @keyframes bounce-custom {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-20px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-custom 1.5s infinite;
        }
      `}</style>
        </div>
    );
};

export default WebinarPopup;
