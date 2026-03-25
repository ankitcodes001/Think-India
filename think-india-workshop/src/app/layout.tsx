import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Summit – अध्य’AI | Think India × IIT (BHU)",
  description:
    "Think India IIT (BHU) presents AI Summit “अध्य’AI” — A New Chapter of Bharat’s AI. Theme: Foundations, Frontiers & Frameworks.",
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
