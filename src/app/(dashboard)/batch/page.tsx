"use client";

import {
  EmptyState,
} from "@/components/ui/empty-state";

import { toast } from "sonner";

import { useState } from "react";

import Papa from "papaparse";

import {
  motion,
} from "framer-motion";

import {
  Download,
  Upload,
  ArrowUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

type CsvRow = {
  nanoparticle: string;
  size: string;
  shape: string;
  dosage: string;
};

type ResultRow = CsvRow & {
  toxicity?: number;
  verdict?: string;
  error?: string;
};

export default function BatchPage() {

  const [rows, setRows] =
    useState<CsvRow[]>([]);

  const [results, setResults] =
    useState<ResultRow[]>([]);

  const [sortKey, setSortKey] =
    useState<
      "nanoparticle" |
      "toxicity" |
      "verdict"
    >("toxicity");

  const [sortDirection, setSortDirection] =
    useState<
      "asc" | "desc"
    >("desc");

  const [loading, setLoading] =
    useState(false);

  function handleFileUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      event.target.files?.[0];

    if (!file) {

      toast.error(
        "No CSV file selected"
      );

      return;
    }

    Papa.parse<CsvRow>(
      file,
      {
        header: true,

        complete: (
          parsed
        ) => {

          setRows(
            parsed.data
          );

          toast.success(
            "CSV parsed successfully"
          );
        },

        error: () => {

          toast.error(
            "Failed to parse CSV"
          );
        },
      }
    );
  }

  async function runBatchPredictions() {

    if (rows.length === 0) {

      toast.error(
        "Upload a CSV file first"
      );

      return;
    }

    setLoading(true);

    try {

      const batchResults =
        await Promise.all(

          rows.map(
            async (row) => {

              try {

                await new Promise(
                  (resolve) =>
                    setTimeout(
                      resolve,
                      300
                    )
                );

                if (
                  Math.random() < 0.1
                ) {

                  throw new Error(
                    "Prediction failed"
                  );
                }

                const toxicity =
                  Math.floor(
                    Math.random() * 100
                  );

                return {
                  ...row,

                  toxicity,

                  verdict:
                    toxicity > 50
                      ? "Toxic"
                      : "Safe",
                };

              } catch {

                return {
                  ...row,

                  error:
                    "Failed",
                };
              }
            }
          )
        );

      setResults(
        batchResults
      );

      toast.success(
        "Batch predictions completed"
      );

    } catch {

      toast.error(
        "Batch prediction failed"
      );

    } finally {

      setLoading(false);
    }
  }

  function handleSort(
    key:
      | "nanoparticle"
      | "toxicity"
      | "verdict"
  ) {

    if (sortKey === key) {

      setSortDirection(
        sortDirection === "asc"
          ? "desc"
          : "asc"
      );

    } else {

      setSortKey(key);

      setSortDirection("asc");

    }
  }

  const sortedResults =
    [...results].sort(
      (a, b) => {

        const direction =
          sortDirection === "asc"
            ? 1
            : -1;

        if (sortKey === "toxicity") {

          return (
            ((a.toxicity ?? 0) -
              (b.toxicity ?? 0)) *
            direction
          );
        }

        return (
          String(
            a[sortKey] ?? ""
          ).localeCompare(
            String(
              b[sortKey] ?? ""
            )
          ) * direction
        );
      }
    );

  function downloadTemplate() {

    try {

      const csv =
        "nanoparticle,size,shape,dosage\nGold,20,Sphere,10\nSilver,90,Rod,100";

      const blob =
        new Blob(
          [csv],
          {
            type:
              "text/csv",
          }
        );

      const url =
        URL.createObjectURL(
          blob
        );

      const a =
        document.createElement(
          "a"
        );

      a.href = url;

      a.download =
        "batch-template.csv";

      a.click();

      toast.success(
        "Template downloaded"
      );

    } catch {

      toast.error(
        "Failed to download template"
      );
    }
  }

  function downloadResults() {

    try {

      const csv =
        Papa.unparse(
          results
        );

      const blob =
        new Blob(
          [csv],
          {
            type:
              "text/csv",
          }
        );

      const url =
        URL.createObjectURL(
          blob
        );

      const a =
        document.createElement(
          "a"
        );

      a.href = url;

      a.download =
        "batch-results.csv";

      a.click();

      toast.success(
        "Results downloaded"
      );

    } catch {

      toast.error(
        "Failed to download results"
      );
    }
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Header */}
      <div>

        <h1 className="text-5xl font-black">

          Batch Prediction

        </h1>

        <p className="mt-3 text-muted-foreground">

          Upload CSV files and
          run predictions across
          multiple nanoparticles.

        </p>

      </div>

      {/* Upload */}
      <Card className="border-border bg-background/80">

        <CardContent className="space-y-6 p-8">

          <div className="flex flex-wrap gap-4">

            <Button
              onClick={
                downloadTemplate
              }
              variant="secondary"
            >

              <Download className="mr-2 h-4 w-4" />

              Download Template

            </Button>

            {results.length > 0 && (

              <Button
                onClick={
                  downloadResults
                }
              >

                <Download className="mr-2 h-4 w-4" />

                Download Results

              </Button>
            )}

          </div>

          {/* Dropzone */}
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/20 p-16 transition hover:bg-muted/40">

            <Upload className="h-10 w-10" />

            <p className="mt-4 text-lg font-medium">

              Upload CSV File

            </p>

            <p className="text-sm text-muted-foreground">

              Drag & drop or click to browse

            </p>

            <input
              type="file"
              accept=".csv"
              className="hidden"
              onChange={
                handleFileUpload
              }
            />

          </label>

        </CardContent>

      </Card>

      {/* Empty State */}
      {rows.length === 0 && (

        <EmptyState
          title="Upload a CSV File"
          description="Upload nanoparticle datasets to begin batch prediction."
        />

      )}

      {/* Preview */}
      {rows.length > 0 && (

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

          <Card className="border-border bg-background/80">

            <CardContent className="space-y-6 overflow-auto p-8">

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-black">

                  CSV Preview

                </h2>

                <Button
                  onClick={
                    runBatchPredictions
                  }
                  disabled={
                    loading
                  }
                >

                  {loading
                    ? "Running..."
                    : "Run Predictions"}

                </Button>

              </div>

              <table className="w-full border-collapse">

                <thead>

                  <tr className="border-b border-border">

                    <th className="p-3 text-left">

                      Nanoparticle

                    </th>

                    <th className="p-3 text-left">

                      Size

                    </th>

                    <th className="p-3 text-left">

                      Shape

                    </th>

                    <th className="p-3 text-left">

                      Dosage

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {rows.map(
                    (
                      row,
                      index
                    ) => (

                      <tr
                        key={
                          index
                        }
                        className="border-b border-border"
                      >

                        <td className="p-3">

                          {
                            row.nanoparticle
                          }

                        </td>

                        <td className="p-3">

                          {row.size}

                        </td>

                        <td className="p-3">

                          {row.shape}

                        </td>

                        <td className="p-3">

                          {
                            row.dosage
                          }

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </CardContent>

          </Card>

        </motion.div>
      )}

      {/* Results */}
      {results.length > 0 && (

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

          <Card className="border-border bg-background/80">

            <CardContent className="overflow-auto p-8">

              <h2 className="mb-6 text-2xl font-black">

                Prediction Results

              </h2>

              <table className="w-full border-collapse">

                <thead>

                  <tr className="border-b border-border">

                    <th
                      onClick={() =>
                        handleSort(
                          "nanoparticle"
                        )
                      }
                      className="cursor-pointer p-3 text-left hover:text-primary"
                    >

                      <div className="flex items-center gap-2">

                        Nanoparticle

                        <ArrowUpDown className="h-4 w-4" />

                      </div>

                    </th>

                    <th
                      onClick={() =>
                        handleSort(
                          "toxicity"
                        )
                      }
                      className="cursor-pointer p-3 text-left hover:text-primary"
                    >

                      <div className="flex items-center gap-2">

                        Toxicity

                        <ArrowUpDown className="h-4 w-4" />

                      </div>

                    </th>

                    <th
                      onClick={() =>
                        handleSort(
                          "verdict"
                        )
                      }
                      className="cursor-pointer p-3 text-left hover:text-primary"
                    >

                      <div className="flex items-center gap-2">

                        Verdict

                        <ArrowUpDown className="h-4 w-4" />

                      </div>

                    </th>

                    <th className="p-3 text-left">

                      Status

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {sortedResults.map(
                    (
                      row,
                      index
                    ) => (

                      <tr
                        key={
                          index
                        }
                        className="border-b border-border"
                      >

                        <td className="p-3">

                          {
                            row.nanoparticle
                          }

                        </td>

                        <td className="p-3">

                          {
                            row.toxicity ??
                            "-"
                          }

                        </td>

                        <td className="p-3">

                          <span
                            className={`rounded-full px-3 py-1 text-sm font-medium ${
                              row.verdict ===
                              "Toxic"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-green-500/20 text-green-400"
                            }`}
                          >

                            {
                              row.verdict ??
                              "Error"
                            }

                          </span>

                        </td>

                        <td className="p-3">

                          {row.error
                            ? "❌ Failed"
                            : "✅ Success"}

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </CardContent>

          </Card>

        </motion.div>
      )}

    </div>
  );
}