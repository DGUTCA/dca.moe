import { data } from "autoprefixer";
import Image from "next/image";



export default function Footer() {
    const contact_info = [
        {name:"Github", link:"https://github.com/DGUTCA"},
    ]
    
    return (
        <footer className=" bg-base-300 text-base-content">
            <div className="container footer p-8 gap-6 grid-cols-1 md:grid-cols-3 md:gap-16 lg:gap-20 lg:p-10 ">

                <nav>
                    <header className="footer-title">ABOUT US</header>
                    <div>
                        莞工计协全称东莞理工学院计算机协会，聚集一群热爱计算机的同学们，致力于弘扬计算机文化，向同学们普及计算机知识，为同学们提供一个相互认识交流的平台。
                    </div>
                </nav>

                <nav>
                    <header className="footer-title">CONTACT US</header>
                    <div className="px-1">
                        <div className="footer-icon flex flex-col gap-2">
                            {contact_info.map((data, idx) => {return (
                                <div key={idx}>
                                    <Image className="dark-adaptor" src={`/icons/${data.name.toLowerCase()}.svg`} alt="Logo" width={18} height={18} />
                                    <a className="dark:text-gray-400" href={data.link}>{data.name}</a>
                                </div>)
                            })}
                        </div>
                    </div>
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
