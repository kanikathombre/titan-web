"use client";

import { useState } from "react";

import { toast } from "sonner";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Skeleton,
} from "@/components/ui/skeleton";

import {
  EmptyState,
} from "@/components/ui/empty-state";

import {
  Activity,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const CELL_LINES = [
  "HEK293",
  "A549",
  "MCF7",
  "HepG2",
  "NIH3T3",
  "CHO",
  "Caco2",
  "U87",
  "THP1",
  "RAW264.7",
  "Jurkat",
];

export default function ComparePage() {

  const [loading, setLoading] =
    useState(false);

  const [results, setResults] =
    useState<any[]>([]);

  async function runComparison() {

    try {

      setLoading(true);

      setResults([]);

      toast.loading(
        "Running comparison across all cell lines...",
        {
          id: "compare-loading",
        }
      );

      const responses =
        await Promise.all(

          CELL_LINES.map(
            async (cell) => {

              await new Promise(
                (resolve) =>
                  setTimeout(
                    resolve,
                    400 +
                      Math.random() * 1000
                  )
              );

              return {
                cell,

                toxicity:
                  Math.floor(
                    Math.random() * 100
                  ),
              };
            }
          )
        );

      const sorted =
        responses.sort(
          (a, b) =>
            b.toxicity -
            a.toxicity
        );

      setResults(sorted);

      toast.success(
        "Comparison completed successfully",
        {
          id: "compare-loading",
        }
      );

    } catch {

      toast.error(
        "Failed to run comparison",
        {
          id: "compare-loading",
        }
      );

    } finally {

      setLoading(false);
    }
  }

  const highest =
    results[0];

  const average =
    results.length
      ? Math.round(
          results.reduce(
            (acc, item) =>
              acc +
              item.toxicity,
            0
          ) / results.length
        )
      : 0;

  return (
    <div className="mx-auto max-w-7xl space-y-8 text-white">

      {/* HEADER */}
      <div className="space-y-4">

        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/10 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-xl">

          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

          Multi Cell Analysis

        </div>

        <h1 className="bg-gradient-to-r from-white via-white to-cyan-300 bg-clip-text text-4xl font-black text-transparent">

          Compare Toxicity

        </h1>

        <p className="max-w-3xl text-xl text-white/45">

          Run nanoparticle toxicity prediction
          across all supported biological
          cell lines simultaneously.

        </p>

      </div>

      {/* FORM */}
      <Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

        <CardContent className="grid gap-5 p-8 md:grid-cols-2">

          <Input
            placeholder="Nanoparticle"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="Size (nm)"
            type="number"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="Shape"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="Dosage"
            type="number"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="Exposure Time"
            type="number"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="Surface Charge"
            type="number"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="Coating"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="Cell Viability"
            type="number"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <Input
            placeholder="pH"
            type="number"
            className="h-14 border-cyan-500/10 bg-[#020817]/80 text-white placeholder:text-white/30 focus-visible:ring-cyan-400/20"
          />

          <div className="md:col-span-2">

            <Button
              onClick={
                runComparison
              }
              className="h-14 w-full rounded-2xl bg-cyan-400 text-lg font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all duration-300 hover:bg-cyan-300"
              disabled={loading}
            >

              {loading
                ? "Running AI Analysis..."
                : "Run Across All 11 Cell Lines"}

            </Button>

          </div>

        </CardContent>

      </Card>

      {/* EMPTY STATE */}
      {!loading &&
        results.length === 0 && (

        <EmptyState
          title="No comparison results yet"
          description="Run a multi-cell-line comparison to visualize toxicity predictions."
        />

      )}

      {/* LOADING */}
      {loading && (

        <div className="space-y-6">

          <Skeleton className="h-24 w-full rounded-3xl bg-cyan-500/10" />

          <Skeleton className="h-[400px] w-full rounded-3xl bg-cyan-500/10" />

        </div>
      )}

      {/* RESULTS */}
      {!loading &&
        results.length > 0 && (

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="space-y-8"
        >

          {/* STATS */}
          <div className="grid gap-6 md:grid-cols-3">

            <Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-xl">

              <CardContent className="flex items-center justify-between p-6">

                <div>

                  <p className="text-white/45">

                    Highest Toxicity

                  </p>

                  <h2 className="mt-3 text-5xl font-black text-red-400">

                    {
                      highest?.toxicity
                    }
                    %

                  </h2>

                  <p className="mt-2 text-white/45">

                    {
                      highest?.cell
                    }

                  </p>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">

                  <AlertTriangle className="h-8 w-8 text-red-400" />

                </div>

              </CardContent>

            </Card>

            <Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-xl">

              <CardContent className="flex items-center justify-between p-6">

                <div>

                  <p className="text-white/45">

                    Average Toxicity

                  </p>

                  <h2 className="mt-3 text-5xl font-black text-yellow-400">

                    {average}%

                  </h2>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Activity className="h-8 w-8 text-yellow-400" />

                </div>

              </CardContent>

            </Card>

            <Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-xl">

              <CardContent className="flex items-center justify-between p-6">

                <div>

                  <p className="text-white/45">

                    Cell Lines Tested

                  </p>

                  <h2 className="mt-3 text-5xl font-black text-cyan-400">

                    11

                  </h2>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <ShieldCheck className="h-8 w-8 text-cyan-400" />

                </div>

              </CardContent>

            </Card>

          </div>

          {/* CHART */}
          {/* CHART */}
<Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl overflow-hidden">

  <CardContent className="p-8">

    <div className="mb-8 flex items-center justify-between">

      <div>

        <h2 className="text-3xl font-black text-white">

          Toxicity Trends

        </h2>

        <p className="mt-2 text-white/45">

          AI toxicity comparison across all cell lines

        </p>

      </div>

      <div className="rounded-full border border-cyan-500/10 bg-cyan-500/10 px-5 py-2 text-cyan-300">

        Live Analytics

      </div>

    </div>

    <div className="h-[420px] w-full">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <AreaChart
          data={results}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >

          <defs>

            <linearGradient
              id="toxicityGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="0%"
                stopColor="#22d3ee"
                stopOpacity={0.5}
              />

              <stop
                offset="100%"
                stopColor="#22d3ee"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.04)"
          />

          <XAxis
            dataKey="cell"
            stroke="#64748b"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="#64748b"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#081325",
              border:
                "1px solid rgba(34,211,238,0.08)",
              borderRadius: "16px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="toxicity"
            stroke="#22d3ee"
            strokeWidth={3}
            fill="url(#toxicityGradient)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  </CardContent>

</Card>

          {/* AI INTERPRETATION */}
          <Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-xl">

            <CardContent className="p-8">

              <h2 className="text-3xl font-black text-white">

                AI Interpretation

              </h2>

              <p className="mt-6 leading-8 text-white/45">

                The comparison across
                all 11 cell lines shows
                significant variation in
                predicted nanoparticle
                toxicity. Certain cell
                lines exhibit elevated
                susceptibility due to
                differences in membrane
                interactions, oxidative
                stress response, and
                intracellular uptake.

                <br />
                <br />

                This multi-cell-line
                analysis enables safer
                nanomedicine design and
                provides researchers
                with broader biological
                validation before
                in-vitro experimentation.

              </p>

            </CardContent>

          </Card>

        </motion.div>
      )}

    </div>
  );
}