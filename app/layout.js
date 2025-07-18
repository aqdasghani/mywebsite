import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StarsBackground } from "@/components/animate-ui/backgrounds/stars";
import { ScrollProgress } from "@/components/animate-ui/components/scroll-progress";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aqdas Ghani",
  description: "Web developer that creates beautiful websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}>
        <ScrollProgress />
        <StarsBackground className="absolute inset-0 flex items-center justify-center z-[-10]" />
        <Header />
        {children}
        <Footer />

        
        <Script src="https://cdn.lordicon.com/lordicon.js"/>
      </body>
    </html>
  );
}
