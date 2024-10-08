import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Importing Poppins from Google Fonts
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap", // Optional: It defines the font loading behavior
});

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
      <body className={`${poppins.variable} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
