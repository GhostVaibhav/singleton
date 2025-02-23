import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const SourceCodePro = Source_Code_Pro({
  variable: "--font-source-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Sharma",
  description: "The second personal portfolio of Vaibhav Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SourceCodePro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
