"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Activity,
  ShieldCheck,
  Database,
  Cpu,
  AlertTriangle,
  CheckCircle2,
  Server,
  BrainCircuit,
} from "lucide-react";

import {
  useTheme,
} from "@/context/theme-context";

type HealthData = {
  status: "up" | "down";
  modelLoaded: boolean;
  featureCount: number;
  version: string;
  recentErrors: string[];
};

export default function HealthPage() {

  const {
    theme,
  } = useTheme();

  const dark =
    theme === "dark";

  const [health, setHealth] =
    useState<HealthData>({
      status: "up",
      modelLoaded: true,
      featureCount: 128,
      version: "v1.0.3",
      recentErrors: [],
    });

  const [uptime, setUptime] =
    useState(99.94);

  const [latency, setLatency] =
    useState(42);

  useEffect(() => {

    const interval =
      setInterval(() => {

        const isUp =
          Math.random() > 0.15;

        setHealth({
          status:
            isUp
              ? "up"
              : "down",

          modelLoaded:
            isUp,

          featureCount:
            128,

          version:
            "v1.0.3",

          recentErrors:
            isUp
              ? []
              : [
                  "Prediction API timeout",
                  "Dataset synchronization failed",
                  "GPU inference queue overloaded",
                ],
        });

        setLatency(
          Math.floor(
            35 +
              Math.random() *
                40
          )
        );

        setUptime(
          Number(
            (
              99.7 +
              Math.random() *
                0.3
            ).toFixed(2)
          )
        );

      }, 5000);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  const statusCards = [
    {
      title:
        "API Status",

      value:
        health.status ===
        "up"
          ? "ONLINE"
          : "OFFLINE",

      icon: Server,

      color:
        health.status ===
        "up"
          ? "from-green-400 to-emerald-500"
          : "from-red-400 to-red-500",

      glow:
        health.status ===
        "up"
          ? "shadow-green-500/20"
          : "shadow-red-500/20",
    },

    {
      title:
        "Model Engine",

      value:
        health.modelLoaded
          ? "ACTIVE"
          : "FAILED",

      icon: BrainCircuit,

      color:
        health.modelLoaded
          ? "from-cyan-400 to-blue-500"
          : "from-red-400 to-red-500",

      glow:
        "shadow-cyan-500/20",
    },

    {
      title:
        "Feature Count",

      value:
        health.featureCount.toString(),

      icon: Database,

      color:
        "from-purple-400 to-indigo-500",

      glow:
        "shadow-purple-500/20",
    },

    {
      title:
        "Version",

      value:
        health.version,

      icon: ShieldCheck,

      color:
        "from-yellow-400 to-orange-500",

      glow:
        "shadow-yellow-500/20",
    },
  ];

  return (

    <div className={`min-h-screen p-8 transition-all duration-300 ${
      dark
        ? "bg-[#020817]"
        : "bg-[#f4f7fb]"
    }`}>

      {/* HEADER */}
      <div
        className={`
          relative
          overflow-hidden
          rounded-[36px]
          border
          p-10
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

        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-120px] left-[-120px] h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative z-10 flex items-center justify-between">

          <div>

            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-cyan-500/10
                px-5
                py-2
                text-sm
                font-semibold
                text-cyan-400
              "
            >

              <Activity className="h-4 w-4" />

              System Monitoring Active

            </div>

            <h1
              className={`text-4xl font-black tracking-tight ${
                dark
                  ? "text-white"
                  : "text-[#0f172a]"
              }`}
            >

              System Health

            </h1>

            <p
              className={`mt-5 max-w-3xl text-lg leading-relaxed ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >

              Monitor AI model infrastructure,
              API availability, inference health,
              GPU performance, and live platform
              diagnostics in real time.

            </p>

          </div>

          {/* STATUS ORB */}
          <div className="relative hidden lg:block">

            <div
              className={`
                flex
                h-40
                w-40
                items-center
                justify-center
                rounded-full
                border-8
                ${
                  health.status ===
                  "up"
                    ? "border-green-400/30"
                    : "border-red-400/30"
                }
                ${
                  dark
                    ? "bg-[#020817]"
                    : "bg-white"
                }
                shadow-2xl
              `}
            >

              <div
                className={`
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  ${
                    health.status ===
                    "up"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }
                  text-white
                  shadow-lg
                `}
              >

                {health.status ===
                "up" ? (
                  <CheckCircle2 className="h-12 w-12" />
                ) : (
                  <AlertTriangle className="h-12 w-12" />
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* TOP METRICS */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {statusCards.map(
          (
            card,
            index
          ) => {

            const Icon =
              card.icon;

            return (

              <div
                key={index}

                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${
                    dark
                      ? "border-white/10 bg-[#0F172A]"
                      : "border-slate-200 bg-white"
                  }
                `}
              >

                <div
                  className={`
                    absolute
                    right-[-40px]
                    top-[-40px]
                    h-40
                    w-40
                    rounded-full
                    bg-gradient-to-br
                    ${card.color}
                    opacity-10
                    blur-3xl
                  `}
                />

                <div className="relative z-10">

                  <div className="flex items-start justify-between">

                    <div
                      className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${card.color}
                        text-white
                        shadow-lg
                        ${card.glow}
                      `}
                    >

                      <Icon className="h-8 w-8" />

                    </div>

                    <div
                      className={`
                        rounded-full
                        px-4
                        py-1
                        text-sm
                        font-semibold
                        ${
                          dark
                            ? "bg-white/10 text-slate-300"
                            : "bg-slate-100 text-slate-600"
                        }
                      `}
                    >

                      Live

                    </div>

                  </div>

                  <p className={`mt-8 text-lg ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}>

                    {card.title}

                  </p>

                  <h2
                    className={`mt-3 text-4xl font-black tracking-tight ${
                      dark
                        ? "text-white"
                        : "text-[#0f172a]"
                    }`}
                  >

                    {card.value}

                  </h2>

                </div>

              </div>
            );
          }
        )}

      </div>

      {/* ANALYTICS */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {[
          {
            title: "API Latency",
            value: latency,
            unit: "ms",
            icon: Cpu,
            color:
              "from-cyan-400 to-blue-500",
            width:
              Math.min(
                latency,
                100
              ),
          },

          {
            title:
              "Platform Uptime",
            value: uptime,
            unit: "%",
            icon:
              ShieldCheck,
            color:
              "from-green-400 to-emerald-500",
            width:
              uptime,
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
                className={`relative overflow-hidden rounded-[30px] border p-7 shadow-sm ${
                  dark
                    ? "border-white/10 bg-[#0F172A]"
                    : "border-slate-200 bg-white"
                }`}
              >

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <h3 className={`text-xl font-bold ${
                      dark
                        ? "text-white"
                        : "text-[#0f172a]"
                    }`}>

                      {item.title}

                    </h3>

                    <Icon className="h-6 w-6 text-cyan-500" />

                  </div>

                  <div className="mt-8 flex items-end gap-3">

                    <h2 className={`text-6xl font-black ${
                      dark
                        ? "text-white"
                        : "text-[#0f172a]"
                    }`}>

                      {item.value}

                    </h2>

                    <span className="mb-2 text-xl text-slate-400">

                      {item.unit}

                    </span>

                  </div>

                  <div className={`mt-8 h-3 overflow-hidden rounded-full ${
                    dark
                      ? "bg-white/10"
                      : "bg-slate-100"
                  }`}>

                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      style={{
                        width: `${item.width}%`,
                      }}
                    />

                  </div>

                </div>

              </div>
            );
          }
        )}

        {/* LIVE INFERENCE */}
        <div
          className={`relative overflow-hidden rounded-[30px] border p-7 shadow-sm ${
            dark
              ? "border-white/10 bg-[#0F172A]"
              : "border-slate-200 bg-white"
          }`}
        >

          <div className="relative z-10">

            <div className="flex items-center justify-between">

              <h3 className={`text-xl font-bold ${
                dark
                  ? "text-white"
                  : "text-[#0f172a]"
              }`}>

                Live Inference

              </h3>

              <Activity className="h-6 w-6 text-purple-500" />

            </div>

            <div className="mt-8 flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-3xl font-black text-white shadow-xl">

                42

              </div>

              <div>

                <p className={`text-lg font-semibold ${
                  dark
                    ? "text-white"
                    : "text-[#0f172a]"
                }`}>

                  Active Predictions

                </p>

                <p className={`mt-1 ${
                  dark
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}>

                  Real-time AI toxicity analysis

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ERROR LOGS */}
      <div
        className={`relative mt-8 overflow-hidden rounded-[36px] border p-8 shadow-sm ${
          dark
            ? "border-white/10 bg-[#0F172A]"
            : "border-slate-200 bg-white"
        }`}
      >

        <div className="relative z-10">

          <div className="flex items-center justify-between">

            <div>

              <h2 className={`text-3xl font-black ${
                dark
                  ? "text-white"
                  : "text-[#0f172a]"
              }`}>

                Recent Error Logs

              </h2>

              <p className={`mt-2 ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}>

                Real-time backend monitoring and system anomaly tracking.

              </p>

            </div>

            <div
              className="
                rounded-full
                bg-red-500/10
                px-5
                py-2
                text-sm
                font-semibold
                text-red-500
              "
            >

              {health.recentErrors.length} Issues

            </div>

          </div>

          <div className="mt-8 space-y-4">

            {health.recentErrors.length > 0 ? (

              health.recentErrors.map(
                (
                  error,
                  index
                ) => (

                  <div
                    key={index}
                    className={`flex items-center gap-4 rounded-2xl border p-5 ${
                      dark
                        ? "border-red-500/20 bg-red-500/[0.05]"
                        : "border-red-500/10 bg-red-500/[0.03]"
                    }`}
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">

                      <AlertTriangle className="h-6 w-6" />

                    </div>

                    <div>

                      <h4 className={`font-semibold ${
                        dark
                          ? "text-white"
                          : "text-[#0f172a]"
                      }`}>

                        Critical System Alert

                      </h4>

                      <p className={`mt-1 ${
                        dark
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}>

                        {error}

                      </p>

                    </div>

                  </div>
                )
              )

            ) : (

              <div
                className={`flex items-center gap-5 rounded-2xl border p-6 ${
                  dark
                    ? "border-green-500/20 bg-green-500/[0.05]"
                    : "border-green-500/10 bg-green-500/[0.03]"
                }`}
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">

                  <CheckCircle2 className="h-7 w-7" />

                </div>

                <div>

                  <h4 className={`text-lg font-bold ${
                    dark
                      ? "text-white"
                      : "text-[#0f172a]"
                  }`}>

                    No Errors Detected

                  </h4>

                  <p className={`mt-1 ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}>

                    All NanoToxi AI systems are operating normally.

                  </p>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}