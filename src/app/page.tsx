"use client";
import { orbitron } from "./layout";

import HowItWorks from "@/components/marketing/how-it-works";

import StatsSlider from "@/components/marketing/stats-slider";

import { ParticlesBackground } from "@/components/marketing/particles-background";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis, 
  Radar,
} from "recharts";

import {
  modelMetrics,
  performanceComparison,
} from "@/lib/model-metrics";


import {
  Brain,
  Activity,
  Dna,
  ShieldCheck,
  BarChart3,
  Cpu,
} from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

import { SiteHeader } from "@/components/marketing/site-header";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]">
      
      <SiteHeader />
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      {/* ================= CINEMATIC BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* ================= GRID OVERLAY ================= */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* ================= RADIAL SPOTLIGHT ================= */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_55%)]" />

        {/* ================= MORPHING GRADIENT BLOBS ================= */}
        

        {/* ================= NEURAL GLOW LINES ================= */}
        <div className="absolute left-[15%] top-[25%] h-px w-[300px] rotate-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="absolute right-[15%] top-[40%] h-px w-[250px] -rotate-12 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="absolute left-[35%] bottom-[20%] h-px w-[280px] rotate-6 bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent" />

        

        {/* ================= LARGE GLOW ORBS ================= */}
        

        {/* ================= VIGNETTE ================= */}
        <div className="absolute inset-0 bg-black/20" />
        
      </div>

      {/* ================= PARTICLES ================= */}
        <ParticlesBackground />

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 pt-24 text-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-10 text-center lg:text-center">

            {/* Badge */}
            <div className="mx-auto mb-8 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-xs font-semibold tracking-[0.2em] text-cyan-400">

              AI-POWERED SAFETY ASSESSMENT

            </div>

            {/* Headline */}
            <div className="max-w-[700px] space-y-8">

              <h1
                className={`
                  ${orbitron.className}
                  text-[72px]
                  md:text-[110px]
                  leading-[0.9]
                  tracking-[-0.05em]
                  font-extrabold
                  text-center
                  text-white
                `}
              >
                Predict
                <br />
                Nanoparticle
                <br />
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-400
                    via-sky-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Toxicity
                </span>{" "}
                with AI
              </h1>

              <p className="mt-8 max-w-3xl text-center text-[20px] leading-[1.8] text-white/55">
                Accelerate nanomedicine research with AI-driven toxicity
                prediction, real-time analytics, and intelligent risk
                assessment for safer and faster scientific breakthroughs.
              </p>

            </div>

            {/* CTA Buttons */}
            <div className="mt-14 flex items-center justify-center gap-6">

              <Link href="/sign-up">

                <button className="rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:opacity-90">

                  Request Access

                </button>

              </Link>

              <Link href="/features">

                <button className="rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:opacity-90">

                  Explore Features

                </button>

              </Link>
              
            </div>

          </div>

        </div>
        <StatsSlider />
        <HowItWorks />
      </section>

      
            
      
      {/* ================= MODEL PERFORMANCE SECTION ================= */}

      <section className="relative overflow-hidden px-6 py-40">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        </div>

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            viewport={{
              once: true,
            }}

            className="mx-auto mb-20 max-w-3xl text-center"
          >

            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-sm text-muted backdrop-blur-xl">

              AI Model Evaluation

            </div>

            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-6xl">

              Model Performance

            </h2>

            <p className="mt-6 text-lg text-muted">

              Titan AI delivers highly accurate nanoparticle toxicity predictions
              validated through advanced machine learning benchmarking.

            </p>

          </motion.div>

          {/* Stats Tiles */}
          <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                label: "Accuracy",
                value:
                  modelMetrics.accuracy,
              },

              {
                label: "Precision",
                value:
                  modelMetrics.precision,
              },

              {
                label: "Recall",
                value:
                  modelMetrics.recall,
              },

              {
                label: "F1 Score",
                value:
                  modelMetrics.f1Score,
              },
            ].map((stat, index) => (

              <motion.div
                key={stat.label}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay:
                    index * 0.1,
                }}

                viewport={{
                  once: true,
                }}

                className="group rounded-3xl border border-white/10 bg-surface/60 p-8 text-center backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_80px_rgba(124,58,237,0.15)]"
              >

                <p className="text-sm uppercase tracking-widest text-muted">

                  {stat.label}

                </p>

                <h3 className="mt-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-5xl font-black text-transparent">

                  {stat.value}

                </h3>

              </motion.div>
            ))}

          </div>

          {/* ================= PERFORMANCE VISUALS ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="rounded-[2rem] border border-white/10 bg-surface/60 p-10 backdrop-blur-2xl"
        >

          <div className="mb-12 text-center">

            <h3 className="text-4xl font-black">

              Generalization Benchmark

            </h3>

            <p className="mt-4 text-lg text-muted">

              Comparing in-distribution performance against LOSO
              evaluation using advanced AI validation metrics.

            </p>

          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                label: "Accuracy",
                value: 98,
                color:
                  "from-violet-500 to-fuchsia-500",
              },

              {
                label: "Precision",
                value: 97,
                color:
                  "from-cyan-400 to-blue-500",
              },

              {
                label: "Recall",
                value: 96,
                color:
                  "from-emerald-400 to-green-500",
              },

              {
                label: "F1 Score",
                value: 97,
                color:
                  "from-orange-400 to-pink-500",
              },
            ].map((metric, index) => (

              <motion.div
                key={metric.label}

                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                transition={{
                  duration: 0.6,
                  delay:
                    index * 0.1,
                }}

                viewport={{
                  once: true,
                }}

                className="group relative flex flex-col items-center rounded-3xl border border-white/10 bg-black/40 p-8 transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_0_100px_rgba(124,58,237,0.18)]"
              >

                {/* Glow */}
                

                {/* Circle */}
                <div className="relative mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-black/40">

                  {/* Gradient Ring */}
                  

                  <div className="absolute inset-[6px] rounded-full bg-background" />

                  {/* Percentage */}
                  <div className="relative z-10 text-center">

                    <h4 className="bg-gradient-to-r from-cyan-500/10 to-gray-300 bg-clip-text text-5xl font-black text-transparent">

                      {metric.value}%

                    </h4>

                  </div>

                </div>

                {/* Label */}
                <h4 className="text-2xl font-bold">

                  {metric.label}

                </h4>

                <div className="mt-4 space-y-2 text-sm">

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-cyan-500/5/[0.03] px-3 py-2">

                    <span className="text-muted">

                      In-Distribution

                    </span>

                    <span className="font-semibold text-primary">

                      {metric.value}%

                    </span>

                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-cyan-500/5[0.03] px-3 py-2">

                    <span className="text-muted">

                      LOSO

                    </span>

                    <span className="font-semibold text-cyan-400">

                      {metric.value - 7}%

                    </span>

                  </div>

                  {/* Small Radar Comparison */}
                  <div className="mt-20 rounded-[2rem] border border-white/10 bg-black/30 p-10 backdrop-blur-2xl">

                    <div className="mb-8 text-center">

                      <h4 className="text-3xl font-bold">

                        In-Distribution vs LOSO

                      </h4>

                      <p className="mt-3 text-muted">

                        Comparative evaluation across validation strategies.

                      </p>

                    </div>

                    <div className="h-[350px] w-full">

                      <ResponsiveContainer
                        width="100%"
                        height="100%"
                      >

                        <RadarChart
                          data={
                            performanceComparison
                          }
                        >

                          <PolarGrid
                            stroke="#27272A"
                          />

                          <PolarAngleAxis
                            dataKey="metric"
                            tick={{
                              fill: "#94A3B8",
                              fontSize: 14,
                            }}
                          />

                          <Radar
                            name="In-Distribution"
                            dataKey="inDistribution"
                            stroke="#7C3AED"
                            fill="#7C3AED"
                            fillOpacity={0.35}
                          />

                          <Radar
                            name="LOSO"
                            dataKey="loso"
                            stroke="#22D3EE"
                            fill="#22D3EE"
                            fillOpacity={0.25}
                          />

                        </RadarChart>

                      </ResponsiveContainer>

                    </div>

                  </div>

                </div>

              </motion.div>
    ))}

  </div>

</motion.div>

        </div>

      </section>
      

    {/* ADD HERE */}

    <section className="border-y border-border bg-card/40 px-6 py-14">

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        {[
          {
            label: "Predictions",
            value: "120K+",
          },
          {
            label: "Research Samples",
            value: "50K+",
          },
          {
            label: "Cell Lines",
            value: "11",
          },
          {
            label: "Model Accuracy",
            value: "95%",
          },
        ].map((item) => (

          <div
            key={item.label}
            className="text-center"
          >

            <h3 className="text-5xl font-black text-primary">

              {item.value}

            </h3>

            <p className="mt-3 text-muted-foreground">

              {item.label}

            </p>

          </div>
        ))}

      </div>

    </section>

    
    </main>
  );
}