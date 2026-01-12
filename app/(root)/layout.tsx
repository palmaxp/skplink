import type { Metadata } from "next";
import { MuseoModerno, Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Skplink",
  description: "Shorten links with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${museoModerno.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
