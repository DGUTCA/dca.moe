import Image from "next/image";
import { ServiceInterface } from "@/lib/interface";

function Service({ props }: { props: ServiceInterface }) {
  return (
    <a href={props.href} className="service rounded-xl">
      <div className="card">
        <div className={`${props.className}`}>
          <figure>
            <Image
              className="rounded-full"
              width={120}
              height={120}
              src={props.img_path}
              alt={props.title}
            />
          </figure>
          <div className="card-body py-1.5 items-center text-center">
            <h3>{props.title}</h3>
            <h5>{props.desc}</h5>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Service;
export type { ServiceInterface };
