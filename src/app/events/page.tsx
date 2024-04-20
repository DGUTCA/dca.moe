import { MDXRemote } from "next-mdx-remote/rsc";
import { getSortedPostsData } from "@/lib/post";
import Abstarcts from "@/ui/abstracts";
import { AbstarctType } from "@/lib/interface";
import remarkGfm from "remark-gfm";
export default function Page() {
  const allEvents = getSortedPostsData("events");
  const mdxOptions = {
    remarkPlugins: [remarkGfm],
  };
  return (
    <div className="lg:pl-10 xl:pl-[80px]">
      <h1># 活动专栏</h1>
      <div className="porse flex flex-col gap-10 my-8 md:pr-64">
        {allEvents.map(({ id, content, title, date, location, time }, idx) => (
          <div key={idx}>
            <Abstarcts
              file_name={id}
              comp_type={AbstarctType.Event}
              title={title}
              time={time}
              date={date}
              location={location}
            >
              <MDXRemote
                source={
                  content.length > 150 ? content.slice(0, 150) + "..." : content
                }
                options={{ mdxOptions }}
                components={{
                  p: ({ children }) => {
                    return <p className="mr-[8%]">{children}</p>;
                  },
                }}
              />
            </Abstarcts>
          </div>
        ))}
      </div>
    </div>
  );
}
