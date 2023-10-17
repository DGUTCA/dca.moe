import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostData } from "@/components/post";

export default function Page({ params }: { params: { slug: string } }) {
  const data = getPostData("articles", params.slug);
  return (
    <div className="md:container prose p-16">
      <div>
        <span className="align-top"></span>
        <span className="h3-blk align-top">{data.title}</span>
      </div>
      <div className="-mt-[2px]">
        <span className="h5-gray align-bottom">
          <span>{data.author} </span>
          <span>{data.date} </span>
          <span className="font-extrabold">{data.time} </span>
          <span>{data.location} </span>
        </span>
      </div>
      <h5 className="mt-2 md:pr-4 lg:pr-10 2xl:pr-24">{data.children}</h5>
      <MDXRemote source={data.content} />
    </div>
  );
}
