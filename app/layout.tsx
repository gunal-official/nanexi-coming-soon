import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

/* ---------------- Fonts ---------------- */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400"],
  display: "swap",
});

/* ---------------- Metadata ---------------- */

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

/* ---------------- Layout ---------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-black text-white`}
      >
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}