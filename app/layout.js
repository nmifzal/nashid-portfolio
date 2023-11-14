import { Oxanium } from "next/font/google";
import "@styles/globals.css";
import Navbar from "@components/navbar";

const oxanium = Oxanium({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Nashid Mifzal P",
  description: "Front-end dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxanium.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
