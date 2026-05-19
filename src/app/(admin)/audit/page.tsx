"use client";

import {
  ShieldCheck,
  Clock3,
  User2,
  Activity,
  Search,
  CheckCircle2,
  AlertTriangle,
  Database,
  Settings,
  BrainCircuit,
} from "lucide-react";

import {
  useTheme,
} from "@/context/theme-context";

const auditLogs = [
  {
    id: 1,
    timestamp:
      "2026-05-18 13:42:21",

    actor:
      "Kanika",

    action:
      "Updated Model Configuration",

    target:
      "NanoToxi-v2",

    result:
      "Success",

    icon: BrainCircuit,
  },

  {
    id: 2,
    timestamp:
      "2026-05-18 13:38:10",

    actor:
      "Vedant",

    action:
      "Dataset Sync Triggered",

    target:
      "Combined-V2",

    result:
      "Success",

    icon: Database,
  },

  {
    id: 3,
    timestamp:
      "2026-05-18 13:29:54",

    actor:
      "Titan AI",

    action:
      "Prediction API Restart",

    target:
      "Inference Engine",

    result:
      "Failed",

    icon: Activity,
  },

  {
    id: 4,
    timestamp:
      "2026-05-18 13:11:02",

    actor:
      "Admin",

    action:
      "Modified Security Policies",

    target:
      "Auth Service",

    result:
      "Success",

    icon: ShieldCheck,
  },

  {
    id: 5,
    timestamp:
      "2026-05-18 12:58:44",

    actor:
      "Kanika",

    action:
      "Updated Platform Settings",

    target:
      "System Config",

    result:
      "Success",

    icon: Settings,
  },
];

export default function AuditPage() {

  const {
    theme,
  } = useTheme();

  const dark =
    theme === "dark";

  return (

    <div className={`min-h-screen p-8 transition-all duration-300 ${
      dark
        ? "bg-[#020817]"
        : "bg-[#f4f7fb]"
    }`}>

      {/* HERO SECTION */}
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

        {/* GLOWS */}
        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-120px] left-[-120px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[120px]" />

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

              <ShieldCheck className="h-4 w-4" />

              Security Monitoring Active

            </div>

            <h1
              className={`text-5xl font-black tracking-tight ${
                dark
                  ? "text-white"
                  : "text-[#0f172a]"
              }`}
            >

              Audit Trail

            </h1>

            <p
              className={`mt-5 max-w-3xl text-lg leading-relaxed ${
                dark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >

              Track every administrative action,
              model update, security event, and
              platform configuration change across
              the NanoToxi AI ecosystem.

            </p>

          </div>

          {/* SECURITY ICON */}
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
                border-cyan-400/20
                ${
                  dark
                    ? "bg-[#020817]"
                    : "bg-white"
                }
                shadow-2xl
              `}
            >

              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-500
                  text-white
                  shadow-lg
                "
              >

                <ShieldCheck className="h-12 w-12" />

              </div>

            </div>

            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

          </div>

        </div>

      </div>

      {/* TOP CARDS */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title:
              "Total Events",
            value:
              "12.4K",
            icon:
              Activity,
            color:
              "from-cyan-400 to-blue-500",
            glow:
              "bg-cyan-500/10",
            status:
              "Live",
          },

          {
            title:
              "Security Alerts",
            value:
              "8",
            icon:
              AlertTriangle,
            color:
              "from-red-400 to-red-500",
            glow:
              "bg-red-500/10",
            status:
              "Critical",
          },

          {
            title:
              "Active Admins",
            value:
              "14",
            icon:
              User2,
            color:
              "from-purple-400 to-indigo-500",
            glow:
              "bg-purple-500/10",
            status:
              "Active",
          },

          {
            title:
              "Daily Logs",
            value:
              "3.2K",
            icon:
              Clock3,
            color:
              "from-yellow-400 to-orange-500",
            glow:
              "bg-yellow-500/10",
            status:
              "Synced",
          },
        ].map(
          (
            item,
            index
          ) => {

            const Icon =
              item.icon;

            return (

              <div
                key={index}
                className={`
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  p-7
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

                <div className={`absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full ${item.glow} blur-3xl`} />

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <div
                      className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${item.color}
                        text-white
                        shadow-lg
                      `}
                    >

                      <Icon className="h-8 w-8" />

                    </div>

                    <div className={`rounded-full px-4 py-1 text-sm font-semibold ${
                      dark
                        ? "bg-white/10 text-slate-300"
                        : "bg-slate-100 text-slate-600"
                    }`}>

                      {item.status}

                    </div>

                  </div>

                  <p className={`mt-8 text-lg ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}>

                    {item.title}

                  </p>

                  <h2 className={`mt-3 text-4xl font-black ${
                    dark
                      ? "text-white"
                      : "text-[#0f172a]"
                  }`}>

                    {item.value}

                  </h2>

                </div>

              </div>
            );
          }
        )}

      </div>

      {/* LOG TABLE */}
      <div
        className={`
          relative
          mt-8
          overflow-hidden
          rounded-[36px]
          border
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

        {/* HEADER */}
        <div className={`flex flex-col gap-6 border-b p-8 lg:flex-row lg:items-center lg:justify-between ${
          dark
            ? "border-white/10"
            : "border-slate-200"
        }`}>

          <div>

            <h2 className={`text-2xl font-black ${
              dark
                ? "text-white"
                : "text-[#0f172a]"
            }`}>

              Activity Logs

            </h2>

            <p className={`mt-2 ${
              dark
                ? "text-slate-400"
                : "text-slate-500"
            }`}>

              Real-time system audit and security event tracking.

            </p>

          </div>

          {/* SEARCH */}
          <div
            className={`
              flex
              items-center
              gap-3
              rounded-2xl
              border
              px-5
              py-3
              ${
                dark
                  ? "border-white/10 bg-white/5"
                  : "border-slate-200 bg-slate-50"
              }
            `}
          >

            <Search className="h-5 w-5 text-slate-400" />

            <input
              type="text"
              placeholder="Search logs..."
              className={`bg-transparent text-sm outline-none ${
                dark
                  ? "text-white placeholder:text-slate-500"
                  : "text-slate-900 placeholder:text-slate-400"
              }`}
            />

          </div>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[1000px]">

            <thead className={`${
              dark
                ? "bg-white/5"
                : "bg-slate-50"
            }`}>

              <tr className={`border-b text-left ${
                dark
                  ? "border-white/10"
                  : "border-slate-200"
              }`}>

                {[
                  "Event",
                  "Actor",
                  "Action",
                  "Target",
                  "Status",
                ].map((header) => (

                  <th
                    key={header}
                    className={`px-8 py-5 text-sm font-semibold uppercase tracking-[0.2em] ${
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

              {auditLogs.map(
                (
                  log,
                  index
                ) => {

                  const Icon =
                    log.icon;

                  return (

                    <tr
                      key={log.id}
                      className={`
                        border-b
                        transition-all
                        ${
                          dark
                            ? "border-white/5 hover:bg-white/5"
                            : "border-slate-100 hover:bg-slate-50"
                        }
                        ${
                          index === auditLogs.length - 1
                            ? "border-b-0"
                            : ""
                        }
                      `}
                    >

                      {/* EVENT */}
                      <td className="px-8 py-6">

                        <div className="flex items-center gap-4">

                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              ${
                                log.result === "Success"
                                  ? "bg-cyan-500/10 text-cyan-500"
                                  : "bg-red-500/10 text-red-500"
                              }
                            `}
                          >

                            <Icon className="h-6 w-6" />

                          </div>

                          <div>

                            <p className={`font-semibold ${
                              dark
                                ? "text-white"
                                : "text-[#0f172a]"
                            }`}>

                              {log.action}

                            </p>

                            <p className={`mt-1 text-sm ${
                              dark
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}>

                              {log.timestamp}

                            </p>

                          </div>

                        </div>

                      </td>

                      {/* ACTOR */}
                      <td className={`px-8 py-6 font-semibold ${
                        dark
                          ? "text-white"
                          : "text-[#0f172a]"
                      }`}>

                        {log.actor}

                      </td>

                      {/* ACTION */}
                      <td className={`px-8 py-6 ${
                        dark
                          ? "text-slate-300"
                          : "text-slate-600"
                      }`}>

                        {log.action}

                      </td>

                      {/* TARGET */}
                      <td className={`px-8 py-6 ${
                        dark
                          ? "text-slate-300"
                          : "text-slate-600"
                      }`}>

                        {log.target}

                      </td>

                      {/* STATUS */}
                      <td className="px-8 py-6">

                        <div
                          className={`
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            ${
                              log.result === "Success"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-red-500/10 text-red-500"
                            }
                          `}
                        >

                          {log.result === "Success" ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <AlertTriangle className="h-4 w-4" />
                          )}

                          {log.result}

                        </div>

                      </td>

                    </tr>
                  );
                }
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}