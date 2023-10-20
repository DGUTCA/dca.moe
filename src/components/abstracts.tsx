"use client"
import Link from "next/link";
import Image from "next/image";
import { check_date_status } from "./client_component";
import { AbstractInterface, StrStatus, AbstarctType, status2css } from "./interface";

const Abstarcts: React.FC<AbstractInterface> = (props) => {
    const isPassage: Boolean = props.comp_type === AbstarctType.Passage
    const stat: StrStatus = check_date_status(props.date, props.time? props.time: "")

    return (
        <div>
            <div>
                <span className="align-top"> 
                    {isPassage
                        &&(<Image src={"/icons/document.svg"} width={25} height={25} alt="" className="inline m-0 dark-adaptor" />)}
                </span>
                <span className="h3-blk align-top"><Link href={isPassage?"/articles/"+props.file_name:"/events/"+props.file_name}>{props.title}</Link></span>
            </div>

            <div className="-mt-[2px]">
                <span className="h5-gray align-bottom">
                    <span>{isPassage && `${props.author},  `}</span>
                    <span>{props.date}</span>
                    <span className="font-extrabold">{!isPassage && `  ${props.time}`}</span>
                    <span>{!isPassage && `  ${props.location}`}</span>
                </span>
                <span className={`mx-2 align-bottom ` + (isPassage ? "" : `badge ${status2css(stat)}`)}>
                    {!isPassage && `${stat}`}
                </span>
            </div>
            <h5 className="mt-2 md:pr-4 lg:pr-10 2xl:pr-24">
                {props.children}
            </h5>
        </div>
    )
}

export default Abstarcts;
