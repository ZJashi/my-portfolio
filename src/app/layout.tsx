"use client";



import "./globals.css";
import { Inter } from "next/font/google";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";

import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children,}: {children: React.ReactNode;}) 
{
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />

        <div className="min-h-screen flex">
          {/* Sidebar only on home */}
          {isHome && <Sidebar />}

          <main
            className={`flex-1 pt-20 ${
              isHome ? "ml-16 md:ml-16" : "ml-0"
            }`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}









