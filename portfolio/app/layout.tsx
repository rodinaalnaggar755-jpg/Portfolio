import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Alex Carter — Frontend Developer",
  description:
    "Senior Frontend Engineer specializing in Next.js, TypeScript, and Tailwind CSS. Building production-ready web apps with exceptional performance and beautiful UI.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "UI Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Alex Carter" }],
  creator: "Alex Carter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexcarter.dev",
    title: "Alex Carter — Frontend Developer",
    description:
      "Senior Frontend Engineer specializing in Next.js, TypeScript, and Tailwind CSS.",
    siteName: "Alex Carter Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alex Carter — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Carter — Frontend Developer",
    description:
      "Senior Frontend Engineer specializing in Next.js, TypeScript, and Tailwind CSS.",
    creator: "@alexcarter_dev",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
