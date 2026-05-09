"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Activity,
  Dna,
  ShieldCheck,
  BarChart3,
  Cpu,
} from "lucide-react";

const features = [
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
];

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-28 text-foreground">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />

        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      {/* Header */}
      <section className="mx-auto max-w-4xl text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-surface px-5 py-2 text-sm text-muted backdrop-blur-xl">

            Titan AI Capabilities

          </div>

          <h1 className="text-5xl font-black md:text-7xl">

            Powerful AI Features

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">

            Advanced AI-driven capabilities designed for predictive
            nanotoxicity analysis, scientific intelligence, and enterprise-scale
            biotechnology workflows.

          </p>

        </motion.div>

      </section>

      {/* Features Grid */}
      <section className="mx-auto mt-24 max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map(
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
                      index * 0.1,
                  }}

                  viewport={{
                    once: true,
                  }}

                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_0_120px_rgba(124,58,237,0.25)] hover:scale-[1.02]"
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

      </section>

    </main>
  );
}