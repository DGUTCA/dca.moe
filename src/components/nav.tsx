"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function Nav() {
    const pathname = usePathname()
    function isActived(path: string) {
        return pathname.startsWith(path) ? "tab tab-active" : "tab"
    }
    function isHome() {
        if (pathname === "/"){
            return "tab tab-active"
        }else{
            return "tab"
        }
    }
    return (
        <div className="navbar bg-base-100 top-0 left-0 right-0 fixed z-50">
            <div className="navbar md:container">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">
                        <Image src="/logo.svg" alt="Logo" width={36} height={36} ></Image>
                        莞工计协
                    </Link>
                </div>
                <div className="flex-none hidden md:block">
                    <div className="tabs uppercase">
                        <Link href="/" className={isHome()+" tab-bordered"}>Home</Link>
                        <Link href="/events" className={isActived("/events")+" tab-bordered"}>Events</Link>
                    </div>
                </div>
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] tabs tabs-boxed shadow bg-base-100 rounded-box">
                            <li><Link href="/" className={isHome()}>Home</Link></li>
                            <li><Link href="/events" className={isActived("/events")}>Events</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}