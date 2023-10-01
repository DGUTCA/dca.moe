import Image from "next/image"

interface ServiceInterface {
    img_path: string
    title: string
    desc?: string
    className?: string
}

const Service: React.FC<ServiceInterface> = (props) => {
    return (
        <div className={`${props.className} grid rounded-3xl border-black p-5 service shadow-lg place-items-center`}>
            <Image className="not-prose" width={100} height={100}  src={props.img_path} alt=""/>
            <h3>{props.title}</h3>
            <h5>{props.desc}</h5>
        </div>
    )
}

export default Service
export type {ServiceInterface}