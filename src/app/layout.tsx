import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PromoBanner from "@/components/PromoBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KIM’S MART – Korean Food & Market",
    template: "%s | KIM’S MART",
  },
  description:
    "Discover authentic Korean groceries in Moncton. Visit our store or reserve a table for food.",
  metadataBase: new URL("https://kimsmart.example.com"),
  openGraph: {
    title: "KIM’S MART – Korean Food & Market",
    description:
      "Discover authentic Korean groceries in Moncton. Visit our store or reserve a table for food.",
    url: "/",
    siteName: "KIM’S MART",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KIM’S MART – Korean Food & Market",
    description:
      "Discover authentic Korean groceries in Moncton. Visit our store or reserve a table for food.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <PromoBanner />
      </body>
    </html>
  );
}
