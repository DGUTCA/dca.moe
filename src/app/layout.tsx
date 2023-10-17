import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "莞工计协",
  description: "DGUT Compute Association",
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
