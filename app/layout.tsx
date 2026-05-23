import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World",
  description: "A clean and approachable application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1 mt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
