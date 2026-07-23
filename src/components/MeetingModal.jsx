import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import Select from "react-select";
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
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  ShieldCheck,
  ChevronRight,
  Video,
  RotateCcw
} from "lucide-react";

// Brand Colors
// Primary Success / Active Green: #4D8B4F
// Supporting Accent Brown: #6B2D1A

const MEETING_OPTIONS = [
  { id: "discovery", title: "Discovery Call", icon: MessageSquare, duration: "30 Minutes", description: "Discuss your goals and requirements." },
  { id: "consultation", title: "Project Consultation", icon: Compass, duration: "60 Minutes", description: "Detailed scope and technical approach." },
  { id: "technical", title: "Technical Discussion", icon: Cpu, duration: "45 Minutes", description: "Architecture, integrations, and planning." },
  { id: "demo", title: "Product Demo", icon: Presentation, duration: "30 Minutes", description: "Explore MSS Techno capabilities." }
];

// Default Preset Quick Picks
const PRESET_TIMEZONES = [
  { value: "Asia/Kolkata", label: "IST — India Standard Time (Hyderabad)", keywords: "india hyderabad bangalore mumbai delhi kolkata ist" },
  { value: "America/New_York", label: "EST — Eastern Standard Time (New York)", keywords: "us usa new york est eastern florida boston" },
  { value: "America/Los_Angeles", label: "PST — Pacific Standard Time (Los Angeles)", keywords: "us usa los angeles california pst pacific san francisco seattle" },
];

// Rich Mapping for Alias/City/Country Search
const SEARCH_ALIASES = {
  "Asia/Kolkata": "India Hyderabad Bangalore Mumbai Delhi Chennai Kolkata IST",
  "Asia/Dubai": "UAE United Arab Emirates Dubai Abu Dhabi GST",
  "Asia/Tokyo": "Japan Tokyo Osaka JST",
  "Asia/Singapore": "Singapore SGT",
  "America/New_York": "USA US New York Eastern EST Florida Washington DC",
  "America/Chicago": "USA US Chicago Texas Dallas Central CST",
  "America/Los_Angeles": "USA US Los Angeles California San Francisco Seattle PST Pacific",
  "Europe/London": "UK United Kingdom London England BST GMT",
  "Europe/Paris": "France Paris CET",
  "Europe/Berlin": "Germany Berlin Frankfurt CET",
  "Australia/Sydney": "Australia Sydney AEST AEDT",
  "Australia/Melbourne": "Australia Melbourne AEST AEDT"
};

const MeetingModal = ({ isOpen, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("discovery");
  const [selectedTimezone, setSelectedTimezone] = useState(null);
  const [isOtherSearchMode, setIsOtherSearchMode] = useState(false);
  const [timeZoneError, setTimeZoneError] = useState("");
  const [isContinuing, setIsContinuing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [calendlyStep, setCalendlyStep] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [processingStep, setProcessingStep] = useState(0);

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

  // Build full searchable dataset using standard IANA list + enrichments
  const allTimezoneOptions = useMemo(() => {
    let zones = [];
    if (typeof Intl !== "undefined" && Intl.supportedValuesOf) {
      zones = Intl.supportedValuesOf("timeZone");
    } else {
      zones = [
        "Asia/Kolkata", "Asia/Dubai", "Asia/Tokyo", "Asia/Singapore",
        "America/New_York", "America/Chicago", "America/Los_Angeles",
        "Europe/London", "Europe/Paris", "Europe/Berlin",
        "Australia/Sydney", "Australia/Melbourne"
      ];
    }

    return zones.map((tz) => {
      const alias = SEARCH_ALIASES[tz] || "";
      const readableCity = tz.replace(/_/g, " ").replace(/\//g, " / ");
      return {
        value: tz,
        label: tz,
        keywords: `${tz} ${readableCity} ${alias}`.toLowerCase()
      };
    });
  }, []);

  const handlePresetSelect = (e) => {
    const val = e.target.value;
    if (val === "OTHER") {
      setIsOtherSearchMode(true);
      setTimeZoneError("");
      return;
    }

    const match = PRESET_TIMEZONES.find((t) => t.value === val);
    if (match) {
      setSelectedTimezone(match);
      setTimeZoneError("");
    }
  };

  const handleSearchSelect = (option) => {
    if (option) {
      setSelectedTimezone(option);
      setIsOtherSearchMode(false);
      setTimeZoneError("");
    }
  };

  const handleContinue = () => {
    if (!selectedTimezone || !selectedTimezone.value) {
      setTimeZoneError("Please select your preferred time zone.");
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
      setSelectedOption("discovery"); 
      setSelectedTimezone(null); 
      setIsOtherSearchMode(false);
      setTimeZoneError("");
      setCalendlyStep(false);
      setIsSuccess(false); 
      setSelectedDate(""); 
      setSelectedTime(""); 
      setProcessingStep(0);
    }, 400);
  };

  // React-Select custom styling for searchable popover
  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "2px 4px",
      borderRadius: "0.75rem",
      backgroundColor: "#ffffff",
      borderColor: timeZoneError ? "#f87171" : state.isFocused ? "#4D8B4F" : "#e2e8f0",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(77, 139, 79, 0.2)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      fontSize: "0.80rem",
      fontWeight: "600",
      color: "#1e293b",
      outline: "none",
      "&:hover": { borderColor: state.isFocused ? "#4D8B4F" : "#cbd5e1" }
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.75rem",
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
      border: "1px solid #e2e8f0",
      overflow: "hidden",
      zIndex: 9999
    }),
    menuList: (provided) => ({
      ...provided,
      paddingTop: "4px",
      paddingBottom: "4px",
      maxHeight: "200px"
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "0.75rem",
      fontWeight: "500",
      backgroundColor: state.isSelected ? "#4D8B4F" : state.isFocused ? "rgba(77, 139, 79, 0.1)" : "transparent",
      color: state.isSelected ? "#ffffff" : "#1e293b",
      cursor: "pointer",
      "&:active": { backgroundColor: "#4D8B4F", color: "#ffffff" }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto selection:bg-[#4D8B4F]/10 selection:text-[#4D8B4F]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseAndReset}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-md z-0"
          />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative z-10 w-full max-w-[880px] max-h-[85vh] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-slate-900/10 border border-slate-200/80 bg-white/95 backdrop-blur-xl overflow-y-auto antialiased scrollbar-none"
          >
            {/* Top Bar Floating Close Button */}
            <button 
              onClick={handleCloseAndReset} 
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100/80 hover:bg-slate-200/80 hover:scale-105 active:scale-95 transition-all duration-200 text-slate-600 border border-slate-200/60 z-20 group"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 transition-transform group-hover:rotate-90 duration-300" />
            </button>

            <AnimatePresence mode="wait">
              {isContinuing ? (
                /* SCREEN 3: Processing Step */
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center justify-center py-20 px-4 text-center"
                >
                  <div className="relative mb-8 flex items-center justify-center">
                    <div className="relative w-20 h-20 rounded-3xl bg-emerald-50/60 border border-[#4D8B4F]/30 flex items-center justify-center shadow-sm">
                      <Loader2 className="h-9 w-9 text-[#4D8B4F] animate-spin" />
                    </div>
                  </div>

                  <motion.div 
                    key={processingStep} 
                    initial={{ opacity: 0, y: 8 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 max-w-sm"
                  >
                    <p className="text-lg font-bold text-slate-900 tracking-tight">
                      {processingMessages[processingStep]}
                    </p>
                    <p className="text-xs text-slate-500 font-medium tracking-wide">
                      Please hold on while we process your request
                    </p>
                  </motion.div>

                  <div className="w-48 h-1.5 bg-slate-100 rounded-full mt-8 overflow-hidden border border-slate-200/60">
                    <motion.div 
                      className="h-full bg-[#4D8B4F] rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${((processingStep + 1) / processingMessages.length) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>

              ) : isSuccess ? (
                /* SCREEN 4: Confirmation Screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-2 space-y-8"
                >
                  <div className="text-center space-y-3">
                    <div className="h-16 w-16 bg-[#4D8B4F]/10 text-[#4D8B4F] rounded-2xl border border-[#4D8B4F]/20 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="h-9 w-9 text-[#4D8B4F]" />
                    </div>
                    <div className="space-y-1">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#4D8B4F] bg-[#4D8B4F]/10 border border-[#4D8B4F]/20 rounded-full px-3.5 py-1 mb-1">
                        CONFIRMED
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                        Meeting Successfully Scheduled
                      </h3>
                      <p className="text-xs text-slate-500 max-w-md mx-auto">
                        Your calendar invitation and meeting link have been prepared.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50/70 border border-slate-200/80 backdrop-blur-sm rounded-2xl p-6 space-y-4 shadow-sm">
                      <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">TYPE</span>
                        <span className="text-xs font-bold text-slate-800">{MEETING_OPTIONS.find(o => o.id === selectedOption)?.title}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">DATE</span>
                        <span className="text-xs font-bold text-slate-800">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">TIME</span>
                        <span className="text-xs font-bold text-slate-800">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">TIME ZONE</span>
                        <span className="text-xs font-bold text-slate-800">{selectedTimezone?.value}</span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">PLATFORM</span>
                        <span className="text-xs font-bold text-[#4D8B4F] flex items-center gap-1.5 bg-[#4D8B4F]/10 px-3 py-1 rounded-md border border-[#4D8B4F]/20">
                          <Video className="w-3.5 h-3.5 text-[#4D8B4F]" /> Microsoft Teams
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50/70 backdrop-blur-sm border border-slate-200/80 border-l-[5px] border-l-[#4D8B4F] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-sm mb-4 flex items-center gap-2 text-slate-900 border-b border-slate-200/80 pb-3">
                          <Sparkles className="h-4 w-4 text-[#6B2D1A]" /> What Happens Next?
                        </h4>
                        <ul className="space-y-3.5 text-xs text-slate-600">
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#4D8B4F] shrink-0 mt-0.5" />
                            <span>Invitation sent to your email with meeting link.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#4D8B4F] shrink-0 mt-0.5" />
                            <span>Calendar synced automatically to your account.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#4D8B4F] shrink-0 mt-0.5" />
                            <span>Consultant will review your project requirements.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#4D8B4F] shrink-0 mt-0.5" />
                            <span>Meeting agenda provided prior to scheduled start.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                        <ShieldCheck className="w-4 h-4 text-[#6B2D1A]" />
                        <span>Enterprise grade encrypted scheduling platform</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button 
                      onClick={handleCloseAndReset} 
                      className="px-7 py-3 rounded-xl text-white text-xs font-bold bg-[#6B2D1A] hover:bg-[#582415] active:scale-95 transition-all shadow-sm"
                    >
                      Return to Site
                    </button>
                    <button 
                      onClick={handleCloseAndReset} 
                      className="px-7 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-bold hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
                    >
                      Schedule Another Meeting
                    </button>
                  </div>
                </motion.div>

              ) : calendlyStep ? (
                /* SCREEN 2: Date & Available Time Slots */
                <motion.div
                  key="date-time"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <header className="text-left border-b border-slate-200 pb-5">
                    <span className="text-[11px] font-bold tracking-wider text-[#6B2D1A] uppercase">STEP 2 OF 2</span>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">Select Date & Time</h2>
                    <p className="text-xs text-slate-500 mt-1">Pick a convenient slot according to your selected time zone.</p>
                  </header>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-slate-700 uppercase flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#6B2D1A]" /> DATE
                      </label>
                      <div className="relative">
                        <input 
                          type="date" 
                          value={selectedDate} 
                          onChange={(e) => setSelectedDate(e.target.value)} 
                          className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#4D8B4F]/20 focus:border-[#4D8B4F] transition-all shadow-sm" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-slate-700 uppercase flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#6B2D1A]" /> TIMESLOT
                      </label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {timeslots.map(slot => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button 
                              key={slot} 
                              onClick={() => setSelectedTime(slot)} 
                              className={`p-3 rounded-xl border text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                                isSelected 
                                  ? "bg-[#4D8B4F] text-white border-[#4D8B4F] shadow-sm scale-[1.02]" 
                                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                              }`}
                            >
                              <Clock className={`w-3 h-3 ${isSelected ? "text-white" : "text-[#4D8B4F]"}`} />
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                    <button 
                      onClick={() => setCalendlyStep(false)} 
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
                    >
                      Back
                    </button>
                    <button 
                      onClick={handleBookMeeting} 
                      className="px-7 py-3 rounded-xl text-white text-xs font-bold bg-[#6B2D1A] hover:bg-[#582415] active:scale-95 transition-all shadow-sm flex items-center gap-2 group"
                    >
                      Confirm Appointment
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>

              ) : (
                /* SCREEN 1: Options & Time Zone Selector */
                <motion.div
                  key="options"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <header className="text-left border-b border-slate-200 pb-4">
                    <span className="text-[11px] font-bold tracking-wider text-[#6B2D1A] uppercase">STEP 1 OF 2</span>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mt-1">Let's Plan Your Next Project</h2>
                    <p className="text-xs text-slate-500 mt-1">Select an engagement model to tailor our initial consultation.</p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {MEETING_OPTIONS.map((option) => {
                      const Icon = option.icon;
                      const isActive = selectedOption === option.id;
                      return (
                        <button 
                          key={option.id} 
                          onClick={() => setSelectedOption(option.id)} 
                          className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                            isActive 
                              ? "border-[#4D8B4F] bg-emerald-50/30 ring-1 ring-[#4D8B4F] shadow-sm" 
                              : "border-slate-200/80 bg-white hover:bg-slate-50/50 hover:border-slate-300"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <div className={`p-2.5 rounded-xl transition-colors ${isActive ? "bg-[#4D8B4F] text-white" : "bg-slate-100 text-slate-700 group-hover:bg-slate-200/80"}`}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <span className="text-[10px] font-bold tracking-wide bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md text-slate-600">
                              {option.duration}
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center justify-between">
                            {option.title}
                            {isActive && <ChevronRight className="w-4 h-4 text-[#4D8B4F]" />}
                          </h3>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{option.description}</p>
                        </button>
                      );
                    })}
                  </div>

                  {/* TIME ZONE SELECTOR IMPLEMENTATION */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold tracking-wider text-slate-700 uppercase flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-[#6B2D1A]" /> Preferred Time Zone
                      </label>

                      {isOtherSearchMode && (
                        <button 
                          type="button"
                          onClick={() => setIsOtherSearchMode(false)}
                          className="text-[11px] font-bold text-[#6B2D1A] hover:underline flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" /> Quick Presets
                        </button>
                      )}
                    </div>

                    {!isOtherSearchMode ? (
                      /* Preset Options View */
                      <select
                        value={selectedTimezone ? (PRESET_TIMEZONES.some((t) => t.value === selectedTimezone.value) ? selectedTimezone.value : selectedTimezone.value) : ""}
                        onChange={handlePresetSelect}
                        className={`w-full p-3 rounded-xl border bg-white text-slate-900 text-xs font-semibold outline-none focus:ring-2 focus:ring-[#4D8B4F]/20 focus:border-[#4D8B4F] transition-all shadow-sm ${
                          timeZoneError ? "border-red-400" : "border-slate-200"
                        }`}
                      >
                        <option value="" disabled hidden>
                          Select Preferred Time Zone
                        </option>
                        {PRESET_TIMEZONES.map((tz) => (
                          <option key={tz.value} value={tz.value}>
                            {tz.label}
                          </option>
                        ))}
                        {selectedTimezone && !PRESET_TIMEZONES.some((t) => t.value === selectedTimezone.value) && (
                          <option value={selectedTimezone.value}>
                            ✓ {selectedTimezone.label || selectedTimezone.value}
                          </option>
                        )}
                        <option value="OTHER">Other Time Zones...</option>
                      </select>
                    ) : (
                      /* Searchable Popover View */
                      <Select
                        autoFocus
                        defaultMenuIsOpen
                        options={allTimezoneOptions}
                        value={selectedTimezone}
                        onChange={handleSearchSelect}
                        placeholder="🔍 Search country, city, or time zone (e.g. Hyderabad, London, Dubai)..."
                        styles={customSelectStyles}
                        filterOption={(candidate, input) => {
                          if (!input) return true;
                          const term = input.toLowerCase();
                          return candidate.data.keywords.includes(term);
                        }}
                      />
                    )}

                    {timeZoneError && (
                      <motion.p 
                        initial={{ opacity: 0, y: -4 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="mt-1.5 text-xs text-red-600 font-bold"
                      >
                        {timeZoneError}
                      </motion.p>
                    )}
                  </div>

                  <div className="flex justify-end pt-5 border-t border-slate-200">
                    <button 
                      onClick={handleContinue} 
                      className="px-8 py-3 rounded-xl text-white text-xs font-bold bg-[#6B2D1A] hover:bg-[#582415] active:scale-95 transition-all shadow-sm flex items-center gap-2 group"
                    >
                      Continue
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export { MeetingModal };