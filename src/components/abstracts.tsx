import { ServiceInterface } from "./service";
import Image from "next/image";

enum StrStatus {
    UPCOMING = "Upcoming",
    INPROGRESS = "In Progress",
    FINISHED = "Finished",
    PENDING = ""
}

enum AbstarctType {
    Passage,
    Event
}

function check_date_status(date: string, time: string): StrStatus {
    const now = new Date(new Date().toLocaleString()).getTime()      // @issue: how to get local time simply???????
    const str_spilt: Array<string> = time.split("-") 
    const d_start = new Date(`${date} ${str_spilt[0]}:00`).getTime()
    const d_end = new Date(`${date} ${str_spilt[1]}:00`).getTime()
    
    // there is no such event that lasts more than a day    
    if(now < d_start) {   
        return StrStatus.UPCOMING;
    } else if((now >= d_start) && (now <= d_end)) {                   
        return StrStatus.INPROGRESS;
    } else {                                                    
        return StrStatus.FINISHED;                              
    }
}

function status2css(status: StrStatus): string {
    if (status === StrStatus.UPCOMING) {
        return "badge-warning";
    } else if (status === StrStatus.INPROGRESS) {
        return "badge-info";
    } else if (status === StrStatus.FINISHED) {
        return "badge-success";
    }
    return ""
}

interface AbstractInterface extends ServiceInterface {
    author?: string;
    location?: string;
    date: string;
    time?: string;
    comp_type: AbstarctType
    children?: React.ReactNode
}

const Abstarcts: React.FC<AbstractInterface> = (props) => {
    const isPassage: Boolean = props.comp_type === AbstarctType.Passage
    const stat: StrStatus = check_date_status(props.date, props.time? props.time: "")

    return (
        <div>
            <div>
                <span className="align-top"> 
                    {isPassage
                        &&(<Image src={props.img_path} width={25} height={25} alt="" className="inline m-0 dark-adaptor" />)}
                </span>
                <span className="h3-blk align-top">{props.title}</span>
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
export type { AbstractInterface };
export { StrStatus, AbstarctType };