import { EnumType } from "typescript";
import { ServiceInterface } from "./service";
import Image from "next/image";

enum StrStatus {
    NOT_STARTED = "not started",
    INPROGRESS = "in progress",
    FINISHED = "finished"
}

function status2css(status: StrStatus): string {
    if (status === StrStatus.NOT_STARTED) {
        return "success";
    } else if (status === StrStatus.INPROGRESS) {
        return "warning";
    } else if (status === StrStatus.FINISHED) {
        return "error";
    }
    return ""
}

interface AbstractInterface extends ServiceInterface {
    author?: string;
    date?: Date
    status: StrStatus
    children?: React.ReactNode
}

const Abstarcts: React.FC<AbstractInterface> = (props) => {
    return (
        <div>
            <Image src={props.img_path} width={30} height={30} alt="" className="inline m-0 pb-2"></Image>
            <h3 className="inline">{props.title}</h3>
            <div>
                <h4 className="inline">Yipeng Liu, 2023-5-6</h4>
                <div className={`badge mx-2 badge-${status2css(props.status)}`}>
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
export { StrStatus };