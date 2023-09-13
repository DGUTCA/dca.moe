import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-hans">
      <body className="relative">
        <header>
          <Nav />
        </header>
        <main className="">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
