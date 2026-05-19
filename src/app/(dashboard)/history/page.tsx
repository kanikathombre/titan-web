"use client";

import {
  EmptyState,
} from "@/components/ui/empty-state";

import {
  TableSkeleton,
} from "@/components/ui/table-skeleton";

import { toast } from "sonner";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import Papa from "papaparse";

import {
  format,
} from "date-fns";

import {
  Download,
  RotateCcw,
  Trash2,
  Activity,
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Input,
} from "@/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Prediction = {
  id: number;
  timestamp: string;
  cellLine: string;
  dose: number;
  time: number;
  size: number;
  verdict: string;
  prob: number;
  confidence: number;
};

export default function HistoryPage() {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  const mockData: Prediction[] =
    mounted
      ? Array.from(
          { length: 500 },
          (_, i) => ({
            id: i + 1,

            timestamp:
              new Date(
                Date.now() -
                  i * 10000000
              ).toISOString(),

            cellLine: [
              "HEK293",
              "A549",
              "MCF7",
            ][i % 3],

            dose:
              Math.floor(
                Math.random() * 100
              ),

            time:
              Math.floor(
                Math.random() * 48
              ),

            size:
              Math.floor(
                Math.random() * 100
              ),

            verdict:
              Math.random() > 0.5
                ? "Toxic"
                : "Safe",

            prob:
              Math.floor(
                Math.random() * 100
              ),

            confidence:
              Math.floor(
                Math.random() * 100
              ),
          })
        )
      : [];

  const [data, setData] =
    useState<
      Prediction[]
    >([]);

  useEffect(() => {

    if (mounted) {

      setData(
        mockData
      );

    }

  }, [mounted]);

  const [verdictFilter, setVerdictFilter] =
    useState("all");

  const [cellLineFilter, setCellLineFilter] =
    useState("all");

  const [searchDate, setSearchDate] =
    useState("");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [sortKey, setSortKey] =
    useState<
      keyof Prediction
    >("timestamp");

  const [sortDirection, setSortDirection] =
    useState<
      "asc" | "desc"
    >("desc");

  function handleSort(
    key: keyof Prediction
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

  const filteredData =
    useMemo(() => {

      let filtered =
        [...data];

      if (
        verdictFilter !==
        "all"
      ) {

        filtered =
          filtered.filter(
            (item) =>
              item.verdict ===
              verdictFilter
          );
      }

      if (
        cellLineFilter !==
        "all"
      ) {

        filtered =
          filtered.filter(
            (item) =>
              item.cellLine ===
              cellLineFilter
          );
      }

      if (searchDate) {

        filtered =
          filtered.filter(
            (item) =>
              item.timestamp.startsWith(
                searchDate
              )
          );
      }

      if (searchQuery) {

        filtered =
          filtered.filter(
            (item) =>
              item.cellLine
                .toLowerCase()
                .includes(
                  searchQuery.toLowerCase()
                ) ||

              item.verdict
                .toLowerCase()
                .includes(
                  searchQuery.toLowerCase()
                ) ||

              String(item.id).includes(
                searchQuery
              )
          );
      }

      filtered.sort(
        (a, b) => {

          const direction =
            sortDirection ===
            "asc"
              ? 1
              : -1;

          if (
            typeof a[
              sortKey
            ] === "number"
          ) {

            return (
              ((a[
                sortKey
              ] as number) -
                (b[
                  sortKey
                ] as number)) *
              direction
            );
          }

          return (
            String(
              a[
                sortKey
              ]
            ).localeCompare(
              String(
                b[
                  sortKey
                ]
              )
            ) * direction
          );
        }
      );

      return filtered;

    }, [
      data,
      verdictFilter,
      cellLineFilter,
      searchDate,
      searchQuery,
      sortKey,
      sortDirection,
    ]);

  function exportCSV() {

    try {

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
        "prediction-history.csv";

      a.click();

      toast.success(
        "History exported successfully"
      );

    } catch {

      toast.error(
        "Failed to export history"
      );
    }
  }

  function clearHistory() {

    const confirmed =
      window.confirm(
        "Clear entire prediction history?"
      );

    if (confirmed) {

      try {

        setData([]);

        toast.success(
          "Prediction history cleared"
        );

      } catch {

        toast.error(
          "Failed to clear history"
        );
      }
    }
  }

  function rerunPrediction(
    id: number
  ) {

    toast.success(
      `Prediction #${id} re-run started`
    );
  }

  if (!mounted) {

    return (

      <div className="mx-auto max-w-7xl">

        <TableSkeleton />

      </div>

    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* HEADER */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-5xl font-black text-transparent">

            Prediction History

          </h1>

          <p className="mt-3 text-white/45">

            Review and manage all
            past nanoparticle
            predictions.

          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          <Button
            onClick={
              exportCSV
            }
            className="border border-cyan-500/10 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
          >

            <Download className="mr-2 h-4 w-4" />

            Export CSV

          </Button>

          <Button
            onClick={
              clearHistory
            }
            className="border border-red-500/10 bg-red-500/10 text-red-300 hover:bg-red-500/20"
          >

            <Trash2 className="mr-2 h-4 w-4" />

            Clear History

          </Button>

        </div>

      </div>

      {/* STATS */}
      <div className="grid gap-4 md:grid-cols-4">

        {[
          {
            label:
              "Total Predictions",

            value:
              data.length,

            icon:
              Activity,
          },

          {
            label:
              "Safe Samples",

            value:
              data.filter(
                (d) =>
                  d.verdict ===
                  "Safe"
              ).length,

            icon:
              ShieldCheck,
          },

          {
            label:
              "Toxic Samples",

            value:
              data.filter(
                (d) =>
                  d.verdict ===
                  "Toxic"
              ).length,

            icon:
              AlertTriangle,
          },

          {
            label:
              "Avg Confidence",

            value: `${Math.round(
              data.reduce(
                (a, b) =>
                  a +
                  b.confidence,
                0
              ) / data.length
            )}%`,

            icon:
              BrainCircuit,
          },
        ].map((item) => {

          const Icon =
            item.icon;

          return (
            <Card
              key={
                item.label
              }
              className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-xl"
            >

              <CardContent className="flex items-center justify-between p-6">

                <div>

                  <p className="text-sm text-white/45">

                    {
                      item.label
                    }

                  </p>

                  <h2 className="mt-3 text-4xl font-black text-white">

                    {
                      item.value
                    }

                  </h2>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className="h-8 w-8 text-cyan-400" />

                </div>

              </CardContent>

            </Card>
          );
        })}
      </div>

      {/* FILTERS */}
      <Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-xl">

        <CardContent className="grid gap-4 p-6 md:grid-cols-4">

          <Input
            placeholder="Search predictions..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(
                e.target.value
              )
            }
            className="border-cyan-500/10 bg-[#020817] text-white placeholder:text-white/30"
          />

          <Select
            onValueChange={
              setVerdictFilter
            }
          >

            <SelectTrigger className="border-cyan-500/10 bg-[#020817] text-white">

              <SelectValue placeholder="Filter by verdict" />

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

          <Select
            onValueChange={
              setCellLineFilter
            }
          >

            <SelectTrigger className="border-cyan-500/10 bg-[#020817] text-white">

              <SelectValue placeholder="Filter by cell line" />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="all">

                All

              </SelectItem>

              <SelectItem value="HEK293">

                HEK293

              </SelectItem>

              <SelectItem value="A549">

                A549

              </SelectItem>

              <SelectItem value="MCF7">

                MCF7

              </SelectItem>

            </SelectContent>

          </Select>

          <Input
            type="date"
            value={searchDate}
            onChange={(e) =>
              setSearchDate(
                e.target.value
              )
            }
            className="border-cyan-500/10 bg-[#020817] text-white"
          />

        </CardContent>

      </Card>

      {/* EMPTY */}
      {filteredData.length === 0 && (

        <EmptyState
          title="No Predictions Found"
          description="Start running toxicity predictions to populate your history."
        />

      )}

      {/* TABLE */}
      {filteredData.length >
        0 && (

        <Card className="border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-xl">

          <CardContent className="overflow-auto p-6">

            <table className="w-full border-collapse">

              <thead>

                <tr className="border-b border-cyan-500/10">

                  {[
                    "timestamp",
                    "cellLine",
                    "dose",
                    "time",
                    "size",
                    "verdict",
                    "prob",
                    "confidence",
                  ].map(
                    (key) => (

                      <th
                        key={key}
                        onClick={() =>
                          handleSort(
                            key as keyof Prediction
                          )
                        }
                        className="cursor-pointer p-4 text-left capitalize text-white/60 transition-colors hover:text-cyan-300"
                      >

                        {key}

                      </th>
                    )
                  )}

                  <th className="p-4 text-left text-white/60">

                    Actions

                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredData.map(
                  (
                    item
                  ) => (

                    <tr
                      key={item.id}
                      className="border-b border-cyan-500/10 transition-colors hover:bg-cyan-500/[0.03]"
                    >

                      <td className="p-4 text-white/80">

                        {format(
                          new Date(
                            item.timestamp
                          ),
                          "PPpp"
                        )}

                      </td>

                      <td className="p-4 text-white">

                        {
                          item.cellLine
                        }

                      </td>

                      <td className="p-4 text-white/80">

                        {item.dose}

                      </td>

                      <td className="p-4 text-white/80">

                        {item.time}

                      </td>

                      <td className="p-4 text-white/80">

                        {item.size}

                      </td>

                      <td className="p-4">

                        <span
                          className={`rounded-full border px-3 py-1 text-sm font-medium ${
                            item.verdict ===
                            "Toxic"
                              ? "border-red-500/20 bg-red-500/10 text-red-400"
                              : "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                          }`}
                        >

                          {
                            item.verdict
                          }

                        </span>

                      </td>

                      <td className="p-4 text-white/80">

                        {item.prob}%

                      </td>

                      <td className="p-4 text-white/80">

                        {
                          item.confidence
                        }
                        %

                      </td>

                      <td className="p-4">

                        <Button
                          size="sm"
                          onClick={() =>
                            rerunPrediction(
                              item.id
                            )
                          }
                          className="border border-cyan-500/10 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
                        >

                          <RotateCcw className="mr-2 h-4 w-4" />

                          Re-run

                        </Button>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </CardContent>

        </Card>
      )}

    </div>
  );
}