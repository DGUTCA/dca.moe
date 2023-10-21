import { MDXRemote } from "next-mdx-remote/rsc";
import { getSortedPostsData } from "@/components/post";
import Abstarcts from "@/components/abstracts";
import { AbstarctType } from "@/components/interface";
export default function Page() {
  const allEvents = getSortedPostsData("events", 5);
  return (
    <div className="md:container px-6 mt-2">
        <h1># 活动专栏</h1>
        <div className="flex flex-col gap-10 porse my-8 md:container md:pr-64 lg:px-4 ">
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
                    <MDXRemote source={content.length>100?content.slice(0, 100) + '...':content} />
                    </Abstarcts>
                </div>
            ))}
        </div>
    </div>
  );
}
