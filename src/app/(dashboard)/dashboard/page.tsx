"use client";

import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Database,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function DashboardPage() {

  const stats = [
    {
      title: "Total Predictions",
      value: "12,480",
      icon: Activity,
    },

    {
      title: "Safe Samples",
      value: "8,214",
      icon: ShieldCheck,
    },

    {
      title: "Toxic Samples",
      value: "4,266",
      icon: AlertTriangle,
    },

    {
      title: "Model Accuracy",
      value: "97.2%",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-7">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[32px] border border-cyan-500/10 bg-[#071120]/80 p-10 backdrop-blur-xl">

        {/* glow */}
        <div className="absolute right-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 flex items-center justify-between">

          <div>

            <div className="mb-4 flex items-center gap-3">

              <div className="rounded-2xl bg-cyan-500/10 p-3">

                <Sparkles className="h-7 w-7 text-cyan-400" />

              </div>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
                AI System Online
              </span>

            </div>

            <h1 className="mb-3 text-5xl font-black text-white">
              NanoToxi AI Dashboard
            </h1>

            <p className="max-w-2xl text-lg text-white/55">
              AI-powered nanoparticle toxicity prediction and
              scientific intelligence platform for advanced
              nanomedicine workflows.
            </p>

          </div>

          <div className="hidden xl:flex">

            <div className="flex h-[180px] w-[180px] items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/5">

              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">

                <FlaskConical className="h-16 w-16 text-cyan-400" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="rounded-[26px] border border-cyan-500/10 bg-[#071120]/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.03]"
            >

              <div className="mb-5 flex items-center justify-between">

                <div className="rounded-2xl bg-cyan-500/10 p-3">

                  <Icon className="h-6 w-6 text-cyan-400" />

                </div>

              </div>

              <p className="mb-2 text-sm text-white/45">
                {item.title}
              </p>

              <h2 className="text-4xl font-black text-white">
                {item.value}
              </h2>

            </div>
          );
        })}

      </section>

      {/* CHARTS */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* LEFT */}
        <div className="xl:col-span-2 rounded-[30px] border border-cyan-500/10 bg-[#071120]/70 p-7 backdrop-blur-xl">

          <div className="mb-8 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">
                Toxicity Trends
              </h2>

              <p className="text-white/45">
                Weekly nanoparticle analysis
              </p>

            </div>

            <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
              Live Analytics
            </span>

          </div>

          {/* fake chart */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] border border-cyan-500/10 bg-[#081325]">

  {/* GRID */}
  <div className="absolute inset-0 opacity-20">

    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="absolute left-0 w-full border-t border-cyan-500/10"
        style={{
          top: `${i * 20}%`,
        }}
      />
    ))}

  </div>

  {/* SVG LINE CHART */}
  <svg
    viewBox="0 0 800 300"
    className="absolute inset-0 h-full w-full"
    preserveAspectRatio="none"
  >

    {/* AREA GLOW */}
    <path
      d="
        M0 260
        C80 210, 120 120, 200 150
        C280 180, 340 70, 420 110
        C500 150, 560 230, 640 180
        C700 150, 740 90, 800 120
        L800 300
        L0 300
        Z
      "
      fill="url(#gradientFill)"
      opacity="0.35"
    />

    {/* MAIN LINE */}
    <path
      d="
        M0 260
        C80 210, 120 120, 200 150
        C280 180, 340 70, 420 110
        C500 150, 560 230, 640 180
        C700 150, 740 90, 800 120
      "
      fill="none"
      stroke="#22d3ee"
      strokeWidth="5"
      strokeLinecap="round"
      filter="url(#glow)"
    />

    {/* GLOW */}
    <defs>

      <linearGradient
        id="gradientFill"
        x1="0"
        x2="0"
        y1="0"
        y2="1"
      >
        <stop
          offset="0%"
          stopColor="#22d3ee"
          stopOpacity="0.8"
        />

        <stop
          offset="100%"
          stopColor="#22d3ee"
          stopOpacity="0"
        />

      </linearGradient>

      <filter id="glow">

        <feGaussianBlur
          stdDeviation="6"
          result="blur"
        />

        <feMerge>

          <feMergeNode in="blur" />

          <feMergeNode in="SourceGraphic" />

        </feMerge>

      </filter>

    </defs>

  </svg>

  {/* LABELS */}
  <div className="absolute bottom-4 left-6 right-6 flex justify-between text-xs text-white/35">

    <span>Jan</span>
    <span>Feb</span>
    <span>Mar</span>
    <span>Apr</span>
    <span>May</span>
    <span>Jun</span>
    <span>Jul</span>
    <span>Aug</span>

  </div>

</div>

        </div>

        {/* RIGHT */}
        <div className="rounded-[30px] border border-cyan-500/10 bg-[#071120]/70 p-7 backdrop-blur-xl">

          <div className="mb-7">

            <h2 className="text-2xl font-bold text-white">
              Recent Predictions
            </h2>

            <p className="text-white/45">
              Latest AI analysis
            </p>

          </div>

          <div className="space-y-4">

            {[
              "Gold Nanoparticles",
              "Silver Oxide",
              "Silica NP",
              "Iron Oxide",
            ].map((item, i) => (

              <div
                key={i}
                className="flex items-center justify-between rounded-2xl border border-cyan-500/10 bg-[#081325] px-4 py-4"
              >

                <div>

                  <p className="font-semibold text-white">
                    {item}
                  </p>

                  <p className="text-sm text-white/40">
                    Prediction complete
                  </p>

                </div>

                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                  Safe
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BOTTOM */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3">

        <div className="rounded-[26px] border border-cyan-500/10 bg-[#071120]/70 p-6">

          <Database className="mb-4 h-8 w-8 text-cyan-400" />

          <h3 className="mb-2 text-xl font-bold text-white">
            Dataset Size
          </h3>

          <p className="text-3xl font-black text-cyan-300">
            2.4M+
          </p>

        </div>

        <div className="rounded-[26px] border border-cyan-500/10 bg-[#071120]/70 p-6">

          <ShieldCheck className="mb-4 h-8 w-8 text-cyan-400" />

          <h3 className="mb-2 text-xl font-bold text-white">
            AI Confidence
          </h3>

          <p className="text-3xl font-black text-cyan-300">
            98.1%
          </p>

        </div>

        <div className="rounded-[26px] border border-cyan-500/10 bg-[#071120]/70 p-6">

          <Activity className="mb-4 h-8 w-8 text-cyan-400" />

          <h3 className="mb-2 text-xl font-bold text-white">
            System Status
          </h3>

          <p className="text-3xl font-black text-green-400">
            Stable
          </p>

        </div>

      </section>

    </div>
  );
}