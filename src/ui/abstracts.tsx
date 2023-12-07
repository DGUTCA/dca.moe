"use client";
import Link from "next/link";
import Image from "next/image";
import { check_date_status } from "./client_component";
import {
  AbstractInterface,
  StrStatus,
  AbstarctType,
  status2css,
} from "../lib/interface";

const Abstarcts: React.FC<AbstractInterface> = (props) => {
  const isPassage: Boolean = props.comp_type === AbstarctType.Passage;
  const stat: StrStatus = check_date_status(
    props.date,
    props.time ? props.time : ""
  );
  const content = props.children ? (props.children as string) : "";
  return (
    <div className="bg-box-fx">
      <Link
        href={
          isPassage ? "/blog/" + props.file_name : "/events/" + props.file_name
        }
        className="hover:text-gray-700"
      >
        <div>
          <span className="align-top">
            {isPassage && (
              <Image
                src={"/icons/document.svg"}
                width={24}
                height={24}
                alt=""
                className="inline mx-2 dark-adaptor"
              />
            )}
          </span>
          <span className="h3-blk align-top">{props.title}</span>
        </div>

        <div className="-mt-[2px]">
          <span className="h5-gray align-bottom">
            <span>{isPassage && `${props.author},  `}</span>
            <span>{props.date}</span>
            <span className="font-extrabold">
              {!isPassage && `  ${props.time}`}
            </span>
            <span>{!isPassage && `  ${props.location}`}</span>
          </span>
          <span
            className={
              `mx-2 align-bottom ` +
              (isPassage ? "" : `badge ${status2css(stat)}`)
            }
          >
            {!isPassage && `${stat}`}
          </span>
        </div>
        <h5 className="mt-2 md:pr-4 lg:pr-10 2xl:pr-24">
          {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </h5>
      </Link>
    </div>
  );
};

export default Abstarcts;
