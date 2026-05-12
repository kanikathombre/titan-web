"use client";

import {
  Copy,
  Trash2,
  RefreshCw,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Button,
} from "@/components/ui/button";

import {
  Input,
} from "@/components/ui/input";

import {
  Label,
} from "@/components/ui/label";

import {
  useAuth,
} from "@/hooks/use-auth";

export default function AccountPage() {

  const { user } =
    useAuth();

  function copyToken() {

    navigator.clipboard.writeText(
      user.apiToken
    );

    alert(
      "API token copied"
    );
  }

  function regenerateToken() {

    alert(
      "New API token generated"
    );
  }

  function deleteAccount() {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete your account?"
      );

    if (confirmed) {

      alert(
        "Account deleted"
      );
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      {/* Header */}
      <div>

        <h1 className="text-5xl font-black">

          Account Settings

        </h1>

        <p className="mt-3 text-muted-foreground">

          Manage your profile,
          password, and API
          access.

        </p>

      </div>

      {/* Profile */}
      <Card className="border-border bg-background/80">

        <CardContent className="space-y-6 p-8">

          <h2 className="text-2xl font-black">

            Profile Information

          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="space-y-2">

              <Label>

                Full Name

              </Label>

              <Input
                value={
                  user.name
                }
                readOnly
              />

            </div>

            <div className="space-y-2">

              <Label>

                Email

              </Label>

              <Input
                value={
                  user.email
                }
                readOnly
              />

            </div>

            <div className="space-y-2">

              <Label>

                Role

              </Label>

              <Input
                value={
                  user.role
                }
                readOnly
              />

            </div>

            <div className="space-y-2">

              <Label>

                Company

              </Label>

              <Input
                value={
                  user.company
                }
                readOnly
              />

            </div>

          </div>

        </CardContent>

      </Card>

      {/* Password */}
      <Card className="border-border bg-background/80">

        <CardContent className="space-y-6 p-8">

          <h2 className="text-2xl font-black">

            Change Password

          </h2>

          <div className="space-y-4">

            <Input
              type="password"
              placeholder="Current password"
            />

            <Input
              type="password"
              placeholder="New password"
            />

            <Input
              type="password"
              placeholder="Confirm new password"
            />

            <Button>

              Update Password

            </Button>

          </div>

        </CardContent>

      </Card>

      {/* API Token */}
      <Card className="border-border bg-background/80">

        <CardContent className="space-y-6 p-8">

          <h2 className="text-2xl font-black">

            API Token Management

          </h2>

          <div className="flex flex-col gap-4 lg:flex-row">

            <Input
              value={
                user.apiToken
              }
              readOnly
            />

            <Button
              variant="secondary"
              onClick={
                copyToken
              }
            >

              <Copy className="mr-2 h-4 w-4" />

              Copy

            </Button>

            <Button
              onClick={
                regenerateToken
              }
            >

              <RefreshCw className="mr-2 h-4 w-4" />

              Regenerate

            </Button>

          </div>

        </CardContent>

      </Card>

      {/* Danger Zone */}
      <Card className="border-red-500/40 bg-red-500/5">

        <CardContent className="space-y-6 p-8">

          <div>

            <h2 className="text-2xl font-black text-red-400">

              Danger Zone

            </h2>

            <p className="mt-2 text-sm text-muted-foreground">

              Permanently delete
              your Titan AI account.

            </p>

          </div>

          <Button
            variant="destructive"
            onClick={
              deleteAccount
            }
          >

            <Trash2 className="mr-2 h-4 w-4" />

            Delete Account

          </Button>

        </CardContent>

      </Card>

    </div>
  );
}