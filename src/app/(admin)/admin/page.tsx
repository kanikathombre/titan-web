"use client";

import {
  Activity,
  AlertTriangle,
  BrainCircuit,
  Database,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function AdminPage() {

  const recentPredictions = [
    {
      particle: "Silver NP",
      toxicity: "High",
      model: "NanoNet v2",
      status: "Flagged",
    },

    {
      particle: "Gold NP",
      toxicity: "Low",
      model: "NanoNet v2",
      status: "Safe",
    },

    {
      particle: "Titanium Oxide",
      toxicity: "Moderate",
      model: "NanoNet v3",
      status: "Review",
    },

    {
      particle: "Carbon Tube",
      toxicity: "High",
      model: "NanoNet v3",
      status: "Flagged",
    },
  ];

  return (

    <div className="space-y-8">

      {/* HERO */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex items-start justify-between">

          <div>

            <p className="mb-3 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">

              AI System Active

            </p>

            <h1 className="text-5xl font-black tracking-tight text-slate-900">

              NanoToxi Admin
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-500">

              Monitor nanoparticle toxicity predictions,
              AI models, datasets, and platform activity
              across the NanoToxi ecosystem.

            </p>

          </div>

          <div className="hidden rounded-3xl bg-cyan-50 p-6 lg:flex">

            <BrainCircuit className="h-20 w-20 text-cyan-500" />

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* CARD */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="rounded-2xl bg-cyan-50 p-4">

              <Activity className="h-6 w-6 text-cyan-500" />

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

              +12%
            </span>

          </div>

          <p className="mt-6 text-sm font-medium text-slate-500">

            Total Predictions

          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">

            124K

          </h2>

        </div>

        {/* CARD */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="rounded-2xl bg-red-50 p-4">

              <AlertTriangle className="h-6 w-6 text-red-500" />

            </div>

            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">

              High
            </span>

          </div>

          <p className="mt-6 text-sm font-medium text-slate-500">

            Toxic Samples

          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">

            8,214

          </h2>

        </div>

        {/* CARD */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="rounded-2xl bg-blue-50 p-4">

              <Database className="h-6 w-6 text-blue-500" />

            </div>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

              Stable
            </span>

          </div>

          <p className="mt-6 text-sm font-medium text-slate-500">

            Dataset Entries

          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">

            58K

          </h2>

        </div>

        {/* CARD */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div className="rounded-2xl bg-emerald-50 p-4">

              <ShieldCheck className="h-6 w-6 text-emerald-500" />

            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

              Accurate
            </span>

          </div>

          <p className="mt-6 text-sm font-medium text-slate-500">

            AI Accuracy

          </p>

          <h2 className="mt-2 text-4xl font-black text-slate-900">

            98.2%

          </h2>

        </div>

      </div>

      {/* ANALYTICS */}
      <div className="grid gap-6 xl:grid-cols-3">

        {/* LARGE CHART PANEL */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm xl:col-span-2">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-black text-slate-900">

                Prediction Activity

              </h2>

              <p className="mt-1 text-slate-500">

                Weekly AI prediction analytics

              </p>

            </div>

            <div className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">

              Live Analytics

            </div>

          </div>

          {/* FAKE GRAPH */}
          {/* LINE GRAPH */}
<div className="mt-10">

  <div className="relative h-[260px] w-full overflow-hidden rounded-3xl bg-slate-50 p-2 pt-6">

    {/* GRID LINES */}
    <div className="absolute inset-0 flex flex-col justify-between px-6 py-6">

      {[1, 2, 3, 4, 5].map((i) => (

        <div
          key={i}
          className="border-t border-dashed border-slate-200"
        />

      ))}

    </div>

    {/* SVG GRAPH */}
    <svg
      viewBox="0 0 1000 300"
      className="relative z-10 h-full w-full"
      preserveAspectRatio="none"
    >

      {/* AREA */}
      <path
        d="
          M 0 240
          C 80 210, 120 120, 200 140
          S 320 260, 400 180
          S 520 80, 600 120
          S 720 220, 800 130
          S 920 90, 1000 110
          L 1000 300
          L 0 300
          Z
        "
        fill="rgba(6,182,212,0.12)"
      />

      {/* LINE */}
      <defs>

  <linearGradient
    id="lineGradient"
    x1="0%"
    y1="0%"
    x2="100%"
    y2="0%"
  >

    <stop
      offset="0%"
      stopColor="#06B6D4"
    />

    <stop
      offset="100%"
      stopColor="#3B82F6"
    />

  </linearGradient>

</defs>
      <path
        d="
          M 0 240
          C 80 210, 120 120, 200 140
          S 320 260, 400 180
          S 520 80, 600 120
          S 720 220, 800 130
          S 920 90, 1000 110
        "
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* DOTS */}
      {[
        [0, 240],
        [200, 140],
        [400, 180],
        [600, 120],
        [800, 130],
        [1000, 110],
      ].map(([x, y], i) => (

        <circle
          key={i}
          cx={x}
          cy={y}
          r="8"
          fill="#06B6D4"
        />

      ))}

    </svg>

    {/* LABELS */}
    <div className="absolute bottom-4 left-6 right-6 flex justify-between text-sm text-slate-400">

      <span>Mon</span>
      <span>Tue</span>
      <span>Wed</span>
      <span>Thu</span>
      <span>Fri</span>
      <span>Sat</span>
      <span>Sun</span>

    </div>

  </div>

</div>

        </div>

        {/* SYSTEM STATUS */}
        <div className="space-y-6">

          {/* STATUS */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-black text-slate-900">

              System Status

            </h2>

            <div className="mt-6 space-y-5">

              {[
                "API Services",
                "Database",
                "Inference Engine",
                "GPU Workers",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between"
                >

                  <span className="text-slate-600">

                    {item}

                  </span>

                  <div className="flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-green-500" />

                    <span className="text-sm font-semibold text-green-600">

                      Operational

                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* USERS */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-violet-50 p-4">

                <Users className="h-6 w-6 text-violet-500" />

              </div>

              <div>

                <p className="text-sm text-slate-500">

                  Active Users

                </p>

                <h2 className="text-4xl font-black text-slate-900">

                  2,481

                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-black text-slate-900">

              Recent Predictions

            </h2>

            <p className="mt-1 text-slate-500">

              Latest nanoparticle prediction activity

            </p>

          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">

            Live Feed

          </div>

        </div>

        {/* TABLE */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">

                  Nanoparticle

                </th>

                <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">

                  Toxicity

                </th>

                <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">

                  Model

                </th>

                <th className="px-6 py-4 text-left text-sm font-bold text-slate-600">

                  Status

                </th>

              </tr>

            </thead>

            <tbody>

              {recentPredictions.map(
                (item, i) => (

                  <tr
                    key={i}
                    className="border-t border-slate-100"
                  >

                    <td className="px-6 py-5 font-semibold text-slate-900">

                      {item.particle}

                    </td>

                    <td className="px-6 py-5 text-slate-600">

                      {item.toxicity}

                    </td>

                    <td className="px-6 py-5 text-slate-600">

                      {item.model}

                    </td>

                    <td className="px-6 py-5">

                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                        item.status === "Safe"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Review"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>

                        {item.status}

                      </span>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}