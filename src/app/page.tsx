import Service from "@/components/service"
import Abstarcts from "@/components/abstracts"
import { StrStatus, AbstarctType } from "@/components/abstracts"
import { getSortedPostsData } from "@/components/post"

export default function Home() {
    const allEvents = getSortedPostsData('events');
    const allArticles = getSortedPostsData('articles');
    return (
        <div className="md:container px-6 prose">
            <h2># 线上服务</h2>
            <div>
                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-5">
                    <Service img_path="/icons/fix.svg" title="报修平台" desc="为广大师生同学提供设备维修服务喵"></Service>
                    <Service img_path="/icons/calendar.svg" title="活动日历" desc="丰富的活动在这里等你喵"></Service>
                    <Service img_path="/icons/mc.svg" title="Minecraft" desc="一起来玩Mincraft喵"></Service>
                    <Service img_path="/icons/issue.svg" title="问题反馈" desc="如果您有任何问题请及时向我们反馈喵"></Service>
                </div>
            </div>
            <div className="grid grid-flow-row md:grid-cols-2">
                <div>
                    <h2># 最近文章</h2>
                    {
                        allArticles.map(({ id, content, title, date, author }, idx) => (
                            <div key={idx}>
                                <Abstarcts
                                    comp_type={AbstarctType.Article}
                                    status={StrStatus.INPROGRESS}
                                    title={title}
                                    date={date}
                                    img_path="/icons/document.svg"
                                    author={author}
                                >
                                    {content}
                                </Abstarcts>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <h2># 最新活动</h2>
                    {
                        allEvents.map(({ id, content, title, date, location }, idx) => (
                            <div key={idx}>
                                <Abstarcts
                                    comp_type={AbstarctType.Activity}
                                    status={StrStatus.NOT_STARTED}
                                    title={title}
                                    date={date}
                                    location={location}
                                    img_path=""
                                    key={idx}
                                >
                                    {content}
                                </Abstarcts>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

