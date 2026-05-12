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

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-5xl font-black">

            Prediction History

          </h1>

          <p className="mt-3 text-muted-foreground">

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
          >

            <Download className="mr-2 h-4 w-4" />

            Export CSV

          </Button>

          <Button
            variant="destructive"
            onClick={
              clearHistory
            }
          >

            <Trash2 className="mr-2 h-4 w-4" />

            Clear History

          </Button>

        </div>

      </div>

      {/* Filters */}
      <Card className="border-border bg-background/80">

        <CardContent className="grid gap-4 p-6 md:grid-cols-3">

          <Select
            onValueChange={
              setVerdictFilter
            }
          >

            <SelectTrigger>

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

            <SelectTrigger>

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
          />

        </CardContent>

      </Card>

      {/* Empty */}
      
      {filteredData.length === 0 && (

        <EmptyState
            title="No Predictions Found"
            description="Start running toxicity predictions to populate your history."
        />

     )}

      {/* Table */}
      {filteredData.length >
        0 && (

        <Card className="border-border bg-background/80">

          <CardContent className="overflow-auto p-6">

            <table className="w-full border-collapse">

              <thead>

                <tr className="border-b border-border">

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
                        className="cursor-pointer p-4 text-left capitalize hover:text-primary"
                      >

                        {key}

                      </th>
                    )
                  )}

                  <th className="p-4 text-left">

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
                      className="border-b border-border"
                    >

                      <td className="p-4">

                        {format(
                          new Date(
                            item.timestamp
                          ),
                          "PPpp"
                        )}

                      </td>

                      <td className="p-4">

                        {
                          item.cellLine
                        }

                      </td>

                      <td className="p-4">

                        {item.dose}

                      </td>

                      <td className="p-4">

                        {item.time}

                      </td>

                      <td className="p-4">

                        {item.size}

                      </td>

                      <td className="p-4">

                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            item.verdict ===
                            "Toxic"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-green-500/20 text-green-400"
                          }`}
                        >

                          {
                            item.verdict
                          }

                        </span>

                      </td>

                      <td className="p-4">

                        {item.prob}%

                      </td>

                      <td className="p-4">

                        {
                          item.confidence
                        }
                        %

                      </td>

                      <td className="p-4">

                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() =>
                            rerunPrediction(
                              item.id
                            )
                          }
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