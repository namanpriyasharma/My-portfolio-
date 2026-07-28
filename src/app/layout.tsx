import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naman's Portfolio",
  description: "Professional developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} min-h-screen bg-background text-foreground antialiased flex flex-col`}
      >
        <header className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-muted-foreground/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
            <span className="font-heading font-bold text-xl tracking-tight">Naman's Portfolio</span>
          </div>
        </header>
        <div className="flex-1 pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
