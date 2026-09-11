import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Border Command | Theatre of Operations",
  description: "Command land, air and sea in a fictional real-time strategy theatre. Direct-click attacks, detailed terrain, animated missiles and fifteen operations.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
