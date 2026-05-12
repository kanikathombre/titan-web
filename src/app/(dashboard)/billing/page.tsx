"use client";

import {
  EmptyState,
} from "@/components/ui/empty-state";

import { toast } from "sonner";

import {
  CreditCard,
  TrendingUp,
  Receipt,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Button,
} from "@/components/ui/button";

import {
  Badge,
} from "@/components/ui/badge";

const invoices = [];

export default function BillingPage() {

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-5xl font-black">

            Billing

          </h1>

          <p className="mt-3 text-muted-foreground">

            Manage your subscription,
            usage, and invoices.

          </p>

        </div>

        <Button
          onClick={() =>
            toast.success(
              "Plan change flow coming soon"
            )
          }
        >

          <CreditCard className="mr-2 h-4 w-4" />

          Change Plan

        </Button>

      </div>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Current Plan */}
        <Card className="border-border bg-background/80">

          <CardContent className="space-y-6 p-8">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-black">

                Current Plan

              </h2>

              <Badge>

                ACTIVE

              </Badge>

            </div>

            <div>

              <h3 className="text-4xl font-black">

                Pro Research

              </h3>

              <p className="mt-2 text-muted-foreground">

                Unlimited predictions,
                admin analytics,
                and API access.

              </p>

            </div>

            <div className="rounded-2xl border border-border p-5">

              <div className="flex items-center justify-between">

                <span className="text-muted-foreground">

                  Monthly Cost

                </span>

                <span className="text-2xl font-black">

                  $49/mo

                </span>

              </div>

            </div>

          </CardContent>

        </Card>

        {/* Usage */}
        <Card className="border-border bg-background/80">

          <CardContent className="space-y-6 p-8">

            <div className="flex items-center gap-3">

              <TrendingUp className="h-6 w-6 text-primary" />

              <h2 className="text-2xl font-black">

                Usage

              </h2>

            </div>

            <div className="space-y-5">

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <span>

                    Predictions Used

                  </span>

                  <span className="font-bold">

                    2,140 / 5,000

                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-muted">

                  <div className="h-full w-[43%] rounded-full bg-primary" />

                </div>

              </div>

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <span>

                    API Requests

                  </span>

                  <span className="font-bold">

                    12,842 / 25,000

                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-muted">

                  <div className="h-full w-[52%] rounded-full bg-primary" />

                </div>

              </div>

            </div>

          </CardContent>

        </Card>

      </div>

      {/* Invoices */}
      <Card className="border-border bg-background/80">

        <CardContent className="space-y-6 p-8">

          <div className="flex items-center gap-3">

            <Receipt className="h-6 w-6 text-primary" />

            <h2 className="text-2xl font-black">

              Invoices

            </h2>

          </div>

          {invoices.length === 0 ? (

            <EmptyState
              title="No invoices found"
              description="Your invoices and payment history will appear here once payments are processed."
            />

          ) : (

            <table className="w-full border-collapse">

              <thead>

                <tr className="border-b border-border">

                  <th className="p-4 text-left">

                    Invoice ID

                  </th>

                  <th className="p-4 text-left">

                    Date

                  </th>

                  <th className="p-4 text-left">

                    Amount

                  </th>

                  <th className="p-4 text-left">

                    Status

                  </th>

                </tr>

              </thead>

            </table>

          )}

        </CardContent>

      </Card>

    </div>
  );
}