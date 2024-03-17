import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/app/layout/Header";
import Footer from "@/components/app/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProperetyPulse",
  description: "Generated by create next app",
  keywords:'rental,find rentals,find properties',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}