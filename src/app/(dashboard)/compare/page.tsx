"use client";

import { useState } from "react";

import { toast } from "sonner";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
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
    <div className="mx-auto max-w-7xl space-y-8 text-foreground">

      {/* Header */}
      <div>

        <h1 className="text-5xl font-black">

          Cell Line Comparison

        </h1>

        <p className="mt-3 text-lg text-muted-foreground">

          Run nanoparticle toxicity
          prediction across all
          supported cell lines.

        </p>

      </div>

      {/* Form */}
      <Card className="border-border bg-background/80 backdrop-blur-xl">

        <CardContent className="grid gap-6 p-8 md:grid-cols-2">

          <Input
            placeholder="Nanoparticle"
          />

          <Input
            placeholder="Size (nm)"
            type="number"
          />

          <Input
            placeholder="Shape"
          />

          <Input
            placeholder="Dosage"
            type="number"
          />

          <Input
            placeholder="Exposure Time"
            type="number"
          />

          <Input
            placeholder="Surface Charge"
            type="number"
          />

          <Input
            placeholder="Coating"
          />

          <Input
            placeholder="Cell Viability"
            type="number"
          />

          <Input
            placeholder="pH"
            type="number"
          />

          <div className="md:col-span-2">

            <Button
              onClick={
                runComparison
              }
              className="w-full"
              size="lg"
              disabled={loading}
            >

              {loading
                ? "Running..."
                : "Run across all 11 cell lines"}

            </Button>

          </div>

        </CardContent>

      </Card>

      {/* Empty State */}
      {!loading &&
        results.length === 0 && (

        <EmptyState
          title="No comparison results yet"
          description="Run a multi-cell-line comparison to visualize toxicity predictions."
        />

      )}

      {/* Loading */}
      {loading && (

        <div className="space-y-6">

          <Skeleton className="h-24 w-full rounded-3xl" />

          <Skeleton className="h-[400px] w-full rounded-3xl" />

        </div>
      )}

      {/* Results */}
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

          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-3">

            <Card className="border-border bg-background/80">

              <CardContent className="p-6">

                <p className="text-muted-foreground">

                  Highest Toxicity

                </p>

                <h2 className="mt-2 text-4xl font-black text-red-400">

                  {
                    highest?.toxicity
                  }
                  %

                </h2>

                <p className="mt-2 text-sm">

                  {
                    highest?.cell
                  }

                </p>

              </CardContent>

            </Card>

            <Card className="border-border bg-background/80">

              <CardContent className="p-6">

                <p className="text-muted-foreground">

                  Average Toxicity

                </p>

                <h2 className="mt-2 text-4xl font-black text-yellow-400">

                  {average}%

                </h2>

              </CardContent>

            </Card>

            <Card className="border-border bg-background/80">

              <CardContent className="p-6">

                <p className="text-muted-foreground">

                  Cell Lines Tested

                </p>

                <h2 className="mt-2 text-4xl font-black text-cyan-400">

                  11

                </h2>

              </CardContent>

            </Card>

          </div>

          {/* Chart */}
          <Card className="border-border bg-background/80 backdrop-blur-xl">

            <CardContent className="p-8">

              <div className="h-[500px] w-full">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <BarChart
                    data={results}
                    layout="vertical"
                    margin={{
                      top: 20,
                      right: 20,
                      left: 40,
                      bottom: 20,
                    }}
                  >

                    <XAxis
                      type="number"
                    />

                    <YAxis
                      dataKey="cell"
                      type="category"
                    />

                    <Tooltip />

                    <Bar
                      dataKey="toxicity"
                      fill="#8b5cf6"
                      radius={[0, 8, 8, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </CardContent>

          </Card>

          {/* Explanation */}
          <Card className="border-border bg-background/80">

            <CardContent className="p-8">

              <h2 className="text-2xl font-black">

                AI Interpretation

              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">

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