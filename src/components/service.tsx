import Image from "next/image"

interface ServiceInterface {
    img_path: string
    title: string
    desc?: string
    className?: string
}

const Service: React.FC<ServiceInterface> = (props) => {
    return (
        <div className={`${props.className} rounded-3xl border-black py-4 px-12 w-80 service shadow-lg`}>
            <div className="pl-[62px]">
                <Image width={100} height={100}  src={props.img_path} alt="" />
            </div>
            <h3 className="text-center">{props.title}</h3>
                <h5>{props.desc}</h5>

        </div>
    )
}

export default Service
