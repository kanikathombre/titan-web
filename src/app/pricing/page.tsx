"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  Check,
  X,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",

    price: "$29",

    description:
      "Perfect for individual researchers and academic projects.",

    features: [
      "100 toxicity predictions",
      "Basic AI analytics",
      "Community support",
      "CSV export",
    ],

    popular: false,
  },

  {
    name: "Professional",

    price: "$99",

    description:
      "Advanced AI workflows for biotech teams and startups.",

    features: [
      "Unlimited predictions",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Model benchmarking",
    ],

    popular: true,
  },

  {
    name: "Enterprise",

    price: "Custom",

    description:
      "Enterprise-scale nanotoxicity intelligence platform.",

    features: [
      "Custom AI models",
      "Dedicated infrastructure",
      "24/7 support",
      "Private deployment",
      "Advanced compliance",
    ],

    popular: false,
  },
];

const comparisonFeatures = [
  {
    feature:
      "Toxicity Predictions",

    starter: true,
    pro: true,
    enterprise: true,
  },

  {
    feature:
      "AI Analytics",

    starter: true,
    pro: true,
    enterprise: true,
  },

  {
    feature:
      "API Access",

    starter: false,
    pro: true,
    enterprise: true,
  },

  {
    feature:
      "Custom AI Models",

    starter: false,
    pro: false,
    enterprise: true,
  },

  {
    feature:
      "Private Deployment",

    starter: false,
    pro: false,
    enterprise: true,
  },

  {
    feature:
      "Priority Support",

    starter: false,
    pro: true,
    enterprise: true,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-28 text-foreground">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-1/3 top-20 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />

      </div>

      {/* Header */}
      <section className="mx-auto max-w-4xl text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-surface px-5 py-2 text-sm text-muted backdrop-blur-xl">

            Flexible Pricing

          </div>

          <h1 className="text-5xl font-black md:text-7xl">

            Simple Pricing
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">

              {" "}
              For AI Research

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">

            Scale nanotoxicity prediction workflows with enterprise-grade AI,
            advanced analytics, and flexible infrastructure designed for modern
            biotech teams.

          </p>

        </motion.div>

      </section>

      {/* Pricing Cards */}
      <section className="mx-auto mt-24 grid max-w-7xl gap-8 lg:grid-cols-3">

        {pricingPlans.map(
          (plan, index) => (

            <motion.div
              key={plan.name}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay:
                  index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              className={`group relative overflow-hidden rounded-[2rem] border p-10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 ${
                plan.popular
                  ? "border-primary/40 bg-primary/10 shadow-[0_0_80px_rgba(124,58,237,0.25)]"
                  : "border-white/10 bg-surface/50 hover:border-primary/20"
              }`}
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {plan.popular && (

                <div className="absolute right-6 top-6 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">

                  MOST POPULAR

                </div>
              )}

              <div className="relative z-10">

                <h2 className="text-3xl font-black">

                  {plan.name}

                </h2>

                <div className="mt-6 flex items-end gap-2">

                  <span className="text-5xl font-black">

                    {plan.price}

                  </span>

                  {plan.price !==
                    "Custom" && (

                    <span className="mb-1 text-muted">

                      /month

                    </span>
                  )}

                </div>

                <p className="mt-5 text-muted leading-relaxed">

                  {plan.description}

                </p>

                <div className="mt-8 space-y-4">

                  {plan.features.map(
                    (feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >

                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">

                          <Check className="h-4 w-4 text-primary" />

                        </div>

                        <span className="text-sm">

                          {feature}

                        </span>

                      </div>
                    )
                  )}

                </div>

                <Link href="/sign-up">

                  <button
                    className={`mt-10 w-full rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary text-white hover:opacity-90"
                        : "border border-white/10 bg-white/5 hover:border-primary hover:bg-primary/10"
                    }`}
                  >

                    Get Started

                  </button>

                </Link>

              </div>

            </motion.div>
          )
        )}

      </section>

      {/* Comparison Table */}
      <section className="mx-auto mt-32 max-w-6xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          viewport={{
            once: true,
          }}

          className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface/40 backdrop-blur-2xl"
        >

          <div className="border-b border-white/10 p-8">

            <h2 className="text-4xl font-black">

              Feature Comparison

            </h2>

            <p className="mt-3 text-muted">

              Compare plans and capabilities across all tiers.

            </p>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px]">

              <thead>

                <tr className="border-b border-white/10">

                  <th className="px-8 py-5 text-left">

                    Features

                  </th>

                  <th className="px-8 py-5 text-center">

                    Starter

                  </th>

                  <th className="px-8 py-5 text-center">

                    Professional

                  </th>

                  <th className="px-8 py-5 text-center">

                    Enterprise

                  </th>

                </tr>

              </thead>

              <tbody>

                {comparisonFeatures.map(
                  (item) => (

                    <tr
                      key={item.feature}
                      className="border-b border-white/5"
                    >

                      <td className="px-8 py-5 font-medium">

                        {item.feature}

                      </td>

                      {[item.starter,
                        item.pro,
                        item.enterprise,
                      ].map(
                        (
                          value,
                          idx
                        ) => (

                          <td
                            key={idx}
                            className="px-8 py-5"
                          >

                            <div className="flex justify-center">

                              {value ? (

                                <Check className="h-5 w-5 text-emerald-400" />

                              ) : (

                                <X className="h-5 w-5 text-red-400" />

                              )}

                            </div>

                          </td>
                        )
                      )}

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </motion.div>

      </section>

    </main>
  );
}