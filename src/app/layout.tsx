import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "东莞理工学院 计算机协会",
  authors: {
    "url": "https://github.com/DGUTCA",
    "name": "Computing Association, DGUT",
  },
  description: "The homepage of Computing Association, DGUT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-hans">
      <head>
        <link
          rel="icon"
          href="icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
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
