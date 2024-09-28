import type { Metadata } from "next";
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
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-fira-code)]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/tos"
          rel="noopener noreferrer"
        >
          Privacy & Terms of Use
        </a>
      </footer>
      </body>
    </html>
  );
}
