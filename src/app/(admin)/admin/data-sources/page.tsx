"use client";

import dataSources from "@/data/data-sources.json";

import {
  Database,
  ExternalLink,
  Activity,
  ShieldCheck,
  HardDrive,
  Workflow,
} from "lucide-react";

import {
  useTheme,
} from "@/context/theme-context";

export default function DataSourcesPage() {

  const {
    theme,
  } = useTheme();

  const dark =
    theme === "dark";

  return (

    <div className="space-y-8 overflow-hidden">

      {/* HERO */}
      <div
        className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 ${
          dark
            ? "border-white/10 bg-[#0F172A]"
            : "border-slate-200 bg-white"
        }`}
      >

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-4 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">

              Training Pipelines Active

            </div>

            <h1
              className={`text-5xl font-black tracking-tight ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >

              Data Sources

            </h1>

            <p
              className={`mt-4 max-w-3xl text-lg ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >

              Monitor datasets,
              ingestion workflows,
              training pipelines,
              and AI dataset integrity.

            </p>

          </div>

          <div
            className={`hidden rounded-3xl p-5 lg:flex ${
              dark
                ? "bg-cyan-500/10"
                : "bg-cyan-50"
            }`}
          >

            <Database className="h-16 w-16 text-cyan-500" />

          </div>

        </div>

      </div>

      {/* METRICS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <MetricCard
          dark={dark}
          title="Total Datasets"
          value="42"
          icon={
            <Database className="h-6 w-6 text-cyan-500" />
          }
          badge="Active"
          badgeColor="bg-cyan-100 text-cyan-700"
          iconBg={dark ? "bg-cyan-500/10" : "bg-cyan-50"}
        />

        <MetricCard
          dark={dark}
          title="Data Integrity"
          value="99.2%"
          icon={
            <ShieldCheck className="h-6 w-6 text-emerald-500" />
          }
          badge="Healthy"
          badgeColor="bg-emerald-100 text-emerald-700"
          iconBg={dark ? "bg-emerald-500/10" : "bg-emerald-50"}
        />

        <MetricCard
          dark={dark}
          title="Storage Usage"
          value="8.6TB"
          icon={
            <HardDrive className="h-6 w-6 text-violet-500" />
          }
          badge="Synced"
          badgeColor="bg-violet-100 text-violet-700"
          iconBg={dark ? "bg-violet-500/10" : "bg-violet-50"}
        />

        <MetricCard
          dark={dark}
          title="Daily Uploads"
          value="14.2K"
          icon={
            <Activity className="h-6 w-6 text-yellow-500" />
          }
          badge="Live"
          badgeColor="bg-yellow-100 text-yellow-700"
          iconBg={dark ? "bg-yellow-500/10" : "bg-yellow-50"}
        />

      </div>

      {/* DATASET CARDS */}
      <div className="grid gap-6 xl:grid-cols-3">

        {dataSources.map((source) => (

          <div
            key={source.id}
            className={`rounded-3xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              dark
                ? "border-white/10 bg-[#0F172A]"
                : "border-slate-200 bg-white"
            }`}
          >

            {/* TOP */}
            <div className="flex items-start justify-between gap-4">

              <div className="flex min-w-0 items-center gap-4">

                <div
                  className={`rounded-2xl p-3 ${
                    dark
                      ? "bg-cyan-500/10"
                      : "bg-cyan-50"
                  }`}
                >

                  <Database className="h-5 w-5 text-cyan-500" />

                </div>

                <div className="flex-1">

                  <h2
                    className={`min-h-[76px] break-words text-[30px] font-black leading-tight tracking-tight ${
                      dark
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >

                    {source.name}

                  </h2>

                  <p
                    className={`text-sm ${
                      dark
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >

                    AI Dataset

                  </p>

                </div>

              </div>

              <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">

                ACTIVE

              </span>

            </div>

            {/* ROWS */}
            <div className="mt-6">

              <p
                className={`text-sm ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >

                Total Rows

              </p>

              <h3
                className={`mt-2 text-[42px] font-black tracking-tight ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >

                {source.rows.toLocaleString()}

              </h3>

            </div>

            {/* TOXIC */}
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between text-sm">

                <span
                  className={`font-medium ${
                    dark
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >

                  Toxic Samples

                </span>

                <span className="font-bold text-red-500">

                  {source.toxic}%

                </span>

              </div>

              <div
                className={`h-2 overflow-hidden rounded-full ${
                  dark
                    ? "bg-slate-800"
                    : "bg-slate-100"
                }`}
              >

                <div
                  className="h-full rounded-full bg-red-400"
                  style={{
                    width: `${source.toxic}%`,
                  }}
                />

              </div>

            </div>

            {/* SAFE */}
            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between text-sm">

                <span
                  className={`font-medium ${
                    dark
                      ? "text-slate-300"
                      : "text-slate-600"
                  }`}
                >

                  Safe Samples

                </span>

                <span className="font-bold text-cyan-600">

                  {source.safe}%

                </span>

              </div>

              <div
                className={`h-2 overflow-hidden rounded-full ${
                  dark
                    ? "bg-slate-800"
                    : "bg-slate-100"
                }`}
              >

                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{
                    width: `${source.safe}%`,
                  }}
                />

              </div>

            </div>

            {/* META */}
            <div className="mt-6 space-y-3">

              <div className="flex items-center justify-between">

                <span
                  className={`text-sm ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >

                  Last Updated

                </span>

                <span
                  className={`font-semibold ${
                    dark
                      ? "text-slate-200"
                      : "text-slate-700"
                  }`}
                >

                  {source.lastUpdated}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span
                  className={`text-sm ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >

                  Owner

                </span>

                <span
                  className={`font-semibold ${
                    dark
                      ? "text-slate-200"
                      : "text-slate-700"
                  }`}
                >

                  {source.owner}

                </span>

              </div>

            </div>

            {/* BUTTON */}
            <a
              href={source.notebook}
              target="_blank"
              className={`mt-6 flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white transition ${
                dark
                  ? "bg-cyan-500 hover:bg-cyan-400"
                  : "bg-slate-900 hover:bg-cyan-500"
              }`}
            >

              <ExternalLink className="h-4 w-4" />

              Open Notebook

            </a>

          </div>
        ))}

      </div>

      {/* PIPELINE */}
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

              AI Training Pipeline

            </h2>

            <p
              className={`mt-2 ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >

              Dataset ingestion and model workflow

            </p>

          </div>

          <div className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">

            Workflow Active

          </div>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">

          <PipelineCard
            dark={dark}
            label="Raw CSVs"
            color={dark ? "bg-cyan-500/10 text-cyan-400" : "bg-cyan-50 text-cyan-700"}
          />

          <PipelineCard
            dark={dark}
            label="Cleaning"
            color={dark ? "bg-violet-500/10 text-violet-400" : "bg-violet-50 text-violet-700"}
          />

          <PipelineCard
            dark={dark}
            label="Feature Engineering"
            color={dark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-700"}
          />

          <PipelineCard
            dark={dark}
            label="Model Training"
            color={dark ? "bg-yellow-500/10 text-yellow-400" : "bg-yellow-50 text-yellow-700"}
          />

          <PipelineCard
            dark={dark}
            label="Evaluation"
            color={dark ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-700"}
          />

        </div>

      </div>

    </div>
  );
}

function MetricCard({
  title,
  value,
  icon,
  badge,
  badgeColor,
  iconBg,
  dark,
}: any) {

  return (

    <div
      className={`rounded-3xl border p-6 shadow-sm transition-all duration-300 ${
        dark
          ? "border-white/10 bg-[#0F172A]"
          : "border-slate-200 bg-white"
      }`}
    >

      <div className="flex items-center justify-between">

        <div className={`rounded-2xl ${iconBg} p-4`}>

          {icon}

        </div>

        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>

          {badge}

        </span>

      </div>

      <p
        className={`mt-6 text-sm ${
          dark
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >

        {title}

      </p>

      <h2
        className={`mt-2 text-4xl font-black ${
          dark
            ? "text-white"
            : "text-slate-900"
        }`}
      >

        {value}

      </h2>

    </div>
  );
}

function PipelineCard({
  label,
  color,
  dark,
}: {
  label: string;
  color: string;
  dark: boolean;
}) {

  return (

    <div
      className={`flex h-32 flex-col items-center justify-center rounded-3xl border ${color} ${
        dark
          ? "border-white/10"
          : "border-slate-200"
      }`}
    >

      <Workflow className="mb-3 h-8 w-8" />

      <span className="text-center text-base font-black">

        {label}

      </span>

    </div>
  );
}