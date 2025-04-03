import type { Metadata } from "next";
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
  title: "User Directory | Next.js Test Project",
  description: "A user directory application built with Next.js, React Query, Zustand, and TailwindCSS. Filter and view user information efficiently.",
  keywords: ["Next.js", "React", "Zustand", "TanStack Query", "User Directory", "TypeScript"],
  authors: [{ name: "Diyorbek Tursunov" }],
  openGraph: {
    title: "User Directory | Next.js Test Project",
    description: "A user directory application with real-time filtering capabilities",
    url: "https://test-next-js-app-git-master-diyorbektursunov.vercel.app/",
    siteName: "User Directory",
    images: [
      {
        url: "/og-image.png", // Create an OG image and place it in the public folder
        width: 1200,
        height: 630,
        alt: "User Directory App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "User Directory | Next.js Test Project",
    description: "A user directory application with real-time filtering capabilities",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
