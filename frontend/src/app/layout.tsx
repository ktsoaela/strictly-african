import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { clerkOptions } from "@/clerk-config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strictly African",
  description: "Your portal to the latest news, weather, and more.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider {...clerkOptions}>
      <html lang="en">
        <head>
          <Script id="theme-script" strategy="beforeInteractive">
            {`
              const savedTheme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const theme = savedTheme || (prefersDark ? "dark" : "light");
              document.documentElement.classList.toggle("dark", theme === "dark");
            `}
          </Script>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}