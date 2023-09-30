import Link from "next/link"
import Image from "next/image"
import Service from "@/components/service"
import Abstarcts from "@/components/abstracts"
import { StrStatus } from "@/components/abstracts"

export default function Home() {
    return (
        <div className="md:container px-6 prose">
            <h2># 线上服务</h2>
            
            <div className="px-8">
                <div className="grid grid-cols-4  justify-items-center ">
                    <Service img_path="/icons/fix.svg" title="报修平台" desc="为广大师生同学提供设备维修服务喵"></Service>
                    <Service img_path="/icons/calendar.svg" title="活动日历" desc="丰富的活动在这里等你喵"></Service>
                    <Service img_path="/icons/mc.svg" title="Minecraft" desc="一起来玩mincraft喵"></Service>
                    <Service img_path="/icons/issue.svg" title="问题反馈" desc="如果您有任何问题请及时向我们反馈喵"></Service>
                </div>
            </div>
            
            <div className="flex flex-row">
                <div className="basis-1/2"> 
                    <h2># 最近文章</h2>

                    <Abstarcts status={StrStatus.FINISHED} img_path="/icons/document.svg" title="莞工计算机协会官网建设中">
                        字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义
                        字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义
                        字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义字体方案要自定义
                    </Abstarcts>

                </div>

                <div className="basis-1/2">
                    <h2># 最新活动</h2>

                </div>


            </div>

        </div>   
    )
}

