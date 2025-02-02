import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Small Group",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="_childContainer">{children}</div>
      </body>
    </html>
  );
}
