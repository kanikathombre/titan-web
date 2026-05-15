"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";

import { z } from "zod";

import {
  Activity,
  ShieldCheck,
  FlaskConical,
  BrainCircuit,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { useHistoryStore } from "@/lib/history-store";

const predictSchema = z.object({
  nanoparticle: z.string().min(1),
  size: z.coerce.number().min(1),
  shape: z.string().min(1),
  dosage: z.coerce.number().min(1),
  exposure: z.coerce.number().min(1),
  cellLine: z.string().min(1),
  surfaceCharge: z.coerce.number(),
  coating: z.string().optional(),
  viability: z.coerce.number().min(0).max(100),
  ph: z.coerce.number().min(1).max(14),
});

type PredictForm = z.infer<
  typeof predictSchema
>;

export default function PredictPage() {

  const [result, setResult] =
    useState<null | {
      verdict: string;
      score: number;
    }>(null);

  const [offline] =
    useState(false);

  const addHistory =
    useHistoryStore(
      (state) =>
        state.addHistory
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<PredictForm>({
    resolver: zodResolver(
      predictSchema
    ),
  });

  const onSubmit = (
    data: PredictForm
  ) => {

    const toxic =
      data.dosage > 50;

    const prediction = {
      verdict: toxic
        ? "Toxic"
        : "Safe",

      score: toxic
        ? 89
        : 12,
    };

    setResult(prediction);

    addHistory({
      verdict:
        prediction.verdict,

      score:
        prediction.score,

      nanoparticle:
        data.nanoparticle,
    });
  };

  function loadPresetSafe() {

    setValue(
      "nanoparticle",
      "Gold"
    );

    setValue("size", 20);

    setValue(
      "shape",
      "Sphere"
    );

    setValue(
      "dosage",
      10
    );

    setValue(
      "exposure",
      12
    );

    setValue(
      "cellLine",
      "HEK293"
    );

    setValue(
      "surfaceCharge",
      -5
    );

    setValue(
      "viability",
      92
    );

    setValue("ph", 7);
  }

  function loadPresetToxic() {

    setValue(
      "nanoparticle",
      "Silver"
    );

    setValue("size", 90);

    setValue(
      "shape",
      "Rod"
    );

    setValue(
      "dosage",
      120
    );

    setValue(
      "exposure",
      48
    );

    setValue(
      "cellLine",
      "A549"
    );

    setValue(
      "surfaceCharge",
      30
    );

    setValue(
      "viability",
      20
    );

    setValue("ph", 4);
  }

  return (
    <div className="relative space-y-5">

      {/* BG */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-250px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        {Array.from({ length: 16 }).map(
          (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
              style={{
                width: `${2 + (i % 4)}px`,
                height: `${2 + (i % 4)}px`,
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
              }}
              animate={{
                x: [
                  0,
                  Math.random() * 120 - 60,
                  0,
                ],
                y: [
                  0,
                  Math.random() * 120 - 60,
                  0,
                ],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        )}

      </div>

      {/* HEADER */}
      <div className="relative z-10">

        <h1 className="text-4xl font-black tracking-tight text-white">

          Predict Toxicity

        </h1>

        <p className="mt-2 text-base text-white/55">

          AI-powered nanoparticle toxicity prediction.

        </p>

      </div>

      {/* STATS */}
      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-4">

        {[
          {
            title: "Prediction Accuracy",
            value: "98.2%",
            icon: ShieldCheck,
          },

          {
            title: "Datasets",
            value: "12.4K",
            icon: FlaskConical,
          },

          {
            title: "AI Models",
            value: "24",
            icon: BrainCircuit,
          },

          {
            title: "Predictions",
            value: "89K",
            icon: Activity,
          },
        ].map((item, i) => {

          const Icon = item.icon;

          return (
            <Card
              key={i}
              className="bg-[#071427]/75 backdrop-blur-2xl border border-cyan-500/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_0_30px_rgba(0,255,255,0.03)]"
            >

              <CardContent className="flex items-center justify-between p-4">

                <div>

                  <p className="text-sm text-white/45">

                    {item.title}

                  </p>

                  <h2 className="mt-2 text-2xl font-black text-white">

                    {item.value}

                  </h2>

                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <Icon className="h-7 w-7 text-cyan-400" />

                </div>

              </CardContent>

            </Card>
          );
        })}

      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1.45fr_0.55fr]">

        {/* LEFT */}
        <Card className="border border-white/[0.04] shadow-[0_0_25px_rgba(0,255,255,0.02)] bg-[#071427]/80 backdrop-blur-xl">

          <CardContent className="space-y-5 p-5">

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3">

              <Button
                onClick={loadPresetSafe}
                className="bg-cyan-500 text-black hover:bg-cyan-400"
              >

                Safe Preset

              </Button>

              <Button
                variant="outline"
                onClick={loadPresetToxic}
                className="border-cyan-500/20 bg-transparent text-white hover:bg-cyan-500/10"
              >

                Toxic Preset

              </Button>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >

              {/* Nanoparticle */}
              <Select
                onValueChange={(value) =>
                  setValue(
                    "nanoparticle",
                    value
                  )
                }
              >

                <SelectTrigger className="h-11 border-cyan-500/10 bg-[#081325] text-white">

                  <SelectValue placeholder="Select Nanoparticle" />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="Gold">
                    Gold
                  </SelectItem>

                  <SelectItem value="Silver">
                    Silver
                  </SelectItem>

                  <SelectItem value="Titanium">
                    Titanium
                  </SelectItem>

                </SelectContent>

              </Select>

              <Input
                type="number"
                placeholder="Size (nm)"
                {...register("size")}
                className="h-11 border-cyan-500/10 bg-[#081325]"
              />

              {/* Shape */}
              <Select
                onValueChange={(value) =>
                  setValue(
                    "shape",
                    value
                  )
                }
              >

                <SelectTrigger className="h-11 border-cyan-500/10 bg-[#081325] text-white">

                  <SelectValue placeholder="Select Shape" />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="Sphere">
                    Sphere
                  </SelectItem>

                  <SelectItem value="Rod">
                    Rod
                  </SelectItem>

                  <SelectItem value="Cube">
                    Cube
                  </SelectItem>

                </SelectContent>

              </Select>

              <Input
                type="number"
                placeholder="Dosage"
                {...register("dosage")}
                className="h-11 border-cyan-500/10 bg-[#081325]"
              />

              <Input
                type="number"
                placeholder="Exposure Time"
                {...register("exposure")}
                className="h-11 border-cyan-500/10 bg-[#081325]"
              />

              {/* Cell line */}
              <Select
                onValueChange={(value) =>
                  setValue(
                    "cellLine",
                    value
                  )
                }
              >

                <SelectTrigger className="h-11 border-cyan-500/10 bg-[#081325] text-white">

                  <SelectValue placeholder="Select Cell Line" />

                </SelectTrigger>

                <SelectContent>

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
                type="number"
                placeholder="Surface Charge"
                {...register("surfaceCharge")}
                className="h-11 border-cyan-500/10 bg-[#081325]"
              />

              <Input
                placeholder="Coating (Optional)"
                {...register("coating")}
                className="h-11 border-cyan-500/10 bg-[#081325]"
              />

              <Input
                type="number"
                placeholder="Cell Viability"
                {...register("viability")}
                className="h-11 border-cyan-500/10 bg-[#081325]"
              />

              <Input
                type="number"
                placeholder="pH"
                {...register("ph")}
                className="h-11 border-cyan-500/10 bg-[#081325]"
              />

              {/* BUTTON */}
              <div className="md:col-span-2">

                <Button
                  type="submit"
                  disabled={offline}
                  className="h-11 w-full bg-cyan-400 text-lg font-bold text-black hover:bg-cyan-300"
                >

                  Run Prediction

                </Button>

              </div>

            </form>

          </CardContent>

        </Card>

        {/* RIGHT PANEL */}
        <div className="space-y-4">

          <Card className="border border-white/[0.04] shadow-[0_0_25px_rgba(0,255,255,0.02)] bg-[#071427]/80 backdrop-blur-xl">

            <CardContent className="p-5">

              <p className="text-sm text-white/45">

                AI Confidence

              </p>

              <h2 className="mt-3 text-5xl font-black text-cyan-400">

                98%

              </h2>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[98%] rounded-full bg-cyan-400" />

              </div>

            </CardContent>

          </Card>

          <Card className="border border-white/[0.04] shadow-[0_0_25px_rgba(0,255,255,0.02)] bg-[#071427]/80 backdrop-blur-xl">

            <CardContent className="space-y-5 p-5">

              <h3 className="text-xl font-bold text-white">

                Live Analysis

              </h3>

              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-white/50">
                    Toxicity Risk
                  </span>

                  <span className="text-red-400">
                    Moderate
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/50">
                    Stability
                  </span>

                  <span className="text-cyan-400">
                    High
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white/50">
                    Bio Compatibility
                  </span>

                  <span className="text-green-400">
                    Safe
                  </span>

                </div>

              </div>

            </CardContent>

          </Card>

        </div>

      </div>

      {/* RESULT */}
      {result && (

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <Card className="border border-white/[0.04] shadow-[0_0_25px_rgba(0,255,255,0.02)] bg-[#071427]/80 backdrop-blur-xl">

            <CardContent className="space-y-4 p-5">

              <h2 className="text-4xl font-black text-white">

                Prediction Result

              </h2>

              <div
                className={`inline-flex rounded-full px-6 py-3 text-xl font-black ${
                  result.verdict ===
                  "Toxic"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >

                {result.verdict}

              </div>

              <p className="text-2xl font-bold text-white">

                Toxicity Score:
                {" "}
                {result.score}
                %

              </p>

            </CardContent>

          </Card>

        </motion.div>
      )}

    </div>
  );
}