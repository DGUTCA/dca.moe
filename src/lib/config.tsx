import { ServiceInterface } from "@/ui/service";

export const services: ServiceInterface[] = [
  {
    img_path: "/icons/fix.svg",
    title: "单点登录",
    desc: "协会单点登录系统",
    href: "https://dca.dgut.edu.cn/auth/realms/dca-realm/account",
  },
  {
    img_path: "/icons/git.svg",
    title: "Git",
    desc: "Git代码托管服务（WIP）",
    href: "https://git.dgut.edu.cn/",
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
export const navs = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
];
