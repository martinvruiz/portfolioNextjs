import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "MVR Porfolio",
  description: "Frontend Developer",
  icons: {
    icon: "/favicon-v2.ico",
    apple: "apple-touch-icon.png",
    shortcut: "favicon-v2.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center `}>
        <Navbar />
        <div className="flex items-center justify-center mt-20">{children}</div>
      </body>
    </html>
  );
}
