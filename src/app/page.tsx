import { SiteHeader } from "@/components/marketing/site-header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center rounded-full border border-theme bg-surface px-4 py-2 text-sm text-muted">
            AI-powered enterprise platform
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Build smarter with Titan AI
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
            Enterprise-grade AI workflows, predictive insights, and scalable analytics for modern teams.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a href="/sign-up">
              <button className="rounded-2xl bg-primary px-8 py-4 font-semibold text-white shadow-xl transition hover:opacity-90">
                Request Access
              </button>
            </a>

            <a href="/features">
              <button className="rounded-2xl border border-theme bg-surface px-8 py-4 font-semibold transition hover:border-primary hover:text-primary">
                Explore Features
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}