"use client";

import {
  Copy,
  Trash2,
  RefreshCw,
  Shield,
  User2,
  KeyRound,
  Sparkles,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

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

    <div className="mx-auto max-w-7xl space-y-8">

      {/* HERO */}
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

        <Card className="overflow-hidden rounded-[36px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

          <CardContent className="relative flex flex-col justify-between gap-10 overflow-hidden p-10 lg:flex-row lg:items-center">

            {/* LEFT */}
            <div className="relative z-10">

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-500/10 bg-cyan-500/10 px-5 py-2 text-cyan-300">

                <Sparkles className="h-4 w-4" />

                AI Account Center

              </div>

              <h1 className="bg-gradient-to-r from-white via-white to-cyan-300 bg-clip-text text-4xl font-black text-transparent">

                Account Settings

              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/45">

                Manage your NanoToxi AI profile,
                credentials, API access, and
                platform security settings.

              </p>

            </div>

            {/* RIGHT ICON */}
            <div className="relative flex items-center justify-center">

              <div className="absolute h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full border border-cyan-500/10 bg-cyan-500/10">

                <Shield className="h-20 w-20 text-cyan-400" />

              </div>

            </div>

          </CardContent>

        </Card>

      </motion.div>

      {/* PROFILE + PASSWORD */}
      <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">

        {/* PROFILE */}
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

          <Card className="rounded-[32px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

            <CardContent className="space-y-8 p-8">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <User2 className="h-7 w-7 text-cyan-400" />

                </div>

                <div>

                  <h2 className="text-2xl font-black text-white">

                    Profile Information

                  </h2>

                  <p className="mt-1 text-white/45">

                    Your account details and organization info

                  </p>

                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="space-y-3">

                  <Label className="text-white/45">

                    Full Name

                  </Label>

                  <Input
                    value={
                      user.name
                    }
                    readOnly
                    className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white"
                  />

                </div>

                <div className="space-y-3">

                  <Label className="text-white/45">

                    Email

                  </Label>

                  <Input
                    value={
                      user.email
                    }
                    readOnly
                    className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white"
                  />

                </div>

                <div className="space-y-3">

                  <Label className="text-white/45">

                    Role

                  </Label>

                  <Input
                    value={
                      user.role
                    }
                    readOnly
                    className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white"
                  />

                </div>

                <div className="space-y-3">

                  <Label className="text-white/45">

                    Company

                  </Label>

                  <Input
                    value={
                      user.company
                    }
                    readOnly
                    className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white"
                  />

                </div>

              </div>

            </CardContent>

          </Card>

        </motion.div>

        {/* PASSWORD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
          }}
        >

          <Card className="rounded-[32px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

            <CardContent className="space-y-8 p-8">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                  <KeyRound className="h-7 w-7 text-cyan-400" />

                </div>

                <div>

                  <h2 className="text-2xl font-black text-white">

                    Security

                  </h2>

                  <p className="mt-1 text-white/45">

                    Update your password securely

                  </p>

                </div>

              </div>

              <div className="space-y-5">

                <Input
                  type="password"
                  placeholder="Current password"
                  className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white placeholder:text-white/25"
                />

                <Input
                  type="password"
                  placeholder="New password"
                  className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white placeholder:text-white/25"
                />

                <Input
                  type="password"
                  placeholder="Confirm new password"
                  className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white placeholder:text-white/25"
                />

                <Button className="h-12 w-full rounded-2xl bg-cyan-400 text-base font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-300 hover:bg-cyan-300">

                  Update Password

                </Button>

              </div>

            </CardContent>

          </Card>

        </motion.div>

      </div>

      {/* API TOKEN */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
        }}
      >

        <Card className="rounded-[32px] border border-cyan-500/10 bg-[#081325]/70 backdrop-blur-2xl">

          <CardContent className="space-y-8 p-8">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black text-white">

                  API Token Management

                </h2>

                <p className="mt-2 text-white/45">

                  Securely access NanoToxi AI programmatically

                </p>

              </div>

              <div className="rounded-full border border-cyan-500/10 bg-cyan-500/10 px-5 py-2 text-cyan-300">

                Developer Access

              </div>

            </div>

            <div className="flex flex-col gap-4 lg:flex-row">

              <Input
                value={
                  user.apiToken
                }
                readOnly
                className="h-12 rounded-2xl border-cyan-500/10 bg-[#020817] text-white"
              />

              <Button
                onClick={
                  copyToken
                }
                className="h-12 rounded-2xl border border-cyan-500/10 bg-[#020817] text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10"
              >

                <Copy className="mr-2 h-4 w-4" />

                Copy

              </Button>

              <Button
                onClick={
                  regenerateToken
                }
                className="h-12 rounded-2xl bg-cyan-400 text-black transition-all duration-300 hover:bg-cyan-300"
              >

                <RefreshCw className="mr-2 h-4 w-4" />

                Regenerate

              </Button>

            </div>

          </CardContent>

        </Card>

      </motion.div>

      {/* DANGER ZONE */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
      >

        <Card className="rounded-[32px] border border-red-500/20 bg-red-500/[0.03] backdrop-blur-2xl">

          <CardContent className="flex flex-col items-start justify-between gap-8 p-8 lg:flex-row lg:items-center">

            <div>

              <h2 className="text-3xl font-black text-red-400">

                Danger Zone

              </h2>

              <p className="mt-3 max-w-2xl text-white/45">

                Permanently delete your NanoToxi AI account
                and all associated prediction history,
                datasets, and API access.

              </p>

            </div>

            <Button
              variant="destructive"
              onClick={
                deleteAccount
              }
              className="h-12 rounded-2xl bg-red-500/20 px-6 text-red-400 transition-all duration-300 hover:bg-red-500/30"
            >

              <Trash2 className="mr-2 h-4 w-4" />

              Delete Account

            </Button>

          </CardContent>

        </Card>

      </motion.div>

    </div>
  );
}