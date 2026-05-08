import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Naufal Faisal — AI & ML Engineer",
  description:
    "Computer Science student at UMT Lahore specializing in Machine Learning and Artificial Intelligence. Passionate about building intelligent systems.",
  keywords: ["Machine Learning", "AI", "Computer Science", "UMT Lahore", "Portfolio"],
  openGraph: {
    title: "Naufal Faisal — AI & ML Engineer",
    description: "CS student at UMT Lahore building the future with ML/AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
