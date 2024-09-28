import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fira_Code } from "next/font/google";
import "./globals.css";

export const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Events Manager",
  description: "Event management application for a school organization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
//<!--        className={`${firaCode.variable} ${firaCode.variable} antialiased`} -->
      >
        {children}
      </body>
    </html>
  );
}
