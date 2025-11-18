"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Testimonials", href: "#testimonials" },
];

const features = [
  {
    icon: "💬",
    title: "Unified Inbox",
    description:
      "Manage WhatsApp, TikTok, Email, Facebook & Instagram messages — all in one clean inbox.",
  },
  {
    icon: "⚡",
    title: "Smart Automations",
    description:
      "Set workflows that follow up leads, send reminders, schedule appointments automatically.",
  },
  {
    icon: "👥",
    title: "CRM & Contacts",
    description:
      "Store, segment, and track every lead and customer with real-time insights.",
  },
  {
    icon: "📊",
    title: "Pipelines & Deals",
    description:
      "Visual drag-and-drop board to track every stage of the customer journey.",
  },
  {
    icon: "🌐",
    title: "Funnels & Website Builder",
    description:
      "Create landing pages, forms, booking pages, and lead funnels without coding.",
  },
  {
    icon: "📈",
    title: "Analytics & Reporting",
    description:
      "See where your leads come from, what converts, and what needs improvement.",
  },
];

const useCases = [
  "Automated WhatsApp follow-up",
  "Appointment scheduling",
  "Service reminders",
  "Online booking funnels",
  "Lead nurturing",
  "Customer reactivation",
];

const benefits = [
  { icon: "📋", text: "Stay organized" },
  { icon: "⚡", text: "Respond faster" },
  { icon: "🤖", text: "Follow up automatically" },
  { icon: "📈", text: "Increase conversion rates" },
  { icon: "⏰", text: "Save hours every week" },
  { icon: "🌐", text: "Unify every channel in one hub" },
];

const platformFeatures = [
  { icon: "🎯", text: "No technical experience needed" },
  { icon: "📱", text: "Works on desktop & mobile" },
  { icon: "🔒", text: "Secured cloud platform" },
  { icon: "🔗", text: "Seamless integrations" },
  { icon: "📚", text: "24/7 knowledge base" },
  { icon: "🌍", text: "Support in Arabic & English" },
];

const heroStats = [
  { label: "Response time", value: "-63%", badge: "After automation" },
  { label: "Lead-to-sale", value: "+38%", badge: "Average uplift" },
  { label: "No-shows", value: "-42%", badge: "With smart reminders" },
];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-slate-50">
      <BackgroundFX />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* HEADER */}
        <header
          className={`fixed left-0 right-0 top-0 z-50 px-3 transition-all duration-500 sm:px-4 md:px-6 lg:px-10 ${
            scrolled ? "pt-2" : "pt-4"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 text-xs sm:px-5 sm:py-3 md:text-sm transition-all duration-500 ${
              scrolled
                ? "border-white/15 bg-black/90 shadow-[0_12px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
                : "border-white/10 bg-black/60 shadow-[0_18px_80px_rgba(109,40,217,0.6)] backdrop-blur-2xl"
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group"
              aria-label="Leads Connector home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-[11px] font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.9)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,1)] sm:h-9 sm:w-9 sm:text-sm">
                LC
              </div>
              <span className="hidden text-[11px] font-bold tracking-[0.16em] uppercase text-slate-100 sm:inline-block md:text-[12px]">
                Leads Connector
              </span>
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-1 rounded-full bg-white/5 px-1 py-0.5 text-[11px] font-medium text-slate-200 shadow-[0_0_25px_rgba(15,23,42,0.9)] backdrop-blur-xl md:flex"
              aria-label="Primary"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-3 py-1.5 transition-all hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="#demo"
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/10"
              >
                Book a Demo
              </a>
              <a
                href="#trial"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-1.5 text-[11px] font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,1)]"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-black/60 p-1.5 text-slate-100 transition-all hover:scale-105 hover:bg-white/10 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <div className="space-y-[3px]">
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform ${
                    mobileOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-opacity ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition-transform ${
                    mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile nav panel */}
          {mobileOpen && (
            <div className="mx-auto mt-3 max-w-7xl animate-[slideDown_0.25s_ease-out] rounded-2xl border border-white/10 bg-black/95 px-4 py-3 text-sm shadow-[0_12px_40px_rgba(15,23,42,0.9)] backdrop-blur-2xl md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-1 py-2 text-slate-200 transition-all hover:translate-x-2 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="#trial"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.7)] transition-all hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/15 bg-black/60 px-5 py-2 text-center text-sm font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/5"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="flex-1">
          {/* HERO */}
          <section
            id="hero"
            className="relative w-full overflow-hidden border-b border-white/5"
          >
            <div className="relative min-h-screen flex flex-col justify-center">
              {/* Enhanced Background */}
              <div className="pointer-events-none absolute inset-0">
                {/* Primary gradient orbs */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.7),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.6),transparent_50%)] opacity-70 animate-[gradientGlow_18s_ease-in-out_infinite]" />
                
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 [mask-image:radial-gradient(ellipse_130%_80%_at_50%_5%,black,transparent)]" />
                
                {/* Animated light beams */}
                <div className="absolute -left-32 top-[-10%] h-full w-64 rotate-[18deg] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent blur-3xl animate-[beamSlide_14s_linear_infinite]" />
                <div className="absolute -right-40 top-[-20%] h-full w-64 rotate-[-18deg] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent blur-3xl animate-[beamSlide_18s_linear_infinite]" />
                
                {/* Floating orbs */}
                <div className="absolute left-[8%] top-[20%] h-48 w-48 rounded-full bg-violet-500/50 blur-3xl animate-[float_18s_ease-in-out_infinite]" />
                <div className="absolute right-[10%] bottom-[12%] h-56 w-56 rounded-full bg-fuchsia-500/45 blur-3xl animate-[float_20s_ease-in-out_infinite]" />
                
                {/* Scan line */}
                <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-purple-400/80 to-transparent animate-[scan_9s_ease-in-out_infinite]" />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] opacity-80" />
              </div>

              {/* Hero content */}
              <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center md:gap-10 lg:px-10 lg:py-40">
                {/* LEFT: hero text */}
                <div className="max-w-xl space-y-6 text-center md:flex-1 md:text-left">
                  {/* Tags */}
                  <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-[11px] font-medium text-slate-200 shadow-[0_16px_60px_rgba(15,23,42,1)] backdrop-blur-2xl sm:px-4 md:mx-0 animate-[fadeIn_0.6s_ease-out]">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live pipeline visibility
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      Omni-channel CRM
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      Built for GCC teams
                    </span>
                  </div>

                  {/* Heading + copy */}
                  <div className="space-y-4">
                    <h1 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.8rem] animate-[fadeInUp_0.7s_ease-out] animate-delay-200">
                      Automate Your Leads.{" "}
                      <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                        Grow Without Limits.
                      </span>
                    </h1>
                    <p className="mx-auto max-w-lg text-base text-slate-300 sm:text-lg md:mx-0 md:text-xl animate-[fadeInUp_0.7s_ease-out] animate-delay-300 leading-relaxed">
                      Leads Connector orchestrates WhatsApp, social media, email and web leads — all in one command center, so your team responds faster and never loses a deal.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-4 animate-[fadeInUp_0.7s_ease-out] animate-delay-400">
                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                      <a
                        href="#trial"
                        className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,1)]"
                      >
                        Start Free Trial
                        <svg
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </a>
                      <a
                        href="#demo"
                        className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-medium text-slate-50 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/30 transition-transform group-hover:scale-110">
                          <svg
                            className="h-4 w-4 text-purple-100"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                        Watch 3-min tour
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 sm:text-sm md:justify-start">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-violet-500 to-purple-600 text-[10px] font-bold">
                            SA
                          </span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-fuchsia-500 to-rose-500 text-[10px] font-bold">
                            QA
                          </span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-gradient-to-br from-emerald-500 to-cyan-500 text-[10px] font-bold">
                            UAE
                          </span>
                        </div>
                        <span>Trusted across KSA, UAE & Qatar</span>
                      </div>
                      <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-50">
                        ⚙️ Live in 7 days · No code
                      </span>
                    </div>
                  </div>

                  {/* Channels */}
                  <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400 md:justify-start animate-[fadeInUp_0.7s_ease-out] animate-delay-500">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 transition-colors">
                      WhatsApp Business
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 transition-colors">
                      Instagram & Facebook
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 transition-colors">
                      TikTok, Email & SMS
                    </span>
                  </div>
                </div>

                {/* RIGHT: analytics card */}
                <div className="relative mt-8 flex w-full justify-center sm:mt-10 md:mt-0 md:block md:flex-1 animate-[fadeInUp_0.7s_ease-out] animate-delay-400">
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                    {/* Glow ring */}
                    <div className="pointer-events-none absolute -inset-12 rounded-[30px] bg-[conic-gradient(from_130deg_at_50%_50%,rgba(129,140,248,0.4),rgba(236,72,153,0.3),rgba(34,197,235,0.3),rgba(129,140,248,0.4))] opacity-70 blur-3xl animate-[spin_20s_linear_infinite]" />
                    
                    {/* Card */}
                    <div className="relative rounded-[24px] border border-white/15 bg-black/70 p-[1px] shadow-[0_28px_70px_rgba(15,23,42,1)] backdrop-blur-2xl hover:border-white/20 transition-all">
                      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95">
                        {/* Grid texture */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-50" />
                        
                        {/* Top glow */}
                        <div className="pointer-events-none absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.8),transparent_60%)] opacity-70 blur-2xl" />

                        <div className="relative p-5 sm:p-6">
                          {/* Header */}
                          <div className="mb-4 flex items-center justify-between gap-3">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                                Live Command Center
                              </p>
                              <p className="text-sm font-bold text-slate-50 sm:text-base">
                                Today's funnel health
                              </p>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-200 sm:text-[11px]">
                              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Realtime</span>
                            </div>
                          </div>

                          {/* Chart */}
                          <div className="mb-4 rounded-2xl border border-white/10 bg-black/70 p-4 hover:border-white/20 transition-all">
                            <div className="mb-2 flex items-center justify-between text-[10px] text-slate-300 sm:text-xs">
                              <span>Lead volume (last 7 days)</span>
                              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] text-emerald-300 sm:text-[10px] font-semibold">
                                +23% vs last week
                              </span>
                            </div>
                            <div className="flex h-28 items-end gap-1.5 sm:h-32">
                              {[40, 52, 47, 65, 70, 88, 76].map((h, idx) => (
                                <div
                                  key={idx}
                                  className="flex-1 rounded-t-full bg-gradient-to-t from-violet-600/30 via-violet-500/75 to-fuchsia-400/90 hover:from-violet-600/40 hover:via-violet-500/85 hover:to-fuchsia-400 transition-all cursor-pointer"
                                  style={{ height: `${h}%` }}
                                />
                              ))}
                            </div>
                            <div className="mt-2 flex justify-between text-[9px] text-slate-500 sm:text-[10px]">
                              <span>Sun</span>
                              <span>Mon</span>
                              <span>Tue</span>
                              <span>Wed</span>
                              <span>Thu</span>
                              <span>Fri</span>
                              <span>Sat</span>
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                            {heroStats.map((stat) => (
                              <div
                                key={stat.label}
                                className="group rounded-2xl border border-white/10 bg-white/5 px-2 py-2 text-left hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer sm:px-3 sm:py-3"
                              >
                                <p className="text-[9px] uppercase tracking-wide text-slate-400 sm:text-[10px]">
                                  {stat.label}
                                </p>
                                <p className="mt-1 text-base font-bold text-slate-50 group-hover:text-purple-300 transition-colors sm:text-lg">
                                  {stat.value}
                                </p>
                                <p className="mt-1 text-[9px] text-emerald-300 sm:text-[10px]">
                                  {stat.badge}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Pipeline */}
                          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 p-3 text-[10px] hover:border-white/20 transition-all sm:text-[11px]">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="font-semibold text-slate-200">Active deals pipeline</span>
                              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-slate-300">
                                3 lanes automated
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 rounded-full bg-white/5 p-1 hover:bg-white/10 transition-all">
                                <div className="h-1.5 w-3/5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
                                <p className="mt-1 text-[9px] text-slate-300">New leads</p>
                              </div>
                              <div className="flex-1 rounded-full bg-white/5 p-1 hover:bg-white/10 transition-all">
                                <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                                <p className="mt-1 text-[9px] text-slate-300">Follow-up</p>
                              </div>
                              <div className="flex-1 rounded-full bg-white/5 p-1 hover:bg-white/10 transition-all">
                                <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                                <p className="mt-1 text-[9px] text-slate-300">Closing</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating chips */}
                    <div className="pointer-events-none hidden lg:block">
                      <div className="absolute -left-6 -top-4 flex items-center gap-2 rounded-full border border-violet-500/50 bg-black/90 px-3 py-2 text-[11px] text-slate-100 shadow-[0_8px_32px_rgba(139,92,246,0.4)] backdrop-blur-xl animate-[floatSoft_14s_ease-in-out_infinite]">
                        <span className="text-sm">🤖</span>
                        <span className="font-semibold">Smart WhatsApp follow-up</span>
                      </div>
                      <div className="absolute -right-5 top-16 flex items-center gap-2 rounded-full border border-emerald-500/50 bg-black/90 px-3 py-2 text-[11px] text-slate-100 shadow-[0_8px_32px_rgba(52,211,153,0.4)] backdrop-blur-xl animate-[floatSoft_16s_ease-in-out_infinite]">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-semibold">Agents online: 6</span>
                      </div>
                      <div className="absolute -right-8 bottom-2 flex items-center gap-2 rounded-full border border-fuchsia-500/50 bg-black/90 px-3 py-2 text-[11px] text-slate-100 shadow-[0_8px_32px_rgba(236,72,153,0.4)] backdrop-blur-xl animate-[floatSoft_17s_ease-in-out_infinite]">
                        <span className="text-sm">📅</span>
                        <span className="font-semibold">23 new bookings today</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric strip */}
            <div className="pointer-events-none relative z-10 mx-auto max-w-5xl px-4 pb-12 sm:px-5 md:px-6 lg:px-10">
              <div className="pointer-events-auto flex flex-col gap-4 rounded-3xl border border-white/20 bg-gradient-to-r from-white via-slate-50 to-white px-6 py-5 text-xs text-slate-900 shadow-[0_20px_70px_rgba(15,23,42,0.4)] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5 sm:text-sm hover:shadow-[0_25px_80px_rgba(15,23,42,0.5)] transition-all">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-lg font-bold shadow-[0_4px_20px_rgba(52,211,153,0.5)]">
                      ⚡
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-slate-900 sm:text-base">
                        3.1x more conversions
                      </span>
                      <span className="text-xs text-slate-600 sm:text-sm">
                        when all leads, channels and follow-ups run inside one system.
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-900 text-xs font-bold text-white px-5 py-2.5 sm:text-sm hover:bg-slate-800 hover:scale-105 transition-all shadow-[0_4px_20px_rgba(15,23,42,0.3)]"
                >
                  Explore platform
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5">
                    ↓
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* MAIN CONTENT */}
          <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-5 md:px-6 lg:px-10 lg:pb-24">
            {/* WHY CHOOSE US */}
            <section className="animate-[fadeInUp_0.8s_ease-out]">
              <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-b from-purple-950/20 to-black p-8 backdrop-blur-xl hover:border-white/15 transition-all sm:p-10 lg:rounded-[40px] lg:p-14">
                <div className="text-center md:text-left">
                  <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Why teams choose{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      Leads Connector
                    </span>
                  </h2>
                  <p className="mx-auto mb-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl md:mx-0">
                    Chasing leads across WhatsApp, Instagram, email and spreadsheets is where revenue leaks. Leads Connector gives you a single, automated system of record.
                  </p>
                  <p className="mx-auto mb-12 max-w-3xl text-lg font-bold text-purple-300 sm:text-xl lg:text-2xl md:mx-0">
                    One hub for capture, nurture, booking, and close.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {benefits.map((benefit, idx) => (
                    <div
                      key={benefit.text}
                      className="group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-5 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] animate-[fadeInUp_0.6s_ease-out]"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="mb-3 text-4xl transition-transform group-hover:scale-110">{benefit.icon}</div>
                      <p className="text-base font-bold text-white transition-colors group-hover:text-purple-300 sm:text-lg">
                        {benefit.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="mt-20">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl animate-[fadeInUp_0.8s_ease-out]">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    All-in-one
                  </span>{" "}
                  customer engine
                </h2>
                <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg animate-[fadeInUp_0.8s_ease-out] animate-delay-100">
                  Everything you need to capture, nurture, and convert leads at scale.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-6 backdrop-blur-xl transition-all hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_12px_50px_rgba(139,92,246,0.35)] animate-[fadeInUp_0.8s_ease-out]"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-purple-500/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-purple-500/25 text-3xl backdrop-blur-sm transition-all group-hover:scale-110 group-hover:rotate-6">
                        {feature.icon}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* USE CASES */}
            <section id="usecases" className="mt-20 animate-[fadeInUp_0.8s_ease-out]">
              <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-950/25 via-purple-950/15 to-black p-8 backdrop-blur-xl hover:border-white/15 transition-all sm:p-10 lg:rounded-[40px] lg:p-14">
                <div className="mb-12 text-center md:text-left">
                  <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Built for{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      real operators
                    </span>
                  </h2>
                  <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg md:mx-0">
                    Clinics, salons, home services, automotive, education, and e-commerce — any business that runs on leads and bookings can centralize operations on Leads Connector.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {useCases.map((useCase, idx) => (
                    <div
                      key={useCase}
                      className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] animate-[fadeInUp_0.6s_ease-out]"
                      style={{ animationDelay: `${idx * 70}ms` }}
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 transition-transform group-hover:scale-110">
                        <svg
                          className="h-5 w-5 text-purple-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-white transition-colors group-hover:text-purple-300 sm:text-base">
                        {useCase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PLATFORM FEATURES */}
            <section className="mt-20 animate-[fadeInUp_0.8s_ease-out]">
              <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-b from-purple-950/20 to-black p-8 backdrop-blur-xl hover:border-white/15 transition-all sm:p-10 lg:rounded-[40px] lg:p-14">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Simple, fast &{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      designed for growth
                    </span>
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {platformFeatures.map((item, idx) => (
                    <div
                      key={item.text}
                      className="group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-5 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] animate-[fadeInUp_0.6s_ease-out]"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="mb-4 text-4xl transition-transform group-hover:scale-110">{item.icon}</div>
                      <p className="text-sm font-semibold text-white transition-colors group-hover:text-purple-300 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section id="testimonials" className="mt-20 animate-[fadeInUp_0.8s_ease-out]">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  What our{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    clients say
                  </span>
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {[
                  {
                    quote: "Leads Connector helped us respond faster and reduced no-shows instantly.",
                    author: "Sarah M.",
                    role: "Clinic Owner",
                    rating: 5,
                  },
                  {
                    quote: "Our sales team converted 3× more leads with automated follow-ups.",
                    author: "Ahmed K.",
                    role: "Automotive Business",
                    rating: 5,
                  },
                ].map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-8 backdrop-blur-xl transition-all hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_12px_50px_rgba(139,92,246,0.35)] animate-[fadeInUp_0.8s_ease-out]"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="mb-6 text-base italic text-slate-300 sm:text-lg leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-base font-bold text-white shadow-[0_4px_20px_rgba(139,92,246,0.5)]">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-bold text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL CTA */}
            <section
              id="trial"
              className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-950/50 via-violet-950/30 to-black p-10 shadow-[0_0_100px_rgba(139,92,246,0.3)] backdrop-blur-xl transition-all hover:border-purple-500/50 hover:shadow-[0_0_120px_rgba(139,92,246,0.4)] sm:p-12 lg:rounded-[40px] lg:p-16 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="relative">
                <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-purple-600/30 blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />

                <div className="relative text-center md:text-left">
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Ready to turn your business into a
                    <br />
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      fully automated lead-generation machine?
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl md:mx-0">
                    Consolidate your tech stack, orchestrate every touchpoint, and give your team one cockpit for revenue operations.
                  </p>

                  <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
                    <a
                      href="#trial"
                      className="group inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_45px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(139,92,246,1)]"
                    >
                      Start Free Trial
                      <svg
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                    <a
                      href="#demo"
                      className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
                    >
                      Book a Demo
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-white/8 bg-black/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-12 text-sm sm:px-5 md:px-6 lg:px-10">
            <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Company */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.8)]">
                    LC
                  </div>
                  <span className="text-sm font-bold tracking-tight">
                    LEADS CONNECTOR
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The all-in-one CRM and marketing automation platform for businesses in Saudi Arabia and the GCC.
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-white">Product</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#features" className="transition-colors hover:text-white hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#usecases" className="transition-colors hover:text-white hover:underline">
                      Use Cases
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-white">Resources</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-white">Contact</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#demo" className="transition-colors hover:text-white hover:underline">
                      Book a Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      Sales: +966 XX XXX XXXX
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white hover:underline">
                      info@leadsconnector.com
                    </a>
                  </li>
                </ul>
              </div>
               <div className="space-y-2 text-xs text-slate-500">
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5">🇬🇧</span>
                    <span>UK Office: 123 High Street, London, W1A 1AA, United Kingdom</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5">🇸🇦</span>
                    <span>Operating across Saudi Arabia, UAE, Qatar & GCC</span>
                  </p>
                </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Leads Connector. All rights reserved.</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#" className="transition-colors hover:text-slate-200 hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors hover:text-slate-200 hover:underline">
                  Terms of Service
                </a>
                <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:inline-block" />
                <span className="text-slate-500">
                  🇸🇦 Made for Saudi Arabia &amp; GCC
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientGlow {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -20px, 0) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(24px, -20px); }
          66% { transform: translate(-16px, 14px); }
        }
        @keyframes floatSoft {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -8px, 0); }
        }
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes beamSlide {
          0% { transform: translate3d(0, -40%, 0) rotate(18deg); }
          100% { transform: translate3d(0, 40%, 0) rotate(18deg); }
        }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
        .animate-delay-400 { animation-delay: 400ms; }
        .animate-delay-500 { animation-delay: 500ms; }
      `}</style>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(at_top,_rgba(139,92,246,0.7),rgba(168,85,247,0.5),rgba(192,132,252,0.6),rgba(139,92,246,0.7))] opacity-65 blur-[120px] animate-[spin_30s_linear_infinite]" />
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-purple-600/25 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/25 blur-[100px] animate-[pulse_10s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[100px] animate-[pulse_12s_ease-in-out_infinite]" style={{ animationDelay: "4s" }} />
      <div className="absolute left-1/4 top-1/2 h-32 w-32 rounded-full bg-purple-500/12 blur-[60px] animate-[float_15s_ease-in-out_infinite]" />
      <div className="absolute right-1/4 top-2/3 h-40 w-40 rounded-full bg-violet-500/12 blur-[70px] animate-[float_18s_ease-in-out_infinite]" style={{ animationDelay: "3s" }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_70%)]" />
      <div className="absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08),transparent_70%)]" />
      <div className="absolute left-[20%] top-0 h-full w-px rotate-[15deg] bg-gradient-to-b from-transparent via-purple-500/12 to-transparent blur-sm" />
      <div className="absolute left-[50%] top-0 h-full w-px rotate-[25deg] bg-gradient-to-b from-transparent via-violet-500/12 to-transparent blur-sm" />
      <div className="absolute left-[80%] top-0 h-full w-px rotate-[35deg] bg-gradient-to-b from-transparent via-fuchsia-500/12 to-transparent blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent animate-[scan_8s_ease-in-out_infinite]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
}