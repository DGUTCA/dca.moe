# 东莞理工学院计算机协会 主页

[![Deploy Next.js site to Pages](https://github.com/DGUTCA/dca.moe/actions/workflows/nextjs.yml/badge.svg)](https://github.com/DGUTCA/dca.moe/actions/workflows/nextjs.yml)

中文 / [English](readmeEN.md)

欢迎来到 [dca.moe](https://dca.moe/) 的源码仓库

## 使用方法

### windows
#### 1. 下载并安装NodeJS
浏览器打开下面的链接下载并安装(全部下一步即可)
```
https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi
```
或者
使用winget (CMD或者powershell运行)
```
winget install OpenJS.NodeJS.LTS
```
使用winget安装好后请重新打开cmd以刷新环境变量

#### 2. 使用 npm 下载必要拓展(CMD运行)
```
npm install next -g
```
#### 3. 下载源码到合适的位置(教程解压缩放到桌面)
点击[这里](https://github.com/DGUTCA/dca.moe.git)下载源码文件
将整个dca.moe文件夹解压到桌面

#### 4. 启动本地后端服务器(打开CMD)
进入桌面的dca.moe文件夹
```
cd %USERPROFILE%\Desktop\dca.moe
```
启动本地服务
```
npm run dev
```

#### 5. 打开本地网页
浏览器地址栏输入
```
localhost:3000
```

### Linux
#### 1. 使用自带的包管理安装nodeJS
Ubuntu(参考网址:[https://github.com/nodesource/distributions](https://github.com/nodesource/distributions))
(1)下载并导入Nodesource GPG key
```
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```
(2)创建deb仓库
```
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```
(3)更新仓库并安装NodeJS
```
sudo apt-get update
sudo apt-get install nodejs git -y
```

Archlinux
```
sudo pacman -Syyu
sudo pacman -S git npm nodejs
```
#### 2. 使用 npm 安装必要拓展
```
npm install next -g
```

#### 3. 下载源码文件 
进入桌面
```
cd ~/Desktop
```
下载
```
git clone https://github.com/DGUTCA/dca.moe.git
```
解压
```
unzip dca.moe
```

#### 4. 启动本地后端服务器
进入dca.moe目录
```
cd dca.moe
```
启动
```
npm run dev
```
#### 5. 打开本地网页
浏览器地址栏输入
```
localhost:3000
```