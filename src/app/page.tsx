"use client";


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
                top: `${(i * 13) % 100}%`,
                left: `${(i * 17) % 100}%`,
                animationDuration: `${3 + (i % 5)}s`,
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

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative px-6 py-32">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        </div>

        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
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

            className="mx-auto mb-24 max-w-3xl text-center"
          >

            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-sm text-muted backdrop-blur-xl">

              Simple AI Workflow

            </div>

            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-6xl">

              How It Works

            </h2>

            <p className="mt-6 text-lg text-muted">

              Titan AI transforms nanoparticle toxicity analysis into a fast,
              intelligent, and scalable workflow powered by predictive AI models.

            </p>

          </motion.div>

          {/* Steps */}
          <div className="relative grid gap-8 lg:grid-cols-3">

            {/* Connector Lines */}
            <div className="absolute left-0 top-1/2 hidden h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />

            {/* STEP 1 */}
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
                delay: 0.1,
              }}

              viewport={{
                once: true,
              }}

              className="relative rounded-3xl border border-white/10 bg-surface/60 p-8 shadow-[0_0_50px_rgba(124,58,237,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(124,58,237,0.15)]"
            >

              <div className="absolute right-6 top-4 text-7xl font-black text-white/5">

                01

              </div>

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">

                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16"
                  />
                </svg>

              </div>

              <h3 className="mb-4 text-2xl font-bold">

                Upload Nanoparticle Data

              </h3>

              <p className="text-muted leading-relaxed">

                Submit nanoparticle properties, experimental parameters, and
                biological inputs securely into the AI pipeline.

              </p>

            </motion.div>

            {/* STEP 2 */}
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
                delay: 0.3,
              }}

              viewport={{
                once: true,
              }}

              className="relative rounded-3xl border border-white/10 bg-surface/60 p-8 shadow-[0_0_50px_rgba(6,182,212,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(6,182,212,0.15)]"
            >

              <div className="absolute right-6 top-4 text-7xl font-black text-white/5">

                02

              </div>

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">

                <svg
                  className="h-10 w-10 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3v2.25M14.25 3v2.25M4.5 9h15M5.25 6.75h13.5A2.25 2.25 0 0121 9v9.75A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V9a2.25 2.25 0 012.25-2.25z"
                  />
                </svg>

              </div>

              <h3 className="mb-4 text-2xl font-bold">

                AI Toxicity Analysis

              </h3>

              <p className="text-muted leading-relaxed">

                Titan AI evaluates toxicity risk using predictive machine learning
                models trained on advanced nanomedicine datasets.

              </p>

            </motion.div>

            {/* STEP 3 */}
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
                delay: 0.5,
              }}

              viewport={{
                once: true,
              }}

              className="relative rounded-3xl border border-white/10 bg-surface/60 p-8 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(59,130,246,0.15)]"
            >

              <div className="absolute right-6 top-4 text-7xl font-black text-white/5">

                03

              </div>

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/10">

                <svg
                  className="h-10 w-10 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 17l6-6 4 4 8-8"
                  />
                </svg>

              </div>

              <h3 className="mb-4 text-2xl font-bold">

                Get Predictive Insights

              </h3>

              <p className="text-muted leading-relaxed">

                Receive real-time toxicity predictions, confidence scores, and
                actionable scientific insights instantly.

              </p>

            </motion.div>

          </div>

        </div>

      </section>
            {/* ================= FEATURES SECTION ================= */}

      <section className="relative overflow-hidden px-6 pt-16 pb-32">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute left-[-10%] top-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

          <div className="absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

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

            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-sm text-muted backdrop-blur-xl">

              Advanced AI Capabilities

            </div>

            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-6xl">

              Powerful Features

            </h2>

            <p className="mt-6 text-lg text-muted">

              Powerful AI-driven tools designed for predictive nanotoxicity
              analysis, molecular intelligence, and enterprise-scale scientific
              workflows.

            </p>

          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                icon: Brain,
                title: "AI Toxicity Prediction",
                description:
                  "Predict nanoparticle toxicity instantly using advanced AI models trained on scientific datasets.",
                color:
                  "from-violet-500/20",
                iconColor:
                  "text-primary",
                bg:
                  "bg-primary/10",
              },

              {
                icon: Activity,
                title: "Real-Time Analysis",
                description:
                  "Monitor predictions and insights live with real-time AI processing pipelines.",
                color:
                  "from-cyan-500/20",
                iconColor:
                  "text-cyan-400",
                bg:
                  "bg-cyan-500/10",
              },

              {
                icon: Dna,
                title: "Molecular Insights",
                description:
                  "Analyze biological interactions through intelligent molecular visualization.",
                color:
                  "from-fuchsia-500/20",
                iconColor:
                  "text-fuchsia-400",
                bg:
                  "bg-fuchsia-500/10",
              },

              {
                icon: ShieldCheck,
                title: "Smart Risk Detection",
                description:
                  "Detect toxicity risks early using predictive confidence scoring systems.",
                color:
                  "from-green-500/20",
                iconColor:
                  "text-green-400",
                bg:
                  "bg-green-500/10",
              },

              {
                icon: BarChart3,
                title: "Research Dashboard",
                description:
                  "Access interactive analytics dashboards with intelligent scientific reporting.",
                color:
                  "from-blue-500/20",
                iconColor:
                  "text-blue-400",
                bg:
                  "bg-blue-500/10",
              },

              {
                icon: Cpu,
                title: "Cloud AI Infrastructure",
                description:
                  "Scale securely with enterprise-grade AI infrastructure optimized for research.",
                color:
                  "from-orange-500/20",
                iconColor:
                  "text-orange-400",
                bg:
                  "bg-orange-500/10",
              },
            ].map(
              (
                feature,
                index
              ) => {
                const Icon =
                  feature.icon;

                return (
                  <motion.div
                    key={
                      feature.title
                    }

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
                      delay:
                        index *
                        0.1,
                    }}

                    viewport={{
                      once: true,
                    }}

                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_0_80px_rgba(124,58,237,0.15)]"
                  >

                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative z-10">

                      {/* Icon */}
                      <div
                        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bg}`}
                      >

                        <Icon
                          className={`h-8 w-8 ${feature.iconColor}`}
                        />

                      </div>

                      {/* Title */}
                      <h3 className="mb-4 text-2xl font-bold">

                        {
                          feature.title
                        }

                      </h3>

                      {/* Description */}
                      <p className="leading-relaxed text-muted">

                        {
                          feature.description
                        }

                      </p>

                    </div>

                  </motion.div>
                );
              }
            )}

          </div>

        </div>

      </section>
      
      {/* ================= MODEL PERFORMANCE SECTION ================= */}

      <section className="relative overflow-hidden px-6 py-32">

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
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${metric.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Circle */}
                <div className="relative mb-6 flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-black/40">

                  {/* Gradient Ring */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${metric.color} opacity-80 blur-sm`}
                  />

                  <div className="absolute inset-[6px] rounded-full bg-background" />

                  {/* Percentage */}
                  <div className="relative z-10 text-center">

                    <h4 className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-black text-transparent">

                      {metric.value}%

                    </h4>

                  </div>

                </div>

                {/* Label */}
                <h4 className="text-2xl font-bold">

                  {metric.label}

                </h4>

                <div className="mt-4 space-y-2 text-sm">

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2">

                    <span className="text-muted">

                      In-Distribution

                    </span>

                    <span className="font-semibold text-primary">

                      {metric.value}%

                    </span>

                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2">

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
      
    </main>
  );
}