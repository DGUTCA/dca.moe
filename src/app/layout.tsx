import "./globals.css";
import Nav from "../ui/nav";
import Footer from "../ui/footer";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "东莞理工学院 计算机协会",
  authors: {
    url: "https://github.com/DGUTCA",
    name: "Computing Association, DGUT",
  },
  description: "The homepage of Computing Association, DGUT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-hans" className="overflow-y-scroll">
      <head>
        <link
          rel="icon"
          href="icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <header>
          <Nav />
        </header>
        <Suspense fallback={<Loading />}>
          <main className="md:container pt-24 px-10 flex-grow">{children}</main>
        </Suspense>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
