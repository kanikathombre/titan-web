import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}

          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}