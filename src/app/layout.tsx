import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from 'next/font/google';
import Navbar from "@/components/(shared)/Navbar/Navbar";

const metadata: Metadata = {
  title: {
    default: "ORBEACON",
    template: "%s | ORBEACON",
  },
  description: "A Project Management Assistant with AI-Powered Features",
}


const cairo = Cairo({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} bg-background text-foreground antialiased w-full min-h-screen`}
      >
        <Navbar />
        <section className="max-w-[1920px] mx-auto pt-16 lg:pt-24">
          {children}
        </section>
      </body>
    </html>
  );
}
