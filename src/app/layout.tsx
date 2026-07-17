"use client";

import "./globals.css";
import styles from "./layout.module.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";
import { PageTransition } from "@/components/ui/PageTransition";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon-light.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Sidebar />
          <div className={styles.wrapper}>
            <main className={styles.main}>
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
