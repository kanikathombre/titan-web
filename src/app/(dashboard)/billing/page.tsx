"use client";

import {
  CreditCard,
  TrendingUp,
  Receipt,
  Sparkles,
  Crown,
  Activity,
  Wallet,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import { toast } from "sonner";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Button,
} from "@/components/ui/button";

const invoices = [
  {
    id: "INV-2026-001",
    date: "May 12, 2026",
    amount: "$49.00",
    status: "Paid",
  },

  {
    id: "INV-2026-002",
    date: "Apr 12, 2026",
    amount: "$49.00",
    status: "Paid",
  },

  {
    id: "INV-2026-003",
    date: "Mar 12, 2026",
    amount: "$49.00",
    status: "Paid",
  },
];

export default function BillingPage() {

  return (

    <div className="mx-auto max-w-7xl space-y-8">

      {/* HERO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >

        <Card className="overflow-hidden rounded-[36px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

          <CardContent className="relative flex flex-col justify-between gap-10 overflow-hidden p-10 lg:flex-row lg:items-center">

            {/* LEFT */}
            <div className="relative z-10">

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-500/10 bg-cyan-500/10 px-5 py-2 text-cyan-300">

                <Sparkles className="h-4 w-4" />

                Billing Overview

              </div>

              <h1 className="bg-gradient-to-r from-white via-white to-cyan-300 bg-clip-text text-6xl font-black text-transparent">

                NanoToxi Billing

              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/45">

                Manage subscriptions, invoices,
                usage analytics, and AI platform access.

              </p>

            </div>

            {/* RIGHT ICON */}
            <div className="relative flex items-center justify-center">

              <div className="absolute h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full border border-cyan-500/10 bg-cyan-500/10">

                <Wallet className="h-20 w-20 text-cyan-400" />

              </div>

            </div>

          </CardContent>

        </Card>

      </motion.div>

      {/* TOP STATS */}
      <div className="grid gap-6 lg:grid-cols-4">

        {[
          {
            title: "Current Plan",
            value: "Pro Research",
            icon: Crown,
          },

          {
            title: "Monthly Spend",
            value: "$49",
            icon: CreditCard,
          },

          {
            title: "Predictions",
            value: "2,140",
            icon: Activity,
          },

          {
            title: "API Requests",
            value: "12.8K",
            icon: TrendingUp,
          },
        ].map((item, i) => {

          const Icon =
            item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
            >

              <Card className="rounded-[30px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

                <CardContent className="space-y-6 p-7">

                  <div className="flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                      <Icon className="h-8 w-8 text-cyan-400" />

                    </div>

                    <div className="rounded-full bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">

                      Live

                    </div>

                  </div>

                  <div>

                    <p className="text-white/40">

                      {item.title}

                    </p>

                    <h3 className="mt-2 text-4xl font-black text-white">

                      {item.value}

                    </h3>

                  </div>

                </CardContent>

              </Card>

            </motion.div>
          );
        })}

      </div>

      {/* PLAN + USAGE */}
      <div className="grid gap-8 xl:grid-cols-[1.1fr_1fr]">

        {/* CURRENT PLAN */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <Card className="rounded-[32px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

            <CardContent className="space-y-8 p-8">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-black text-white">

                    Current Subscription

                  </h2>

                  <p className="mt-2 text-white/45">

                    Premium AI research plan

                  </p>

                </div>

                <div className="rounded-full bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">

                  ACTIVE

                </div>

              </div>

              <div className="rounded-[28px] border border-cyan-500/10 bg-[#020817]/80 p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-5xl font-black text-white">

                      Pro Research

                    </h3>

                    <p className="mt-3 max-w-xl text-white/45">

                      Unlimited nanoparticle predictions,
                      AI analytics, dataset management,
                      and API access.

                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-white/45">

                      Monthly Cost

                    </p>

                    <h4 className="mt-2 text-5xl font-black text-cyan-400">

                      $49

                    </h4>

                    <p className="mt-1 text-white/35">

                      per month

                    </p>

                  </div>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                <Button
                  onClick={() =>
                    toast.success(
                      "Plan upgrade flow coming soon"
                    )
                  }
                  className="h-12 rounded-2xl bg-cyan-400 px-6 text-base font-semibold text-black hover:bg-cyan-300"
                >

                  Upgrade Plan

                </Button>

                <Button
                  variant="outline"
                  className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white hover:bg-cyan-500/10"
                >

                  Billing History

                </Button>

              </div>

            </CardContent>

          </Card>

        </motion.div>

        {/* USAGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
        >

          <Card className="rounded-[32px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

            <CardContent className="space-y-8 p-8">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <TrendingUp className="h-7 w-7 text-cyan-400" />

                </div>

                <div>

                  <h2 className="text-3xl font-black text-white">

                    Usage Analytics

                  </h2>

                  <p className="mt-1 text-white/45">

                    Real-time platform usage

                  </p>

                </div>

              </div>

              {/* PREDICTIONS */}
              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-white/60">

                    Predictions Used

                  </span>

                  <span className="font-bold text-white">

                    2,140 / 5,000

                  </span>

                </div>

                <div className="h-4 overflow-hidden rounded-full bg-white/5">

                  <div className="h-full w-[43%] rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300" />

                </div>

              </div>

              {/* API */}
              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-white/60">

                    API Requests

                  </span>

                  <span className="font-bold text-white">

                    12,842 / 25,000

                  </span>

                </div>

                <div className="h-4 overflow-hidden rounded-full bg-white/5">

                  <div className="h-full w-[52%] rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300" />

                </div>

              </div>

              {/* STORAGE */}
              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-white/60">

                    Dataset Storage

                  </span>

                  <span className="font-bold text-white">

                    78GB / 150GB

                  </span>

                </div>

                <div className="h-4 overflow-hidden rounded-full bg-white/5">

                  <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300" />

                </div>

              </div>

            </CardContent>

          </Card>

        </motion.div>

      </div>

      {/* INVOICES */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
      >

        <Card className="rounded-[32px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

          <CardContent className="space-y-8 p-8">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Receipt className="h-7 w-7 text-cyan-400" />

                </div>

                <div>

                  <h2 className="text-3xl font-black text-white">

                    Recent Invoices

                  </h2>

                  <p className="mt-1 text-white/45">

                    Latest payment transactions

                  </p>

                </div>

              </div>

              <div className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-300">

                Auto Synced

              </div>

            </div>

            <div className="overflow-hidden rounded-[28px] border border-cyan-500/10">

              <table className="w-full border-collapse">

                <thead className="bg-white/[0.03]">

                  <tr className="border-b border-cyan-500/10 text-left">

                    <th className="p-5 text-white/50">

                      Invoice ID

                    </th>

                    <th className="p-5 text-white/50">

                      Date

                    </th>

                    <th className="p-5 text-white/50">

                      Amount

                    </th>

                    <th className="p-5 text-white/50">

                      Status

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {invoices.map(
                    (invoice) => (

                      <tr
                        key={
                          invoice.id
                        }
                        className="border-b border-cyan-500/5 transition-all duration-300 hover:bg-white/[0.02]"
                      >

                        <td className="p-5 font-medium text-white">

                          {invoice.id}

                        </td>

                        <td className="p-5 text-white/60">

                          {invoice.date}

                        </td>

                        <td className="p-5 font-semibold text-cyan-300">

                          {invoice.amount}

                        </td>

                        <td className="p-5">

                          <span className="rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">

                            {invoice.status}

                          </span>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

          </CardContent>

        </Card>

      </motion.div>

    </div>
  );
}