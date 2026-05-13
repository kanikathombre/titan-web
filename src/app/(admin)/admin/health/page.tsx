"use client";

import { useEffect, useState } from "react";

type HealthData = {
  status: "up" | "down";
  modelLoaded: boolean;
  featureCount: number;
  version: string;
  recentErrors: string[];
};

export default function HealthPage() {
  const [health, setHealth] = useState<HealthData>({
    status: "up",
    modelLoaded: true,
    featureCount: 128,
    version: "v1.0.3",
    recentErrors: [],
  });

  // Simulate live updates every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      const isUp = Math.random() > 0.2;

      setHealth({
        status: isUp ? "up" : "down",
        modelLoaded: isUp,
        featureCount: 128,
        version: "v1.0.3",
        recentErrors: isUp
          ? []
          : [
              "Prediction API timeout",
              "Dataset sync failed",
            ],
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">System Health</h1>

        <p className="text-muted-foreground mt-1">
          Monitor API, model, and platform status in real time.
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* API Status */}
        <div className="rounded-2xl border p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">
            API Status
          </p>

          <div className="mt-3">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                health.status === "up"
                  ? "bg-green-500/10 text-green-500"
                  : "bg-red-500/10 text-red-500"
              }`}
            >
              {health.status === "up" ? "UP" : "DOWN"}
            </span>
          </div>
        </div>

        {/* Model Loaded */}
        <div className="rounded-2xl border p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">
            Model Loaded
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {health.modelLoaded ? "YES" : "NO"}
          </h2>
        </div>

        {/* Feature Count */}
        <div className="rounded-2xl border p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">
            Feature Count
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {health.featureCount}
          </h2>
        </div>

        {/* Version */}
        <div className="rounded-2xl border p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">
            Version
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {health.version}
          </h2>
        </div>
      </div>

      {/* Error Logs */}
      <div className="rounded-2xl border p-5 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Recent Error Logs
        </h2>

        {health.recentErrors.length > 0 ? (
          <div className="space-y-3">
            {health.recentErrors.map((error, index) => (
              <div
                key={index}
                className="rounded-lg border border-red-500/20 bg-red-500/5 p-3 text-sm text-red-500"
              >
                {error}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            No recent errors found.
          </p>
        )}
      </div>
    </div>
  );
}