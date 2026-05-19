"use client";

import regimeData from "@/data/regime-comparison.json";
import shapData from "@/data/shap-data.json";
import confusionData from "@/data/confusion-matrix.json";

import {
  BrainCircuit,
  ShieldCheck,
  Zap,
  Cpu,
  Activity,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

import {
  useTheme,
} from "@/context/theme-context";

export default function ModelPage() {

  const {
    theme,
  } = useTheme();

  const dark =
    theme === "dark";

  return (

    <div className="space-y-8">

      {/* HERO */}
      <div
        className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 ${
          dark
            ? "border-white/10 bg-[#0F172A]"
            : "border-slate-200 bg-white"
        }`}
      >

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-4 inline-flex rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">

              AI Models Operational

            </div>

            <h1
              className={`text-5xl font-black tracking-tight ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >

              Model Intelligence

            </h1>

            <p
              className={`mt-4 max-w-3xl text-lg ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >

              Evaluate AI model performance,
              feature attribution, classification
              accuracy, and inference reliability
              across toxicity prediction systems.

            </p>

          </div>

          <div
            className={`hidden rounded-3xl p-6 lg:flex ${
              dark
                ? "bg-violet-500/10"
                : "bg-violet-50"
            }`}
          >

            <BrainCircuit className="h-20 w-20 text-violet-500" />

          </div>

        </div>

      </div>

      {/* METRICS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* CARD */}
        <div
          className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="flex items-center justify-between">

            <div
              className={`rounded-2xl p-4 ${
                dark
                  ? "bg-cyan-500/10"
                  : "bg-cyan-50"
              }`}
            >

              <ShieldCheck className="h-6 w-6 text-cyan-500" />

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

              Stable

            </span>

          </div>

          <p
            className={`mt-6 text-sm ${
              dark
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >

            Model Accuracy

          </p>

          <h2
            className={`mt-2 text-4xl font-black ${
              dark
                ? "text-white"
                : "text-slate-900"
            }`}
          >

            98.4%

          </h2>

        </div>

        {/* CARD */}
        <div
          className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="flex items-center justify-between">

            <div
              className={`rounded-2xl p-4 ${
                dark
                  ? "bg-violet-500/10"
                  : "bg-violet-50"
              }`}
            >

              <Cpu className="h-6 w-6 text-violet-500" />

            </div>

            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">

              Active

            </span>

          </div>

          <p
            className={`mt-6 text-sm ${
              dark
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >

            AI Models

          </p>

          <h2
            className={`mt-2 text-4xl font-black ${
              dark
                ? "text-white"
                : "text-slate-900"
            }`}
          >

            24

          </h2>

        </div>

        {/* CARD */}
        <div
          className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="flex items-center justify-between">

            <div
              className={`rounded-2xl p-4 ${
                dark
                  ? "bg-yellow-500/10"
                  : "bg-yellow-50"
              }`}
            >

              <Zap className="h-6 w-6 text-yellow-500" />

            </div>

            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">

              Fast

            </span>

          </div>

          <p
            className={`mt-6 text-sm ${
              dark
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >

            Avg Latency

          </p>

          <h2
            className={`mt-2 text-4xl font-black ${
              dark
                ? "text-white"
                : "text-slate-900"
            }`}
          >

            124ms

          </h2>

        </div>

        {/* CARD */}
        <div
          className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="flex items-center justify-between">

            <div
              className={`rounded-2xl p-4 ${
                dark
                  ? "bg-emerald-500/10"
                  : "bg-emerald-50"
              }`}
            >

              <Activity className="h-6 w-6 text-emerald-500" />

            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

              Online

            </span>

          </div>

          <p
            className={`mt-6 text-sm ${
              dark
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >

            Inference Rate

          </p>

          <h2
            className={`mt-2 text-4xl font-black ${
              dark
                ? "text-white"
                : "text-slate-900"
            }`}
          >

            8.2K/min

          </h2>

        </div>

      </div>

      {/* PERFORMANCE GRAPH */}
      <div
        className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 ${
          dark
            ? "border-white/10 bg-[#0F172A]"
            : "border-slate-200 bg-white"
        }`}
      >

        <div className="flex items-center justify-between">

          <div>

            <h2
              className={`text-3xl font-black ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >

              Model Performance Trend

            </h2>

            <p
              className={`mt-1 ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >

              Weekly AI performance analytics

            </p>

          </div>

          <div className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">

            Live Monitoring

          </div>

        </div>

        <div
          className={`mt-10 h-[380px] rounded-3xl p-6 ${
            dark
              ? "bg-[#020817]"
              : "bg-slate-50"
          }`}
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={[
                {
                  week: "W1",
                  accuracy: 88,
                },
                {
                  week: "W2",
                  accuracy: 91,
                },
                {
                  week: "W3",
                  accuracy: 90,
                },
                {
                  week: "W4",
                  accuracy: 94,
                },
                {
                  week: "W5",
                  accuracy: 93,
                },
                {
                  week: "W6",
                  accuracy: 97,
                },
                {
                  week: "W7",
                  accuracy: 98,
                },
              ]}
            >

              <defs>

                <linearGradient
                  id="colorAccuracy"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#06B6D4"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#06B6D4"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke={dark ? "#1E293B" : "#E2E8F0"}
              />

              <XAxis
                dataKey="week"
                stroke={dark ? "#64748B" : "#94A3B8"}
              />

              <YAxis
                stroke={dark ? "#64748B" : "#94A3B8"}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="accuracy"
                stroke="#06B6D4"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorAccuracy)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* REGIME TABLE + REPORTS */}
      <div className="grid gap-6 xl:grid-cols-3">

        {/* TABLE */}
        <div
          className={`rounded-3xl border p-8 shadow-sm xl:col-span-2 transition-all duration-300 ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="flex items-center justify-between">

            <div>

              <h2
                className={`text-3xl font-black ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >

                Regime Comparison

              </h2>

              <p
                className={`mt-1 ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >

                Classification performance across regimes

              </p>

            </div>

            <div className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">

              AI Evaluation

            </div>

          </div>

          <div className="mt-8 overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr
                  className={`border-b ${
                    dark
                      ? "border-white/10"
                      : "border-slate-200"
                  }`}
                >

                  <th className="px-4 py-4 text-left text-sm font-bold text-slate-500">

                    Regime

                  </th>

                  <th className="px-4 py-4 text-left text-sm font-bold text-slate-500">

                    Accuracy

                  </th>

                  <th className="px-4 py-4 text-left text-sm font-bold text-slate-500">

                    Precision

                  </th>

                  <th className="px-4 py-4 text-left text-sm font-bold text-slate-500">

                    Recall

                  </th>

                  <th className="px-4 py-4 text-left text-sm font-bold text-slate-500">

                    F1

                  </th>

                </tr>

              </thead>

              <tbody>

                {regimeData.map(
                  (item) => (

                    <tr
                      key={item.regime}
                      className={`border-b transition ${
                        dark
                          ? "border-white/5 hover:bg-white/5"
                          : "border-slate-100 hover:bg-slate-50"
                      }`}
                    >

                      <td
                        className={`px-4 py-5 font-semibold ${
                          dark
                            ? "text-white"
                            : "text-slate-900"
                        }`}
                      >

                        {item.regime}

                      </td>

                      <td
                        className={`px-4 py-5 ${
                          dark
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >

                        {item.accuracy}%

                      </td>

                      <td
                        className={`px-4 py-5 ${
                          dark
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >

                        {item.precision}%

                      </td>

                      <td
                        className={`px-4 py-5 ${
                          dark
                            ? "text-slate-300"
                            : "text-slate-600"
                        }`}
                      >

                        {item.recall}%

                      </td>

                      <td className="px-4 py-5">

                        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">

                          {item.f1}%

                        </span>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* REPORTS */}
        <div className="space-y-6">

          {regimeData.map(
            (item) => (

              <div
                key={item.regime}
                className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-[#0F172A]"
                    : "border-slate-200 bg-white"
                }`}
              >

                <div className="flex items-center justify-between">

                  <h3
                    className={`text-xl font-black ${
                      dark
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >

                    {item.regime}

                  </h3>

                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

                    Stable

                  </span>

                </div>

                <div className="mt-6 space-y-4">

                  <div>

                    <div className="mb-1 flex justify-between text-sm">

                      <span
                        className={`${
                          dark
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >

                        Accuracy

                      </span>

                      <span
                        className={`font-semibold ${
                          dark
                            ? "text-white"
                            : "text-slate-900"
                        }`}
                      >

                        {item.accuracy}%

                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-100">

                      <div
                        className="h-2 rounded-full bg-cyan-500"
                        style={{
                          width: `${item.accuracy}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div>

                    <div className="mb-1 flex justify-between text-sm">

                      <span
                        className={`${
                          dark
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >

                        Precision

                      </span>

                      <span
                        className={`font-semibold ${
                          dark
                            ? "text-white"
                            : "text-slate-900"
                        }`}
                      >

                        {item.precision}%

                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-100">

                      <div
                        className="h-2 rounded-full bg-violet-500"
                        style={{
                          width: `${item.precision}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

      {/* SHAP + CONFUSION */}
      <div className="grid gap-6 xl:grid-cols-2">

        {/* SHAP */}
        <div
          className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="flex items-center justify-between">

            <div>

              <h2
                className={`text-3xl font-black ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >

                Feature Importance

              </h2>

              <p
                className={`mt-1 ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >

                SHAP explainability analytics

              </p>

            </div>

            <div className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-cyan-700">

              SHAP AI

            </div>

          </div>

          <div
            className={`mt-8 h-[420px] rounded-3xl p-4 ${
              dark
                ? "bg-[#020817]"
                : "bg-slate-50"
            }`}
          >

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={shapData}
                layout="vertical"
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={dark ? "#1E293B" : "#E2E8F0"}
                />

                <XAxis
                  type="number"
                  stroke={dark ? "#64748B" : "#94A3B8"}
                />

                <YAxis
                  dataKey="feature"
                  type="category"
                  stroke={dark ? "#64748B" : "#94A3B8"}
                />

                <Tooltip />

                <Bar
                  dataKey="importance"
                  fill="#67C3F3"
                  radius={[0, 10, 10, 0]}
                  barSize={10}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* CONFUSION */}
        <div
          className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="flex items-center justify-between">

            <div>

              <h2
                className={`text-3xl font-black ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >

                Confusion Matrix

              </h2>

              <p
                className={`mt-1 ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >

                Classification evaluation metrics

              </p>

            </div>

            <div className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">

              Validation

            </div>

          </div>

          <div className="mt-8 space-y-4">

            {confusionData.map(
              (item) => (

                <div
                  key={item.source}
                  className={`rounded-2xl border p-5 ${
                    dark
                      ? "border-white/10 bg-[#020817]"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >

                  <div className="mb-5 flex items-center justify-between">

                    <h3
                      className={`text-lg font-black ${
                        dark
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >

                      {item.source}

                    </h3>

                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">

                      Active

                    </span>

                  </div>

                  <div className="grid grid-cols-4 gap-4">

                    <div className="rounded-2xl bg-emerald-100 p-4 text-center">

                      <p className="text-xs font-medium text-emerald-700">

                        TP

                      </p>

                      <h4 className="mt-2 text-2xl font-black text-emerald-800">

                        {item.tp}

                      </h4>

                    </div>

                    <div className="rounded-2xl bg-cyan-100 p-4 text-center">

                      <p className="text-xs font-medium text-cyan-700">

                        TN

                      </p>

                      <h4 className="mt-2 text-2xl font-black text-cyan-800">

                        {item.tn}

                      </h4>

                    </div>

                    <div className="rounded-2xl bg-red-100 p-4 text-center">

                      <p className="text-xs font-medium text-red-700">

                        FP

                      </p>

                      <h4 className="mt-2 text-2xl font-black text-red-800">

                        {item.fp}

                      </h4>

                    </div>

                    <div className="rounded-2xl bg-yellow-100 p-4 text-center">

                      <p className="text-xs font-medium text-yellow-700">

                        FN

                      </p>

                      <h4 className="mt-2 text-2xl font-black text-yellow-800">

                        {item.fn}

                      </h4>

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}