import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostData, getFileNames } from "@/lib/post";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getFileNames("blog");
  return posts.map((post) => ({
    slug: post,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  try {
    const data = getPostData("blog", params.slug);
    const mdxOptions = {
      remarkPlugins: [remarkGfm],
    };
    return (
      <div className="prose">
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
        <div className="px=16">
          <MDXRemote source={data.content} options={{ mdxOptions }} />
        </div>
      </div>
    );
  } catch (e) {
    notFound();
  }
}
