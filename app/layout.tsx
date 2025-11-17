import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unykorn X - XRPL-Native Banking Platform",
  description: "Next-generation banking infrastructure built on XRP Ledger with AI swarm intelligence, RWA engine, and decentralized exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
