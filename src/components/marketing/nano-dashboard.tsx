"use client";

import { motion } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

const stableParticles =
  Array.from(
    { length: 50 },
    (_, i) => ({
      left:
        (i * 19) % 95,

      duration:
        4 + (i % 3),

      delay:
        (i % 5) * 0.4,
    })
  );

const nodes = [
  {
    label: "Size",
    value: "12nm",
    x: 80,
    y: 220,
    size: 28,
    color: "#06B6D4",
    delay: 0,
  },

  {
    label: "ζ-pot",
    value: "-18mV",
    x: 180,
    y: 200,
    size: 48,
    color: "#2563EB",
    delay: 0.2,
  },

  {
    label: "Surface",
    value: "48m²/g",
    x: 320,
    y: 190,
    size: 72,
    color: "#22D3EE",
    glow: true,
    delay: 0.4,
  },

  {
    label: "Dose",
    value: "50µg",
    x: 450,
    y: 205,
    size: 30,
    color: "#06B6D4",
    delay: 0.6,
  },

  {
    label: "Shape",
    value: "Sphere",
    x: 560,
    y: 200,
    size: 52,
    color: "#4338CA",
    delay: 0.8,
  },

  {
    label: "Coat",
    value: "PEG",
    x: 690,
    y: 220,
    size: 76,
    color: "#22D3EE",
    glow: true,
    delay: 1,
  },

  {
    label: "pH",
    value: "7.4",
    x: 820,
    y: 230,
    size: 30,
    color: "#06B6D4",
    delay: 1.2,
  },
];

interface Props {
  step?: string;
}

function DashboardOverlay() {

  return (
    <>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #22d3ee 1px, transparent 1px),
            linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
          `,
          backgroundSize:
            "40px 40px",
        }}
      />

      {/* SCANLINE */}
      <motion.div
        animate={{
          y: [
            "-100%",
            "120%",
          ],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute
          inset-x-0
          h-40
          bg-gradient-to-b
          from-transparent
          via-cyan-400/10
          to-transparent
        "
      />

      {/* TOP GLOW */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-400/5 to-transparent" />

      {/* LIVE STATUS */}
      <div className="absolute right-8 top-8 z-20 flex items-center gap-3">

        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

        <span className="text-[11px] tracking-[0.25em] text-green-300">

          LIVE ANALYSIS

        </span>

      </div>

    </>
  );
}

export default function NanoDashboard({
  step = "01",
}: Props) {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  if (!mounted)
    return null;

  /* ================= STEP 2 ================= */

  if (step === "02") {

    const particles =
      Array.from(
        { length: 30 },
        (_, i) => ({
          x:
            (i * 73) % 760,

          y:
            (i * 47) % 460,

          size:
            2 + (i % 5),

          delay:
            i * 0.08,
        })
      );

    const clusters = [
      {
        x: 250,
        y: 220,
      },

      {
        x: 360,
        y: 190,
      },

      {
        x: 470,
        y: 240,
      },

      {
        x: 560,
        y: 210,
      },
    ];

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071226] via-[#030712] to-[#07192f]">

        <DashboardOverlay />

        <div className="absolute left-10 top-10">

          <p className="text-xs tracking-[0.3em] text-cyan-300/60">

            AGGREGATION SIMULATION

          </p>

        </div>

        <div className="absolute left-[360px] top-[200px] h-28 w-28 rounded-full bg-cyan-400/10 blur-[50px]" />

        <svg
          className="absolute inset-0"
          width="760"
          height="460"
        >

          {particles.map(
            (
              particle,
              i
            ) => {

              const cluster =
                clusters[
                  i %
                    clusters.length
                ];

              return (
                <motion.circle
                  key={`particle-${i}`}
                  cx={particle.x}
                  cy={particle.y}
                  r={particle.size}
                  fill="#22D3EE"
                  opacity="0.7"

                  animate={{
                    cx: [
                      particle.x,
                      cluster.x,
                    ],

                    cy: [
                      particle.y,
                      cluster.y,
                    ],

                    opacity: [
                      0.15,
                      1,
                      0.15,
                    ],
                  }}

                  transition={{
                    duration:
                      5 +
                      (i % 4),

                    repeat:
                      Infinity,

                    repeatType:
                      "reverse",

                    ease: "easeInOut",

                    delay:
                      particle.delay,
                  }}

                  style={{
                    filter:
                      "drop-shadow(0 0 12px #22D3EE)",
                  }}
                />
              );
            }
          )}

        </svg>

      </div>
    );
  }

  /* ================= STEP 3 ================= */

  if (step === "03") {

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071226] via-[#030712] to-[#07192f]">

        <DashboardOverlay />

        <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] via-transparent to-cyan-500/[0.03]" />

        <motion.div
          className="absolute left-0 h-[3px] w-full bg-cyan-400/80"

          animate={{
            top: [
              190,
              240,
              190,
            ],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {stableParticles.map(
          (_, i) => {

            const toxic =
              i % 8 === 0;

            return (
              <motion.div
                key={`fall-${i}`}

                className={`absolute rounded-full ${
                  toxic
                    ? "bg-red-500"
                    : "bg-cyan-400"
                }`}

                style={{
                  width: toxic
                    ? 14
                    : 8,

                  height: toxic
                    ? 14
                    : 8,

                  left: `${stableParticles[i].left}%`,
                }}

                animate={{
                  y: [
                    -100,
                    520,
                  ],

                  opacity: [
                    0,
                    1,
                    1,
                    0,
                  ],
                }}

                transition={{
                  duration:
                    stableParticles[
                      i
                    ].duration,

                  repeat:
                    Infinity,

                  ease: "linear",

                  delay:
                    stableParticles[
                      i
                    ].delay,
                }}
              />
            );
          }
        )}

        <motion.div
          animate={{
            opacity: [
              0.4,
              1,
              0.4,
            ],
          }}

          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}

          className="
            absolute
            right-8
            bottom-8
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            px-5
            py-3
            text-sm
            text-red-300
          "
        >

          TOXICITY DETECTED

        </motion.div>

      </div>
    );
  }

  /* ================= STEP 4 ================= */

  /* ================= STEP 4 ================= */

if (step === "04") {

  const cells =
    Array.from(
      { length: 32 },
      (_, i) => ({
        x:
          80 +
          (i % 8) * 78,

        y:
          80 +
          Math.floor(
            i / 8
          ) *
            78,

        toxic:
          i % 7 === 0 ||
          i % 11 === 0,
      })
    );

  return (
    <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071226] via-[#030712] to-[#07192f]">

      <DashboardOverlay />

      {/* TITLE */}
      <div className="absolute left-8 top-8">

        <p className="text-xs tracking-[0.35em] text-cyan-300/60">

          CYTOTOXICITY ANALYSIS

        </p>

      </div>

      {/* CENTER GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

      {/* CELL GRID */}
      <div className="absolute inset-0 flex items-center justify-center pt-6">

        <div className="grid grid-cols-8 gap-4">

          {cells.map(
            (
              cell,
              i
            ) => (

              <motion.div
                key={`cell-${i}`}

                animate={{
                  scale:
                    cell.toxic
                      ? [1, 1.18, 1]
                      : [1, 1.04, 1],

                  opacity:
                    cell.toxic
                      ? [0.6, 1, 0.6]
                      : [0.7, 1, 0.7],
                }}

                transition={{
                  duration:
                    cell.toxic
                      ? 1.4
                      : 3.5,

                  repeat:
                    Infinity,

                  ease: "easeInOut",
                }}

                className={`
                  relative
                  h-12
                  w-12
                  rounded-2xl
                  border
                  ${
                    cell.toxic
                      ? "border-red-500/30 bg-red-500/10"
                      : "border-cyan-400/20 bg-cyan-500/5"
                  }
                  backdrop-blur-xl
                `}
              >

                {/* INNER CORE */}
                <motion.div
                  animate={{
                    scale:
                      cell.toxic
                        ? [1, 1.4, 1]
                        : [1, 1.15, 1],
                  }}

                  transition={{
                    duration:
                      cell.toxic
                        ? 1.2
                        : 3,

                    repeat:
                      Infinity,
                  }}

                  className={`
                    absolute
                    left-1/2
                    top-1/2
                    h-4
                    w-4
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    ${
                      cell.toxic
                        ? "bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.9)]"
                        : "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                    }
                  `}
                />

              </motion.div>
            )
          )}

        </div>

      </div>

      {/* ANALYSIS PANEL */}
      <div className="absolute bottom-2 left-2 rounded-xl border border-cyan-400/10 bg-cyan-500/[0.03] p-1.5 backdrop-blur-xl">

        <p className="text-xs tracking-[0.25em] text-white/40">

          CELL DAMAGE

        </p>

        <p className="mt-3 text-3xl font-black text-red-400">

          14.8%

        </p>

      </div>

      {/* LIVE STATUS */}
      <div className="absolute bottom-8 right-8 rounded-2xl border border-cyan-400/10 bg-cyan-500/[0.03] px-5 py-4 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-cyan-300">

            Cellular response stable

          </span>

        </div>

      </div>

    </div>
  );
}

 /* ================= STEP 5 ================= */

if (step === "05") {

  const metrics = [
    {
      label: "ROS",
      value: 92,
      color: "from-red-400 to-red-600",
      position:
        "left-12 top-[145px]",
    },

    {
      label: "Size",
      value: 74,
      color:
        "from-cyan-400 to-blue-500",
      position:
        "right-12 top-[145px]",
    },

    {
      label: "Surface",
      value: 88,
      color:
        "from-cyan-400 to-indigo-500",
      position:
        "left-12 bottom-[85px]",
    },

    {
      label: "Charge",
      value: 63,
      color:
        "from-blue-400 to-cyan-500",
      position:
        "right-12 bottom-[85px]",
    },
  ];

  return (

    <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071226] via-[#030712] to-[#07192f]">

      <DashboardOverlay />

      {/* TITLE */}
      <div className="absolute left-8 top-8">

        <p className="text-xs tracking-[0.35em] text-cyan-300/60">

          RISK FACTOR ANALYSIS

        </p>

      </div>

      {/* CENTER GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* ROTATING RINGS */}
      <motion.div
        animate={{
          rotate: 360,
        }}

        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}

        className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-400/10
        "
      >

        <div className="absolute inset-6 rounded-full border border-cyan-400/10" />

        <div className="absolute inset-12 rounded-full border border-cyan-400/10" />

      </motion.div>

      {/* CORE */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
        }}

        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-[150px]
          w-[150px]
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/5
          backdrop-blur-xl
        "
      >

        <p className="text-xs tracking-[0.3em] text-white/40">

          RISK SCORE

        </p>

        <h3 className="mt-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-6xl font-black text-transparent">

          82

        </h3>

        <p className="mt-1 text-sm text-cyan-300">

          HIGH RISK

        </p>

      </motion.div>

      {/* METRIC CARDS */}
      {metrics.map(
        (
          metric,
          i
        ) => (

          <motion.div
            key={metric.label}

            animate={{
              y: [0, -5, 0],
            }}

            transition={{
              duration: 4 + i,
              repeat: Infinity,
            }}

            className={`
              absolute
              ${metric.position}
              w-[170px]
              rounded-2xl
              border
              border-cyan-400/10
              bg-cyan-500/[0.03]
              p-4
              backdrop-blur-xl
            `}
          >

            <div className="flex items-center justify-between">

              <p className="text-xs tracking-[0.25em] text-white/50">

                {metric.label}

              </p>

              <p className="text-2xl font-black text-white">

                {metric.value}%

              </p>

            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/5">

              <motion.div
                initial={{
                  width: 0,
                }}

                animate={{
                  width:
                    `${metric.value}%`,
                }}

                transition={{
                  duration: 2,
                  delay:
                    i * 0.2,
                }}

                className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
              />

            </div>

          </motion.div>
        )
      )}

      {/* DATA FLOW */}
      {[0, 1, 2, 3].map(
        (i) => (

          <motion.div
            key={i}

            className="absolute h-2 w-2 rounded-full bg-cyan-400"

            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.3, 0.5],
            }}

            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}

            style={{
              left: [
                "230px",
                "530px",
                "230px",
                "530px",
              ][i],

              top: [
                "180px",
                "180px",
                "320px",
                "320px",
              ][i],
            }}
          />
        )
      )}

    </div>
  );
}

  /* ================= STEP 6 ================= */

  if (step === "06") {

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071226] via-[#030712] to-[#07192f]">

        <DashboardOverlay />

        <div className="absolute left-8 top-8">

          <p className="font-mono text-sm text-cyan-300">

            REPORT_GENERATION.exe

          </p>

        </div>

        {[...Array(24)].map(
          (_, i) => (

            <motion.div
              key={`matrix-${i}`}

              className="absolute top-0 font-mono text-[13px] leading-[16px] text-cyan-400/50"

              style={{
                left: `${
                  i * 4.2
                }%`,
              }}

              animate={{
                y: [
                  -400,
                  520,
                ],
              }}

              transition={{
                duration:
                  8 +
                  (i % 5),

                repeat:
                  Infinity,

                ease: "linear",

                delay:
                  i * 0.2,
              }}
            >

              {Array.from({
                length: 28,
              }).map(
                (_, j) => (

                  <div
                    key={`text-${i}-${j}`}
                  >
                    {
                      [
                        "TOXIC",
                        "SAFE",
                        "NON-TOXIC",
                        "ROS",
                        "0.952",
                        "TiO₂",
                        "ZnO",
                        "LOW",
                        "HIGH",
                      ][
                        (i +
                          j) %
                          9
                      ]
                    }
                  </div>
                )
              )}

            </motion.div>
          )
        )}

        <div className="absolute bottom-8 left-8 right-8">

          <div className="h-2 overflow-hidden rounded-full bg-white/5">

            <motion.div
              initial={{
                width: 0,
              }}

              animate={{
                width:
                  "92%",
              }}

              transition={{
                duration: 4,
                repeat:
                  Infinity,
              }}

              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            />

          </div>

        </div>

      </div>
    );
  }

  /* ================= STEP 7 ================= */

  /* ================= STEP 7 ================= */

if (step === "07") {

  const experts = [
    {
      name: "AI Validation",
      score: "98.7%",
      color: "cyan",
    },

    {
      name: "Human Expert",
      score: "97.9%",
      color: "blue",
    },

    {
      name: "Consensus",
      score: "98.3%",
      color: "green",
    },
  ];

  return (
    <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071226] via-[#030712] to-[#07192f]">

      <DashboardOverlay />

      {/* TITLE */}
      <div className="absolute left-8 top-8">

        <p className="text-xs tracking-[0.35em] text-cyan-300/60">

          EXPERT VALIDATION

        </p>

      </div>

      {/* CENTRAL CORE */}
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

      {/* CENTRAL AI */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
        }}

        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/5
          backdrop-blur-xl
        "
      >

        <div className="text-center">

          <p className="text-xs tracking-[0.25em] text-white/40">

            VALIDATED

          </p>

          <h3 className="mt-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-black text-transparent">

            98%

          </h3>

        </div>

      </motion.div>

      {/* CONNECTIONS */}
      {experts.map(
        (
          expert,
          i
        ) => {

          const positions = [
            {
              left: "12%",
              top: "22%",
            },

            {
              left: "72%",
              top: "22%",
            },

            {
              left: "42%",
              top: "74%",
            },
          ];

          return (

            <motion.div
              key={expert.name}

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                duration: 4 + i,
                repeat: Infinity,
              }}

              className="
                absolute
                flex
                w-[170px]
                flex-col
                rounded-3xl
                border
                border-cyan-400/10
                bg-cyan-500/[0.03]
                p-5
                backdrop-blur-xl
              "

              style={{
                left:
                  positions[i].left,
                top:
                  positions[i].top,
              }}
            >

              <p className="text-xs tracking-[0.25em] text-white/40">

                {expert.name}

              </p>

              <p
                className={`
                  mt-3
                  text-3xl
                  font-black
                  ${
                    expert.color ===
                    "green"
                      ? "text-green-400"
                      : "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  }
                `}
              >

                {expert.score}

              </p>

            </motion.div>
          );
        }
      )}

      {/* FLOW LINES */}
      <svg
        className="absolute inset-0"
        width="760"
        height="460"
      >

        <motion.path
          d="M160 130 Q380 230 380 230"

          stroke="rgba(34,211,238,0.18)"

          strokeWidth="2"

          fill="transparent"

          animate={{
            opacity: [0.2, 1, 0.2],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.path
          d="M600 130 Q380 230 380 230"

          stroke="rgba(34,211,238,0.18)"

          strokeWidth="2"

          fill="transparent"

          animate={{
            opacity: [0.2, 1, 0.2],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />

        <motion.path
          d="M380 350 Q380 230 380 230"

          stroke="rgba(34,211,238,0.18)"

          strokeWidth="2"

          fill="transparent"

          animate={{
            opacity: [0.2, 1, 0.2],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />

      </svg>

    </div>
  );
}

  /* ================= STEP 1 ================= */

  return (
    <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#071226] via-[#030712] to-[#07192f]">

      <DashboardOverlay />

      <svg
        className="absolute inset-0"
        width="900"
        height="520"
        viewBox="0 0 900 520"
      >

        <motion.path
          d="
            M 80 220
            Q 140 190 180 200
            T 320 190
            T 450 205
            T 560 200
            T 690 220
            T 820 230
          "

          fill="transparent"

          stroke="rgba(34,211,238,0.18)"

          strokeWidth="2"

          initial={{
            pathLength: 0,
          }}

          animate={{
            pathLength: 1,
          }}

          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />

        {nodes.map(
          (
            node,
            index
          ) => (

            <g
              key={`node-${index}`}
            >

              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.size / 2}

                fill="rgba(34,211,238,0.06)"

                stroke={
                  node.color
                }

                strokeWidth="2"

                animate={{
                  y: [
                    0,
                    -12,
                    0,
                    12,
                    0,
                  ],
                }}

                transition={{
                  duration: 5,
                  repeat:
                    Infinity,

                  delay:
                    node.delay,

                  ease: "easeInOut",
                }}
              />

            </g>
          )
        )}

      </svg>

      {/* METRIC PANELS */}

      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-4">

        {[
          "Surface Area",
          "Hydrodynamics",
          "ROS",
          "Stability",
        ].map(
          (
            item,
            i
          ) => (

            <motion.div
              key={item}

              animate={{
                y: [
                  0,
                  -4,
                  0,
                ],
              }}

              transition={{
                duration:
                  4 + i,
                repeat:
                  Infinity,
              }}

              className="
                rounded-2xl
                border
                border-cyan-400/10
                bg-cyan-500/[0.03]
                p-4
                backdrop-blur-xl
              "
            >

              <p className="text-[10px] tracking-[0.25em] text-white/40">

                {item}

              </p>

              <p className="mt-2 text-xl font-bold text-cyan-300">

                {(
                  90 +
                  i * 2
                ).toFixed(1)}
                %

              </p>

            </motion.div>
          )
        )}

      </div>

    </div>
  );
}