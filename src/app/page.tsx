import Service from "@/ui/service";
import Abstarcts from "@/ui/abstracts";
import { AbstarctType } from "@/lib/interface";
import { getSortedPostsData } from "@/lib/post";

export default function Home() {
  const allEvents = getSortedPostsData("events", 5);
  const allArticles = getSortedPostsData("blog", 5);
  const services = [
    {
      img_path: "/icons/fix.svg",
      title: "报修平台",
      desc: "为广大师生同学提供设备维修服务喵（在建中）",
      href: "#",
    },
    {
      img_path: "/icons/git.svg",
      title: "Git",
      desc: "校内自建git仓库（有意向）",
      href: "https://github.com/DGUTCA/issues/issues/new/choose",
    },
    {
      img_path: "/icons/mirror.svg",
      title: "镜像站",
      desc: "计算机协会镜像站（有意向）",
      href: "https://github.com/DGUTCA/issues/issues/new/choose",
    },
    {
      img_path: "/icons/issue.svg",
      title: "问题反馈",
      desc: "如果您有任何问题请及时向我们反馈喵",
      href: "https://github.com/DGUTCA/issues/issues/new/choose",
    },
  ];
  return (
    <>
      <h1 className="lg:pl-10 xl:pl-[80px]"># 线上服务</h1>
      <div>
        <div className="grid grid-flow-row grid-cols-2 gap-4 mt-4 lg:mt-12 md:grid-cols-4 md:gap-0">
          {services.map((service, idx) => (
            <a href={service.href} key={idx}>
              <Service
                img_path={service.img_path}
                title={service.title}
                desc={service.desc}
              ></Service>
            </a>
          ))}
        </div>
      </div>

      <div className="my-16 grid gap-16 lg:pl-10 lg:grid-cols-2 lg:grid-rows-none lg:gap-28 xl:pl-[80px]">
        <div>
          <h1># 最近文章</h1>
          <div className="flex flex-col gap-8 mt-3">
            {" "}
            {allArticles.map(
              ({ id, content, title, date, author, time }, idx) => (
                <div key={idx}>
                  <Abstarcts
                    file_name={id}
                    comp_type={AbstarctType.Passage}
                    title={title}
                    date={date}
                    author={author}
                  >
                    {content.length > 100
                      ? content.slice(0, 100) + "..."
                      : content}
                  </Abstarcts>
                </div>
              )
            )}{" "}
          </div>
        </div>

        <div>
          <h1># 最新活动</h1>
          <div className="flex flex-col gap-8 mt-3">
            {allEvents.map(
              ({ id, content, title, date, location, time }, idx) => (
                <div key={idx}>
                  <Abstarcts
                    file_name={id}
                    comp_type={AbstarctType.Event}
                    title={title}
                    time={time}
                    date={date}
                    location={location}
                  >
                    {content}
                  </Abstarcts>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <h1># 加入我们</h1>
          <div className="flex flex-col gap-8 mt-1">
            <h4>
              请在学生社团招新期间填写：
              <a
                className="text-blue-500"
                href="https://docs.qq.com/form/page/DQ0RmVU1wQlBoYVNv"
              >
                学生社团招新报名表
              </a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
