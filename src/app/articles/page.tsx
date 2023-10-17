import { MDXRemote } from "next-mdx-remote/rsc";
import { getSortedPostsData } from "@/components/post";
import Abstarcts from "@/components/abstracts";
import { AbstarctType } from "@/components/abstracts";
export default function Page() {
  const allArticles = getSortedPostsData("articles", 5);
  return (
    <div className="flex flex-col gap-8 porse md:container p-16 md:pr-64">
      {allArticles.map(({ id, content, title, date, location, time }, idx) => (
        <div key={idx}>
          <div key={idx}>
            <Abstarcts
              file_name={id}
              comp_type={AbstarctType.Event}
              title={title}
              time={time}
              date={date}
              location={location}
              img_path=""
            >
              <MDXRemote source={content} />
            </Abstarcts>
          </div>
        </div>
      ))}
    </div>
  );
}
