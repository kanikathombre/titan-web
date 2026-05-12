"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

const predictionData = [
  {
    month: "Jan",
    predictions: 120,
  },
  {
    month: "Feb",
    predictions: 180,
  },
  {
    month: "Mar",
    predictions: 240,
  },
  {
    month: "Apr",
    predictions: 320,
  },
  {
    month: "May",
    predictions: 410,
  },
  {
    month: "Jun",
    predictions: 530,
  },
];

const toxicityData = [
  {
    name: "Safe",
    value: 68,
  },
  {
    name: "Toxic",
    value: 32,
  },
];

const COLORS = [
  "#22c55e",
  "#ef4444",
];

const recentActivity = [
  {
    id: 1,
    action:
      "New prediction batch uploaded",
    time: "2 min ago",
  },

  {
    id: 2,
    action:
      "Admin updated dataset",
    time: "10 min ago",
  },

  {
    id: 3,
    action:
      "New user registered",
    time: "18 min ago",
  },

  {
    id: 4,
    action:
      "Prediction API spike detected",
    time: "35 min ago",
  },
];

export default function OverviewPage() {

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>

        <h1 className="text-5xl font-black">

          Admin Overview

        </h1>

        <p className="mt-3 text-muted-foreground">

          Platform analytics and
          monitoring dashboard.

        </p>

      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card className="border-border bg-background/80">

          <CardContent className="p-6">

            <p className="text-muted-foreground">

              Total Predictions

            </p>

            <h2 className="mt-3 text-4xl font-black">

              18,420

            </h2>

          </CardContent>

        </Card>

        <Card className="border-border bg-background/80">

          <CardContent className="p-6">

            <p className="text-muted-foreground">

              Active Users

            </p>

            <h2 className="mt-3 text-4xl font-black">

              1,284

            </h2>

          </CardContent>

        </Card>

        <Card className="border-border bg-background/80">

          <CardContent className="p-6">

            <p className="text-muted-foreground">

              Toxic Predictions

            </p>

            <h2 className="mt-3 text-4xl font-black text-red-400">

              32%

            </h2>

          </CardContent>

        </Card>

        <Card className="border-border bg-background/80">

          <CardContent className="p-6">

            <p className="text-muted-foreground">

              API Success Rate

            </p>

            <h2 className="mt-3 text-4xl font-black text-green-400">

              99.2%

            </h2>

          </CardContent>

        </Card>

      </div>

      {/* Charts */}
      <div className="grid gap-6 xl:grid-cols-2">

        {/* Line Chart */}
        <Card className="border-border bg-background/80">

          <CardContent className="p-6">

            <h2 className="mb-6 text-2xl font-black">

              Prediction Growth

            </h2>

            <div className="h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <LineChart
                  data={
                    predictionData
                  }
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="month"
                    stroke="#888"
                  />

                  <YAxis
                    stroke="#888"
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="predictions"
                    stroke="#8b5cf6"
                    strokeWidth={4}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </CardContent>

        </Card>

        {/* Pie Chart */}
        <Card className="border-border bg-background/80">

          <CardContent className="p-6">

            <h2 className="mb-6 text-2xl font-black">

              Toxicity Distribution

            </h2>

            <div className="h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={
                      toxicityData
                    }
                    dataKey="value"
                    nameKey="name"
                    outerRadius={120}
                    label
                  >

                    {toxicityData.map(
                      (
                        entry,
                        index
                      ) => (

                        <Cell
                          key={index}
                          fill={
                            COLORS[
                              index
                            ]
                          }
                        />
                      )
                    )}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </CardContent>

        </Card>

      </div>

      {/* Recent Activity */}
      <Card className="border-border bg-background/80">

        <CardContent className="p-6">

          <h2 className="mb-6 text-2xl font-black">

            Recent Activity

          </h2>

          <div className="space-y-4">

            {recentActivity.map(
              (
                item
              ) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-border p-4"
                >

                  <div>

                    <p className="font-medium">

                      {
                        item.action
                      }

                    </p>

                  </div>

                  <p className="text-sm text-muted-foreground">

                    {
                      item.time
                    }

                  </p>

                </div>
              )
            )}

          </div>

        </CardContent>

      </Card>

    </div>
  );
}