import Service from "@/components/service"
import Abstarcts from "@/components/abstracts"
import { AbstarctType } from "@/components/abstracts"
import { getSortedPostsData } from "@/components/post"
import { useEffect } from "react";

export default function Home() {
    const allEvents = getSortedPostsData('events',5);
    const allArticles = getSortedPostsData('articles',5);
    const services = [
        {
            img_path: "/icons/fix.svg",
            title: "报修平台",
            desc: "为广大师生同学提供设备维修服务喵（在建中）",
            href: "#"
        },
        {
            img_path: "/icons/issue.svg",
            title: "问题反馈",
            desc: "如果您有任何问题请及时向我们反馈喵",
            href: "https://github.com/DGUTCA/issues/issues/new/choose"
        }
    ]
    return (
        <div className="md:container px-6 mt-2">
            <h1># 线上服务</h1>
            <div>
                <div className="grid grid-flow-row grid-cols-2 gap-5 md:grid-cols-4">
                    {
                        services.map((service, idx) => (
                            <a href={service.href} key={idx}>
                                <Service img_path={service.img_path} title={service.title} desc={service.desc}></Service>
                            </a>
                        ))
                    }
                </div>
            </div>
            
            <div className="my-16 grid gap-16 lg:grid-cols-2 lg:grid-rows-none lg:gap-8">
                <div>
                    <h1># 最近文章</h1>
                    <div className="flex flex-col gap-8 mt-1"> {
                        allArticles.map(({ id, content, title, date, author, time }, idx) => (
                            <div key={idx}>
                                <Abstarcts
                                    file_name={id}
                                    comp_type={AbstarctType.Passage}
                                    title={title}
                                    date={date}
                                    author={author}
                                >
                                    {content.length>100?content.slice(0, 100) + '...':content}
                                </Abstarcts>
                            </div>
                        ))
                    } </div>
                </div>

                <div>
                    <h1># 最新活动</h1>
                    <div className="flex flex-col gap-8 mt-1">
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
                                {content.length>100?content.slice(0, 100) + '...':content}
                            </Abstarcts>
                        </div>))
                    }
                    </div>
                </div>
                
                <div>
                    <h1># 加入我们</h1>
                    <div className="flex flex-col gap-8 mt-1">
                        <h4>请在学生社团招新期间填写：<a className="text-blue-500" href="https://docs.qq.com/form/page/DQ0RmVU1wQlBoYVNv">学生社团招新报名表</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

