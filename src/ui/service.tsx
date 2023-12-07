import Image from "next/image";
import { ServiceInterface } from "../lib/interface";

const Service: React.FC<ServiceInterface> = (props) => {
  return (
    <div className="service py-2 md:pb-5 md:pt-2">
      <div
        className={`${props.className} items-center flex flex-col gap-2 lg:gap-3`}
      >
        <div>
          <Image
            className=""
            width={120}
            height={120}
            src={props.img_path}
            alt=""
          />
        </div>
        <h3>{props.title}</h3>
        <div className="h5-gray w-36 text-center h-16 lg:h-10 lg:px-0 xl:w-64 xl:px-6 ">
          {props.desc}
        </div>
      </div>
    </div>
  );
};

export default Service;
export type { ServiceInterface };
