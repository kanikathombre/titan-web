"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stableParticles = Array.from({ length: 50 }, (_, i) => ({
  left: (i * 19) % 95,
  duration: 4 + (i % 3),
  delay: (i % 5) * 0.4,
}));

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

export default function NanoDashboard({
  step = "01",
}: Props) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  /* ================= STEP 2 ================= */

  if (step === "02") {

    const particles = Array.from({ length: 30 }, (_, i) => ({
      x: (i * 73) % 760,
      y: (i * 47) % 460,
      size: 2 + (i % 5),
      delay: i * 0.08,
    }));

    const clusters = [
      { x: 250, y: 220 },
      { x: 360, y: 190 },
      { x: 470, y: 240 },
      { x: 560, y: 210 },
    ];

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/90">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee 1px, transparent 1px),
              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <svg className="absolute inset-0" width="760" height="460">

          {particles.map((particle, i) => {

            const cluster = clusters[i % clusters.length];

            return (
              <motion.circle
                key={`particle-${i}`}
                cx={particle.x}
                cy={particle.y}
                r={particle.size}
                fill="#22D3EE"
                opacity="0.7"
                animate={{
                  cx: [particle.x, cluster.x],
                  cy: [particle.y, cluster.y],
                  opacity: [0.15, 1, 0.15],
                }}
                transition={{
                  duration: 5 + (i % 4),
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: particle.delay,
                }}
                style={{
                  filter: "drop-shadow(0 0 12px #22D3EE)",
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  }

  /* ================= STEP 3 ================= */

  if (step === "03") {

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/90">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee 1px, transparent 1px),
              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <motion.div
          className="absolute left-0 h-[3px] w-full bg-cyan-400/80"
          animate={{
            top: [190, 240, 190],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {stableParticles.map((_, i) => {

          const toxic = i % 8 === 0;

          return (
            <motion.div
              key={`fall-${i}`}
              className={`absolute rounded-full ${
                toxic ? "bg-red-500" : "bg-cyan-400"
              }`}
              style={{
                width: toxic ? 14 : 8,
                height: toxic ? 14 : 8,
                left: `${stableParticles[i].left}%`,
              }}
              animate={{
                y: [-100, 520],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: stableParticles[i].duration,
                repeat: Infinity,
                ease: "linear",
                delay: stableParticles[i].delay,
              }}
            />
          );
        })}
      </div>
    );
  }

  /* ================= STEP 4 ================= */

  if (step === "04") {

    const antibodies = Array.from({ length: 42 }, (_, i) => {

      const angle = (i / 42) * Math.PI * 2;
      const radius = 260;

      return {
        angle,
        x: 380 + Math.cos(angle) * radius,
        y: 220 + Math.sin(angle) * radius,
      };
    });

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/95">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee 1px, transparent 1px),
              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {antibodies.map((item, i) => (

          <motion.div
            key={`antibody-${i}`}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -10, 0, 10, 0],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <motion.div
              className="absolute left-[5px] top-[8px] h-[26px] w-[2px] bg-cyan-400/70"
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
              }}
            />

            <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee]" />

          </motion.div>
        ))}
      </div>
    );
  }

  /* ================= STEP 5 ================= */

  if (step === "05") {

    const radarDots = [
      { x: 0, y: -120, color: "cyan" },
      { x: 82, y: -20, color: "cyan" },
      { x: 55, y: 95, color: "cyan" },
      { x: -48, y: 58, color: "cyan" },
      { x: -88, y: 25, color: "cyan" },
      { x: -12, y: -58, color: "cyan" },

      { x: -112, y: -18, color: "red" },
      { x: 72, y: -18, color: "red" },
      { x: 18, y: 132, color: "red" },
    ];

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/95">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee 1px, transparent 1px),
              linear-gradient(to bottom, #22d3ee 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute left-[430px] top-[210px]">

          {[80, 140, 200, 260].map((size, i) => (
            <div
              key={`ring-${i}`}
              className="absolute rounded-full border border-cyan-100/70"
              style={{
                width: size,
                height: size,
                left: -size / 2,
                top: -size / 2,
              }}
            />
          ))}

          <motion.div
            className="absolute left-0 top-0"
            style={{
              rotate: "0deg",
            }}
            animate={{
              rotate: "360deg",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            <div
              className="absolute h-[128px] w-[2px] bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
              style={{
                transformOrigin: "top center",
              }}
            />

          </motion.div>

          {radarDots.map((dot, i) => (
            <motion.div
              key={`radar-${i}`}
              className={`absolute rounded-full ${
                dot.color === "red"
                  ? "bg-red-500"
                  : "bg-cyan-400"
              }`}
              style={{
                width: dot.color === "red" ? 16 : 12,
                height: dot.color === "red" ? 16 : 12,
                left: dot.x,
                top: dot.y,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  /* ================= STEP 6 ================= */

  if (step === "06") {

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/90">

        {[...Array(24)].map((_, i) => (

          <motion.div
            key={`matrix-${i}`}
            className="absolute top-0 font-mono text-[13px] leading-[16px] text-cyan-400/50"
            style={{
              left: `${i * 4.2}%`,
            }}
            animate={{
              y: [-400, 520],
            }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          >
            {Array.from({ length: 28 }).map((_, j) => (
              <div key={`text-${i}-${j}`}>
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
                  ][(i + j) % 9]
                }
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    );
  }

  /* ================= STEP 7 ================= */

  if (step === "07") {

    return (
      <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/95">

        <div className="absolute left-[165px] top-[210px] h-[1px] w-[430px] bg-cyan-400/12" />

        {[0, 1, 2].map((i) => (

          <motion.div
            key={`flow-${i}`}
            className="absolute top-[201px] h-2.5 w-2.5 rounded-full bg-cyan-400"
            animate={{
              x: [0, 380],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "linear",
            }}
            style={{
              left: "170px",
            }}
          />
        ))}
      </div>
    );
  }

  /* ================= STEP 1 ================= */

  return (
    <div className="relative h-[460px] w-[760px] overflow-hidden rounded-[40px] bg-[#020817]/90">

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
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />

        {nodes.map((node, index) => (
          <g key={`node-${index}`}>

            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2}
              fill="rgba(34,211,238,0.06)"
              stroke={node.color}
              strokeWidth="2"
              animate={{
                y: [0, -12, 0, 12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
            />

          </g>
        ))}
      </svg>
    </div>
  );
}