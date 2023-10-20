import Image from "next/image";
import { ServiceInterface } from "./interface";

const Service: React.FC<ServiceInterface> = (props) => {
  return (
    <div className="service rounded-xl border-black px-6 py-4 lg:px-8 lg:py-12 shadow-lg">
      <div className={`${props.className} place-items-center flex flex-col gap-2 lg:gap-3`}>
        <Image
          className="dark-adaptor"
          width={100}
          height={100}
          src={props.img_path}
          alt=""
        />
        <h3>{props.title}</h3>
        <div className="h5-gray lg:px-0 xl:px-6 text-center h-16 lg:h-10 ">{props.desc}</div>
      </div>
    </div>
  );
};

export default Service;
export type { ServiceInterface };
