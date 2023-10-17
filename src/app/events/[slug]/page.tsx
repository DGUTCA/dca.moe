import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostData, getFileNames } from "@/components/post";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getFileNames("events");
  return posts.map((post) => ({
    slug: post,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  try {
    const data = getPostData("events", params.slug);
    const mdxOptions = {
      remarkPlugins: [remarkGfm],
    };
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
        <MDXRemote source={data.content} options={{ mdxOptions }} />
      </div>
    );
  } catch (e) {
    notFound();
  }
}
