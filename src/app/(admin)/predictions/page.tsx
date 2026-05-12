"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  useSearchParams,
  useRouter,
} from "next/navigation";

import Papa from "papaparse";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Button,
} from "@/components/ui/button";

import {
  Input,
} from "@/components/ui/input";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import {
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Log = {
  id: number;
  timestamp: string;
  user: string;
  inputs: string;
  output: string;
  verdict: string;
  confidence: number;
  latency: number;
};

const PAGE_SIZE = 10;

const logsData =
  Array.from(
    { length: 120 },
    (_, i) => ({
      id: i + 1,

      timestamp:
        `2026-05-${(i % 28) + 1} 14:${(i % 60)
          .toString()
          .padStart(2, "0")}`,

      user: [
        "kanika",
        "vedant",
        "alex",
        "sarah",
      ][i % 4],

      inputs:
        `Gold NP / ${
          10 + (i % 90)
        }nm`,

      output:
        i % 2 === 0
          ? "Toxic"
          : "Safe",

      verdict:
        i % 2 === 0
          ? "Toxic"
          : "Safe",

      confidence:
        70 + (i % 30),

      latency:
        80 + (i % 120),
    })
  );

export default function PredictionsPage() {

  const router =
    useRouter();

  const searchParams =
    useSearchParams();

  const [selectedLog, setSelectedLog] =
    useState<Log | null>(
      null
    );

  const search =
    searchParams.get(
      "search"
    ) || "";

  const verdict =
    searchParams.get(
      "verdict"
    ) || "all";

  function updateQuery(
    key: string,
    value: string
  ) {

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    params.set(
      key,
      value
    );

    if (
      key !== "page"
    ) {

      params.set(
        "page",
        "1"
      );
    }

    router.push(
      `?${params.toString()}`
    );
  }

  const filteredData =
    useMemo(() => {

      return logsData.filter(
        (log) => {

          const matchesSearch =
            log.user
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesVerdict =
            verdict ===
              "all" ||
            log.verdict ===
              verdict;

          return (
            matchesSearch &&
            matchesVerdict
          );
        }
      );

    }, [
      search,
      verdict,
    ]);

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredData.length /
          PAGE_SIZE
      )
    );

  const currentPage =
    Math.min(
      Number(
        searchParams.get(
          "page"
        ) || 1
      ),
      totalPages
    );

  const paginatedData =
    filteredData.slice(
      (currentPage - 1) *
        PAGE_SIZE,

      currentPage *
        PAGE_SIZE
    );

  function exportCSV() {

    const csv =
      Papa.unparse(
        filteredData
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
      "prediction-logs.csv";

    a.click();
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-5xl font-black">

            Prediction Logs

          </h1>

          <p className="mt-3 text-muted-foreground">

            Monitor all model
            predictions across
            the platform.

          </p>

        </div>

        <Button
          onClick={
            exportCSV
          }
        >

          <Download className="mr-2 h-4 w-4" />

          Export CSV

        </Button>

      </div>

      {/* Filters */}
      <Card className="border-border bg-background/80">

        <CardContent className="grid gap-4 p-6 md:grid-cols-2">

          <Input
            placeholder="Search by user..."
            value={search}
            onChange={(e) =>
              updateQuery(
                "search",
                e.target.value
              )
            }
          />

          <Select
            value={verdict}
            onValueChange={(
              value
            ) =>
              updateQuery(
                "verdict",
                value
              )
            }
          >

            <SelectTrigger>

              <SelectValue placeholder="Filter verdict" />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="all">

                All

              </SelectItem>

              <SelectItem value="Safe">

                Safe

              </SelectItem>

              <SelectItem value="Toxic">

                Toxic

              </SelectItem>

            </SelectContent>

          </Select>

        </CardContent>

      </Card>

      {/* Table */}
      <Card className="border-border bg-background/80">

        <CardContent className="overflow-auto p-6">

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b border-border">

                <th className="p-4 text-left">

                  Timestamp

                </th>

                <th className="p-4 text-left">

                  User

                </th>

                <th className="p-4 text-left">

                  Inputs

                </th>

                <th className="p-4 text-left">

                  Verdict

                </th>

                <th className="p-4 text-left">

                  Confidence

                </th>

                <th className="p-4 text-left">

                  Latency

                </th>

              </tr>

            </thead>

            <tbody>

              {paginatedData.map(
                (log) => (

                  <tr
                    key={log.id}
                    onClick={() =>
                      setSelectedLog(
                        log
                      )
                    }
                    className="cursor-pointer border-b border-border transition hover:bg-muted/30"
                  >

                    <td className="p-4">

                      {
                        log.timestamp
                      }

                    </td>

                    <td className="p-4">

                      {
                        log.user
                      }

                    </td>

                    <td className="p-4">

                      {
                        log.inputs
                      }

                    </td>

                    <td className="p-4">

                      <Badge
                        variant={
                          log.verdict ===
                          "Toxic"
                            ? "destructive"
                            : "default"
                        }
                      >

                        {
                          log.verdict
                        }

                      </Badge>

                    </td>

                    <td className="p-4">

                      {
                        log.confidence
                      }
                      %

                    </td>

                    <td className="p-4">

                      {
                        log.latency
                      }
                      ms

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">

            <Button
              variant="secondary"
              disabled={
                currentPage === 1
              }
              onClick={() =>
                updateQuery(
                  "page",
                  String(
                    currentPage - 1
                  )
                )
              }
            >

              <ChevronLeft className="mr-2 h-4 w-4" />

              Previous

            </Button>

            <p className="text-sm text-muted-foreground">

              Page {currentPage} of{" "}
              {totalPages}

            </p>

            <Button
              variant="secondary"
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                updateQuery(
                  "page",
                  String(
                    currentPage + 1
                  )
                )
              }
            >

              Next

              <ChevronRight className="ml-2 h-4 w-4" />

            </Button>

          </div>

        </CardContent>

      </Card>

      {/* Detail Panel */}
      {selectedLog && (

        <Card className="border-border bg-background/80">

          <CardContent className="space-y-4 p-6">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-black">

                Prediction Detail

              </h2>

              <Button
                variant="secondary"
                onClick={() =>
                  setSelectedLog(
                    null
                  )
                }
              >

                Close

              </Button>

            </div>

            <div className="grid gap-4 md:grid-cols-2">

              <p>

                <strong>
                  User:
                </strong>{" "}

                {
                  selectedLog.user
                }

              </p>

              <p>

                <strong>
                  Timestamp:
                </strong>{" "}

                {
                  selectedLog.timestamp
                }

              </p>

              <p>

                <strong>
                  Inputs:
                </strong>{" "}

                {
                  selectedLog.inputs
                }

              </p>

              <p>

                <strong>
                  Output:
                </strong>{" "}

                {
                  selectedLog.output
                }

              </p>

              <p>

                <strong>
                  Confidence:
                </strong>{" "}

                {
                  selectedLog.confidence
                }
                %

              </p>

              <p>

                <strong>
                  Latency:
                </strong>{" "}

                {
                  selectedLog.latency
                }
                ms

              </p>

            </div>

          </CardContent>

        </Card>
      )}

    </div>
  );
}