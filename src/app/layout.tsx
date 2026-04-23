import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CuePoint — Inline Active Learning for Canvas LMS",
  description:
    "Embed AI-generated questions directly inside your LMS pages. Instant feedback, mastery tracking, AI essay grading with rationale. No separate portal. No extra tab. Right on cue.",
  metadataBase: new URL("https://cuepoint.app"),
  openGraph: {
    title: "CuePoint — Inline Active Learning for Canvas LMS",
    description:
      "Embed AI-generated questions directly inside your LMS pages. Instant feedback. Mastery per objective. Essays graded with rationale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
