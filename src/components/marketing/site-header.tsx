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
          ? "bg-background/80 backdrop-blur-xl border-b border-theme shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-white font-bold text-lg shadow-lg">
            T
          </div>

          <div>
            <p className="text-lg font-bold">
              Titan
            </p>

            <p className="text-xs text-muted">
              AI Platform
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname ===
              link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary"
                    : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/sign-in">
            <Button variant="ghost">
              Sign In
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button>
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
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="surface border-t border-theme md:hidden">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navLinks.map((link) => {
              const isActive =
                pathname ===
                link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setMobileMenuOpen(
                      false
                    )
                  }
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted"
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
                  className="w-full"
                >
                  Sign In
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button className="w-full">
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