"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Dna,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const teamMembers = [
  {
    name: "Kanika Thombre",
    role: "AI Research & Frontend",
  },

  {
    name: "Vedant",
    role: "Platform Engineering",
  },

  {
    name: "Research Team",
    role: "Nanotoxicology Analysis",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-28 text-foreground">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />

        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-5xl text-center">

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

            About Titan AI

          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">

            Building the Future of

            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">

              {" "}
              Nanotoxicity Intelligence

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">

            Titan AI combines artificial intelligence, nanotechnology, and
            scientific research to accelerate safer nanoparticle discovery and
            predictive toxicity analysis.

          </p>

        </motion.div>

      </section>

      {/* ================= MISSION ================= */}
      <section className="mx-auto mt-28 grid max-w-7xl gap-10 lg:grid-cols-2">

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="rounded-[2rem] border border-white/10 bg-surface/50 p-10 backdrop-blur-2xl"
        >

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

            <Brain className="h-8 w-8 text-primary" />

          </div>

          <h2 className="text-4xl font-black">

            Our Mission

          </h2>

          <p className="mt-6 leading-relaxed text-muted">

            We aim to revolutionize nanotoxicity research using AI-powered
            predictive models that help researchers, biotech startups, and
            scientific institutions make safer and faster discoveries.

          </p>

        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="rounded-[2rem] border border-white/10 bg-surface/50 p-10 backdrop-blur-2xl"
        >

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

            <Dna className="h-8 w-8 text-cyan-400" />

          </div>

          <h2 className="text-4xl font-black">

            Scientific Foundation

          </h2>

          <p className="mt-6 leading-relaxed text-muted">

            Our platform integrates machine learning validation, toxicity
            benchmarking, LOSO evaluation, and molecular analysis workflows to
            provide enterprise-grade scientific intelligence.

          </p>

        </motion.div>

      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="mx-auto mt-32 max-w-7xl">

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

          className="mb-20 text-center"
        >

          <h2 className="text-5xl font-black">

            Why Titan AI?

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted">

            Combining advanced AI systems with nanomedicine research to create
            safer, scalable, and intelligent toxicity prediction infrastructure.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              icon: Microscope,
              title:
                "Research Driven",
              description:
                "Built with scientific workflows and validation strategies at its core.",
            },

            {
              icon: ShieldCheck,
              title:
                "Trusted Predictions",
              description:
                "Advanced toxicity benchmarking for safer nanoparticle development.",
            },

            {
              icon: Brain,
              title:
                "AI Powered",
              description:
                "Scalable AI models optimized for modern nanotoxicity intelligence.",
            },
          ].map(
            (
              item,
              index
            ) => {
              const Icon =
                item.icon;

              return (
                <motion.div
                  key={
                    item.title
                  }

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
                      index *
                      0.1,
                  }}

                  viewport={{
                    once: true,
                  }}

                  className="group rounded-[2rem] border border-white/10 bg-surface/50 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-[0_0_80px_rgba(124,58,237,0.18)]"
                >

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                    <Icon className="h-8 w-8 text-primary" />

                  </div>

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-relaxed text-muted">

                    {
                      item.description
                    }

                  </p>

                </motion.div>
              );
            }
          )}

        </div>

      </section>

      {/* ================= TEAM ================= */}
      <section className="mx-auto mt-32 max-w-7xl">

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

          className="mb-20 text-center"
        >

          <h2 className="text-5xl font-black">

            Meet The Team

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted">

            A multidisciplinary team building the next generation of AI-powered
            nanotoxicity research infrastructure.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {teamMembers.map(
            (
              member,
              index
            ) => (

              <motion.div
                key={member.name}

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

                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/50 p-8 text-center backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-[0_0_100px_rgba(124,58,237,0.18)]"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Avatar */}
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-cyan-400 text-3xl font-black text-white">

                    {member.name.charAt(
                      0
                    )}

                  </div>

                  <h3 className="text-2xl font-bold">

                    {member.name}

                  </h3>

                  <p className="mt-3 text-muted">

                    {member.role}

                  </p>

                </div>

              </motion.div>
            )
          )}

        </div>

      </section>

    </main>
  );
}