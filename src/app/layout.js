import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Provider from "./Provider";
import Navbar from "@/Components/Navbar";
import SearchBox from "@/Components/SearchBox";

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
          <SearchBox/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
