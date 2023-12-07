# DGUTCA Homepage

[![Deploy Next.js site to Pages](https://github.com/DGUTCA/dca.moe/actions/workflows/nextjs.yml/badge.svg)](https://github.com/DGUTCA/dca.moe/actions/workflows/nextjs.yml)

English / [中文](README.md)

Welcome to the repository of dca.moe.

## Usage

### Windows
#### 1. Download and Install NodeJS
open the below link through your browser
```
https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi
```
or
use winget (open your CMD or POWERSHELL)
```
winget install OpenJS.NodeJS.LTS
```
reopen your CMD to reload the environment variable

#### 2.  Use NPM to Download plugin (through CMD)
```
npm install next -g
```
#### 3. Download the source and lay it to your desktop
click[here](https://github.com/DGUTCA/dca.moe.git) to download the source 
unzip the folder to your desktop

#### 4. Start local back-end Server
Enter the dca.moe folder
```
cd %USERPROFILE%\Desktop\dca.moe
```
start local server
```
npm run dev
```

#### 5. open local website
copy the below link to your browser address and goto
```
localhost:3000
```

### Linux
#### 1. Install NodeJS through your system package manager
Ubuntu((https://github.com/nodesource/distributions)[https://github.com/nodesource/distributions])
(1)https://github.com/nodesource/distributions
```
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```
(2)Create deb repository
```
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```
(3)Run Update and Install
```
sudo apt-get update
sudo apt-get install nodejs git -y
```

Archlinux
```
sudo pacman -Syyu
sudo pacman -S git npm nodejs
```
#### 2. Use NPM to Download plugin (through CMD)
```
npm install next -g
```

#### 3. Download the source and lay it to your desktop 
Enter your desktop
```
cd ~/Desktop
```
download
```
git clone https://github.com/DGUTCA/dca.moe.git
```
unzip
```
unzip dca.moe
```

#### 4. Start local back-end Server
enter dca.moe folder
```
cd dca.moe
```
start
```
npm run dev
```
#### 5. open local website
copy the below link to your browser address and goto
```
localhost:3000
```