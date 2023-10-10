import { ServiceInterface } from "./service";
import Image from "next/image";

enum StrStatus {
    NOT_STARTED = "Not Started",
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
            {props.comp_type === AbstarctType.Article 
                &&(<Image src={props.img_path} width={30} height={30} alt="" className="inline m-0 pb-2" />)}
            <h3 className="inline">{props.title}</h3>
            <div>
                <h4 className="inline">
                    {props.comp_type === AbstarctType.Article && `${props.author}, `}
                    {`${props.date}`}
                    {props.comp_type === AbstarctType.Activity && `, ${props.location}`}
                </h4>
                <div className={`badge mx-2 ${status2css(props.status)}`}>
                    {props.status}
                </div>
            </div>
            <h6 className="pr-24">
                {props.children}
            </h6>
        </div>
    )
}




export default Abstarcts;
export type { AbstractInterface };
export { StrStatus, AbstarctType };