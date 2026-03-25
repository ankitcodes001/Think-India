import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Think India AI Innovation Workshop",
  description: "Join the most exclusive AI Innovation Workshop in India featuring founders from Meta, Google, OpenAI, and Sarvam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
