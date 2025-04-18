import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NutrIA - Solutions d'IA pour l'agriculture",
  description: "Solutions d'intelligence artificielle pour optimiser vos cultures agricoles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <elevenlabs-convai agent-id="JAi64ASox10iA1qhPBZ6"></elevenlabs-convai>
        <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
        <Analytics />
      </body>
    </html>
  );
}
