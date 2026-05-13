"use client";

import { motion } from "framer-motion";

import {
  Beaker,
  Activity,
  ShieldCheck,
  Microscope,
  Radar,
  FileText,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Beaker,
    title: "Nanoparticle Input",
    subtitle: "Define your parameters.",
    description:
      "Provide size, zeta potential, surface area, dosage, and exposure conditions for accurate modeling.",
  },

  {
    id: "02",
    icon: Activity,
    title: "Aggregation Analysis",
    subtitle: "Model environmental behavior.",
    description:
      "Predict hydrodynamic diameter and colloidal stability in biological environments.",
  },

  {
    id: "03",
    icon: ShieldCheck,
    title: "Toxicity Assessment",
    subtitle: "Primary safety screening.",
    description:
      "Predict TOXIC/NON-TOXIC classification with confidence scores and uncertainty quantification.",
  },

  {
    id: "04",
    icon: Microscope,
    title: "Cytotoxicity Analysis",
    subtitle: "Cellular interaction modeling.",
    description:
      "Analyze reactive oxygen species, apoptosis pathways, and membrane damage at cellular scale.",
  },

  {
    id: "05",
    icon: Radar,
    title: "Risk Factor Analysis",
    subtitle: "Understand the driving mechanisms.",
    description:
      "Identify physicochemical factors driving toxicity for targeted mitigation.",
  },

  {
    id: "06",
    icon: FileText,
    title: "Comprehensive Report",
    subtitle: "Actionable safety insights.",
    description:
      "Detailed report with toxicity predictions, confidence intervals, and recommendations.",
  },

  {
    id: "07",
    icon: BadgeCheck,
    title: "Expert Validation",
    subtitle: "Human-in-the-loop verification.",
    description:
      "Domain experts in nanotoxicology review and validate AI safety assessments.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden px-8 py-40">

      {/* CINEMATIC BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.03] blur-[180px]" />

        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.02] blur-[140px]" />

      </div>

      <div className="mx-auto max-w-[1800px]">

        {/* HEADER */}

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
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-36"
        >

          <p className="mb-6 text-[11px] tracking-[0.4em] text-cyan-400">

            OVERVIEW

          </p>

          <h2 className="orbitron text-[110px] leading-[0.88] tracking-[-0.08em] font-black text-white">

            How Titan Works

          </h2>

          <p className="mt-10 max-w-3xl text-[20px] leading-[2] text-white/35">

            A comprehensive multi-stage ML pipeline engineered for
            nanoparticle toxicity intelligence.

          </p>

        </motion.div>

        {/* STEPS */}

        <div className="relative">

          {/* THIN TIMELINE */}

          <div
            className="
              absolute
              left-[25px]
              top-0
              hidden
              h-full
              w-[1px]
              bg-cyan-400/20
              lg:block
            "
          />

          <div className="space-y-44">

            {steps.map((step, index) => {

              const isActive = index === 0;

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}

                  initial={{
                    opacity: 0,
                    y: 80,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}

                  className={`
                    relative
                    grid
                    items-center
                    gap-6
                    lg:grid-cols-[0.78fr_1.22fr]
                    transition-all
                    duration-700
                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-[0.07] scale-[0.985]"
                    }
                  `}
                >

                  {/* LEFT CONTENT */}

                  <div className="relative pl-4">

                    {/* TIMELINE DOT */}

                    <div
                      className="
                        absolute
                        left-[20px]
                        top-7
                        hidden
                        h-3
                        w-3
                        rounded-full
                        border
                        border-cyan-400/60
                        bg-[#020817]
                        lg:block
                      "
                    >

                      <div className="absolute inset-[2px] rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

                    </div>

                    {/* STEP HEADER */}

                    <div className="mb-10 flex items-center gap-6">

                      {/* ICON */}

                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-cyan-500/[0.04]
                          backdrop-blur-xl
                        "
                      >

                        <Icon className="h-7 w-7 text-cyan-400" />

                      </div>

                      {/* STEP LABEL */}

                      <span className="orbitron text-[11px] tracking-[0.35em] text-cyan-400">

                        Step {step.id}

                      </span>

                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        orbitron
                        text-[58px]
                        leading-[0.88]
                        tracking-[-0.08em]
                        font-black
                        text-white
                      "
                    >

                      {step.title}

                    </h3>

                    {/* SUBTITLE */}

                    <p className="mt-6 text-[20px] text-white/60">

                      {step.subtitle}

                    </p>

                    {/* DESCRIPTION */}

                    <p className="mt-8 max-w-xl text-[17px] leading-[2.1] text-white/35">

                      {step.description}

                    </p>

                    {/* BUTTON */}

                    {index === 0 && (
                      <button
                        className="
                          mt-12
                          rounded-full
                          bg-cyan-400
                          px-10
                          py-5
                          text-lg
                          font-semibold
                          text-black
                          transition-all
                          duration-500
                          hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                        "
                      >

                        Try Live Demo →

                      </button>
                    )}

                  </div>

                  {/* RIGHT VISUAL */}

                  <div className="relative">

                    <div
                      className="
                        relative
                        h-[760px]
                        overflow-hidden
                        rounded-[42px]
                        bg-[#020817]/96
                        backdrop-blur-3xl
                        shadow-[0_0_80px_rgba(34,211,238,0.015)]
                      "
                    >

                      {/* DARK OVERLAY */}

                      <div className="absolute inset-0 bg-black/25" />

                      {/* SOFT GRADIENT */}

                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] via-transparent to-blue-500/[0.02]" />

                      {/* GRID */}

                      <div
                        className="
                          absolute inset-0 opacity-[0.12]
                          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                          bg-[size:60px_60px]
                        "
                      />

                      {/* FLOATING PARTICLES */}

                      {[
                        { size: 7, top: "12%", left: "20%" },
                        { size: 5, top: "30%", left: "70%" },
                        { size: 8, top: "60%", left: "40%" },
                        { size: 6, top: "80%", left: "85%" },
                        { size: 4, top: "45%", left: "15%" },
                        { size: 8, top: "22%", left: "55%" },
                        { size: 5, top: "72%", left: "65%" },
                        { size: 7, top: "15%", left: "85%" },
                        { size: 4, top: "90%", left: "35%" },
                      ].map((particle, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-cyan-400"
                          animate={{
                            y: [0, -25, 0, 25, 0],
                          }}
                          transition={{
                            duration: 12 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            top: particle.top,
                            left: particle.left,
                            opacity: 0.5,
                            boxShadow:
                              "0 0 18px rgba(34,211,238,0.6)",
                          }}
                        />
                      ))}

                      {/* STEP 1 VISUAL */}

                      {index === 0 && (
                        <div className="absolute inset-0">

                          {[
                            {
                              size: 24,
                              x: 12,
                              delay: 0,
                            },
                            {
                              size: 42,
                              x: 28,
                              delay: 1,
                            },
                            {
                              size: 82,
                              x: 48,
                              delay: 2,
                            },
                            {
                              size: 34,
                              x: 66,
                              delay: 3,
                            },
                            {
                              size: 58,
                              x: 84,
                              delay: 4,
                            },
                          ].map((node, i) => (
                            <motion.div
                              key={i}
                              className="absolute"
                              style={{
                                left: `${node.x}%`,
                                top: "58%",
                              }}
                              animate={{
                                y: [0, -35, 0, 35, 0],
                              }}
                              transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: node.delay,
                              }}
                            >

                              {/* CONNECTION */}

                              {i !== 4 && (
                                <div
                                  className="
                                    absolute
                                    left-full
                                    top-1/2
                                    h-[1px]
                                    w-32
                                    bg-cyan-400/10
                                  "
                                />
                              )}

                              {/* NODE */}

                              <div
                                className="
                                  rounded-full
                                  border
                                  border-cyan-400/20
                                  bg-cyan-400/10
                                  backdrop-blur-xl
                                "
                                style={{
                                  width: `${node.size}px`,
                                  height: `${node.size}px`,
                                  boxShadow:
                                    "0 0 40px rgba(34,211,238,0.14)",
                                }}
                              />

                            </motion.div>
                          ))}

                        </div>
                      )}

                      {/* STEP LABEL */}

                      <div className="absolute bottom-10 left-10">

                        <p className="orbitron text-[11px] tracking-[0.35em] text-cyan-400">

                          STEP {step.id}

                        </p>

                        <h4 className="mt-4 text-3xl font-semibold text-white">

                          {step.title}

                        </h4>

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}