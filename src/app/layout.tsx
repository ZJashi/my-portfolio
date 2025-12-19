import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex">
          <Sidebar />
          <div className="flex-1 ml-16 md:ml-16">{children}</div>
        </div>
      </body>
    </html>
  );
}







