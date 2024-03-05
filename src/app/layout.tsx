import type { Metadata } from "next";
import { IM_Fell_English, La_Belle_Aurore, Sorts_Mill_Goudy } from "next/font/google";
import "./globals.css";

const mainFont = IM_Fell_English({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-main',
})

const accentFont = La_Belle_Aurore({
  weight: ['400'],
  subsets: ["latin"],
  variable: '--font-accent',
})

const bodyFont = Sorts_Mill_Goudy({
  weight: ['400'],
  subsets: ["latin", "latin-ext"],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "Lavinia Beach Resort",
  description: "Website for Lavinia Beach Resort managed and owned by Harendra De Mel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: 'white', fontSize: "1rem" }}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lavinia Beach Resort</title>
      </head>
      <body className={`${mainFont.variable} ${bodyFont.variable} ${accentFont.variable}`}>{children}</body>
    </html>
  );
}
