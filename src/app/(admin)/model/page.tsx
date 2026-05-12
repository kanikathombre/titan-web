"use client";

import regimeData from "@/data/regime-comparison.json";

import shapData from "@/data/shap-data.json";

import confusionData from "@/data/confusion-matrix.json";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Badge,
} from "@/components/ui/badge";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function ModelPage() {

  return (
    <div className="space-y-8 print:bg-white">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-5xl font-black">

            Model Performance

          </h1>

          <p className="mt-3 text-muted-foreground">

            AI model evaluation,
            feature importance,
            and validation reports.

          </p>

        </div>

        <Badge className="w-fit px-4 py-2 text-sm">

          Last retrained:
          May 12, 2026

        </Badge>

      </div>

      {/* SECTION 1 */}
      <Card className="border-border bg-background/80">

        <CardContent className="overflow-auto p-6">

          <h2 className="mb-6 text-2xl font-black">

            Three-Regime Comparison

          </h2>

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b border-border">

                <th className="p-4 text-left">

                  Regime

                </th>

                <th className="p-4 text-left">

                  Accuracy

                </th>

                <th className="p-4 text-left">

                  Precision

                </th>

                <th className="p-4 text-left">

                  Recall

                </th>

                <th className="p-4 text-left">

                  F1 Score

                </th>

              </tr>

            </thead>

            <tbody>

              {regimeData.map(
                (item) => (

                  <tr
                    key={item.regime}
                    className="border-b border-border"
                  >

                    <td className="p-4">

                      {
                        item.regime
                      }

                    </td>

                    <td className="p-4">

                      {
                        item.accuracy
                      }
                      %

                    </td>

                    <td className="p-4">

                      {
                        item.precision
                      }
                      %

                    </td>

                    <td className="p-4">

                      {
                        item.recall
                      }
                      %

                    </td>

                    <td className="p-4">

                      {item.f1}
                      %

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </CardContent>

      </Card>

      {/* SECTION 2 */}
      <Card className="border-border bg-background/80">

        <CardContent className="p-6">

          <h2 className="mb-6 text-2xl font-black">

            Classification Reports

          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {regimeData.map(
              (item) => (

                <div
                  key={item.regime}
                  className="rounded-2xl border border-border p-5"
                >

                  <h3 className="mb-4 text-xl font-bold">

                    {
                      item.regime
                    }

                  </h3>

                  <div className="space-y-2 text-sm">

                    <p>

                      Accuracy:
                      {
                        item.accuracy
                      }
                      %

                    </p>

                    <p>

                      Precision:
                      {
                        item.precision
                      }
                      %

                    </p>

                    <p>

                      Recall:
                      {
                        item.recall
                      }
                      %

                    </p>

                    <p>

                      F1:
                      {item.f1}%

                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </CardContent>

      </Card>

      {/* SECTION 3 */}
      <Card className="border-border bg-background/80">

        <CardContent className="p-6">

          <h2 className="mb-6 text-2xl font-black">

            SHAP Feature Importance

          </h2>

          <div className="h-[400px]">

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
                />

                <XAxis
                  type="number"
                />

                <YAxis
                  dataKey="feature"
                  type="category"
                />

                <Tooltip />

                <Bar
                  dataKey="importance"
                  fill="#8b5cf6"
                  radius={[0, 10, 10, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </CardContent>

      </Card>

      {/* SECTION 4 */}
      <Card className="border-border bg-background/80">

        <CardContent className="overflow-auto p-6">

          <h2 className="mb-6 text-2xl font-black">

            Confusion Matrix

          </h2>

          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b border-border">

                <th className="p-4 text-left">

                  Source

                </th>

                <th className="p-4 text-left">

                  TP

                </th>

                <th className="p-4 text-left">

                  TN

                </th>

                <th className="p-4 text-left">

                  FP

                </th>

                <th className="p-4 text-left">

                  FN

                </th>

              </tr>

            </thead>

            <tbody>

              {confusionData.map(
                (item) => (

                  <tr
                    key={item.source}
                    className="border-b border-border"
                  >

                    <td className="p-4">

                      {
                        item.source
                      }

                    </td>

                    <td className="p-4">

                      {item.tp}

                    </td>

                    <td className="p-4">

                      {item.tn}

                    </td>

                    <td className="p-4 text-red-400">

                      {item.fp}

                    </td>

                    <td className="p-4 text-yellow-400">

                      {item.fn}

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </CardContent>

      </Card>

    </div>
  );
}