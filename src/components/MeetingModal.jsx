import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  X,
  MessageSquare,
  Compass,
  Cpu,
  Presentation,
  Globe,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Sparkles
} from "lucide-react";

const MEETING_OPTIONS = [
  { id: "discovery", title: "Discovery Call", icon: MessageSquare, duration: "30 Minutes", description: "Discuss your goals and requirements." },
  { id: "consultation", title: "Project Consultation", icon: Compass, duration: "60 Minutes", description: "Detailed scope and technical approach." },
  { id: "technical", title: "Technical Discussion", icon: Cpu, duration: "45 Minutes", description: "Architecture, integrations, and planning." },
  { id: "demo", title: "Product Demo", icon: Presentation, duration: "30 Minutes", description: "Explore MSS Techno capabilities." }
];

const MeetingModal = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("discovery");
  const [timeZone, setTimeZone] = useState("");
  const [timeZoneError, setTimeZoneError] = useState("");
  const [isContinuing, setIsContinuing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [calendlyStep, setCalendlyStep] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [processingStep, setProcessingStep] = useState(0);
  const [otherTimeZone, setOtherTimeZone] = useState("");

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const timeslots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

  const processingMessages = [
    "Reserving your meeting slot...",
    "Preparing Microsoft Teams meeting...",
    "Creating Outlook calendar invitation...",
    "Scheduling enterprise meeting...",
    "Preparing confirmation email...",
    "Finalizing your booking..."
  ];

  const handleContinue = () => {
    if (!timeZone) {
      setTimeZoneError("Please select your preferred time zone.");
      return;
    }

    if (timeZone === "OTHER" && !otherTimeZone.trim()) {
      setTimeZoneError("Please mention your time zone.");
      return;
    }

    setTimeZoneError("");
    setIsContinuing(true);
    setTimeout(() => { setIsContinuing(false); setCalendlyStep(true); }, 1200);
  };

  const handleBookMeeting = () => {
    if (!selectedDate || !selectedTime) { alert("Please choose a date and time slot."); return; }
    setIsContinuing(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setProcessingStep(step);
      if (step >= processingMessages.length - 1) {
        clearInterval(interval);
        setTimeout(() => { setIsContinuing(false); setIsSuccess(true); }, 800);
      }
    }, 600);
  };

  const handleCloseAndReset = () => {
    onClose();
    setTimeout(() => {
      setSelectedOption("discovery"); setTimeZone(""); setCalendlyStep(false);
      setIsSuccess(false); setSelectedDate(""); setSelectedTime(""); setProcessingStep(0);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // Higher z-index ensures coverage of the Header (typically z-99999)
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop covers everything */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseAndReset}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-md z-0"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative z-10 w-full max-w-[960px] max-h-[88vh] glass-panel rounded-3xl p-6 md:p-8 shadow-2xl border border-white/40 overflow-y-auto bg-white/75"
          >
            <button onClick={handleCloseAndReset} className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-500 z-10">
              <X className="h-5 w-5" />
            </button>

            {isContinuing ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-10 w-10 text-mss-green animate-spin mb-6" />
                <motion.p key={processingStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-stone-700 font-medium">
                  {processingMessages[processingStep]}
                </motion.p>
              </div>
            ) : isSuccess ? (
              <div className="py-6">
                <div className="text-center mb-8">
                  <div className="h-16 w-16 bg-mss-green/10 text-mss-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Meeting Successfully Scheduled</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-stone-50 border border-stone-200/60 rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between border-b border-stone-200/50 pb-3"><span className="text-xs text-stone-500">TYPE</span><span className="text-xs font-bold">{MEETING_OPTIONS.find(o => o.id === selectedOption)?.title}</span></div>
                    <div className="flex justify-between border-b border-stone-200/50 pb-3"><span className="text-xs text-stone-500">DATE</span><span className="text-xs font-bold">{selectedDate}</span></div>
                    <div className="flex justify-between border-b border-stone-200/50 pb-3"><span className="text-xs text-stone-500">TIME</span><span className="text-xs font-bold">{selectedTime}</span></div>
                    <div className="flex justify-between border-b border-stone-200/50 pb-3"><span className="text-xs text-stone-500">TIME ZONE</span><span className="text-xs font-bold">{timeZone.split(" - ")[0]}</span></div>
                    <div className="flex justify-between"><span className="text-xs text-stone-500">PLATFORM</span><span className="text-xs font-bold text-mss-brown">Microsoft Teams</span></div>
                  </div>
                  <div className="bg-stone-900 rounded-2xl p-6 text-white">
                    <h4 className="font-bold mb-4 flex items-center gap-2"><Sparkles className="h-4 w-4 text-mss-green" /> What Happens Next?</h4>
                    <ul className="space-y-3 text-xs text-stone-300">
                      <li>✔ Invitation sent to your email.</li>
                      <li>✔ Calendar synced automatically.</li>
                      <li>✔ Consultant will review request.</li>
                      <li>✔ Details provided before start.</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-stone-100 rounded-xl text-[10px] text-stone-500 text-center">
                  This is a frontend demonstration of the Microsoft Teams scheduling workflow. Backend integrations will be connected during production deployment.
                </div>

                <div className="mt-8 flex justify-center gap-4">
                  <button onClick={handleCloseAndReset} className="px-6 py-3 rounded-full bg-stone-900 text-white text-xs font-bold">Return to Site</button>
                  <button onClick={handleCloseAndReset} className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50">Schedule Another Meeting</button>
                </div>
              </div>
            ) : calendlyStep ? (
              <div className="space-y-6">
                <header className="text-center mb-6">
                  <h2 className="font-serif text-2xl font-bold text-stone-900">Select Date & Time</h2>
                </header>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2"><label className="text-xs font-bold text-stone-700">DATE</label><input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-4 rounded-xl border border-stone-200 text-sm outline-none" /></div>
                  <div className="space-y-2"><label className="text-xs font-bold text-stone-700">TIMESLOT</label><div className="grid grid-cols-2 gap-2">{timeslots.map(slot => <button key={slot} onClick={() => setSelectedTime(slot)} className={`p-3 rounded-xl border text-xs ${selectedTime === slot ? "bg-mss-green text-white" : "bg-white border-stone-200"}`}>{slot}</button>)}</div></div>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-stone-200">
                  <button onClick={() => setCalendlyStep(false)} className="px-6 py-3 rounded-full text-stone-600 text-xs font-bold">Back</button>
                  <button onClick={handleBookMeeting} className="px-8 py-3 rounded-full text-white text-xs font-bold bg-mss-brown">Confirm Appointment</button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <header className="text-center">
                  <h2 className="font-serif text-2xl font-bold text-stone-900">Let's Plan Your Next Project</h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {MEETING_OPTIONS.map((option) => {
                    const Icon = option.icon;
                    const isActive = selectedOption === option.id;
                    return (
                      <button key={option.id} onClick={() => setSelectedOption(option.id)} className={`p-5 rounded-2xl border transition-all ${isActive ? "border-mss-green bg-mss-green/5" : "border-stone-200 hover:bg-stone-50"}`}>
                        <div className="flex justify-between items-center mb-3">
                          <Icon className={`h-5 w-5 ${isActive ? "text-mss-green" : "text-stone-400"}`} />
                          <span className="text-[10px] font-bold bg-stone-100 px-2 py-1 rounded-md text-stone-500">{option.duration}</span>
                        </div>
                        <h3 className="font-serif text-sm font-bold text-stone-900 mb-1">{option.title}</h3>
                        <p className="text-[11px] text-stone-600 mt-1">{option.description}</p>
                      </button>
                    );
                  })}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-700">Preferred Time Zone</label>
                  <select
                    value={timeZone}
                    onChange={(e) => {
                      setTimeZone(e.target.value);
                      setTimeZoneError("");
                    }}
                    className="w-full p-4 rounded-xl bg-white border border-stone-200 text-xs outline-none"
                  >
                    <option value="">Select Time Zone</option>
                    <option>PST — Pacific Standard Time (Los Angeles)</option>
                    <option>EST — Eastern Standard Time (New York)</option>
                    <option>IST — India Standard Time (Hyderabad)</option>
                    <option value="OTHER">Others</option>
                  </select>
                   {timeZoneError && (
                        <p className="mt-2 text-xs text-red-500">
                          {timeZoneError}
                        </p>
                      )}
                  {timeZone === "OTHER" && (
                    <div className="mt-3">
                      <input
                        type="text"
                        value={otherTimeZone}
                        onChange={(e) => setOtherTimeZone(e.target.value)}
                        placeholder="Please mention your time zone"
                        className="w-full p-4 rounded-xl bg-white border border-stone-200 text-xs outline-none"
                      />
                     
                    </div>
                  )}
                </div>
                <div className="flex justify-end pt-4 border-t border-stone-200">
                  <button onClick={handleContinue} className="px-8 py-3 rounded-full text-white text-xs font-bold bg-mss-brown">Continue</button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export { MeetingModal };