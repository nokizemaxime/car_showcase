import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components";
import NavBar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Car Hb",
  description: "Discover the best Cars in the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
