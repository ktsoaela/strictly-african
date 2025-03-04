import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { clerkOptions } from "@/clerk-config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
