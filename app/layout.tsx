import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayanrajab.dev"),
  title: {
    default: "Rayan Rajab — Technology Builder | Cloud, Cybersecurity & AI",
    template: "%s | Rayan Rajab",
  },
  description:
    "Rayan Rajab is a technology builder exploring cloud computing, cybersecurity, AI and software engineering through real-world projects and experiments. Based in Kampala, Uganda.",
  keywords: [
    "Rayan Rajab",
    "Technology Builder",
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
    "Software Engineering",
    "Uganda",
    "Kampala",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Rayan Rajab" }],
  creator: "Rayan Rajab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayanrajab.dev",
    siteName: "Rayan Rajab",
    title: "Rayan Rajab — Technology Builder | Cloud, Cybersecurity & AI",
    description:
      "Technology builder exploring cloud computing, cybersecurity, AI and software engineering through real-world projects and experiments.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rayan Rajab — Technology Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayan Rajab — Technology Builder",
    description:
      "Exploring cloud computing, cybersecurity, AI and software engineering through real-world projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080a0f] text-[#f0f4f8] antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
