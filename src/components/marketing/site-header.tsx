"use client";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import {
  Menu,
  X,
} from "lucide-react";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function SiteHeader() {
  const pathname =
    usePathname();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(
        window.scrollY > 10
      );
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 shadow-[0_0_30px_rgba(0,200,255,0.25)]">

            T

          </div>

          <div>

            <p className="text-2xl font-bold tracking-tight text-white">
              Titan
            </p>

            <p className="text-sm text-slate-400">
              AI Platform
            </p>

          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-12 md:flex">

          {navLinks.map((link) => {

            const isActive =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-all duration-200 hover:text-white ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">

          <Link href="/sign-in">

            <Button
              variant="ghost"
              className="rounded-full border-0 bg-transparent px-5 py-5 text-sm text-white shadow-none hover:bg-white/5 hover:text-white"
            >
              Sign In
            </Button>

          </Link>

          <Link href="/sign-up">

            <Button
              className="rounded-full border-0 bg-cyan-400/90 px-6 py-5 text-sm font-semibold text-black shadow-none transition duration-300 hover:bg-cyan-300"
            >
              Request Access
            </Button>

          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setMobileMenuOpen(
              !mobileMenuOpen
            )
          }
          className="text-white md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-[#030712]/95 backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-6 px-6 py-6">

            {navLinks.map((link) => {

              const isActive =
                pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                  className={`text-lg font-medium transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 pt-4">

              <Link href="/sign-in">

                <Button
                  variant="ghost"
                  className="w-full rounded-full border border-white/10 py-6 text-white"
                >
                  Sign In
                </Button>

              </Link>

              <Link href="/sign-up">

                <Button className="w-full rounded-full bg-cyan-400 py-6 text-black hover:bg-cyan-300">

                  Request Access

                </Button>

              </Link>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}