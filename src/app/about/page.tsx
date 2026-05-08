import { SiteHeader } from "@/components/marketing/site-header";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <div className="flex min-h-screen items-center justify-center pt-20">
        <h1 className="text-5xl font-bold">
          Page Coming Soon
        </h1>
      </div>
    </main>
  );
}