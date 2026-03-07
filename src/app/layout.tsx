import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chitresh Gurjar |  Full-Stack Developer",
  description:
    "Portfolio of Chitresh Gurjar — 3rd Year B.Tech CS student specializing in AI/ML and Full-Stack Development. Building intelligent systems and production-ready applications.",
  keywords: [
    "Chitresh Gurjar",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Django",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Chitresh Gurjar" }],
  openGraph: {
    title: "Chitresh Gurjar | Full-Stack Developer",
    description:
      "Portfolio of Chitresh Gurjar — Building intelligent systems and production-ready applications.",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
