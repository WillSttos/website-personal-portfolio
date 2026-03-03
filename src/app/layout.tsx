import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Dark Industry Portfolio",
  description: "Senior Web, Graphic, and Motion Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
