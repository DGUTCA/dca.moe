import Link from "next/link"
import Image from "next/image"
import Service from "@/components/service"
import Abstarcts from "@/components/abstracts"
import { StrStatus, AbstarctType } from "@/components/abstracts"

export default function Home() {
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
                <div className="grid"> 
                    <h2># 最近文章</h2>
                    <Abstarcts 
                        comp_type={AbstarctType.Article} 
                        status={StrStatus.INPROGRESS} 
                        title="莞工计算机协会官网建设中" 
                        img_path="/icons/document.svg"
                        author="Nakono"
                    >
                        网站正在建设中...耐心等待，奇迹就一定会出现哟！啾咪啾咪！
                    </Abstarcts>
                </div>
                
                <div className="grid">
                    <h2># 最新活动</h2>
                    <Abstarcts 
                        comp_type={AbstarctType.Activity} 
                        status={StrStatus.NOT_STARTED} 
                        title="明日方舟今晚更新" 
                        location="真草运动场" 
                        img_path=""
                    >
                        【烁尘烟中】
                        赫德雷
                        “令人怀念的地方，博士。这份委托的细节我并不在意，只是关于报酬，除了赏金之外，我还有些更好的想法。”
                    </Abstarcts>
                </div>
            </div>
        </div>   
    )
}

