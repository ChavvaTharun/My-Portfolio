import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chavva Tharun | Frontend Developer Portfolio",
  keywords: [
    "Chavva Tharun",
    "Tharun Chavva",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Portfolio Website",
    "Web Developer India",
    "HTML CSS JavaScript",
    "React.js",
    "Next.js",
    "PHP Developer",
    "Spring Boot Developer"
  ],
  description:
    "Portfolio of Chavva Tharun, a Frontend Developer skilled in React.js, Next.js, JavaScript, PHP, and Full Stack Web Development. Explore projects, skills, and contact details.",
  icons: {
    icon: [
      { url: "/images/project/convertico-Copilot_20251207_151213_16x16.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/images/project/convertico-Copilot_20251207_151213_32x32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/images/project/convertico-Copilot_20251207_151213_48x48.ico", sizes: "48x48", type: "image/x-icon" }
    ],
    apple: [
      { url: "/images/project/convertico-Copilot_20251207_151213_128x128.ico", sizes: "180x180" },
      { url: "/images/project/convertico-Copilot_20251207_151213_256x256.ico", sizes: "256x256" }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
