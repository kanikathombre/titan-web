"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import Papa from "papaparse";

import {
  Download,
  ChevronLeft,
  ChevronRight,
  Activity,
  AlertTriangle,
  ShieldCheck,
  Zap,
  Search,
} from "lucide-react";

import {
  useTheme,
} from "@/context/theme-context";

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

  const {
    theme,
  } = useTheme();

  const dark =
    theme === "dark";

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

      {/* HERO */}
      <div className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 ${
        dark
          ? "border-white/10 bg-[#0F172A]"
          : "border-slate-200 bg-white"
      }`}>

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-4 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">

              AI Monitoring Active

            </div>

            <h1 className={`text-5xl font-black tracking-tight ${
              dark
                ? "text-white"
                : "text-slate-900"
            }`}>

              Prediction Intelligence

            </h1>

            <p className={`mt-4 max-w-3xl text-lg ${
              dark
                ? "text-slate-400"
                : "text-slate-500"
            }`}>

              Monitor nanoparticle prediction activity,
              toxicity verdicts, AI confidence scores,
              and inference performance across the platform.

            </p>

          </div>

          <button
            onClick={
              exportCSV
            }
            className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >

            <Download className="h-5 w-5" />

            Export CSV

          </button>

        </div>

      </div>

      {/* METRICS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            icon: Activity,
            title: "Total Predictions",
            value: "124K",
            bg: "bg-cyan-50",
            iconColor: "text-cyan-500",
            badge: "+18%",
            badgeBg:
              "bg-green-100 text-green-700",
          },

          {
            icon: AlertTriangle,
            title: "Toxic Verdicts",
            value: "38%",
            bg: "bg-red-50",
            iconColor: "text-red-500",
            badge: "High",
            badgeBg:
              "bg-red-100 text-red-700",
          },

          {
            icon: ShieldCheck,
            title: "Avg Confidence",
            value: "97.8%",
            bg: "bg-emerald-50",
            iconColor: "text-emerald-500",
            badge: "Stable",
            badgeBg:
              "bg-emerald-100 text-emerald-700",
          },

          {
            icon: Zap,
            title: "Avg Latency",
            value: "124ms",
            bg: "bg-yellow-50",
            iconColor: "text-yellow-500",
            badge: "Fast",
            badgeBg:
              "bg-yellow-100 text-yellow-700",
          },
        ].map(
          (
            item,
            i
          ) => {

            const Icon =
              item.icon;

            return (

              <div
                key={i}
                className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-[#0F172A]"
                    : "border-slate-200 bg-white"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div className={`rounded-2xl p-4 ${item.bg}`}>

                    <Icon className={`h-6 w-6 ${item.iconColor}`} />

                  </div>

                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.badgeBg}`}>

                    {item.badge}

                  </span>

                </div>

                <p className={`mt-6 text-sm ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}>

                  {item.title}

                </p>

                <h2 className={`mt-2 text-4xl font-black ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}>

                  {item.value}

                </h2>

              </div>
            );
          }
        )}

      </div>

      {/* FILTERS */}
      <div className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
        dark
          ? "border-white/10 bg-[#0F172A]"
          : "border-slate-200 bg-white"
      }`}>

        <div className="grid gap-4 md:grid-cols-2">

          {/* SEARCH */}
          <div className={`flex items-center gap-3 rounded-2xl border px-4 ${
            dark
              ? "border-white/10 bg-white/5"
              : "border-slate-200 bg-slate-50"
          }`}>

            <Search className="h-5 w-5 text-slate-400" />

            <input
              placeholder="Search by user..."
              value={search}
              onChange={(e) =>
                updateQuery(
                  "search",
                  e.target.value
                )
              }
              className={`h-14 w-full bg-transparent outline-none ${
                dark
                  ? "text-white placeholder:text-slate-500"
                  : "text-slate-900 placeholder:text-slate-400"
              }`}
            />

          </div>

          {/* SELECT */}
          <select
            value={verdict}
            onChange={(e) =>
              updateQuery(
                "verdict",
                e.target.value
              )
            }
            className={`h-14 rounded-2xl border px-4 outline-none ${
              dark
                ? "border-white/10 bg-white/5 text-white"
                : "border-slate-200 bg-slate-50 text-slate-900"
            }`}
          >

            <option value="all">

              All Verdicts

            </option>

            <option value="Safe">

              Safe

            </option>

            <option value="Toxic">

              Toxic

            </option>

          </select>

        </div>

      </div>

      {/* TABLE */}
      <div className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
        dark
          ? "border-white/10 bg-[#0F172A]"
          : "border-slate-200 bg-white"
      }`}>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className={`border-b ${
                dark
                  ? "border-white/10"
                  : "border-slate-200"
              }`}>

                {[
                  "Timestamp",
                  "User",
                  "Nanoparticle",
                  "Verdict",
                  "Confidence",
                  "Latency",
                ].map((header) => (

                  <th
                    key={header}
                    className={`px-4 py-4 text-left text-sm font-bold ${
                      dark
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >

                    {header}

                  </th>
                ))}

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
                    className={`cursor-pointer border-b transition ${
                      dark
                        ? "border-white/5 hover:bg-white/5"
                        : "border-slate-100 hover:bg-slate-50"
                    }`}
                  >

                    <td className={`px-4 py-5 ${
                      dark
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}>

                      {log.timestamp}

                    </td>

                    <td className={`px-4 py-5 font-semibold ${
                      dark
                        ? "text-white"
                        : "text-slate-900"
                    }`}>

                      {log.user}

                    </td>

                    <td className={`px-4 py-5 ${
                      dark
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}>

                      {log.inputs}

                    </td>

                    <td className="px-4 py-5">

                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                        log.verdict === "Toxic"
                          ? "bg-red-100 text-red-700"
                          : "bg-emerald-100 text-emerald-700"
                      }`}>

                        {log.verdict}

                      </span>

                    </td>

                    <td className={`px-4 py-5 ${
                      dark
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}>

                      {log.confidence}%

                    </td>

                    <td className={`px-4 py-5 ${
                      dark
                        ? "text-slate-300"
                        : "text-slate-600"
                    }`}>

                      {log.latency}ms

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

        {/* PAGINATION */}
        <div className="mt-8 flex items-center justify-between">

          <button
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
            className={`flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold transition disabled:opacity-40 ${
              dark
                ? "border-white/10 text-white hover:bg-white/5"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >

            <ChevronLeft className="h-5 w-5" />

            Previous

          </button>

          <p className={`text-sm ${
            dark
              ? "text-slate-400"
              : "text-slate-500"
          }`}>

            Page {currentPage} of {totalPages}

          </p>

          <button
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
            className={`flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold transition disabled:opacity-40 ${
              dark
                ? "border-white/10 text-white hover:bg-white/5"
                : "border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
          >

            Next

            <ChevronRight className="h-5 w-5" />

          </button>

        </div>

      </div>

    </div>
  );
}