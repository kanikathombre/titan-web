"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signInSchema = z.object({
  username: z
    .string()
    .min(3, "Username is required"),

  password: z
    .string()
    .min(
      6,
      "Password must be at least 6 characters"
    ),

  rememberMe: z.boolean().optional(),
});

type SignInFormData = z.infer<
  typeof signInSchema
>;

export default function SignInPage() {
  const router = useRouter();

  const [serverError, setServerError] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<SignInFormData>({
    resolver: zodResolver(
      signInSchema
    ),

    defaultValues: {
      rememberMe: false,
    },
  });

  async function onSubmit(
    data: SignInFormData
  ) {
    setServerError("");

    try {
      // Mock credential validation
      if (
        data.username !== "demo" ||
        data.password !==
          "password123"
      ) {
        toast.error(
          "Invalid username or password"
        );

        setServerError(
          "Invalid username or password"
        );

        return;
      }

      await fetch("/api/auth/login", {
        method: "POST",
     });

      toast.success(
        "Signed in successfully"
      );

      router.push("/dashboard");
    } catch {
      toast.error(
        "Something went wrong"
      );

      setServerError(
        "Something went wrong"
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md surface border border-theme rounded-3xl p-8 shadow-2xl">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-muted">
            Sign in to your Titan
            account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label>
              Username
            </Label>

            <Input
              placeholder="Enter username"
              {...register(
                "username"
              )}
            />

            {errors.username && (
              <p className="text-danger text-sm">
                {
                  errors
                    .username
                    .message
                }
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              Password
            </Label>

            <Input
              type="password"
              placeholder="Enter password"
              {...register(
                "password"
              )}
            />

            {errors.password && (
              <p className="text-danger text-sm">
                {
                  errors
                    .password
                    .message
                }
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register(
                "rememberMe"
              )}
            />

            <Label>
              Remember me
            </Label>
          </div>

          {serverError && (
            <p className="text-danger text-sm">
              {serverError}
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-primary hover:opacity-90"
            disabled={
              isSubmitting
            }
          >
            {isSubmitting
              ? "Signing In..."
              : "Sign In"}
          </Button>
        </form>

        <div className="mt-8 space-y-4">
          <div className="surface border border-theme rounded-xl p-4 text-sm">
            <p className="font-semibold mb-2">
              Demo Credentials
            </p>

            <p>
              Username: demo
            </p>

            <p>
              Password:
              password123
            </p>
          </div>

          <p className="text-sm text-muted text-center">
            Don&apos;t have an
            account?{" "}
            <a
              href="/sign-up"
              className="text-primary font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}