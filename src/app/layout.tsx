"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import TopNav from "@/components/TopNav";
import { ThemeProvider } from "@/context/ThemeContext";
import { PageTransition } from "@/components/PageTransition";

import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <TopNav />

          <div className="min-h-screen">
            <main className="flex-1 pt-20">
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
