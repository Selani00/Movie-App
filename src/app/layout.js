import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Provider from "./Provider";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "Movie app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
