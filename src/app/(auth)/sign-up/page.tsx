"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required"),

  email: z
    .string()
    .email("Enter a valid email"),

  company: z
    .string()
    .min(
      2,
      "Company name is required"
    ),
});

type SignUpFormData = z.infer<
  typeof signUpSchema
>;

export default function SignUpPage() {
  const [submitted, setSubmitted] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(
      signUpSchema
    ),
  });

  async function onSubmit(
    data: SignUpFormData
  ) {
    console.log(data);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    toast.success(
      "We'll be in touch soon"
    );

    setSubmitted(true);

    reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md surface border border-theme rounded-3xl p-8 shadow-2xl">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold">
            Request Access
          </h1>

          <p className="text-muted">
            Join the Titan waitlist
          </p>
        </div>

        {submitted ? (
          <div className="space-y-4 text-center">
            <div className="text-6xl">
              🎉
            </div>

            <h2 className="text-2xl font-bold">
              We&apos;ll be in touch
            </h2>

            <p className="text-muted">
              Thanks for your interest in
              Titan.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label>
                Full Name
              </Label>

              <Input
                placeholder="Enter your name"
                {...register("name")}
              />

              {errors.name && (
                <p className="text-danger text-sm">
                  {
                    errors.name
                      .message
                  }
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Email
              </Label>

              <Input
                type="email"
                placeholder="Enter your email"
                {...register(
                  "email"
                )}
              />

              {errors.email && (
                <p className="text-danger text-sm">
                  {
                    errors.email
                      .message
                  }
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Company
              </Label>

              <Input
                placeholder="Enter company name"
                {...register(
                  "company"
                )}
              />

              {errors.company && (
                <p className="text-danger text-sm">
                  {
                    errors.company
                      .message
                  }
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={
                isSubmitting
              }
            >
              {isSubmitting
                ? "Submitting..."
                : "Request Access"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}