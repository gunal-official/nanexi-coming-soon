import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarPage } from "./pages/navbar/page";

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
    default: "NANEXI — Where Data Meets Intelligence",
    template: "%s | NANEXI",
  },
  description:
    "NANEXI is a next-generation software development company building intelligent systems, scalable applications, and future-ready digital solutions.",

  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },

  openGraph: {
    title: "NANEXI — Where Data Meets Intelligence",
    description:
      "A next-generation software development company focused on intelligent systems, scalable technology, and innovation.",
    url: "https://nanexi.com",
    siteName: "NANEXI",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NANEXI — Where Data Meets Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NANEXI — Where Data Meets Intelligence",
    description:
      "NANEXI builds intelligent, scalable, and future-ready software solutions.",
    images: ["/og.png"],
  },

  metadataBase: new URL("https://nanexi.com"),
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
         <NavbarPage/>
        {children}
      </body>
    </html>
  );
}