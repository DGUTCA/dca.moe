import Image from "next/image";


interface ServiceInterface {
  img_path: string;
  title: string;
  desc?: string;
  className?: string;
}

const Service: React.FC<ServiceInterface> = (props) => {
  return (
    <div className="service rounded-xl border-black px-6 py-4 lg:px-8 lg:py-12 shadow-lg">
      <div className={`${props.className} place-items-center flex flex-col gap-2 lg:gap-3`}>
        <Image
          className=""
          width={100}
          height={100}
          sizes="(max-width: 768px) 50vw,
          (max-width: 1200px) 100vw,
          1vw"
          src={props.img_path}
          alt=""
        />
        <h3>{props.title}</h3>
        <div className="h5-gray lg:px-0 xl:px-6 text-center">{props.desc}</div>
      </div>
    </div>
  );
};

export default Service;
export type { ServiceInterface };
