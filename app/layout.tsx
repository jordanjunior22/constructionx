import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Construction Company",
  description: "Best Construction Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mukta-medium">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
