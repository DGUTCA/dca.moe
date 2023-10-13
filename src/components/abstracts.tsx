import { ServiceInterface } from "./service";
import Image from "next/image";

enum StrStatus {
    NOT_STARTED = "Upcoming",
    INPROGRESS = "In Progress",
    FINISHED = "Finished"
}

enum AbstarctType {
    Article,
    Activity
}

function status2css(status: StrStatus): string {
    if (status === StrStatus.NOT_STARTED) {
        return "badge-success";
    } else if (status === StrStatus.INPROGRESS) {
        return "badge-warning";
    } else if (status === StrStatus.FINISHED) {
        return "badge-error";
    }
    return ""
}

interface AbstractInterface extends ServiceInterface {
    author?: string;
    location?: string;
    date: string;
    status: StrStatus
    comp_type: AbstarctType
    children?: React.ReactNode
}

const Abstarcts: React.FC<AbstractInterface> = (props) => {
    return (
        <div>
            <div>
                <span className="align-top"> 
                    {props.comp_type === AbstarctType.Article 
                        &&(<Image src={props.img_path} width={25} height={25} alt="" className="inline m-0" />)}
                </span>
                <span className="h3-blk align-top">{props.title}</span>
            </div>

            <div className="-mt-[2px]">
                <span className="h5-gray align-bottom">
                    {props.comp_type === AbstarctType.Article && `${props.author}, `}
                    {`${props.date}`}
                    {props.comp_type === AbstarctType.Activity && `, ${props.location}`}
                </span>
                <span className={`badge mx-2 ${status2css(props.status)} align-bottom`}>
                    {props.status}
                </span>
            </div>
            <h5 className="mt-2 line-clamp-5 md:pr-4 lg:pr-10 2xl:pr-24">
                {props.children}
            </h5>
        </div>
    )
}


export default Abstarcts;
export type { AbstractInterface };
export { StrStatus, AbstarctType };