export default function Footer() {
  return (
    <footer className=" bg-base-300 text-base-content">
      <div className="md:container footer p-10 md:grid-cols-3">
        <nav>
        <header className="footer-title">ABOUT US</header>
          <div>莞工计协全称东莞理工学院计算机协会，聚集一群热爱计算机的同学们，致力于弘扬计算机文化，向同学们普及计算机知识，为同学们提供一个相互认识交流的平台。</div>
        </nav>
        <nav>
          <header className="footer-title">CONTACT US</header>
        </nav>
        <nav>
          <header className="footer-title">DIRECTED BY</header>
          <div className="grid grid-flow-col gap-4">
            <a href="https://cs.dgut.edu.cn">计算机科学与技术学院（软件学院、网络空间安全学院）</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
