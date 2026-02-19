import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sukrit Saha — Full-Stack Developer",
  description:
    "Full-Stack Engineer with 3 years of experience delivering complete product solutions spanning frontend, backend, and mobile ecosystems.",
  openGraph: {
    title: "Sukrit Saha — Full-Stack Developer",
    description:
      "Developer who turns ideas into interactive realities.",
    url: "https://sukritsaha.in",
    siteName: "Sukrit Saha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sukrit Saha — Full-Stack Developer",
    description:
      "Developer who turns ideas into interactive realities.",
    creator: "@SukritSaha11",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-bg text-text`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
