"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  Mail,
  Building2,
  User,
  MessageSquare,
} from "lucide-react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(
      2,
      "Name is required"
    ),

  email: z
    .string()
    .email(
      "Invalid email"
    ),

  company: z
    .string()
    .optional(),

  message: z
    .string()
    .min(
      10,
      "Message must be at least 10 characters"
    ),
});

type ContactFormData =
  z.infer<
    typeof contactSchema
  >;

export default function ContactPage() {

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    resolver:
      zodResolver(
        contactSchema
      ),
  });

  async function onSubmit(
    data: ContactFormData
  ) {

    setSuccess("");
    setError("");

    try {

      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              data
            ),
          }
        );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error
        );
      }

      setSuccess(
        "Your message has been sent successfully."
      );

      reset();

    } catch (err) {

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-28 text-foreground">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />

        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <section className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-surface px-5 py-2 text-sm text-muted backdrop-blur-xl">

            Contact Titan AI

          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">

            Let’s Build the Future of

            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">

              {" "}
              AI Research

            </span>

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">

            Connect with our team to explore partnerships, enterprise AI
            infrastructure, and next-generation nanotoxicity intelligence.

          </p>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

                <Mail className="h-6 w-6 text-primary" />

              </div>

              <div>

                <p className="font-semibold">

                  Email

                </p>

                <p className="text-muted">

                  contact@titanai.com

                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">

                <Building2 className="h-6 w-6 text-cyan-400" />

              </div>

              <div>

                <p className="font-semibold">

                  Company

                </p>

                <p className="text-muted">

                  Titan AI Labs

                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ================= FORM ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          className="rounded-[2rem] border border-white/10 bg-surface/50 p-10 backdrop-blur-2xl"
        >

          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
            className="space-y-6"
          >

            {/* Name */}
            <div>

              <label className="mb-3 block text-sm font-medium">

                Name

              </label>

              <div className="relative">

                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />

                <input
                  type="text"

                  {...register(
                    "name"
                  )}

                  className="w-full rounded-2xl border border-white/10 bg-background px-12 py-4 outline-none transition-all focus:border-primary"

                  placeholder="Your Name"
                />

              </div>

              {errors.name && (

                <p className="mt-2 text-sm text-red-400">

                  {
                    errors.name
                      .message
                  }

                </p>
              )}

            </div>

            {/* Email */}
            <div>

              <label className="mb-3 block text-sm font-medium">

                Email

              </label>

              <div className="relative">

                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />

                <input
                  type="email"

                  {...register(
                    "email"
                  )}

                  className="w-full rounded-2xl border border-white/10 bg-background px-12 py-4 outline-none transition-all focus:border-primary"

                  placeholder="you@example.com"
                />

              </div>

              {errors.email && (

                <p className="mt-2 text-sm text-red-400">

                  {
                    errors.email
                      .message
                  }

                </p>
              )}

            </div>

            {/* Company */}
            <div>

              <label className="mb-3 block text-sm font-medium">

                Company

              </label>

              <div className="relative">

                <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />

                <input
                  type="text"

                  {...register(
                    "company"
                  )}

                  className="w-full rounded-2xl border border-white/10 bg-background px-12 py-4 outline-none transition-all focus:border-primary"

                  placeholder="Company Name"
                />

              </div>

            </div>

            {/* Message */}
            <div>

              <label className="mb-3 block text-sm font-medium">

                Message

              </label>

              <div className="relative">

                <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-muted" />

                <textarea
                  rows={6}

                  {...register(
                    "message"
                  )}

                  className="w-full rounded-2xl border border-white/10 bg-background px-12 py-4 outline-none transition-all focus:border-primary"

                  placeholder="Tell us about your project..."
                />

              </div>

              {errors.message && (

                <p className="mt-2 text-sm text-red-400">

                  {
                    errors.message
                      .message
                  }

                </p>
              )}

            </div>

            {/* Success/Error */}
            {success && (

              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-green-400">

                {success}

              </div>
            )}

            {error && (

              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-400">

                {error}

              </div>
            )}

            {/* Submit */}
            <button
              type="submit"

              disabled={
                isSubmitting
              }

              className="w-full rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50"
            >

              {isSubmitting
                ? "Sending..."
                : "Send Message"}

            </button>

          </form>

        </motion.div>

      </section>

    </main>
  );
}