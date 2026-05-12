"use client";

import dataSources from "@/data/data-sources.json";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Database,
  ExternalLink,
} from "lucide-react";

import {
  Button,
} from "@/components/ui/button";

export default function DataSourcesPage() {

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>

        <div className="flex items-center gap-3">

          <h1 className="text-5xl font-black">

            Data Sources

          </h1>

          <Badge variant="secondary">

            TRAINING DATA

          </Badge>

        </div>

        <p className="mt-3 text-muted-foreground">

          Monitor datasets,
          class balance, and
          training pipelines.

        </p>

      </div>

      {/* Source Cards */}
      <div className="grid gap-6 lg:grid-cols-3">

        {dataSources.map(
          (source) => (

            <Card
              key={source.id}
              className="border-border bg-background/80"
            >

              <CardContent className="space-y-6 p-6">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <Database className="h-6 w-6 text-primary" />

                    <h2 className="text-2xl font-black">

                      {
                        source.name
                      }

                    </h2>

                  </div>

                  <Badge>

                    ACTIVE

                  </Badge>

                </div>

                {/* Rows */}
                <div>

                  <p className="text-sm text-muted-foreground">

                    Total Rows

                  </p>

                  <h3 className="mt-2 text-4xl font-black">

                    {source.rows.toLocaleString()}

                  </h3>

                </div>

                {/* Class Balance */}
                <div>

                  <div className="mb-2 flex items-center justify-between text-sm">

                    <span>

                      Toxic

                    </span>

                    <span>

                      {
                        source.toxic
                      }
                      %

                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-muted">

                    <div
                      className="h-full rounded-full bg-purple-500"
                      style={{
                        width: `${source.toxic}%`,
                      }}
                    />

                  </div>

                  <div className="mt-3 flex items-center justify-between text-sm">

                    <span>

                      Safe

                    </span>

                    <span>

                      {
                        source.safe
                      }
                      %

                    </span>

                  </div>

                </div>

                {/* Metadata */}
                <div className="space-y-2 text-sm">

                  <div className="flex justify-between">

                    <span className="text-muted-foreground">

                      Last Updated

                    </span>

                    <span>

                      {
                        source.lastUpdated
                      }

                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-muted-foreground">

                      Owner

                    </span>

                    <span>

                      {
                        source.owner
                      }

                    </span>

                  </div>

                </div>

                {/* Notebook */}
                <Button
                  asChild
                  className="w-full"
                >

                  <a
                    href={
                      source.notebook
                    }
                    target="_blank"
                  >

                    <ExternalLink className="mr-2 h-4 w-4" />

                    Open Notebook

                  </a>

                </Button>

              </CardContent>

            </Card>
          )
        )}

      </div>

      {/* Pipeline Diagram */}
      <Card className="border-border bg-background/80">

        <CardContent className="space-y-8 p-10">

          <div>

            <h2 className="text-3xl font-black">

              Training Pipeline

            </h2>

            <p className="mt-2 text-muted-foreground">

              End-to-end data flow
              for Titan AI models.

            </p>

          </div>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">

            <PipelineNode label="Raw CSVs" />

            <Arrow />

            <PipelineNode label="Cleaning" />

            <Arrow />

            <PipelineNode label="Feature Engineering" />

            <Arrow />

            <PipelineNode label="Model Training" />

            <Arrow />

            <PipelineNode label="Evaluation" />

          </div>

        </CardContent>

      </Card>

    </div>
  );
}

function PipelineNode({
  label,
}: {
  label: string;
}) {

  return (
    <div className="flex h-28 w-48 items-center justify-center rounded-3xl border border-border bg-muted/30 text-center text-lg font-bold">

      {label}

    </div>
  );
}

function Arrow() {

  return (
    <div className="text-4xl font-black text-primary">

      →

    </div>
  );
}