import Link from "next/link";

import { SiteHeader } from "@/components/marketing/site-header";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Gradient Mesh */}
        <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[140px] animate-pulse" />

        <div className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[140px] animate-pulse" />

        <div className="absolute bottom-[-20%] left-[30%] h-[650px] w-[650px] rounded-full bg-blue-500/20 blur-[140px] animate-pulse" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary/30 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-10 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-surface/60 px-5 py-2 text-sm text-muted shadow-lg backdrop-blur-xl">
              AI-Powered Nanotoxicity Intelligence
            </div>

            {/* Headline */}
            <div className="max-w-[700px] space-y-8">

              <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-[7rem]">

                Predict{" "}

                <span className="relative inline-block">

                  {/* Glow */}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-30 blur-3xl" />

                  {/* Gradient Text */}
                  <span className="relative bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                    Nanoparticle
                  </span>

                </span>

                <br />

                Toxicity in Seconds
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
                Accelerate nanomedicine research with AI-driven toxicity
                prediction, real-time analytics, and intelligent risk
                assessment for safer and faster scientific breakthroughs.
              </p>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-5 sm:flex-row lg:items-start">

              <Link href="/sign-up">

                <button className="rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:opacity-90">

                  Request Access

                </button>

              </Link>

              <Link href="/features">

                <button className="rounded-2xl border border-white/10 bg-surface/60 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-xl">

                  Explore Features

                </button>

              </Link>

            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-muted lg:justify-start">

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-surface/50 px-4 py-2 backdrop-blur-lg">
                <div className="h-2 w-2 rounded-full bg-success" />
                AI Risk Analysis
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-surface/50 px-4 py-2 backdrop-blur-lg">
                <div className="h-2 w-2 rounded-full bg-accent" />
                Real-Time Prediction
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-surface/50 px-4 py-2 backdrop-blur-lg">
                <div className="h-2 w-2 rounded-full bg-warning" />
                Enterprise Ready
              </div>

            </div>

          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative flex items-center justify-center lg:mt-20">

            {/* Glow Background */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />

            {/* Dashboard Card */}
            <div className="relative w-full max-w-xl animate-[float_6s_ease-in-out_infinite] rounded-3xl border border-white/10 bg-surface/60 p-8 shadow-[0_0_60px_rgba(124,58,237,0.15)] backdrop-blur-2xl">

              {/* Animated Scan Line */}
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

              {/* Header */}
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

                <div>

                  <p className="text-2xl font-bold">
                    Toxicity Prediction
                  </p>

                  <p className="text-sm text-muted">
                    AI Analysis Dashboard
                  </p>

                </div>

                <div className="rounded-xl bg-success/20 px-4 py-2 text-sm font-semibold text-success">
                  Safe
                </div>

              </div>

              {/* Stats */}
              <div className="space-y-7">

                {/* Toxicity */}
                <div className="space-y-3">

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-muted">
                      Toxicity Score
                    </span>

                    <span className="font-semibold">
                      12%
                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-background">

                    <div className="h-full w-[12%] rounded-full bg-success" />

                  </div>

                </div>

                {/* Cell Viability */}
                <div className="space-y-3">

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-muted">
                      Cell Viability
                    </span>

                    <span className="font-semibold">
                      91%
                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-background">

                    <div className="h-full w-[91%] rounded-full bg-accent" />

                  </div>

                </div>

                {/* Confidence */}
                <div className="space-y-3">

                  <div className="flex items-center justify-between text-sm">

                    <span className="text-muted">
                      Confidence
                    </span>

                    <span className="font-semibold">
                      97%
                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-background">

                    <div className="h-full w-[97%] rounded-full bg-primary" />

                  </div>

                </div>

              </div>

              {/* Bottom Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">

                <div>

                  <p className="text-3xl font-black text-primary">
                    10K+
                  </p>

                  <p className="text-xs text-muted">
                    Predictions
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-black text-accent">
                    98%
                  </p>

                  <p className="text-xs text-muted">
                    Accuracy
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-black text-success">
                    24/7
                  </p>

                  <p className="text-xs text-muted">
                    Availability
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">

            <div className="mt-2 h-2 w-2 rounded-full bg-white/50" />

          </div>

        </div>

      </section>

    </main>
  );
}