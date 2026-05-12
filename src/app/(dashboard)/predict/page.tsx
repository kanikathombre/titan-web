"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";

import { z } from "zod";

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
    <div className="mx-auto max-w-6xl space-y-8">

      {/* Header */}
      <div>

        <h1 className="text-5xl font-black">

          Predict Toxicity

        </h1>

        <p className="mt-2 text-muted-foreground">

          AI-powered nanoparticle toxicity prediction.

        </p>

      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-4">

        <Button
          onClick={
            loadPresetSafe
          }
        >

          Safe Preset

        </Button>

        <Button
          variant="secondary"
          onClick={
            loadPresetToxic
          }
        >

          Toxic Preset

        </Button>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >

        {/* Nanoparticle */}
        {/* Nanoparticle */}
        <div className="space-y-2">

        <Select
            onValueChange={(value) =>
            setValue(
                "nanoparticle",
                value
            )
            }
        >

            <SelectTrigger className="w-full">

            <SelectValue placeholder="Select Nanoparticle" />

            </SelectTrigger>

            <SelectContent
            position="popper"
            className="z-[100] min-w-[220px]"
            >

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

        <p className="text-sm text-red-500">

            {
            errors
                .nanoparticle
                ?.message
            }

        </p>

        </div>

        {/* Size */}
        <div>

          <Input
            type="number"
            placeholder="Size (nm)"
            {...register("size")}
          />

        </div>

        {/* Shape */}
        {/* Shape */}
        <div className="space-y-2">

        <Select
            onValueChange={(value) =>
            setValue(
                "shape",
                value
            )
            }
        >

            <SelectTrigger className="w-full">

            <SelectValue placeholder="Select Shape" />

            </SelectTrigger>

            <SelectContent
            position="popper"
            className="z-[100] min-w-[220px]"
            >

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

        </div>

        {/* Dosage */}
        <div>

          <Input
            type="number"
            placeholder="Dosage"
            {...register(
              "dosage"
            )}
          />

        </div>

        {/* Exposure */}
        <div>

          <Input
            type="number"
            placeholder="Exposure Time"
            {...register(
              "exposure"
            )}
          />

        </div>

        {/* Cell Line */}
        {/* Cell Line */}
        <div className="space-y-2">

        <Select
            onValueChange={(value) =>
            setValue(
                "cellLine",
                value
            )
            }
        >

            <SelectTrigger className="w-full">

            <SelectValue placeholder="Select Cell Line" />

            </SelectTrigger>

            <SelectContent
            position="popper"
            className="z-[100] min-w-[220px]"
            >

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

        </div>

        {/* Surface Charge */}
        <div>

          <Input
            type="number"
            placeholder="Surface Charge"
            {...register(
              "surfaceCharge"
            )}
          />

        </div>

        {/* Coating */}
        <div>

          <Input
            placeholder="Coating (Optional)"
            {...register(
              "coating"
            )}
          />

        </div>

        {/* Viability */}
        <div>

          <Input
            type="number"
            placeholder="Cell Viability"
            {...register(
              "viability"
            )}
          />

        </div>

        {/* PH */}
        <div>

          <Input
            type="number"
            placeholder="pH"
            {...register("ph")}
          />

        </div>

        {/* Submit */}
        <div className="md:col-span-2">

          <Button
            type="submit"
            disabled={offline}
            className="w-full"
          >

            {offline
              ? "Offline"
              : "Run Prediction"}

          </Button>

        </div>

      </form>

      {/* Result */}
      {result && (

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <Card className="border-white/10 bg-black/40 backdrop-blur-xl">

            <CardContent className="space-y-4 p-8">

              <h2 className="text-3xl font-black">

                Prediction Result

              </h2>

              <div
                className={`inline-flex rounded-full px-6 py-2 text-lg font-bold ${
                  result.verdict ===
                  "Toxic"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                }`}
              >

                {
                  result.verdict
                }

              </div>

              <p className="text-2xl font-bold">

                Toxicity Score:
                {" "}
                {
                  result.score
                }
                %

              </p>

            </CardContent>

          </Card>

        </motion.div>
      )}

    </div>
  );
}