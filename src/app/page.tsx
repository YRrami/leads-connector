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
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "⚡",
    title: "Smart Automations",
    description:
      "Set workflows that follow up leads, send reminders, schedule appointments automatically.",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: "👥",
    title: "CRM & Contacts",
    description:
      "Store, segment, and track every lead and customer with real-time insights.",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    icon: "📊",
    title: "Pipelines & Deals",
    description:
      "Visual drag-and-drop board to track every stage of the customer journey.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: "🌐",
    title: "Funnels & Website Builder",
    description:
      "Create landing pages, forms, booking pages, and lead funnels without coding.",
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    icon: "📈",
    title: "Analytics & Reporting",
    description:
      "See where your leads come from, what converts, and what needs improvement.",
    color: "from-emerald-400 to-cyan-500",
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
    <div className="relative min-h-screen overflow-hidden bg-black text-slate-50">
      {/* Global animated background */}
      <BackgroundFX />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* OVERLAY HEADER (absolute over hero) */}
        <header
          className={`absolute left-0 right-0 top-0 z-50 px-4 pt-4 transition-all duration-500 sm:px-6 lg:px-10 ${
            scrolled ? "pt-3" : "pt-5"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-3 transition-all duration-500 ${
              scrolled
                ? "border-white/15 bg-black/75 shadow-[0_12px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
                : "border-white/10 bg-black/55 shadow-[0_18px_80px_rgba(109,40,217,0.55)] backdrop-blur-2xl"
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 group"
              aria-label="Leads Connector home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-sm font-bold text-white shadow-[0_0_22px_rgba(139,92,246,0.8)] transition-transform group-hover:scale-110">
                LC
              </div>
              <span className="text-sm font-semibold tracking-[0.16em] text-slate-100 sm:text-[13px] uppercase">
                Leads Connector
              </span>
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs font-medium text-slate-200 shadow-[0_0_25px_rgba(15,23,42,0.9)] backdrop-blur-xl md:flex"
              aria-label="Primary"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 transition-all hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#demo"
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/10"
              >
                Book a Demo
              </a>
              <a
                href="#trial"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.9)]"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-black/60 p-1.5 text-slate-100 transition-all hover:scale-105 hover:bg-white/10 md:hidden"
              aria-label="Toggle navigation"
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

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="mx-auto mt-3 max-w-7xl animate-[slideDown_0.25s_ease-out] rounded-2xl border border-white/10 bg-black/90 px-5 py-4 text-sm shadow-[0_12px_40px_rgba(15,23,42,0.9)] backdrop-blur-2xl md:hidden">
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
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="#trial"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.7)] transition-all hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/15 bg-black/60 px-5 py-2.5 text-center text-sm font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/5"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="flex-1">
          {/* FULL-WIDTH FUTURISTIC HERO */}
          <section
            id="hero"
            className="relative w-full overflow-hidden border-b border-white/5 bg-gradient-to-b from-black via-slate-950 to-black"
          >
            {/* Full-bleed wrapper */}
            <div className="-mx-4 sm:-mx-6 lg:-mx-10">
              <div className="relative min-h-[100vh]">
                {/* Hero layered background */}
                <div className="pointer-events-none absolute inset-0">
                  {/* Gradient mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.55),transparent_60%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.5),transparent_60%)] opacity-70 animate-[gradientGlow_18s_ease-in-out_infinite]" />
                  {/* Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-35 [mask-image:radial-gradient(ellipse_130%_80%_at_50%_5%,black,transparent)]" />
                  {/* Beams */}
                  <div className="absolute -left-32 top-[-10%] h-full w-64 rotate-[18deg] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent blur-3xl animate-[beamSlide_14s_linear_infinite]" />
                  <div className="absolute -right-40 top-[-20%] h-full w-64 rotate-[-18deg] bg-gradient-to-b from-transparent via-fuchsia-500/45 to-transparent blur-3xl animate-[beamSlide_18s_linear_infinite]" />
                  {/* Orbs */}
                  <div className="absolute left-[10%] top-[18%] h-56 w-56 rounded-full bg-violet-500/40 blur-3xl animate-[float_18s_ease-in-out_infinite]" />
                  <div className="absolute right-[12%] bottom-[10%] h-64 w-64 rounded-full bg-fuchsia-500/35 blur-3xl animate-[float_20s_ease-in-out_infinite]" />
                  {/* Scanline */}
                  <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent animate-[scan_9s_ease-in-out_infinite]" />
                  {/* Vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)] opacity-80" />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-28 sm:px-6 lg:flex-row lg:items-center lg:pb-24 lg:pt-32">
                  {/* Left side */}
                  <div className="max-w-xl space-y-8 lg:flex-1">
                    {/* Tag strip */}
                    <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-[11px] font-medium text-slate-200 shadow-[0_16px_60px_rgba(15,23,42,0.95)] backdrop-blur-2xl animate-[fadeIn_0.6s_ease-out]">
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

                    {/* Hero text */}
                    <div className="space-y-5">
                      <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl animate-[fadeInUp_0.7s_ease-out] animate-delay-200">
                        Turn every{" "}
                        <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                          conversation
                        </span>{" "}
                        into a predictable
                        <br />
                        revenue engine.
                      </h1>
                      <p className="max-w-lg text-base text-slate-300 sm:text-lg animate-[fadeInUp_0.7s_ease-out] animate-delay-300">
                        Leads Connector orchestrates WhatsApp, social, email,
                        and web leads in one command center — so your team
                        reacts faster, follows up automatically, and never
                        loses a deal.
                      </p>
                    </div>

                    {/* CTAs + social proof */}
                    <div className="space-y-6 animate-[fadeInUp_0.7s_ease-out] animate-delay-400">
                      <div className="flex flex-wrap items-center gap-4">
                        <a
                          href="#trial"
                          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.7)] transition-all hover:scale-105 hover:shadow-[0_0_52px_rgba(139,92,246,0.9)]"
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
                          className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-medium text-slate-50 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/30 transition-transform group-hover:scale-110">
                            <svg
                              className="h-4 w-4 text-purple-100"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          Watch 3-minute product tour
                        </a>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/60 bg-gradient-to-br from-violet-500 to-purple-600 text-[10px] font-semibold">
                              SA
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/60 bg-gradient-to-br from-fuchsia-500 to-rose-500 text-[10px] font-semibold">
                              QA
                            </span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/60 bg-gradient-to-br from-emerald-500 to-cyan-500 text-[10px] font-semibold">
                              UAE
                            </span>
                          </div>
                          <span>Trusted by growth teams across KSA, UAE & Qatar</span>
                        </div>
                        <div className="h-1 w-1 rounded-full bg-slate-600" />
                        <span>Go live in under 7 days · No code required</span>
                      </div>
                    </div>

                    {/* Channel badges */}
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-slate-300 animate-[fadeInUp_0.7s_ease-out] animate-delay-500">
                      <span className="rounded-full bg-white/5 px-3 py-1">
                        WhatsApp Business
                      </span>
                      <span className="rounded-full bg-white/5 px-3 py-1">
                        Instagram & Facebook
                      </span>
                      <span className="rounded-full bg-white/5 px-3 py-1">
                        TikTok, Email & SMS
                      </span>
                    </div>
                  </div>

                  {/* Right side – dashboard mockup */}
                  <div className="relative w-full max-w-xl animate-[fadeInUp_0.7s_ease-out] animate-delay-400 lg:flex-1">
                    <div className="relative mx-auto max-w-md">
                      <div className="pointer-events-none absolute -inset-10 rounded-[36px] bg-[conic-gradient(from_130deg_at_50%_50%,rgba(129,140,248,0.27),rgba(236,72,153,0.17),rgba(34,197,235,0.2),rgba(129,140,248,0.27))] opacity-60 blur-3xl" />

                      <div className="relative rounded-[28px] border border-white/12 bg-black/70 p-[1px] shadow-[0_30px_80px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
                        <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-black/95">
                          {/* Inner grid */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
                          {/* Highlight */}
                          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.75),transparent_60%)] opacity-60 blur-2xl" />

                          <div className="relative p-5 sm:p-6">
                            {/* Header */}
                            <div className="mb-4 flex items-center justify-between">
                              <div>
                                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                                  Live Command Center
                                </p>
                                <p className="text-sm font-semibold text-slate-50">
                                  Today&apos;s funnel health
                                </p>
                              </div>
                              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-slate-200">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span>Realtime sync</span>
                              </div>
                            </div>

                            {/* Chart */}
                            <div className="mb-5 rounded-2xl border border-white/10 bg-black/60 p-4">
                              <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
                                <span>Lead volume (last 7 days)</span>
                                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
                                  +23% vs last week
                                </span>
                              </div>
                              <div className="flex h-28 items-end gap-1.5">
                                {[40, 52, 47, 65, 70, 88, 76].map((h, idx) => (
                                  <div
                                    key={idx}
                                    className="flex-1 rounded-full bg-gradient-to-t from-violet-600/25 via-violet-500/70 to-fuchsia-400/85"
                                    style={{ height: `${h}%` }}
                                  />
                                ))}
                              </div>
                              <div className="mt-3 flex justify-between text-[10px] text-slate-500">
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
                            <div className="mb-4 grid grid-cols-3 gap-3">
                              {heroStats.map((stat) => (
                                <div
                                  key={stat.label}
                                  className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left"
                                >
                                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                                    {stat.label}
                                  </p>
                                  <p className="mt-1 text-lg font-semibold text-slate-50">
                                    {stat.value}
                                  </p>
                                  <p className="mt-1 text-[10px] text-emerald-300">
                                    {stat.badge}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Pipeline snapshot */}
                            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 p-3">
                              <div className="mb-2 flex items-center justify-between text-[11px] text-slate-300">
                                <span>Active deals pipeline</span>
                                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-slate-200">
                                  3 lanes automated
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-[11px]">
                                <div className="flex-1 rounded-full bg-white/5 p-1">
                                  <div className="h-1.5 w-3/5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
                                  <p className="mt-1 text-[10px] text-slate-300">
                                    New leads
                                  </p>
                                </div>
                                <div className="flex-1 rounded-full bg-white/5 p-1">
                                  <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                                  <p className="mt-1 text-[10px] text-slate-300">
                                    In follow-up
                                  </p>
                                </div>
                                <div className="flex-1 rounded-full bg-white/5 p-1">
                                  <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                                  <p className="mt-1 text-[10px] text-slate-300">
                                    Ready to close
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating chips */}
                      <div className="pointer-events-none">
                        <div className="absolute -left-4 -top-4 flex items-center gap-2 rounded-full border border-violet-500/45 bg-black/85 px-3 py-1.5 text-[11px] text-slate-100 backdrop-blur-xl animate-[floatSoft_14s_ease-in-out_infinite]">
                          <span className="text-xs">🤖</span>
                          <span>Smart WhatsApp follow-up</span>
                        </div>
                        <div className="absolute -right-3 top-16 flex items-center gap-2 rounded-full border border-emerald-500/45 bg-black/85 px-3 py-1.5 text-[11px] text-slate-100 backdrop-blur-xl animate-[floatSoft_16s_ease-in-out_infinite]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Agents online: 6</span>
                        </div>
                        <div className="absolute -right-6 bottom-0 flex items-center gap-2 rounded-full border border-fuchsia-500/45 bg-black/85 px-3 py-1.5 text-[11px] text-slate-100 backdrop-blur-xl animate-[floatSoft_17s_ease-in-out_infinite]">
                          <span className="text-xs">📅</span>
                          <span>23 new bookings today</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics strip + scroll cue */}
                <div className="pointer-events-none relative z-10 mx-auto -mt-10 max-w-5xl px-4 pb-8 sm:px-6 lg:px-10">
                  <div className="pointer-events-auto flex flex-col gap-3 rounded-3xl border border-white/12 bg-black/80 px-4 py-4 text-xs text-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.95)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex h-6 items-center rounded-full bg-emerald-500/15 px-3 text-[11px] text-emerald-300">
                        ▲ 3.1x more conversions
                      </span>
                      <span className="text-slate-400">
                        when leads, channels and follow-ups run in one system.
                      </span>
                    </div>
                    <a
                      href="#features"
                      className="group inline-flex items-center gap-2 text-[11px] text-slate-300"
                    >
                      Explore platform capabilities
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-transform group-hover:translate-y-0.5">
                        ↓
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT CONTAINER */}
          <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-10 lg:pb-32">
            {/* WHY CHOOSE US */}
            <section className="mt-8 animate-[fadeInUp_0.8s_ease-out]">
              <div className="rounded-[40px] border border-white/8 bg-gradient-to-b from-purple-950/15 to-black p-8 backdrop-blur-xl sm:p-12 lg:p-16">
                <div className="mx-auto max-w-4xl text-center">
                  <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Why teams choose{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      Leads Connector
                    </span>
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-slate-300 sm:text-xl">
                    Chasing leads across WhatsApp, Instagram, email and
                    spreadsheets is where revenue leaks. Leads Connector gives
                    you a single, automated system of record.
                  </p>
                  <p className="mb-12 text-xl font-semibold text-purple-300">
                    One hub for capture, nurture, booking, and close.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, idx) => (
                      <div
                        key={benefit.text}
                        className="group cursor-pointer rounded-2xl border border-white/12 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/40 animate-[fadeInUp_0.6s_ease-out]"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="mb-3 text-4xl">{benefit.icon}</div>
                        <p className="text-base font-semibold text-white transition-colors group-hover:text-purple-300">
                          {benefit.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="mt-16">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl animate-[fadeInUp_0.8s_ease-out]">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    All-in-one
                  </span>{" "}
                  customer engine
                </h2>
                <p className="text-lg text-slate-400 animate-[fadeInUp_0.8s_ease-out] animate-delay-100">
                  Everything you need to capture, nurture, and convert leads at
                  scale.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => (
                  <div
                    key={feature.title}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-xl transition-all hover:scale-105 hover:border-purple-500/40 animate-[fadeInUp_0.8s_ease-out]"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-purple-500/18 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/22 to-purple-500/22 text-3xl backdrop-blur-sm transition-all group-hover:scale-110 group-hover:rotate-6">
                        {feature.icon}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* USE CASES */}
            <section
              id="usecases"
              className="mt-16 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="rounded-[40px] border border-white/8 bg-gradient-to-br from-violet-950/22 via-purple-950/12 to-black p-8 backdrop-blur-xl sm:p-12 lg:p-16">
                <div className="mx-auto max-w-5xl">
                  <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                      Built for{" "}
                      <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                        real operators
                      </span>
                    </h2>
                    <p className="text-lg text-slate-300">
                      Clinics, salons, home services, automotive, education,
                      and e-commerce — any business that runs on leads and
                      bookings can centralize operations on Leads Connector.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {useCases.map((useCase, idx) => (
                      <div
                        key={useCase}
                        className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/12 bg-gradient-to-br from-white/6 to-transparent p-5 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/40 animate-[fadeInUp_0.6s_ease-out]"
                        style={{ animationDelay: `${idx * 80}ms` }}
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/24 to-purple-500/24 transition-transform group-hover:scale-110">
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
                        <p className="text-sm font-medium text-white transition-colors group-hover:text-purple-300">
                          {useCase}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* PLATFORM PILLARS */}
            <section className="mt-16 animate-[fadeInUp_0.8s_ease-out]">
              <div className="rounded-[40px] border border-white/8 bg-gradient-to-b from-purple-950/15 to-black p-8 backdrop-blur-xl sm:p-12 lg:p-16">
                <div className="mx-auto max-w-4xl text-center">
                  <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Simple, fast &{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      designed for growth
                    </span>
                  </h2>

                  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {platformFeatures.map((item, idx) => (
                      <div
                        key={item.text}
                        className="group cursor-pointer rounded-2xl border border-white/12 bg-gradient-to-b from-white/6 to-transparent p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/40 animate-[fadeInUp_0.6s_ease-out]"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="mb-4 text-4xl">{item.icon}</div>
                        <p className="text-sm font-medium text-white transition-colors group-hover:text-purple-300">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section
              id="testimonials"
              className="mt-16 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                  What our{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    clients say
                  </span>
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    quote:
                      "Leads Connector helped us respond faster and reduced no-shows instantly.",
                    author: "Sarah M.",
                    role: "Clinic Owner",
                    rating: 5,
                  },
                  {
                    quote:
                      "Our sales team converted 3× more leads with automated follow-ups.",
                    author: "Ahmed K.",
                    role: "Automotive Business",
                    rating: 5,
                  },
                ].map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="group rounded-3xl border border-white/12 bg-gradient-to-b from-white/6 to-transparent p-8 backdrop-blur-xl transition-all hover:scale-105 hover:border-purple-500/40 animate-[fadeInUp_0.8s_ease-out]"
                    style={{ animationDelay: `${idx * 200}ms` }}
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

                    <p className="mb-6 text-lg italic text-slate-300">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white">
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
              className="mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-purple-950/40 via-violet-950/22 to-black p-12 shadow-[0_0_80px_rgba(139,92,246,0.25)] backdrop-blur-xl transition-all hover:border-purple-500/40 sm:p-16 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="relative">
                <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-purple-600/25 blur-[100px] animate-[pulse_6s_ease-in-out_infinite]" />

                <div className="relative text-center">
                  <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Ready to turn your business into a
                    <br />
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      fully automated lead-generation machine?
                    </span>
                  </h2>

                  <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                    Consolidate your tech stack, orchestrate every touchpoint,
                    and give your team one cockpit for revenue operations.
                  </p>

                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#trial"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.7)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.9)]"
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
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
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
        <footer className="border-t border-white/6 bg-black/92 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
            <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Company Info */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.7)]">
                    LC
                  </div>
                  <span className="text-base font-bold tracking-tight">
                    LEADS CONNECTOR
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  The all-in-one CRM and marketing automation platform for
                  businesses in Saudi Arabia and the GCC.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Product
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      href="#features"
                      className="transition-colors hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#usecases"
                      className="transition-colors hover:text-white"
                    >
                      Use Cases
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Resources
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  Contact
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#demo"
                      className="transition-colors hover:text-white"
                    >
                      Book a Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      Sales: +966 XX XXX XXXX
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-white">
                      info@leadsconnector.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Leads Connector. All rights
                reserved.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#"
                  className="transition-colors hover:text-slate-200 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-slate-200 hover:underline"
                >
                  Terms of Service
                </a>
                <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:inline-block" />
                <span className="text-slate-500">
                  🇸🇦 Made for Saudi Arabia & GCC
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }

        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes gradientGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -20px, 0) scale(1.05);
          }
        }

        @keyframes beamSlide {
          0% {
            transform: translate3d(0, -40%, 0) rotate(18deg);
          }
          100% {
            transform: translate3d(0, 40%, 0) rotate(18deg);
          }
        }

        .animate-delay-100 {
          animation-delay: 100ms;
        }

        .animate-delay-200 {
          animation-delay: 200ms;
        }

        .animate-delay-300 {
          animation-delay: 300ms;
        }

        .animate-delay-400 {
          animation-delay: 400ms;
        }

        .animate-delay-500 {
          animation-delay: 500ms;
        }

        .animate-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Main animated orb */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(at_top,_rgba(139,92,246,0.65),rgba(168,85,247,0.45),rgba(192,132,252,0.55),rgba(139,92,246,0.65))] opacity-55 blur-[120px] animate-[spin_30s_linear_infinite]" />

      {/* Floating orbs */}
      <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div
        className="absolute -right-48 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-[100px] animate-[pulse_10s_ease-in-out_infinite]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-600/18 blur-[100px] animate-[pulse_12s_ease-in-out_infinite]"
        style={{ animationDelay: "4s" }}
      />

      {/* Particles */}
      <div className="absolute left-1/4 top-1/2 h-32 w-32 rounded-full bg-purple-500/10 blur-[60px] animate-[float_15s_ease-in-out_infinite]" />
      <div
        className="absolute right-1/4 top-2/3 h-40 w-40 rounded-full bg-violet-500/10 blur-[70px] animate-[float_18s_ease-in-out_infinite]"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />

      {/* Radial gradients */}
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent_70%)]" />
      <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.06),transparent_70%)]" />

      {/* Beams */}
      <div
        className="absolute left-0 top-0 h-full w-1 rotate-[15deg] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent blur-sm"
        style={{ left: "20%" }}
      />
      <div
        className="absolute left-0 top-0 h-full w-1 rotate-[25deg] bg-gradient-to-b from-transparent via-violet-500/10 to-transparent blur-sm"
        style={{ left: "50%" }}
      />
      <div
        className="absolute left-0 top-0 h-full w-1 rotate-[35deg] bg-gradient-to-b from-transparent via-fuchsia-500/10 to-transparent blur-sm"
        style={{ left: "80%" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />

      {/* Scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-[scan_8s_ease-in-out_infinite]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
}
