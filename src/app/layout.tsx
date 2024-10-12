import { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/fonts/fonts";



export const metadata: Metadata = {
  title: "dieudo25",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-background ${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}
