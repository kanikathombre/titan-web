"use client";

import {
  motion,
  useInView,
} from "framer-motion";

import {
  useRef,
  useState,
  useEffect,
} from "react";

import NanoDashboard from "./nano-dashboard";

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

function StepSection({
  children,
  index,
  activeStep,
  setActiveStep,
}: any) {

  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.7,
  });

  useEffect(() => {

    if (inView) {
      setActiveStep(index);
    }

  }, [inView, index, setActiveStep]);

  const isActive =
    activeStep === index;

  return (
    <motion.div
      ref={ref}

      animate={{
        opacity: isActive ? 1 : 0.08,
        scale: isActive ? 1 : 0.95,
        filter: isActive
          ? "blur(0px)"
          : "blur(3px)",
      }}

      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HowItWorks() {

  const [activeStep, setActiveStep] =
    useState(0);

  return (

    <section className="relative overflow-hidden bg-[#020617]">

      {/* CINEMATIC BACKGROUND */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.03] blur-[180px]" />

        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.02] blur-[140px]" />

      </div>

      <div className="mx-auto max-w-[1920px] px-6 lg:px-10">

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
          className="
            relative
            flex
            min-h-[28vh]
            flex-col
            justify-end
            pb-18
            items-start
            text-left
          "
        >

          {/* FLOATING PARTICLES */}

          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[6%]
              top-[35%]
              h-6
              w-6
              rounded-full
              bg-white
              blur-[1px]
              shadow-[0_0_30px_rgba(255,255,255,0.9)]
            "
          />

          <motion.div
            animate={{
              y: [0, 25, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[22%]
              top-[68%]
              h-5
              w-5
              rounded-full
              bg-cyan-400
              shadow-[0_0_30px_rgba(34,211,238,0.8)]
            "
          />

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[20%]
              top-[28%]
              h-5
              w-5
              rounded-full
              bg-cyan-400
              shadow-[0_0_30px_rgba(34,211,238,0.8)]
            "
          />

          <motion.div
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[10%]
              bottom-[12%]
              h-6
              w-6
              rounded-full
              bg-violet-500
              shadow-[0_0_30px_rgba(139,92,246,0.9)]
            "
          />

          {/* CONNECTING LINE */}

          <div className="absolute right-[22%] top-[30%] hidden h-[1px] w-[180px] rotate-[28deg] bg-cyan-400/20 lg:block" />

          {/* OVERVIEW */}

          <p
            className="
              orbitron
              mb-10
              text-[12px]
              tracking-[0.45em]
              text-cyan-400
            "
          >
            OVERVIEW
          </p>

          {/* TITLE */}

          <h2
            className="
              orbitron
              max-w-none
              text-left
              text-[90px]
              font-black
              leading-[0.9]
              tracking-[-0.03em]
              text-white
              drop-shadow-[0_0_24px_rgba(255,255,255,0.20)]
            "
          >

            How Titan Works

          </h2>

          {/* SUBTEXT */}

          <p
            className="
              mt-10
              max-w-[900px]
              text-left
              text-[20px]
              leading-[0]
              text-white/35
            "
          >

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
              left-[0px]
              top-[-10px]
              hidden
              h-full
              w-[1px]
              bg-cyan-400/15
              lg:block
            "
          />

          <div className="space-y-0">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (

                <StepSection
                  key={step.id}
                  index={index}
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                >

                  <div
                    className={`
                      relative isolate
                      grid
                      items-center
                      gap-40
                      lg:grid-cols-[0.65fr_1.35fr]
                      transition-all
                      duration-700
                      ${index !== 0 ? "-mt-40" : ""}
                    `}
                  >

                    {/* LEFT CONTENT */}

                    <div className="relative pl-8">

                      {/* TIMELINE DOT */}

                      <div
                        className="
                          absolute
                          left-[0px]
                          translate-x-[-50%]
                          top-[-100px]
                          hidden
                          h-4
                          w-4
                          rounded-full
                          border
                          border-cyan-400/70
                          bg-[#020817]
                          lg:block
                        "
                      >

                        <div
                          className="
                            absolute
                            inset-[3px]
                            rounded-full
                            bg-cyan-400
                            shadow-[0_0_18px_rgba(34,211,238,0.95)]
                          "
                        />

                      </div>

                      {/* STEP HEADER */}

                      <div className="relative top-[-110px] mb-6 flex items-center gap-4">

                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-cyan-500/[0.04]
                            backdrop-blur-xl
                          "
                        >

                          <Icon className="h-6 w-6 text-cyan-400" />

                        </div>

                        <span
                          className="
                            orbitron
                            text-[14px]
                            tracking-[0.38em]
                            text-cyan-300/95
                          "
                        >

                          Step {step.id}

                        </span>

                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          relative
                          -mt-28
                          orbitron
                          text-[45px]
                          leading-[0.88]
                          tracking-[-0.06em]
                          font-black
                          text-white
                          drop-shadow-[0_0_18px_rgba(255,255,255,0.14)]
                        "
                      >

                        {step.title}

                      </h3>

                      {/* SUBTITLE */}

                      <p className="mt-5 text-[18px] text-white/60">

                        {step.subtitle}

                      </p>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-4
                          max-w-lg
                          text-[17px]
                          leading-[2.1]
                          text-white/35
                        "
                      >

                        {step.description}

                      </p>

                      {/* BUTTON */}

                      {index === 0 && (
                        <button
                          className="
                            mt-8
                            rounded-2xl
                            border
                            border-cyan-400/40
                            bg-cyan-400
                            px-6
                            py-4
                            text-lg
                            font-semibold
                            text-black
                            shadow-[0_0_30px_rgba(34,211,238,0.25)]
                            transition-all
                            duration-500
                            hover:scale-[1.02]
                          "
                        >

                          Try Live Demo →

                        </button>
                      )}

                    </div>

                    {/* RIGHT VISUAL */}

                    <div className="relative pl-20">

                      <div
                        className="
                          relative
                          h-[600px]
                          overflow-hidden
                          rounded-[36px]
                          bg-[#030712]/98
                          backdrop-blur-3xl
                          shadow-[0_0_80px_rgba(34,211,238,0.015)]
                        "
                      >

                        <div className="absolute inset-0 bg-black/25" />

                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] via-transparent to-blue-500/[0.02]" />

                        <div className="relative h-[720px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/90">

                          <NanoDashboard step={step.id} />

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

                    </div>

                  </div>

                </StepSection>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}