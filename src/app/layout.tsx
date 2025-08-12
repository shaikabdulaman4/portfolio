// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// SEO & Metadata
export const metadata: Metadata = {
  title: "Shaik Abdul Aman | Portfolio",
  description: "Modern developer portfolio built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/logo.png", // Favicon path in public/
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Shaik Abdul Aman | Portfolio",
    description: "Modern developer portfolio built with Next.js and Tailwind CSS.",
    url: "https://your-portfolio-link.com",
    siteName: "Shaik Abdul Aman Portfolio",
    images: [
      {
        url: "/preview.png", // You can add an OG preview image in public/
        width: 1200,
        height: 630,
        alt: "Shaik Abdul Aman Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0d0d0d] text-white`}
      >
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
