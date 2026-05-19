"use client";

import {
  Activity,
  AlertTriangle,
  BrainCircuit,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import {
  useTheme,
} from "@/context/theme-context";

const recentActivity = [
  {
    id: 1,
    action:
      "Silver NP flagged as high toxicity",
    time: "2 min ago",
  },

  {
    id: 2,
    action:
      "New dataset uploaded to NanoDB",
    time: "11 min ago",
  },

  {
    id: 3,
    action:
      "NanoNet v3 retrained successfully",
    time: "28 min ago",
  },

  {
    id: 4,
    action:
      "Prediction API latency spike detected",
    time: "41 min ago",
  },
];

export default function OverviewPage() {

  const { theme } =
    useTheme();

  const dark =
    theme === "dark";

  return (

    <div className="space-y-8">

      {/* HERO */}
      <div
        className={`
          rounded-3xl
          border
          p-8
          shadow-sm
          transition-all
          duration-300
          ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }
        `}
      >

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">

              AI Infrastructure Operational

            </div>

            <h1
              className={`
                text-5xl
                font-black
                tracking-tight
                ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }
              `}
            >

              NanoToxi Overview

            </h1>

            <p
              className={`
                mt-4
                max-w-3xl
                text-lg
                ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }
              `}
            >

              Monitor prediction pipelines,
              toxicity analytics, datasets,
              AI models, and infrastructure
              performance across the platform.

            </p>

          </div>

          <div
            className={`
              hidden
              rounded-3xl
              p-6
              lg:flex
              ${
                dark
                  ? "bg-cyan-500/10"
                  : "bg-cyan-50"
              }
            `}
          >

            <BrainCircuit className="h-20 w-20 text-cyan-500" />

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            icon: Activity,
            title: "Total Predictions",
            value: "18,420",
            bg: "bg-cyan-500/10",
            iconColor: "text-cyan-500",
            badge: "+12%",
            badgeBg:
              "bg-green-100 text-green-700",
          },

          {
            icon: Users,
            title: "Active Users",
            value: "1,284",
            bg: "bg-violet-500/10",
            iconColor: "text-violet-500",
            badge: "Active",
            badgeBg:
              "bg-violet-100 text-violet-700",
          },

          {
            icon: AlertTriangle,
            title: "Toxic Samples",
            value: "32%",
            bg: "bg-red-500/10",
            iconColor: "text-red-500",
            badge: "Moderate",
            badgeBg:
              "bg-red-100 text-red-700",
          },

          {
            icon: ShieldCheck,
            title: "API Success Rate",
            value: "99.2%",
            bg: "bg-emerald-500/10",
            iconColor: "text-emerald-500",
            badge: "Stable",
            badgeBg:
              "bg-emerald-100 text-emerald-700",
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

                className={`
                  rounded-3xl
                  border
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  ${
                    dark
                      ? "border-white/10 bg-[#0F172A]"
                      : "border-slate-200 bg-white"
                  }
                `}
              >

                <div className="flex items-center justify-between">

                  <div
                    className={`rounded-2xl p-4 ${item.bg}`}
                  >

                    <Icon
                      className={`h-6 w-6 ${item.iconColor}`}
                    />

                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${item.badgeBg}`}
                  >

                    {item.badge}

                  </span>

                </div>

                <p
                  className={`
                    mt-6
                    text-sm
                    font-medium
                    ${
                      dark
                        ? "text-slate-400"
                        : "text-slate-500"
                    }
                  `}
                >

                  {item.title}

                </p>

                <h2
                  className={`
                    mt-2
                    text-4xl
                    font-black
                    ${
                      dark
                        ? "text-white"
                        : "text-slate-900"
                    }
                  `}
                >

                  {item.value}

                </h2>

              </div>
            );
          }
        )}

      </div>

      {/* GRAPH + STATUS */}
      <div className="grid gap-6 xl:grid-cols-3">

        {/* GRAPH */}
        <div
          className={`
            rounded-3xl
            border
            p-8
            shadow-sm
            xl:col-span-2
            ${
              dark
                ? "border-white/10 bg-[#0F172A]"
                : "border-slate-200 bg-white"
            }
          `}
        >

          <div className="flex items-center justify-between">

            <div>

              <h2
                className={`text-2xl font-black ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >

                Prediction Activity

              </h2>

              <p
                className={`mt-1 ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >

                Weekly AI prediction analytics

              </p>

            </div>

            <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">

              Live Analytics

            </div>

          </div>

          <div className="mt-10">

            <div
              className={`
                relative
                h-[260px]
                w-full
                overflow-hidden
                rounded-3xl
                p-2
                pt-6
                ${
                  dark
                    ? "bg-[#020817]"
                    : "bg-slate-50"
                }
              `}
            >

              <svg
                viewBox="0 0 1000 300"
                className="relative z-10 h-full w-full"
                preserveAspectRatio="none"
              >

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
                    L 1000 300
                    L 0 300
                    Z
                  "
                  fill="rgba(6,182,212,0.12)"
                />

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
                  strokeWidth="5"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>

        </div>

        {/* SYSTEM */}
        <div className="space-y-6">

          <div
            className={`
              rounded-3xl
              border
              p-6
              shadow-sm
              ${
                dark
                  ? "border-white/10 bg-[#0F172A]"
                  : "border-slate-200 bg-white"
              }
            `}
          >

            <h2
              className={`text-2xl font-black ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >

              System Health

            </h2>

            <div className="mt-6 space-y-5">

              {[
                "API Services",
                "Inference Engine",
                "GPU Workers",
                "Database",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between"
                >

                  <span
                    className={
                      dark
                        ? "text-slate-400"
                        : "text-slate-600"
                    }
                  >

                    {item}

                  </span>

                  <div className="flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-green-500" />

                    <span className="text-sm font-semibold text-green-500">

                      Operational

                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}