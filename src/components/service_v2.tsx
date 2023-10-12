import Image from "next/image";


interface ServiceInterface {
  img_path: string;
  title: string;
  desc?: string;
  className?: string;
}

const Service: React.FC<ServiceInterface> = (props) => {
  return (
    <div className="service border-black px-8 py-12 shadow-lg border-collapse rounded-md">
      <div className={`${props.className} flex flex-col gap-2`}>
        <Image
            className=""
            width={50}
            height={50} 
            src={props.img_path}
            alt=""
            />
        <h3>{props.title}</h3>
        <div className="h5-gray">{props.desc}</div>
      </div>
    </div>
  );
};

export default Service;
export type { ServiceInterface };
