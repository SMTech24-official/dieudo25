import { Metadata } from "next";
import "./globals.css";
import { openSans, poppins } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "dieudo25",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isPoppinsFont = false; 

  return (
    <html lang="en">
      <body
        className={`antialiased bg-background ${openSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
