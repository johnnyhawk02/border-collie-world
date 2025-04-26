import type { Metadata } from "next";
import { Poppins, Pacifico } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Border Collie World | A Fun & Informative Resource",
  description: "Discover everything about Border Collies - breed information, training tips, fun facts, games, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo001.png" type="image/png" sizes="any" />
      </head>
      <body
        className={`${poppins.variable} ${pacifico.variable} font-sans min-h-screen bg-sky-50`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
