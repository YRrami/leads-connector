 
"use client";

import { useState, useEffect } from "react";

const navItems = [
  { key: "home", label: "Home", href: "#hero" },
  { key: "about", label: "About", href: "#about" },
  { key: "features", label: "Features", href: "#features" },
  { key: "usecases", label: "Use Cases", href: "#usecases" },
  { key: "pricing", label: "Pricing", href: "#pricing" },
  { key: "testimonials", label: "Testimonials", href: "#testimonials" },
  { key: "contact", label: "Contact", href: "#contact" },
];

const navLabelsAr: Record<string, string> = {
  home: "الرئيسية",
  about: "عن المنصة",
  features: "الميزات",
  usecases: "الاستخدامات",
  pricing: "الأسعار",
  testimonials: "آراء العملاء",
  contact: "تواصل معنا",
};

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
  {
    key: "response-time",
    value: "-63%",
    labelEn: "Response time",
    labelAr: "زمن الاستجابة",
    badgeEn: "After automation",
    badgeAr: "بعد الأتمتة",
  },
  {
    key: "lead-to-sale",
    value: "+38%",
    labelEn: "Lead-to-sale",
    labelAr: "تحويل العملاء المحتملين",
    badgeEn: "Average uplift",
    badgeAr: "متوسط الزيادة",
  },
  {
    key: "no-shows",
    value: "-42%",
    labelEn: "No-shows",
    labelAr: "نسبة عدم الحضور",
    badgeEn: "With smart reminders",
    badgeAr: "مع التذكيرات الذكية",
  },
];

const pricingPlans = [
  {
    name: "Launch",
    badge: "Best for small teams",
    monthly: 399,
    yearly: 3990,
    highlight: "Centralize leads and ship your first automations.",
    seats: "Up to 3 users",
    included: [
      "Unified inbox (all channels)",
      "Essential pipelines & automations",
      "Standard email support",
    ],
  },
  {
    name: "Scale",
    badge: "Most popular",
    monthly: 899,
    yearly: 8990,
    highlight: "For growing teams that need deeper automation & reporting.",
    seats: "Up to 10 users",
    included: [
      "Advanced automations & routing",
      "Multiple pipelines & brands",
      "Priority success manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    badge: "Multi-location",
    monthly: 1999,
    yearly: 19990,
    highlight: "For multi-brand groups with complex operations.",
    seats: "Unlimited workspaces",
    included: [
      "Custom onboarding & migration",
      "Single sign-on & audit logs",
      "Dedicated account team",
    ],
  },
];

/**
 * ROI CALCULATOR SECTION
 * - Dual input mode (sliders/manual)
 * - Currency selector (USD / SAR / AED)
 */

function RoiCalculatorSection({ isAr }: { isAr: boolean }) {
  const [inputMode, setInputMode] = useState<"slider" | "input">("slider");
  const [currency, setCurrency] = useState<"USD" | "SAR" | "AED">("USD");

  const [humanAgents, setHumanAgents] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(20);
  const [taxesBenefits, setTaxesBenefits] = useState<number>(25);
  const [humanUtilization, setHumanUtilization] = useState<number>(55);

  const [aiHourlyRate, setAiHourlyRate] = useState<number>(8);
  const [aiUtilization, setAiUtilization] = useState<number>(95);

  const fullHoursPerMonth = 160;

  // Helpers
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);

  const shortFormatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  });

  const currencyLabel: Record<"USD" | "SAR" | "AED", string> = {
    USD: "USD $",
    SAR: "SAR ﷼",
    AED: "AED د.إ",
  };

  // Core math
  const humanLoadedRate = hourlyRate * (1 + taxesBenefits / 100);
  const humanScheduledHours = humanAgents * fullHoursPerMonth;
  const humanTalkHours =
    humanScheduledHours * (humanUtilization > 0 ? humanUtilization / 100 : 0);
  const humanMonthlyCost = humanScheduledHours * humanLoadedRate;

  const aiScheduledHours =
    humanTalkHours / (aiUtilization > 0 ? aiUtilization / 100 : 1);
  const aiMonthlyCost = aiScheduledHours * aiHourlyRate;

  const aiAgentsNeeded =
    aiScheduledHours > 0 ? aiScheduledHours / fullHoursPerMonth : 0;

  const monthlySavings = humanMonthlyCost - aiMonthlyCost;
  const safeMonthlySavings = Math.max(monthlySavings, 0);
  const yearlySavings = safeMonthlySavings * 12;
  const fiveYearSavings = safeMonthlySavings * 60;

  const maxMonthlyCost = Math.max(humanMonthlyCost, aiMonthlyCost, 1);
  const humanCostWidth = (humanMonthlyCost / maxMonthlyCost) * 100;
  const aiCostWidth = (aiMonthlyCost / maxMonthlyCost) * 100;

  return (
    <section
      id="roi-calculator"
      className="relative border-b border-white/5 bg-slate-950"
    >
      {/* Softer background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),transparent_65%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.22),transparent_55%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:90px_90px] opacity-25" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-14 sm:px-6 lg:px-10 lg:pb-20 lg:pt-18">
        {/* Header + controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div
            className={
              isAr ? "space-y-4 max-w-2xl text-right" : "space-y-4 max-w-2xl"
            }
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isAr
                ? "لمحة سريعة عن العائد · الأتمتة مقابل الوكلاء"
                : "ROI Snapshot · Automation vs. Agents"}
            </span>
            <h2 className="text-balance text-3xl font-semibold text-slate-50 sm:text-4xl lg:text-[2.6rem] lg:leading-snug">
              {isAr ? "شاهد كيف تؤثر " : "See how "}
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                {isAr
                  ? "أتمتة Leads Connector"
                  : "Leads Connector automation"}
              </span>{" "}
              {isAr ? "على تكلفة فريقك." : "impacts your team cost."}
            </h2>
            <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
              {isAr
                ? "عدِّل حجم فريقك الحالي وتكلفة الساعة. الحاسبة تقدّر كيف يمكن للأتمتة والذكاء الاصطناعي خفض إنفاقك الشهري بـ "
                : "Adjust your current team size and hourly cost. The calculator estimates how automation and AI could reduce your monthly spend in "}{" "}
              <span className="font-semibold text-violet-200">
                {currencyLabel[currency]}
              </span>
              {isAr ? "." : "."}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-end">
            {/* Currency selector */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {isAr ? "العملة" : "Currency"}
              </span>
              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value as "USD" | "SAR" | "AED")
                }
                className="h-11 min-w-[160px] rounded-full border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
              >
                <option value="USD">USD · $</option>
                <option value="SAR">SAR · ﷼</option>
                <option value="AED">AED · د.إ</option>
              </select>
            </div>

            {/* Input mode toggle */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {isAr ? "طريقة الإدخال" : "Input mode"}
              </span>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/80 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.7)]">
                <button
                  type="button"
                  onClick={() => setInputMode("slider")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    inputMode === "slider"
                      ? "bg-slate-50 text-slate-900 shadow-[0_6px_20px_rgba(15,23,42,0.6)]"
                      : "text-slate-300 hover:text-slate-50"
                  }`}
                >
                  {isAr ? "شرائح" : "Sliders"}
                </button>
                <button
                  type="button"
                  onClick={() => setInputMode("input")}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    inputMode === "input"
                      ? "bg-slate-50 text-slate-900 shadow-[0_6px_20px_rgba(15,23,42,0.6)]"
                      : "text-slate-300 hover:text-slate-50"
                  }`}
                >
                  {isAr ? "إدخال يدوي" : "Manual entry"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-7 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
          {/* Input card */}
          <div className="rounded-3xl border border-white/12 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-7 lg:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {isAr ? "فريقك البشري الحالي" : "Your current human team"}
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Agents */}
              <div className="space-y-2.5 text-sm text-slate-200">
                <label className="flex items-center justify-between">
                  <span className="text-[15px] text-slate-100">
                    {isAr ? "عدد الوكلاء" : "Number of agents"}
                  </span>
                  <span className="text-xs text-slate-400">
                    {humanAgents}{" "}
                    {isAr ? "وكيل" : "agents"}
                  </span>
                </label>
                {inputMode === "slider" ? (
                  <input
                    type="range"
                    min={3}
                    max={200}
                    value={humanAgents}
                    onChange={(e) =>
                      setHumanAgents(Number(e.target.value || 0))
                    }
                    className="w-full accent-violet-400"
                  />
                ) : (
                  <input
                    type="number"
                    min={1}
                    max={500}
                    value={humanAgents}
                    onChange={(e) =>
                      setHumanAgents(Math.max(1, Number(e.target.value || 0)))
                    }
                    className="h-11 w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                    placeholder="12"
                  />
                )}
                <p className="text-xs leading-relaxed text-slate-400">
                  {isAr
                    ? "الوكلاء المتخصصون في واتساب، المكالمات، والطلبات الواردة."
                    : "Frontline agents handling WhatsApp, calls and inbound leads."}
                </p>
              </div>

              {/* Hourly rate */}
              <div className="space-y-2.5 text-sm text-slate-200">
                <label className="flex items-center justify-between">
                  <span className="text-[15px] text-slate-100">
                    {isAr ? "الأجر الأساسي للساعة" : "Base hourly rate"}
                  </span>
                  <span className="text-xs text-slate-400">
                    {formatCurrency(hourlyRate)}{" "}
                    {isAr ? "/ ساعة" : "/ hr"}
                  </span>
                </label>
                {inputMode === "slider" ? (
                  <input
                    type="range"
                    min={5}
                    max={200}
                    step={1}
                    value={hourlyRate}
                    onChange={(e) =>
                      setHourlyRate(Number(e.target.value || 0))
                    }
                    className="w-full accent-violet-400"
                  />
                ) : (
                  <input
                    type="number"
                    min={1}
                    max={500}
                    value={hourlyRate}
                    onChange={(e) =>
                      setHourlyRate(Math.max(1, Number(e.target.value || 0)))
                    }
                    className="h-11 w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                    placeholder="20"
                  />
                )}
                <p className="text-xs leading-relaxed text-slate-400">
                  {isAr
                    ? "قبل الضرائب والمزايا والعمولات، بالـ "
                    : "Before taxes, benefits and commissions, in "}
                  {currencyLabel[currency]}.
                </p>
              </div>

              {/* Taxes & benefits */}
              <div className="space-y-2.5 text-sm text-slate-200">
                <label className="flex items-center justify-between">
                  <span className="text-[15px] text-slate-100">
                    {isAr
                      ? "الضرائب، المزايا والعمولة"
                      : "Taxes, benefits & commission"}
                  </span>
                  <span className="text-xs text-slate-400">
                    {taxesBenefits}%
                  </span>
                </label>
                {inputMode === "slider" ? (
                  <input
                    type="range"
                    min={0}
                    max={60}
                    step={1}
                    value={taxesBenefits}
                    onChange={(e) =>
                      setTaxesBenefits(Number(e.target.value || 0))
                    }
                    className="w-full accent-violet-400"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={taxesBenefits}
                      onChange={(e) =>
                        setTaxesBenefits(
                          Math.max(0, Number(e.target.value || 0))
                        )
                      }
                      className="h-11 w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                      placeholder="25"
                    />
                    <span className="inline-flex h-11 items-center rounded-lg border border-white/10 bg-slate-900/80 px-2 text-xs text-slate-400">
                      %
                    </span>
                  </div>
                )}
                <p className="text-xs leading-relaxed text-slate-400">
                  {isAr
                    ? "كل التكاليف الإضافية على الرواتب فوق الأجر الأساسي."
                    : "All additional payroll overhead on top of base hourly."}
                </p>
              </div>

              {/* Human utilization */}
              <div className="space-y-2.5 text-sm text-slate-200">
                <label className="flex items-center justify-between">
                  <span className="text-[15px] text-slate-100">
                    {isAr
                      ? "نسبة وقت الإنتاجية / المحادثة"
                      : "Talk / productive utilization"}
                  </span>
                  <span className="text-xs text-slate-400">
                    {humanUtilization}%
                  </span>
                </label>
                {inputMode === "slider" ? (
                  <input
                    type="range"
                    min={30}
                    max={85}
                    step={1}
                    value={humanUtilization}
                    onChange={(e) =>
                      setHumanUtilization(Number(e.target.value || 0))
                    }
                    className="w-full accent-violet-400"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={humanUtilization}
                      onChange={(e) =>
                        setHumanUtilization(
                          Math.max(1, Number(e.target.value || 0))
                        )
                      }
                      className="h-11 w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                      placeholder="55"
                    />
                    <span className="inline-flex h-11 items-center rounded-lg border border-white/10 bg-slate-900/80 px-2 text-xs text-slate-400">
                      %
                    </span>
                  </div>
                )}
                <p className="text-xs leading-relaxed text-slate-400">
                  {isAr
                    ? "الوقت النشط على الدردشات / المكالمات مقابل الاستراحات، الاجتماعات، والوقت الخامل."
                    : "Time actively on chats/calls vs. breaks, meetings and idle."}
                </p>
              </div>
            </div>

            <hr className="my-7 border-white/10" />

            {/* AI / Automation */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {isAr
                ? "مع الأتمتة وتدفقات الذكاء الاصطناعي"
                : "With automation & AI workflows"}
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* AI hourly */}
              <div className="space-y-2.5 text-sm text-slate-200">
                <label className="flex items-center justify-between">
                  <span className="text-[15px] text-slate-100">
                    {isAr
                      ? "التكلفة المكافئة للساعة للـ AI"
                      : "AI assistant hourly equivalent"}
                  </span>
                  <span className="text-xs text-slate-400">
                    {formatCurrency(aiHourlyRate)}{" "}
                    {isAr ? "/ ساعة" : "/ hr"}
                  </span>
                </label>
                {inputMode === "slider" ? (
                  <input
                    type="range"
                    min={1}
                    max={100}
                    step={1}
                    value={aiHourlyRate}
                    onChange={(e) =>
                      setAiHourlyRate(Number(e.target.value || 0))
                    }
                    className="w-full accent-emerald-400"
                  />
                ) : (
                  <input
                    type="number"
                    min={1}
                    max={200}
                    value={aiHourlyRate}
                    onChange={(e) =>
                      setAiHourlyRate(Math.max(1, Number(e.target.value || 0)))
                    }
                    className="h-11 w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                    placeholder="8"
                  />
                )}
                <p className="text-xs leading-relaxed text-slate-400">
                  {isAr
                    ? "التكلفة الفعلية للساعة للأتمتة التي تغطي نفس حجم العمل."
                    : "Effective hourly rate for automation covering the same volume."}
                </p>
              </div>

              {/* AI utilization */}
              <div className="space-y-2.5 text-sm text-slate-200">
                <label className="flex items-center justify-between">
                  <span className="text-[15px] text-slate-100">
                    {isAr ? "نسبة استغلال الـ AI" : "AI utilization"}
                  </span>
                  <span className="text-xs text-slate-400">
                    {aiUtilization}%
                  </span>
                </label>
                {inputMode === "slider" ? (
                  <input
                    type="range"
                    min={70}
                    max={99}
                    step={1}
                    value={aiUtilization}
                    onChange={(e) =>
                      setAiUtilization(Number(e.target.value || 0))
                    }
                    className="w-full accent-emerald-400"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={aiUtilization}
                      onChange={(e) =>
                        setAiUtilization(
                          Math.max(1, Number(e.target.value || 0))
                        )
                      }
                      className="h-11 w-full rounded-lg border border-white/10 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40"
                      placeholder="95"
                    />
                    <span className="inline-flex h-11 items-center rounded-lg border border-white/10 bg-slate-900/80 px-2 text-xs text-slate-400">
                      %
                    </span>
                  </div>
                )}
                <p className="text-xs leading-relaxed text-slate-400">
                  {isAr
                    ? "الذكاء الاصطناعي يمكن أن يبقى منتجاً لجزء أكبر بكثير من الوقت المجدوَل."
                    : "AI can stay productive for a much larger share of scheduled time."}
                </p>
              </div>
            </div>
          </div>

          {/* Output / summary card */}
          <div className="flex flex-col gap-5 rounded-3xl border border-white/12 bg-slate-950/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:p-7 lg:p-8">
            <div className="flex items-start justify-between gap-3">
              <div className={isAr ? "text-right" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {isAr ? "التوفير المتوقع" : "Projected savings"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {isAr
                    ? "بناءً على مدخلاتك، يمكن للأتمتة أن تحل محل جزء كبير من سعة فريقك."
                    : "Based on your inputs, automation can replace a large portion of your agent capacity."}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                {isAr ? "تقدير حي" : "Live estimate"}
              </span>
            </div>

            <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-slate-900 to-slate-950 px-4 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                {isAr
                  ? "إمكانات التوفير الشهري"
                  : "Monthly savings potential"}
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-emerald-200">
                  {safeMonthlySavings > 0
                    ? formatCurrency(safeMonthlySavings)
                    : formatCurrency(0)}
                </span>
                <span className="text-sm text-emerald-300/80">
                  {isAr ? "شهرياً" : "per month"}
                </span>
              </div>
              <div className="mt-4 grid gap-3 text-sm text-emerald-100 sm:grid-cols-2">
                <div className="rounded-xl bg-emerald-500/10 px-3 py-3">
                  <p className="text-xs text-emerald-200/80">
                    {isAr ? "سنوياً" : "Per year"}
                  </p>
                  <p className="mt-1 text-base font-semibold">
                    {shortFormatter.format(yearlySavings)}{" "}
                    <span className="text-xs font-normal">{currency}</span>
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-500/10 px-3 py-3">
                  <p className="text-xs text-emerald-200/80">
                    {isAr ? "خلال ٥ سنوات" : "Over 5 years"}
                  </p>
                  <p className="mt-1 text-base font-semibold">
                    {shortFormatter.format(fiveYearSavings)}{" "}
                    <span className="text-xs font-normal">{currency}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Cost comparison */}
            <div className="space-y-4 rounded-2xl border border-white/8 bg-slate-900/85 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {isAr ? "مقارنة التكاليف" : "Cost comparison"}
              </p>

              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-[15px] text-slate-100">
                    {isAr
                      ? "تكلفة الفريق البشري الحالية"
                      : "Current human team"}
                  </span>
                  <span className="font-medium">
                    {formatCurrency(humanMonthlyCost)}{" "}
                    {isAr ? "/ شهر" : "/ mo"}
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-800">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                    style={{ width: `${humanCostWidth}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[15px] text-slate-100">
                    {isAr ? "مع الأتمتة" : "With automation"}
                  </span>
                  <span className="font-medium">
                    {formatCurrency(aiMonthlyCost)}{" "}
                    {isAr ? "/ شهر" : "/ mo"}
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-800">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                    style={{ width: `${aiCostWidth}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-900/90 px-3 py-3">
                  <p className="text-xs text-slate-400">
                    {isAr ? "سعة الـ AI المكافئة" : "Equivalent AI capacity"}
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-50">
                    {aiAgentsNeeded > 0 ? aiAgentsNeeded.toFixed(1) : "0.0"}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      {isAr ? "وكيل (افتراضي)" : "agent(s)"}
                    </span>
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/90 px-3 py-3">
                  <p className="text-xs text-slate-400">
                    {isAr ? "الوكلاء البشريون المستبدلون" : "Human agents replaced"}
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-50">
                    {aiAgentsNeeded > 0
                      ? `${Math.max(
                          humanAgents - aiAgentsNeeded,
                          0
                        ).toFixed(1)} FTE`
                      : "—"}
                  </p>
                </div>
              </div>

              {safeMonthlySavings === 0 && (
                <p className="mt-3 text-xs leading-relaxed text-amber-300/80">
                  {isAr
                    ? "مع الافتراضات الحالية، التوفير محدود. جرّب زيادة عدد الوكلاء، تكلفة الساعة أو نسبة استغلال الفريق البشري لرؤية الأثر."
                    : "With the current assumptions, savings are minimal. Try increasing your number of agents, hourly cost or human utilization to see the impact."}
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="mt-2 text-xs text-slate-500 sm:text-sm">
          {isAr
            ? "هذه الحاسبة مخصّصة للتخطيط التقريبي فقط ولا تُعد ضماناً مالياً. النتائج الفعلية قد تختلف حسب التنفيذ ومسارات العمل."
            : "This calculator is for directional planning only and doesn't constitute a financial guarantee. Actual results may vary based on implementation and workflows."}
        </p>
      </div>
    </section>
  );
}

















































export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [isAr, setIsAr] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-black text-slate-50"
      dir={isAr ? "rtl" : "ltr"}
    >
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
                  className="group relative rounded-full px-3 py-1.5 transition-all hover:bg-white/10 hover:text-white"
                >
                  {isAr ? navLabelsAr[item.key] : item.label}
                  <span className="pointer-events-none absolute inset-x-2 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 transition-all group-hover:scale-x-100 group-hover:opacity-100" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA + language */}
            <div className="hidden items-center gap-3 md:flex">
              {/* Language toggle */}
              <button
                type="button"
                onClick={() => setIsAr((v) => !v)}
                className="flex items-center gap-1 rounded-full border border-white/25 bg-black/60 px-3 py-1 text-[10px] font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/10"
              >
                <span
                  className={`inline-flex h-4 w-8 items-center rounded-full bg-white/10 p-0.5 ${
                    isAr ? "justify-end" : "justify-start"
                  }`}
                >
                  <span className="h-3 w-3 rounded-full bg-white" />
                </span>
                <span>{isAr ? "العربية" : "English"}</span>
              </button>

              <a
                href="#demo"
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/10"
              >
                {isAr ? "احجز عرضاً توضيحياً" : "Book a Demo"}
              </a>
              <a
                href="#trial"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-1.5 text-[11px] font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,1)]"
              >
                <span className="relative z-10">
                  {isAr ? "ابدأ النسخة التجريبية" : "Start Free Trial"}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
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
              {/* Language toggle row */}
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {isAr ? "اللغة" : "Language"}
                </span>
                <button
                  type="button"
                  onClick={() => setIsAr((v) => !v)}
                  className="flex items-center gap-1 rounded-full border border-white/25 bg-black/60 px-3 py-1 text-[11px] font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/10"
                >
                  <span
                    className={`inline-flex h-4 w-8 items-center rounded-full bg-white/10 p-0.5 ${
                      isAr ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span className="h-3 w-3 rounded-full bg-white" />
                  </span>
                  <span>{isAr ? "العربية" : "English"}</span>
                </button>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-1 py-2 text-slate-200 transition-all hover:translate-x-2 hover:bg-white/5 hover:text-white"
                >
                  {isAr ? navLabelsAr[item.key] : item.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href="#trial"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-[0_0_28px_rgba(139,92,246,0.7)] transition-all hover:scale-105"
                >
                  {isAr ? "ابدأ النسخة التجريبية" : "Start Free Trial"}
                </a>
                <a
                  href="#demo"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-white/15 bg-black/60 px-5 py-2 text-center text-sm font-medium text-slate-100 transition-all hover:scale-105 hover:bg-white/5"
                >
                  {isAr ? "احجز عرضاً توضيحياً" : "Book a Demo"}
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
            <div className="relative flex min-h-screen flex-col justify-center">
              {/* Enhanced Background */}
              <div className="pointer-events-none absolute inset-0">
                {/* Primary gradient orbs */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.7),transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.6),transparent_55%)] opacity-70 will-change-transform motion-safe:animate-[gradientGlow_18s_ease-in-out_infinite]" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 [mask-image:radial-gradient(ellipse_130%_80%_at_50%_5%,black,transparent)]" />

                {/* Animated light beams */}
                <div className="absolute -left-32 top-[-10%] h-full w-64 rotate-[18deg] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent blur-3xl will-change-transform motion-safe:animate-[beamSlide_14s_linear_infinite]" />
                <div className="absolute -right-40 top-[-20%] h-full w-64 rotate-[-18deg] bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent blur-3xl will-change-transform motion-safe:animate-[beamSlide_18s_linear_infinite]" />

                {/* Floating orbs */}
                <div className="absolute left-[8%] top-[20%] h-48 w-48 rounded-full bg-violet-500/50 blur-3xl will-change-transform motion-safe:animate-[floatSoft_18s_ease-in-out_infinite]" />
                <div className="absolute right-[10%] bottom-[12%] h-56 w-56 rounded-full bg-fuchsia-500/45 blur-3xl will-change-transform motion-safe:animate-[floatSoft_20s_ease-in-out_infinite]" />

                {/* Scan line */}
                <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-purple-400/80 to-transparent will-change-transform motion-safe:animate-[scanLine_9s_ease-in-out_infinite]" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] opacity-80" />
              </div>

              {/* Hero content */}
              <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 md:flex-row md:items-center md:gap-12 lg:px-10 lg:py-40">
                {/* LEFT: hero text */}
                <div
                  className={
                    isAr
                      ? "max-w-xl space-y-7 text-center md:flex-1 md:text-right"
                      : "max-w-xl space-y-7 text-center md:flex-1 md:text-left"
                  }
                >
                  {/* Section label */}
                  <div className="mb-1 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-slate-400 md:justify-start animate-[fadeIn_0.6s_ease-out]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-[9px] font-bold text-white shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                      LC
                    </span>
                    <span>
                      {isAr
                        ? "Leads Connector · نظام الإيرادات"
                        : "Leads Connector · Revenue OS"}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-[11px] font-medium text-slate-200 shadow-[0_16px_60px_rgba(15,23,42,1)] backdrop-blur-2xl sm:px-4 md:mx-0 animate-[fadeIn_0.6s_ease-out] animate-delay-100">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {isAr ? "رؤية حيّة للقُمع" : "Live pipeline visibility"}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      {isAr ? "CRM متعدد القنوات" : "Omni-channel CRM"}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1">
                      {isAr ? "مصمم لفرق الخليج" : "Built for GCC teams"}
                    </span>
                  </div>

                  {/* Heading + copy */}
                  <div className="space-y-4">
                    <h1 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.6rem] animate-[fadeInUp_0.7s_ease-out] animate-delay-200">
                      {isAr ? "أتمت عملاءك المحتملين." : "Automate Your Leads."}{" "}
                      <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                        {isAr
                          ? "انْمُ بلا حدود."
                          : "Grow Without Limits."}
                      </span>
                    </h1>
                    <p className="mx-auto max-w-lg text-base text-slate-300 sm:text-lg md:mx-0 md:text-xl leading-relaxed animate-[fadeInUp_0.7s_ease-out] animate-delay-300">
                      {isAr
                        ? "Leads Connector يجمع واتساب، ووسائل التواصل، والبريد والنماذج في مركز قيادة واحد، حتى يرد فريقك أسرع ولا يضيع أي عميل محتمل."
                        : "Leads Connector orchestrates WhatsApp, social media, email and web leads — all in one command center, so your team responds faster and never loses a deal."}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-4 animate-[fadeInUp_0.7s_ease-out] animate-delay-400">
                    <div
                      className={
                        isAr
                          ? "flex flex-wrap items-center justify-center gap-3 md:justify-end"
                          : "flex flex-wrap items-center justify-center gap-3 md:justify-start"
                      }
                    >
                      <a
                        href="#trial"
                        className="group inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,1)]"
                      >
                        {isAr
                          ? "ابدأ النسخة التجريبية"
                          : "Start Free Trial"}
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            isAr
                              ? "group-hover:-translate-x-1 scale-x-[-1]"
                              : "group-hover:translate-x-1"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                              isAr
                                ? "M11 7l-5 5m0 0l5 5m-5-5h12"
                                : "M13 7l5 5m0 0l-5 5m5-5H6"
                            }
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
                        {isAr
                          ? "شاهد جولة 3 دقائق"
                          : "Watch 3-min tour"}
                      </a>
                    </div>

                    {/* Trust row */}
                    <div
                      className={
                        isAr
                          ? "flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 sm:text-sm md:justify-end"
                          : "flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 sm:text-sm md:justify-start"
                      }
                    >
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
                        <span>
                          {isAr
                            ? "موثوق به في السعودية والإمارات وقطر"
                            : "Trusted across KSA, UAE & Qatar"}
                        </span>
                      </div>
                      <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-50">
                        ⚙️{" "}
                        {isAr
                          ? "تشغيل خلال 7 أيام · بدون كود"
                          : "Live in 7 days · No code"}
                      </span>
                    </div>

                    {/* Verticals row */}
                    <div
                      className={
                        isAr
                          ? "flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 md:justify-end"
                          : "flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 md:justify-start"
                      }
                    >
                      <span className="uppercase tracking-[0.18em] text-slate-500">
                        {isAr ? "تخدم فرق في" : "Used by teams in"}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {(isAr
                          ? [
                              "القطاع الصحي",
                              "العيادات والجمال",
                              "السيارات",
                              "التعليم",
                            ]
                          : ["Healthcare", "Beauty", "Automotive", "Education"]
                        ).map((v) => (
                          <span
                            key={v}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                          >
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Channels */}
                  <div
                    className={
                      isAr
                        ? "flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400 md:justify-end animate-[fadeInUp_0.7s_ease-out] animate-delay-500"
                        : "flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400 md:justify-start animate-[fadeInUp_0.7s_ease-out] animate-delay-500"
                    }
                  >
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:bg-white/10">
                      {isAr ? "واتساب للأعمال" : "WhatsApp Business"}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:bg-white/10">
                      {isAr ? "إنستغرام و فيسبوك" : "Instagram & Facebook"}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:bg-white/10">
                      {isAr ? "تيك توك، البريد و SMS" : "TikTok, Email & SMS"}
                    </span>
                  </div>
                </div>

                {/* RIGHT: analytics card */}
                <div className="relative mt-8 flex w-full justify-center sm:mt-10 md:mt-0 md:block md:flex-1 animate-[fadeInUp_0.7s_ease-out] animate-delay-400">
                  <div className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                    {/* Glow ring */}
                    <div className="pointer-events-none absolute -inset-12 rounded-[30px] bg-[conic-gradient(from_130deg_at_50%_50%,rgba(129,140,248,0.4),rgba(236,72,153,0.3),rgba(34,197,235,0.3),rgba(129,140,248,0.4))] opacity-70 blur-3xl will-change-transform motion-safe:animate-[spin_20s_linear_infinite]" />

                    {/* Card */}
                    <div className="relative rounded-[24px] border border-white/15 bg-black/70 p-[1px] shadow-[0_28px_70px_rgba(15,23,42,1)] backdrop-blur-2xl transition-transform duration-500 ease-out transform-gpu group-hover:-translate-y-2 group-hover:shadow-[0_36px_90px_rgba(15,23,42,1)] hover:border-white/25">
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
                                {isAr ? "لوحة تحكم حيّة" : "Live Command Center"}
                              </p>
                              <p className="text-sm font-bold text-slate-50 sm:text-base">
                                {isAr
                                  ? "صحة القُمع اليوم"
                                  : "Today's funnel health"}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] text-slate-200 sm:text-[11px]">
                              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span>{isAr ? "فوري" : "Realtime"}</span>
                            </div>
                          </div>

                          {/* Chart */}
                          <div className="mb-4 rounded-2xl border border-white/10 bg-black/70 p-4 transition-all hover:border-white/20 hover:bg-black/80 hover:shadow-[0_10px_40px_rgba(15,23,42,0.8)]">
                            <div className="mb-2 flex items-center justify-between text-[10px] text-slate-300 sm:text-xs">
                              <span>
                                {isAr
                                  ? "حجم العملاء (آخر ٧ أيام)"
                                  : "Lead volume (last 7 days)"}
                              </span>
                              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-300 sm:text-[10px]">
                                {isAr
                                  ? "+23% عن الأسبوع الماضي"
                                  : "+23% vs last week"}
                              </span>
                            </div>
                            <div className="flex h-28 items-end gap-1.5 sm:h-32">
                              {[40, 52, 47, 65, 70, 88, 76].map((h, idx) => (
                                <div
                                  key={idx}
                                  className="flex-1 cursor-pointer rounded-t-full bg-gradient-to-t from-violet-600/30 via-violet-500/75 to-fuchsia-400/90 transition-transform duration-300 hover:scale-y-110 hover:from-violet-600/40 hover:via-violet-500/85 hover:to-fuchsia-400"
                                  style={{ height: `${h}%` }}
                                />
                              ))}
                            </div>
                            <div className="mt-2 flex justify-between text-[9px] text-slate-500 sm:text-[10px]">
                              {(isAr
                                ? ["أحد", "اثن", "ثلا", "أرب", "خمس", "جمعة", "سبت"]
                                : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                              ).map((d) => (
                                <span key={d}>{d}</span>
                              ))}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                            {heroStats.map((stat) => (
                              <div
                                key={stat.key}
                                className="group/metric cursor-pointer rounded-2xl border border-white/10 bg-white/5 px-2 py-2 text-left transition-all hover:border-white/20 hover:bg-white/10 sm:px-3 sm:py-3"
                              >
                                <p className="text-[9px] uppercase tracking-wide text-slate-400 sm:text-[10px]">
                                  {isAr ? stat.labelAr : stat.labelEn}
                                </p>
                                <p className="mt-1 text-base font-bold text-slate-50 transition-colors group-hover/metric:text-purple-300 sm:text-lg">
                                  {stat.value}
                                </p>
                                <p className="mt-1 text-[9px] text-emerald-300 sm:text-[10px]">
                                  {isAr ? stat.badgeAr : stat.badgeEn}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Pipeline */}
                          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 p-3 text-[10px] transition-all hover:border-white/20 hover:shadow-[0_12px_45px_rgba(15,23,42,0.9)] sm:text-[11px]">
                            <div className="mb-2 flex items-center justify-between">
                              <span className="font-semibold text-slate-200">
                                {isAr
                                  ? "قمع الصفقات النشط"
                                  : "Active deals pipeline"}
                              </span>
                              <span className="rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-slate-300">
                                {isAr
                                  ? "٣ مسارات مؤتمتة"
                                  : "3 lanes automated"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 rounded-full bg-white/5 p-1 transition-all hover:bg-white/10">
                                <div className="h-1.5 w-3/5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
                                <p className="mt-1 text-[9px] text-slate-300">
                                  {isAr ? "عملاء جدد" : "New leads"}
                                </p>
                              </div>
                              <div className="flex-1 rounded-full bg-white/5 p-1 transition-all hover:bg-white/10">
                                <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                                <p className="mt-1 text-[9px] text-slate-300">
                                  {isAr ? "متابعة" : "Follow-up"}
                                </p>
                              </div>
                              <div className="flex-1 rounded-full bg-white/5 p-1 transition-all hover:bg-white/10">
                                <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                                <p className="mt-1 text-[9px] text-slate-300">
                                  {isAr ? "إغلاق" : "Closing"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating chips */}
                    <div className="pointer-events-none hidden lg:block">
                      <div className="absolute -left-6 -top-4 flex items-center gap-2 rounded-full border border-violet-500/50 bg-black/90 px-3 py-2 text-[11px] text-slate-100 shadow-[0_8px_32px_rgba(139,92,246,0.4)] backdrop-blur-xl motion-safe:animate-[floatSoft_14s_ease-in-out_infinite]">
                        <span className="text-sm">🤖</span>
                        <span className="font-semibold">
                          {isAr
                            ? "متابعات واتساب ذكية"
                            : "Smart WhatsApp follow-up"}
                        </span>
                      </div>
                      <div className="absolute -right-5 top-16 flex items-center gap-2 rounded-full border border-emerald-500/50 bg-black/90 px-3 py-2 text-[11px] text-slate-100 shadow-[0_8px_32px_rgba(52,211,153,0.4)] backdrop-blur-xl motion-safe:animate-[floatSoft_16s_ease-in-out_infinite]">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-semibold">
                          {isAr ? "عدد الوكلاء المتصلين: 6" : "Agents online: 6"}
                        </span>
                      </div>
                      <div className="absolute -right-8 bottom-2 flex items-center gap-2 rounded-full border border-fuchsia-500/50 bg-black/90 px-3 py-2 text-[11px] text-slate-100 shadow-[0_8px_32px_rgba(236,72,153,0.4)] backdrop-blur-xl motion-safe:animate-[floatSoft_17s_ease-in-out_infinite]">
                        <span className="text-sm">📅</span>
                        <span className="font-semibold">
                          {isAr
                            ? "23 حجزاً جديداً اليوم"
                            : "23 new bookings today"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric strip */}
              <div className="pointer-events-none relative z-10 mx-auto max-w-5xl px-4 pb-12 sm:px-5 md:px-6 lg:px-10">
                <div className="pointer-events-auto flex flex-col gap-4 rounded-3xl border border-white/20 bg-gradient-to-r from-white via-slate-50 to-white px-6 py-5 text-xs text-slate-900 shadow-[0_20px_70px_rgba(15,23,42,0.4)] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5 sm:text-sm transition-all hover:shadow-[0_25px_80px_rgba(15,23,42,0.5)]">
                  <div className="flex flex-1 flex-wrap items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-lg font-bold shadow-[0_4px_20px_rgba(52,211,153,0.5)]">
                        ⚡
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold text-slate-900 sm:text-base">
                          {isAr
                            ? "3.1x زيادة في التحويلات"
                            : "3.1x more conversions"}
                        </span>
                        <span className="text-xs text-slate-600 sm:text-sm">
                          {isAr
                            ? "عندما تعمل كل القنوات والمتابعات داخل نظام واحد."
                            : "when all leads, channels and follow-ups run inside one system."}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-700 sm:text-xs">
                      {heroStats.map((s) => (
                        <div
                          key={s.key}
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
                        >
                          <span className="text-[11px] font-semibold text-slate-900">
                            {s.value}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {isAr ? s.labelAr : s.labelEn}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#features"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(15,23,42,0.3)] transition-all hover:scale-105 hover:bg-slate-800 sm:text-sm"
                  >
                    {isAr ? "استكشف المنصة" : "Explore platform"}
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* ROI CALCULATOR – just below hero */}
          <RoiCalculatorSection isAr={isAr} />

          {/* MAIN CONTENT */}
          <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-5 md:px-6 lg:px-10 lg:pb-24">
            {/* ABOUT / WHY CHOOSE US */}
            <section id="about" className="animate-[fadeInUp_0.8s_ease-out]">
              <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-b from-purple-950/30 via-slate-950/80 to-black p-8 backdrop-blur-xl transition-all hover:border-white/15 sm:p-10 lg:rounded-[40px] lg:p-14">
                <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-violet-500/25 via-purple-500/10 to-transparent opacity-60" />

                <div className="relative">
                  <div
                    className={
                      isAr
                        ? "text-center md:text-right"
                        : "text-center md:text-left"
                    }
                  >
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {isAr ? "عن Leads Connector" : "About Leads Connector"}
                    </span>
                    <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                      {isAr ? "مركز قيادة واحد لـ" : "One command center for "}{" "}
                      <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                        {isAr ? "فرق الإيرادات" : "revenue teams"}
                      </span>
                    </h2>
                    <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg lg:text-xl md:mx-0">
                      {isAr
                        ? "عملاؤك موجودون على واتساب، إنستغرام، تيك توك، البريد الإلكتروني ونماذج الموقع. نحن نجمع كل المحادثات، القنوات، والعمليات الآلية في مساحة عمل واحدة مصمَّمة للمشغلين في السعودية والخليج."
                        : "Your customers live across WhatsApp, Instagram, TikTok, email and web forms. We bring every conversation, pipeline, and automation into a single workspace designed for operators in Saudi Arabia and the GCC."}
                    </p>
                    <p className="mx-auto mb-8 max-w-3xl text-lg font-bold text-purple-300 sm:text-xl lg:text-2xl md:mx-0">
                      {isAr
                        ? "من أول عميل محتمل حتى إغلاق الصفقة — كل شيء في مكان واحد."
                        : "From first lead to closed deal — everything in one place."}
                    </p>
                  </div>

                  {/* Mini metrics strip */}
                  <div className="mb-10 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {isAr ? "القنوات" : "Channels"}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        5+ {isAr ? "قنوات" : "connected"}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {isAr
                          ? "واتساب، إنستغرام، فيسبوك، تيك توك وبريد إلكتروني"
                          : "WhatsApp, IG, FB, TikTok & Email"}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {isAr ? "زمن الاستجابة" : "Response time"}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-emerald-300">
                        -63% {isAr ? "متوسط" : "avg"}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {isAr
                          ? "توجيه ذكي ورسائل تلقائية"
                          : "Smart routing & auto-replies"}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {isAr ? "المتابعة" : "Follow-up"}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-purple-300">
                        {isAr ? "تغطية 100%" : "100% covered"}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {isAr
                          ? "ولا عميل محتمل يضيع"
                          : "No lead left behind, ever"}
                      </p>
                    </div>
                  </div>

                  {/* Benefits grid */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {benefits.map((benefit, idx) => (
                      <div
                        key={benefit.text}
                        className="group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_18px_60px_rgba(139,92,246,0.35)] animate-[fadeInUp_0.6s_ease-out]"
                        style={{ animationDelay: `${idx * 80}ms` }}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="text-4xl transition-transform group-hover:scale-110">
                            {benefit.icon}
                          </div>
                          <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-300">
                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                        </div>
                        <p className="text-base font-bold text-white transition-colors group-hover:text-purple-300 sm:text-lg">
                          {isAr
                            ? [
                                "ابق منظماً",
                                "رد أسرع",
                                "تابع العملاء تلقائياً",
                                "ارفع نسب التحويل",
                                "وفّر ساعات أسبوعياً",
                                "وحّد كل القنوات في لوحة واحدة",
                              ][idx]
                            : benefit.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="mt-20">
              <div
                className={
                  isAr
                    ? "mb-12 text-center md:text-right"
                    : "mb-12 text-center"
                }
              >
                <span className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {isAr ? "الميزات · المنصة" : "Features · Platform"}
                </span>
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl animate-[fadeInUp_0.8s_ease-out]">
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {isAr ? "محرك واحد شامل" : "All-in-one"}
                  </span>{" "}
                  {isAr ? "لإدارة العملاء" : "customer engine"}
                </h2>
                <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg animate-[fadeInUp_0.8s_ease-out] animate-delay-100">
                  {isAr
                    ? "كل ما تحتاجه لالتقاط العملاء المحتملين، تنميتِهم، وتحويلهم على نطاق واسع — بدون لصق ٧ أدوات مختلفة معاً."
                    : "Everything you need to capture, nurture, and convert leads at scale — without duct taping 7 tools together."}
                </p>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),transparent_60%)] opacity-50" />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {features.map((feature, idx) => (
                    <div
                      key={feature.title}
                      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_18px_60px_rgba(139,92,246,0.4)] animate-[fadeInUp_0.8s_ease-out]"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-purple-500/18 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative">
                        <div className="mb-5 flex items-center justify-between">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-purple-500/25 text-3xl backdrop-blur-sm transition-all group-hover:scale-110 group-hover:rotate-6">
                            {feature.icon}
                          </div>
                          <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-300">
                            {isAr ? "وحدة" : "Module"} {idx + 1}
                          </span>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
                          {isAr
                            ? [
                                "صندوق وارد موحد",
                                "أتمتة ذكية",
                                "إدارة علاقات العملاء والجهات",
                                "مراحل المبيعات والصفقات",
                                "مسارات وصفحات هبوط",
                                "تحليلات وتقارير",
                              ][idx]
                            : feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                          {isAr
                            ? [
                                "أدر رسائل واتساب، تيك توك، البريد، فيسبوك وإنستغرام من صندوق واحد نظيف.",
                                "أنشئ مسارات عمل تتابع العملاء، ترسل التذكيرات، وتحدد المواعيد تلقائياً.",
                                "خزّن، صنّف، وتابع كل عميل محتمل وعميل بنظرة حيّة.",
                                "لوحة سحب وإفلات لمتابعة كل مرحلة في رحلة العميل.",
                                "أنشئ صفحات هبوط، نماذج، صفحات حجز ومسارات عمل بدون برمجة.",
                                "اعرف من أين تأتي عملاؤك، وما الذي يحوّل، وما يحتاج تحسيناً.",
                              ][idx]
                            : feature.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>
                            {isAr
                              ? "متوفر في كل الباقات"
                              : "Included in every plan"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* USE CASES */}
            <section
              id="usecases"
              className="mt-20 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-950/25 via-purple-950/15 to-black p-8 backdrop-blur-xl transition-all hover:border-white/15 sm:p-10 lg:rounded-[40px] lg:p-14">
                <div
                  className={
                    isAr
                      ? "mb-10 text-center md:text-right"
                      : "mb-10 text-center md:text-left"
                  }
                >
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {isAr ? "سيناريوهات جاهزة" : "Playbooks"}
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {isAr ? "مصمم لـ" : "Built for "}{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {isAr ? "مشغّلين حقيقيين" : "real operators"}
                    </span>
                  </h2>
                  <p className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg md:mx-0">
                    {isAr
                      ? "العيادات، الصالونات، الخدمات المنزلية، السيارات، التعليم والمتاجر الإلكترونية — أي نشاط يعتمد على العملاء المحتملين والحجوزات يمكنه توحيد العمليات على Leads Connector."
                      : "Clinics, salons, home services, automotive, education, and e-commerce — any business that runs on leads and bookings can centralize operations on Leads Connector."}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-200">
                    {(isAr
                      ? [
                          "العيادات والمراكز الطبية",
                          "الصالونات والجمال",
                          "الخدمات المنزلية",
                          "السيارات",
                          "التعليم",
                          "التجارة الإلكترونية",
                        ]
                      : [
                          "Clinics & medical",
                          "Salons & beauty",
                          "Home services",
                          "Automotive",
                          "Education",
                          "E-commerce",
                        ]
                    ).map((segment) => (
                      <span
                        key={segment}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      >
                        {segment}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {useCases.map((useCase, idx) => (
                    <div
                      key={useCase}
                      className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_18px_60px_rgba(139,92,246,0.35)] animate-[fadeInUp_0.6s_ease-out]"
                      style={{ animationDelay: `${idx * 70}ms` }}
                    >
                      <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 transition-transform group-hover:scale-110">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/40 to-fuchsia-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
                        <svg
                          className="relative h-5 w-5 text-purple-100"
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
                        {isAr
                          ? [
                              "متابعات واتساب مؤتمتة",
                              "جدولة المواعيد",
                              "تذكيرات بالخدمات",
                              "مسارات حجز أونلاين",
                              "تنمية العملاء المحتملين",
                              "إعادة تنشيط العملاء",
                            ][idx]
                          : useCase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PLATFORM FEATURES / ROLLOUT */}
            <section className="mt-20 animate-[fadeInUp_0.8s_ease-out]">
              <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-b from-purple-950/25 via-slate-950/80 to-black p-8 backdrop-blur-xl transition-all hover:border-white/15 sm:p-10 lg:rounded-[40px] lg:p-14">
                <div
                  className={
                    isAr
                      ? "mb-8 text-center md:text-right"
                      : "mb-8 text-center md:text-left"
                  }
                >
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {isAr ? "التطبيق والتشغيل" : "Adoption & rollout"}
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {isAr ? "بسيط، سريع و" : "Simple, fast & "}{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {isAr ? "مصمم للنمو" : "designed for growth"}
                    </span>
                  </h2>
                  <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
                    {isAr
                      ? "فريقك يحصل على نظام بمستوى المؤسسات بدون مشروع تطبيق يستمر ٦ أشهر."
                      : "Your team gets an enterprise-grade system without a 6-month implementation project."}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                  {platformFeatures.map((item, idx) => (
                    <div
                      key={item.text}
                      className="group cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_18px_60px_rgba(139,92,246,0.35)] animate-[fadeInUp_0.6s_ease-out]"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="mb-4 text-4xl transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <p className="text-sm font-semibold text-white transition-colors group-hover:text-purple-300 sm:text-base">
                        {isAr
                          ? [
                              "بدون خبرة تقنية",
                              "يعمل على الكمبيوتر والجوال",
                              "منصة سحابية آمنة",
                              "تكاملات سلسة",
                              "قاعدة معرفة متاحة 24/7",
                              "دعم بالعربية والإنجليزية",
                            ][idx]
                          : item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Rollout mini-timeline */}
                <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-black/60 p-5 text-sm text-slate-200 sm:grid-cols-3 sm:p-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {isAr ? "اليوم 1" : "Day 1"}
                    </p>
                    <p className="font-semibold text-white">
                      {isAr
                        ? "ربط القنوات واستيراد جهات الاتصال"
                        : "Connect channels & import contacts"}
                    </p>
                    <p className="text-xs text-slate-400">
                      {isAr
                        ? "ربط واتساب، وسائل التواصل والبريد بخطوات موجهة."
                        : "Plug in WhatsApp, social and email with guided setup."}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {isAr ? "الأسبوع 1" : "Week 1"}
                    </p>
                    <p className="font-semibold text-white">
                      {isAr
                        ? "تشغيل الأتمتة الأساسية"
                        : "Go live with core automations"}
                    </p>
                    <p className="text-xs text-slate-400">
                      {isAr
                        ? "تشغيل المتابعات، التذكيرات ومسارات الحجز."
                        : "Follow-ups, reminders and booking flows switched on."}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {isAr ? "الأسبوع 4" : "Week 4"}
                    </p>
                    <p className="font-semibold text-white">
                      {isAr
                        ? "التحسين بناءً على التحليلات"
                        : "Optimize based on analytics"}
                    </p>
                    <p className="text-xs text-slate-400">
                      {isAr
                        ? "تحسين المسارات والتسلسلات و اتفاقيات الخدمة بناءً على البيانات."
                        : "Tune funnels, sequences and SLAs with real data."}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PRICING / PACKAGES */}
            <section
              id="pricing"
              className="mt-20 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black p-8 backdrop-blur-xl sm:p-10 lg:rounded-[40px] lg:p-14">
                <div
                  className={
                    isAr
                      ? "mb-8 text-center md:text-right"
                      : "mb-8 text-center md:text-left"
                  }
                >
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {isAr ? "الأسعار والباقات" : "Pricing & plans"}
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    {isAr ? "باقات مصممة لـ" : "Packages built to "}{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {isAr ? "تنمو معك" : "grow with you"}
                    </span>
                  </h2>
                  <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
                    {isAr
                      ? "ابدأ صغيراً ثم توسّع بسرعة. يمكنك تغيير الخطة أو الإلغاء في أي وقت — بدون التزام طويل."
                      : "Start small, scale fast. Switch plans or cancel anytime — no long-term lock-in."}
                  </p>

                  {/* Billing toggle */}
                  <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-black/60 p-1 text-xs text-slate-300 shadow-[0_10px_30px_rgba(15,23,42,0.7)]">
                      <button
                        type="button"
                        onClick={() => setBillingPeriod("monthly")}
                        className={`rounded-full px-4 py-1.5 transition-all ${
                          billingPeriod === "monthly"
                            ? "bg-white text-slate-900 shadow-[0_6px_25px_rgba(15,23,42,0.6)]"
                            : "bg-transparent text-slate-300 hover:text-white"
                        }`}
                      >
                        {isAr ? "شهري" : "Monthly"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setBillingPeriod("yearly")}
                        className={`flex items-center gap-1 rounded-full px-4 py-1.5 transition-all ${
                          billingPeriod === "yearly"
                            ? "bg-white text-slate-900 shadow-[0_6px_25px_rgba(15,23,42,0.6)]"
                            : "bg-transparent text-slate-300 hover:text-white"
                        }`}
                      >
                        {isAr ? "سنوي" : "Yearly"}
                        <span className="hidden rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 sm:inline">
                          {isAr ? "وفر شهرين" : "Save 2 months"}
                        </span>
                      </button>
                    </div>
                    <span className="hidden text-xs text-emerald-300 sm:inline">
                      {isAr
                        ? "خصم 20٪ على الدفع السنوي."
                        : "20% discount on yearly billing."}
                    </span>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3 lg:gap-7">
                  {pricingPlans.map((plan, idx) => {
                    const price =
                      billingPeriod === "monthly"
                        ? plan.monthly
                        : plan.yearly;
                    const suffix =
                      billingPeriod === "monthly"
                        ? isAr
                          ? "/شهر"
                          : "/month"
                        : isAr
                        ? "/سنة"
                        : "/year";
                    const isPopular = plan.popular;
                    return (
                      <div
                        key={plan.name}
                        className={`relative flex flex-col rounded-3xl border bg-gradient-to-b from-slate-900/80 via-slate-950/80 to-black/90 p-6 text-sm shadow-[0_18px_60px_rgba(15,23,42,0.8)] backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_26px_80px_rgba(15,23,42,0.9)] ${
                          isPopular
                            ? "border-violet-500/70"
                            : "border-white/10"
                        }`}
                        style={{ animationDelay: `${idx * 80}ms` }}
                      >
                        {isPopular && (
                          <div className="pointer-events-none absolute -right-3 top-4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                            {isAr ? "الأكثر اختياراً" : "Most popular"}
                          </div>
                        )}
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              {plan.name}
                            </h3>
                            <p className="text-xs text-slate-400">
                              {isAr
                                ? [
                                    "مثالية للفرق الصغيرة",
                                    "الأكثر شعبية",
                                    "للمجموعات متعددة الفروع",
                                  ][idx]
                                : plan.badge}
                            </p>
                          </div>
                          <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-200">
                            {isAr
                              ? [
                                  "حتى ٣ مستخدمين",
                                  "حتى ١٠ مستخدمين",
                                  "مساحات عمل غير محدودة",
                                ][idx]
                              : plan.seats}
                          </span>
                        </div>
                        <div className="mb-4">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-white">
                              ${price.toLocaleString("en-US")}
                            </span>
                            <span className="text-xs text-slate-400">
                              {suffix}
                            </span>
                          </div>
                          {billingPeriod === "yearly" && (
                            <p className="mt-1 text-[11px] text-emerald-300">
                              {isAr
                                ? "يُدفع سنوياً · وفر حتى 20٪"
                                : "Billed annually · Save up to 20%"}
                            </p>
                          )}
                          <p className="mt-3 text-xs text-slate-300">
                            {isAr
                              ? [
                                  "وحّد العملاء المحتملين وابدأ أول أتمتاتك.",
                                  "للفرق النامية التي تحتاج أتمتة أعمق وتقارير.",
                                  "للمجموعات متعددة العلامات بعَمليّات معقدة.",
                                ][idx]
                              : plan.highlight}
                          </p>
                        </div>
                        <ul className="mb-5 flex flex-1 flex-col gap-2 text-xs text-slate-200">
                          {plan.included.map((item, i) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
                                ✓
                              </span>
                              <span>
                                {isAr
                                  ? (() => {
                                      const byPlan: string[][] = [
                                        [
                                          "صندوق وارد موحد (كل القنوات)",
                                          "مراحل وأتمتة أساسية",
                                          "دعم بالبريد الإلكتروني",
                                        ],
                                        [
                                          "أتمتة وتوجيه متقدم",
                                          "عدّة مسارات وعلامات تجارية",
                                          "مدير نجاح مخصص",
                                        ],
                                        [
                                          "تهيئة مخصصة وترحيل البيانات",
                                          "تسجيل الدخول الموحد وسجلات تدقيق",
                                          "فريق حسابات مخصص",
                                        ],
                                      ];
                                      return byPlan[idx][i];
                                    })()
                                  : item}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#trial"
                          className={`mt-auto inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                            isPopular
                              ? "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,1)]"
                              : "border border-white/20 bg-white/5 text-slate-50 hover:bg-white/10"
                          }`}
                        >
                          {isAr
                            ? `ابدأ مع خطة ${plan.name}`
                            : `Start with ${plan.name}`}
                        </a>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-5 text-center text-xs text-slate-400">
                  {isAr ? "تحتاج خطة مخصصة أو تسعير للمجموعات؟" : "Need a custom rollout or group pricing? "}{" "}
                  <a
                    href="#contact"
                    className="text-violet-300 underline-offset-2 hover:text-violet-200 hover:underline"
                  >
                    {isAr ? "تحدث مع فريقنا" : "Talk to our team"}
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* TESTIMONIALS */}
            <section
              id="testimonials"
              className="mt-20 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div
                className={
                  isAr
                    ? "mb-8 text-center md:text-right"
                    : "mb-8 text-center"
                }
              >
                <span className="mb-3 inline-flex items-center justify-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {isAr ? "آراء العملاء" : "Social proof"}
                </span>
                <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {isAr ? "ماذا يقول" : "What our "}{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {isAr ? "عملاؤنا" : "clients say"}
                  </span>
                </h2>
                <p className="mx-auto max-w-xl text-sm text-slate-400 sm:text-base">
                  {isAr
                    ? "مشغّلون في الخليج يستخدمون Leads Connector لتحويل صناديق وارد مزدحمة إلى إيرادات متوقعة."
                    : "Operators across the GCC use Leads Connector to turn chaotic inboxes into predictable revenue."}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                {[
                  {
                    quoteEn:
                      "Leads Connector helped us respond faster and reduced no-shows instantly.",
                    quoteAr:
                      "Leads Connector ساعدنا نرد أسرع وقلّل نسبة عدم الحضور فوراً.",
                    author: "Sarah M.",
                    roleEn: "Clinic Owner",
                    roleAr: "مالكة عيادة",
                    rating: 5,
                  },
                  {
                    quoteEn:
                      "Our sales team converted 3× more leads with automated follow-ups.",
                    quoteAr:
                      "فريق المبيعات حوّل ٣ أضعاف العملاء المحتملين مع المتابعات المؤتمتة.",
                    author: "Ahmed K.",
                    roleEn: "Automotive Business",
                    roleAr: "نشاط سيارات",
                    rating: 5,
                  },
                ].map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-[0_18px_60px_rgba(139,92,246,0.4)] animate-[fadeInUp_0.8s_ease-out]"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/25 to-fuchsia-500/10 blur-2xl" />
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <svg
                              key={i}
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          )
                        )}
                      </div>
                      <span className="text-xs font-medium text-emerald-300">
                        {isAr ? "عميل موثّق" : "Verified customer"}
                      </span>
                    </div>

                    <div className="mb-4 text-5xl leading-none text-slate-600">
                      “
                    </div>

                    <p className="mb-6 text-base italic text-slate-200 sm:text-lg leading-relaxed">
                      {isAr ? testimonial.quoteAr : testimonial.quoteEn}
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
                          {isAr ? testimonial.roleAr : testimonial.roleEn}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* DEMO CTA */}
            <section
              id="demo"
              className="mt-20 rounded-[28px] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 shadow-[0_0_80px_rgba(15,23,42,0.8)] backdrop-blur-xl sm:p-10 lg:p-12"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div
                  className={
                    isAr ? "max-w-xl text-center md:text-right" : "max-w-xl"
                  }
                >
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {isAr ? "جولة مباشرة" : "Live walkthrough"}
                  </span>
                  <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                    {isAr
                      ? "شاهد تدفّق عملائك في بيئة حقيقية"
                      : "See your lead flow in a real environment"}
                  </h2>
                  <p className="text-sm text-slate-300 sm:text-base">
                    {isAr
                      ? "شاركنا أدواتك الحالية ومسارات العمل — نعيد رسمها في مساحة عمل Leads Connector واحدة ونريك الأثر مباشرة."
                      : "Share your current tools and workflows — we’ll map them into a single Leads Connector workspace and show you the impact live."}
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-300">
                      ✓
                    </span>
                    <span>
                      {isAr
                        ? "جلسة حية 30–45 دقيقة مع متخصص"
                        : "30–45 min live session with a specialist"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-300">
                      ✓
                    </span>
                    <span>
                      {isAr
                        ? "مخصّصة لعيادتك، صالونك أو نشاطك الخدمي"
                        : "Tailored to your clinic, salon or service"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-xs text-emerald-300">
                      ✓
                    </span>
                    <span>
                      {isAr
                        ? "لا تحتاج لأي إعداد تقني مسبق"
                        : "No technical prep needed"}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* FINAL CTA */}
            <section
              id="trial"
              className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-950/50 via-violet-950/30 to-black p-10 shadow-[0_0_100px_rgba(139,92,246,0.3)] backdrop-blur-xl transition-all hover:border-purple-500/50 hover:shadow-[0_0_120px_rgba(139,92,246,0.4)] sm:p-12 lg:rounded-[40px] lg:p-16 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="relative">
                <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-purple-600/30 blur-[100px] motion-safe:animate-[softPulse_6s_ease-in-out_infinite]" />

                <div
                  className={
                    isAr
                      ? "relative text-center md:text-right"
                      : "relative text-center md:text-left"
                  }
                >
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {isAr ? (
                      <>
                        جاهز لتحويل نشاطك إلى
                        <br />
                      </>
                    ) : (
                      <>
                        Ready to turn your business into a
                        <br />
                      </>
                    )}
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                      {isAr
                        ? "آلة مؤتمتة لجلب العملاء المحتملين؟"
                        : "fully automated lead-generation machine?"}
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl md:mx-0">
                    {isAr
                      ? "وحّد أدواتك، نظّم كل نقاط التواصل، وأعطِ فريقك قمرة قيادة واحدة لعمليات الإيرادات."
                      : "Consolidate your tech stack, orchestrate every touchpoint, and give your team one cockpit for revenue operations."}
                  </p>

                  {/* Value bullets */}
                  <ul className="mx-auto mt-6 grid max-w-3xl gap-4 text-left text-sm text-slate-100 sm:grid-cols-3 md:mx-0">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300">
                        ✓
                      </span>
                      <div>
                        <p className="font-semibold">
                          {isAr
                            ? "تنفيذ كامل من فريقنا"
                            : "Done-for-you implementation"}
                        </p>
                        <p className="text-xs text-slate-300">
                          {isAr
                            ? "نبني معك المراحل، الأتمتة وصناديق الوارد."
                            : "Pipelines, automations and inboxes built with you."}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300">
                        ✓
                      </span>
                      <div>
                        <p className="font-semibold">
                          {isAr ? "دعم أولاً للخليج" : "GCC-first support"}
                        </p>
                        <p className="text-xs text-slate-300">
                          {isAr
                            ? "دعم بالعربية والإنجليزية مع فهم للسوق المحلي."
                            : "Arabic & English support with local context."}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300">
                        ✓
                      </span>
                      <div>
                        <p className="font-semibold">
                          {isAr
                            ? "بدون عقد طويل الأجل"
                            : "No long-term contract required"}
                        </p>
                        <p className="text-xs text-slate-300">
                          {isAr
                            ? "أثبت العائد أولاً، ثم توسّع بثقة."
                            : "Prove the ROI first, then scale with confidence."}
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div
                    className={
                      isAr
                        ? "mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end"
                        : "mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start"
                    }
                  >
                    <a
                      href="#trial"
                      className="group inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_45px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(139,92,246,1)]"
                    >
                      {isAr ? "ابدأ النسخة التجريبية" : "Start Free Trial"}
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          isAr
                            ? "group-hover:-translate-x-1 scale-x-[-1]"
                            : "group-hover:translate-x-1"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={
                            isAr
                              ? "M11 7l-5 5m0 0l5 5m-5-5h12"
                              : "M13 7l5 5m0 0l-5 5m5-5H6"
                          }
                        />
                      </svg>
                    </a>
                    <a
                      href="#demo"
                      className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/15"
                    >
                      {isAr ? "احجز عرضاً توضيحياً" : "Book a Demo"}
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* CONTACT US */}
            <section
              id="contact"
              className="mt-20 animate-[fadeInUp_0.8s_ease-out]"
            >
              <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black p-8 backdrop-blur-xl sm:p-10 lg:rounded-[40px] lg:p-14">
                <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
                  {/* Contact intro */}
                  <div
                    className={
                      isAr
                        ? "text-center md:text-right"
                        : "text-center md:text-left"
                    }
                  >
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-[11px] font-medium text-violet-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {isAr ? "تواصل معنا" : "Contact us"}
                    </span>
                    <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                      {isAr
                        ? "خلّنا نرسم معاً تدفّق عملائك"
                        : "Let’s map your lead flow together"}
                    </h2>
                    <p className="mb-6 text-sm text-slate-300 sm:text-base">
                      {isAr
                        ? "أخبرنا قليلاً عن نشاطك والأدوات التي تستخدمها — سيتواصل فريقنا معك بجولة مخصصة وخطة تشغيل."
                        : "Tell us a bit about your business and current stack — our team will follow up with a tailored walkthrough and rollout plan."}
                    </p>

                    <div className="space-y-3 text-sm text-slate-200">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs">
                          📍
                        </span>
                        <div className="text-left md:text-inherit">
                          <p className="font-semibold text-white">
                            {isAr ? "المناطق" : "Regions"}
                          </p>
                          <p className="text-xs text-slate-400">
                            {isAr
                              ? "السعودية، الإمارات، قطر وباقي دول الخليج"
                              : "Saudi Arabia, UAE, Qatar & wider GCC"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs">
                          ✉️
                        </span>
                        <div className="text-left md:text-inherit">
                          <p className="font-semibold text-white">
                            {isAr ? "البريد الإلكتروني" : "Email"}
                          </p>
                          <p className="text-xs text-slate-400">
                            info@leadsconnector.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs">
                          🕒
                        </span>
                        <div className="text-left md:text-inherit">
                          <p className="font-semibold text-white">
                            {isAr ? "زمن الاستجابة" : "Response time"}
                          </p>
                          <p className="text-xs text-slate-400">
                            {isAr
                              ? "خلال يوم عمل واحد (الأحد–الخميس، بتوقيت الخليج)"
                              : "Within 1 business day (Sun–Thu, GCC)"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact form */}
                  <div>
                    <form
                      className="space-y-4 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.8)]"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1 text-xs">
                          <label className="block text-slate-300">
                            {isAr ? "الاسم الكامل" : "Full name"}
                          </label>
                          <input
                            required
                            className="h-9 w-full rounded-lg border border-white/10 bg-black/60 px-3 text-xs text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                            placeholder={isAr ? "سارة أحمد" : "Sarah Ahmed"}
                          />
                        </div>
                        <div className="space-y-1 text-xs">
                          <label className="block text-slate-300">
                            {isAr ? "الشركة / النشاط" : "Company"}
                          </label>
                          <input
                            className="h-9 w-full rounded-lg border border-white/10 bg-black/60 px-3 text-xs text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                            placeholder={
                              isAr
                                ? "عيادة / صالون / علامة خدمية"
                                : "Clinic / Salon / Service brand"
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-1 text-xs">
                        <label className="block text-slate-300">
                          {isAr ? "البريد الوظيفي" : "Work email"}
                        </label>
                        <input
                          required
                          type="email"
                          className="h-9 w-full rounded-lg border border-white/10 bg-black/60 px-3 text-xs text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                          placeholder={
                            isAr ? "you@company.com" : "you@company.com"
                          }
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1 text-xs">
                          <label className="block text-slate-300">
                            {isAr ? "الجوال / واتساب" : "Phone / WhatsApp"}
                          </label>
                          <input
                            className="h-9 w-full rounded-lg border border-white/10 bg-black/60 px-3 text-xs text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                            placeholder={
                              isAr ? "+966 5X XXX XXXX" : "+966 5X XXX XXXX"
                            }
                          />
                        </div>
                        <div className="space-y-1 text-xs">
                          <label className="block text-slate-300">
                            {isAr ? "حجم الفريق" : "Team size"}
                          </label>
                          <select className="h-9 w-full rounded-lg border border-white/10 bg-black/60 px-3 text-xs text-slate-100 outline-none ring-0 transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40">
                            <option value="">
                              {isAr ? "اختر" : "Select"}
                            </option>
                            <option value="1-5">
                              {isAr ? "١–٥ وكلاء" : "1–5 agents"}
                            </option>
                            <option value="6-15">
                              {isAr ? "٦–١٥ وكيل" : "6–15 agents"}
                            </option>
                            <option value="16-50">
                              {isAr ? "١٦–٥٠ وكيل" : "16–50 agents"}
                            </option>
                            <option value="50+">
                              {isAr ? "أكثر من ٥٠ وكيل" : "50+ agents"}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1 text-xs">
                        <label className="block text-slate-300">
                          {isAr ? "ما الذي تريد تحسينه؟" : "What are you hoping to improve?"}
                        </label>
                        <textarea
                          rows={3}
                          className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none ring-0 transition-all placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/40"
                          placeholder={
                            isAr
                              ? "مثلاً: معدل عدم الحضور، زمن الرد على واتساب، تتبّع الحجوزات عبر الفروع..."
                              : "e.g. No-show rate, WhatsApp response time, tracking bookings across locations..."
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,1)]"
                      >
                        {isAr ? "إرسال الطلب" : "Submit enquiry"}
                      </button>
                      <p className="mt-2 text-[10px] text-slate-500">
                        {isAr
                          ? "بإرسال هذا النموذج، فأنت توافق على أن نتواصل معك بخصوص Leads Connector. بدون إزعاج أو رسائل عشوائية."
                          : "By submitting this form, you agree to be contacted about Leads Connector. No spam, ever."}
                      </p>
                    </form>
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
                  {isAr
                    ? "منصة CRM وأتمتة تسويق متكاملة للشركات في السعودية ودول الخليج."
                    : "The all-in-one CRM and marketing automation platform for businesses in Saudi Arabia and the GCC."}
                </p>
                <div className="mt-4 flex gap-3 text-slate-500">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs hover:bg-white/10 hover:text-white">
                    in
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs hover:bg-white/10 hover:text-white">
                    X
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs hover:bg-white/10 hover:text-white">
                    ♻︎
                  </button>
                </div>
              </div>

              {/* Product */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-white">
                  {isAr ? "المنتج" : "Product"}
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      href="#features"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "الميزات" : "Features"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#usecases"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "حالات الاستخدام" : "Use Cases"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "الأسعار" : "Pricing"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#demo"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "عرض مباشر" : "Live Demo"}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-white">
                  {isAr ? "المصادر" : "Resources"}
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      href="#contact"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "مركز المساعدة" : "Help Center"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "التوثيق" : "Documentation"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "مرجع API" : "API Reference"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "المدوّنة" : "Blog"}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company / Contact */}
              <div>
                <h3 className="mb-4 text-sm font-bold text-white">
                  {isAr ? "الشركة" : "Company"}
                </h3>
                <ul className="mb-4 space-y-2 text-sm text-slate-400">
                  <li>
                    <a
                      href="#contact"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "الدعم" : "Support"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#demo"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr ? "احجز عرضاً" : "Book a Demo"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {isAr
                        ? "المبيعات: +966 XX XXX XXXX"
                        : "Sales: +966 XX XXX XXXX"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="transition-colors hover:text-white hover:underline"
                    >
                      info@leadsconnector.com
                    </a>
                  </li>
                </ul>
                <div className="space-y-2 text-xs text-slate-500">
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5">🇬🇧</span>
                    <span>
                      {isAr
                        ? "المكتب في المملكة المتحدة: 123 High Street, London, W1A 1AA, United Kingdom"
                        : "UK Office: 123 High Street, London, W1A 1AA, United Kingdom"}
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="mt-0.5">🇸🇦</span>
                    <span>
                      {isAr
                        ? "نخدم السعودية، الإمارات، قطر ودول الخليج"
                        : "Operating across Saudi Arabia, UAE, Qatar & GCC"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>
                {isAr
                  ? `© ${new Date().getFullYear()} Leads Connector. جميع الحقوق محفوظة.`
                  : `© ${new Date().getFullYear()} Leads Connector. All rights reserved.`}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="transition-colors hover:text-slate-200 hover:underline"
                >
                  {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-slate-200 hover:underline"
                >
                  {isAr ? "شروط الاستخدام" : "Terms of Service"}
                </a>
                <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:inline-block" />
                <span className="text-slate-500">
                  {isAr
                    ? "🇸🇦 مصمّم للسعودية ودول الخليج"
                    : "🇸🇦 Made for Saudi Arabia &amp; GCC"}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        /* Entrance animations */
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
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* Soft background motion */
        @keyframes gradientGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -20px, 0) scale(1.05);
          }
        }

        @keyframes floatSoft {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          33% {
            transform: translate3d(24px, -20px, 0);
          }
          66% {
            transform: translate3d(-16px, 14px, 0);
          }
        }

        @keyframes softPulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.06);
          }
        }

        /* Command center halo spin with built-in centering */
        @keyframes haloSpin {
          0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
          }
        }

        /* Scan line using translateY instead of top */
        @keyframes scanLine {
          0% {
            transform: translate3d(0, -40%, 0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translate3d(0, 140%, 0);
            opacity: 0;
          }
        }

        /* Beams sliding through background */
        @keyframes beamSlide {
          0% {
            transform: translate3d(0, -40%, 0);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate3d(0, 40%, 0);
            opacity: 0;
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

        .will-change-transform {
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Central halo – uses haloSpin to avoid transform conflicts */}
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] rounded-full bg-[conic-gradient(at_top,_rgba(139,92,246,0.7),rgba(168,85,247,0.5),rgba(192,132,252,0.6),rgba(139,92,246,0.7))] opacity-60 blur-[120px] will-change-transform motion-safe:animate-[haloSpin_30s_linear_infinite]" />

      {/* Side glows */}
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-purple-600/25 blur-[100px] will-change-transform motion-safe:animate-[softPulse_8s_ease-in-out_infinite]" />
      <div
        className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-violet-600/25 blur-[100px] will-change-transform motion-safe:animate-[softPulse_10s_ease-in-out_infinite]"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[100px] will-change-transform motion-safe:animate-[softPulse_12s_ease-in-out_infinite]"
        style={{ animationDelay: "4s" }}
      />

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/2 h-32 w-32 rounded-full bg-purple-500/12 blur-[60px] will-change-transform motion-safe:animate-[floatSoft_15s_ease-in-out_infinite]" />
      <div
        className="absolute right-1/4 top-2/3 h-40 w-40 rounded-full bg-violet-500/12 blur-[70px] will-change-transform motion-safe:animate-[floatSoft_18s_ease-in-out_infinite]"
        style={{ animationDelay: "3s" }}
      />

      {/* Grid + ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_70%)]" />
      <div className="absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08),transparent_70%)]" />

      {/* Light beams (static rotation, no animated rotation) */}
      <div className="absolute left-[20%] top-0 h-full w-px rotate-[15deg] bg-gradient-to-b from-transparent via-purple-500/12 to-transparent blur-sm" />
      <div className="absolute left-[50%] top-0 h-full w-px rotate-[25deg] bg-gradient-to-b from-transparent via-violet-500/12 to-transparent blur-sm" />
      <div className="absolute left-[80%] top-0 h-full w-px rotate-[35deg] bg-gradient-to-b from-transparent via-fuchsia-500/12 to-transparent blur-sm" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />

      {/* Top scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent will-change-transform motion-safe:animate-[scanLine_8s_ease-in-out_infinite]" />

      {/* Very subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
}
