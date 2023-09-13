import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <div className="navbar bg-base-100 top-0 left-0 right-0 fixed z-50">
            <div className="navbar md:container">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">
                        <Image src="/logo.svg" alt="Logo" width={36} height={36}></Image>
                        莞工计协
                    </Link>
                </div>

                <div className="flex-none hidden md:block">
                    <div className="tabs uppercase">
                        <a className="tab tab-bordered tab-active">Home</a>
                        <a className="tab tab-bordered">Events</a>
                    </div>
                </div>
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] tabs tabs-boxed shadow bg-base-100 rounded-box">
                            <li><a className="tab tab-active">Home</a></li>
                            <li><a className="tab">Events</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
