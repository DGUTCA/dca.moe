import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
    </>
  )
}

export function Service(href: string = "#", title: string, description: string, icon: string) {
  return (
    <div className="btn-square">
      <Link href={href}>
        <Image src={icon} alt="Logo" width={72} height={72} ></Image>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  )
}

export function ServiceCard(img: string, title: string, description: string, href: string = "#") {
  return (
    <>
    </>
  )
}