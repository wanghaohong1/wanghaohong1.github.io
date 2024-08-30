(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{431:function(a,t,s){"use strict";s.r(t);var r=s(4),i=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"【版本控制】git快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【版本控制】git快速上手"}},[a._v("#")]),a._v(" 【版本控制】Git快速上手")]),a._v(" "),t("blockquote",[t("p",[a._v("作者："),t("a",{attrs:{href:"https://blog.csdn.net/m0_66570338",target:"_blank",rel:"noopener noreferrer"}},[a._v("观止."),t("OutboundLink")],1),a._v("，"),t("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/group/51122858222824",target:"_blank",rel:"noopener noreferrer"}},[a._v("编程导航星球"),t("OutboundLink")],1),a._v(" 编号 6872")])]),a._v(" "),t("h2",{attrs:{id:"一-引入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-引入"}},[a._v("#")]),a._v(" 一.引入")]),a._v(" "),t("h3",{attrs:{id:"_1-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-作用"}},[a._v("#")]),a._v(" (1) 作用")]),a._v(" "),t("p",[a._v("Git 是一个分布式版本控制系统，主要是用于管理开发过程中的源代码文件（Java类，xml文件，html页面等）。可用于"),t("strong",[a._v("代码回溯，版本切换，多人协作开发，远程备份")]),a._v("等场景。")]),a._v(" "),t("h3",{attrs:{id:"_2-整体工作流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-整体工作流程"}},[a._v("#")]),a._v(" (2) 整体工作流程")]),a._v(" "),t("p",[a._v("文件通过Git仓库来储存和管理，Git仓库分为两种：")]),a._v(" "),t("ul",[t("li",[a._v("本地仓库：开发人员自己电脑上的Git仓库")]),a._v(" "),t("li",[a._v("远程仓库：远程服务器上的Git仓库")])]),a._v(" "),t("p",[a._v("整体工作流程如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922520.png",loading:"lazy"}}),a._v(" 各个命令作用如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922501.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_3-代码托管服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码托管服务"}},[a._v("#")]),a._v(" (3) 代码托管服务")]),a._v(" "),t("p",[a._v("我们可以直接借助互联网上的一些代码托管服务来搭建远程仓库，例如gitee，github等，由于gitee服务器在国内，访问速度较快，此处建议使用gitee作为远程仓库。")]),a._v(" "),t("h2",{attrs:{id:"二-初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-初始化"}},[a._v("#")]),a._v(" 二.初始化")]),a._v(" "),t("h3",{attrs:{id:"_1-全局设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局设置"}},[a._v("#")]),a._v(" (1) 全局设置")]),a._v(" "),t("p",[a._v("当安装Git后首先要做的事情是设置用户名称和email地址，因为每次Git提交都会使用该用户的信息。\n在Git命令行中执行下面命令：")]),a._v(" "),t("ul",[t("li",[a._v("设置用户信息")])]),a._v(" "),t("div",{staticClass:"language-GIt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[a._v(" git config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"guanzhi"')]),a._v("\n git config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"guanzhi"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("查看配置信息")])]),a._v(" "),t("div",{staticClass:"language-lua line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-lua"}},[t("code",[a._v("git config "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--list")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-获取git仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取git仓库"}},[a._v("#")]),a._v(" (2) 获取Git仓库")]),a._v(" "),t("p",[a._v("要使用Git对我们的代码进行版本控制，首先需要获得Git仓库。获取Git仓库通常有两种方式:")]),a._v(" "),t("ol",[t("li",[a._v("在本地初始化一个Git仓库（")]),a._v(" "),t("li",[a._v("从远程仓库克隆")])]),a._v(" "),t("h3",{attrs:{id:"_2-1-本地创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-本地创建"}},[a._v("#")]),a._v(" (2.1) 本地创建")]),a._v(" "),t("p",[a._v("要使用Git对我们的代码进行版本控制，首先需要获得本地仓库")]),a._v(" "),t("ol",[t("li",[a._v("在电脑的任意位置创建一个空目录（例如test）作为我们的本地Git仓库")]),a._v(" "),t("li",[a._v("进入这个目录中，点击右键打开Git bash窗口")]),a._v(" "),t("li",[a._v("在窗口执行命令git init")]),a._v(" "),t("li",[a._v("如果创建成功后可在文件夹下看到隐藏的.git目录。")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922538.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_2-2-远程克隆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-远程克隆"}},[a._v("#")]),a._v(" (2.2) 远程克隆")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone 远程仓库url\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-相关概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-相关概念"}},[a._v("#")]),a._v(" (3) 相关概念")]),a._v(" "),t("ul",[t("li",[a._v("版本库：.git隐藏文件夹就是版本库，版本库中存储了很多配置信息，日志信息和文件版本信息等")]),a._v(" "),t("li",[a._v("工作区： 包含.git文件夹的目录就是工作区，也称为工作目录，主要用于存放开发的代码")]),a._v(" "),t("li",[a._v("暂存区： .git文件夹中有很多文件，其中一个index文件就是缓存区，也可以叫做stage。暂存区是一个临时保存修改文件的地方。")])]),a._v(" "),t("p",[a._v("Git工作区中的文件存在两种状态")]),a._v(" "),t("ol",[t("li",[a._v("untracked 未跟踪 （未被纳入版本控制）")]),a._v(" "),t("li",[a._v("trackend 已跟踪（被纳入版本控制）\n"),t("ul",[t("li",[a._v("Unmodified 未修改状态")]),a._v(" "),t("li",[a._v("Modified 已修改状态")]),a._v(" "),t("li",[a._v("Staged 已暂存状态")])])])]),a._v(" "),t("p",[a._v("注意：这些文件的状态会随着我们执行Git的命令发生变化。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922603.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"三-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-常用命令"}},[a._v("#")]),a._v(" 三.常用命令")]),a._v(" "),t("h3",{attrs:{id:"_1-本地仓库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-本地仓库操作"}},[a._v("#")]),a._v(" (1) 本地仓库操作")]),a._v(" "),t("h3",{attrs:{id:"_1-1-查看修改的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-查看修改的状态"}},[a._v("#")]),a._v(" (1.1) 查看修改的状态")]),a._v(" "),t("p",[a._v("作用：查看的修改的状态（暂存区、工作区）\n命令形式：")]),a._v(" "),t("div",{staticClass:"language-git line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[a._v("git status\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-2-添加工作区到暂存区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-添加工作区到暂存区"}},[a._v("#")]),a._v(" (1.2) 添加工作区到暂存区")]),a._v(" "),t("p",[a._v("作用：添加工作区一个或多个文件的修改到暂存区\n命令形式：")]),a._v(" "),t("div",{staticClass:"language-routeros line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git add 单个文件名\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("将所有修改加入暂存区：")])]),a._v(" "),t("div",{staticClass:"language-routeros line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git add .\n或\ngit add *\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"_1-3-提交暂存区到本地仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-提交暂存区到本地仓库"}},[a._v("#")]),a._v(" (1.3) 提交暂存区到本地仓库")]),a._v(" "),t("p",[a._v("作用：提交暂存区内容到本地仓库的当前分支\n命令形式：")]),a._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[a._v("git commit -m '注释内容'\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-4-查看提交日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-查看提交日志"}},[a._v("#")]),a._v(" (1.4) 查看提交日志")]),a._v(" "),t("p",[a._v("作用:查看提交记录 命令形式：")]),a._v(" "),t("div",{staticClass:"language-1c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git log\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-5-版本回退"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-版本回退"}},[a._v("#")]),a._v(" (1.5) 版本回退")]),a._v(" "),t("p",[a._v("作用：版本切换，当前所有的代码都会回滚到切换到的版本所处状态 命令形式：")]),a._v(" "),t("div",{staticClass:"language-pgsql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git reset --hard commitID\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("commitID可以使用git log指令查看")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922709.png",loading:"lazy"}}),a._v(" git reflog 这个指令可以看到已经删除的提交记录")]),a._v(" "),t("h3",{attrs:{id:"_2-远程仓库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-远程仓库操作"}},[a._v("#")]),a._v(" (2) 远程仓库操作")]),a._v(" "),t("h3",{attrs:{id:"_2-1-添加远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-添加远程仓库"}},[a._v("#")]),a._v(" (2.1) 添加远程仓库")]),a._v(" "),t("p",[a._v("此操作需先初始化本地库，然后与已创建的远程库进行对接。\n命令：")]),a._v(" "),t("div",{staticClass:"language-routeros line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git remote add 远端名称 仓库路径  \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("远端名称:默认是origin，取决于远端服务器设置\n仓库路径:从远端服务器获取此URL")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922674.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_2-2-查看远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查看远程仓库"}},[a._v("#")]),a._v(" (2.2) 查看远程仓库")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote \n或\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922881.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_1-3-克隆远程仓库到本地"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-克隆远程仓库到本地"}},[a._v("#")]),a._v(" (1.3) 克隆远程仓库到本地")]),a._v(" "),t("p",[a._v("如果你想获得一份已经存在了的Git远程仓库的拷贝，git可以克隆该Git仓库服务器上的几乎所有数据（包括日志信息，历史记录等）。\n克隆仓库的命令格式是：")]),a._v(" "),t("div",{staticClass:"language-crmsh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git clone 仓库路径\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-4-推送至远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-推送至远程仓库"}},[a._v("#")]),a._v(" (1.4) 推送至远程仓库")]),a._v(" "),t("p",[a._v("需要先将文件commit给本地仓库管理，然后推送远程 命令：")]),a._v(" "),t("div",{staticClass:"language-arcade line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git push 远端名称 远端分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("首次push到远程仓库可能需要进行身份验证，这是只需要输入注册托管平台的账号密码即可。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922836.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_1-5-从远程仓库拉去"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-从远程仓库拉去"}},[a._v("#")]),a._v(" (1.5) 从远程仓库拉去")]),a._v(" "),t("p",[a._v("git pull命令的作用是从远程仓库获取最新版本并合并到本地仓库。\n命令格式:")]),a._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[a._v("git pull 远端名称 远端分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("注意：如果当前本地仓库不是从远程仓库克隆，而是本地创建的仓库，并且仓库中存有文件，此时再从远程仓库拉去文件的时候会报错。（fatal:refusing to merge unrelated histories）\n解决只需在命令后加入参数即可：")]),a._v(" "),t("div",{staticClass:"language-ada line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ada"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("git")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("pull")]),a._v(" 远端名称 远端分支名称 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--allow-unrelate-histories ")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-分支操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-分支操作"}},[a._v("#")]),a._v(" (3) 分支操作")]),a._v(" "),t("h3",{attrs:{id:"_3-1-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-作用"}},[a._v("#")]),a._v(" (3.1) 作用")]),a._v(" "),t("p",[a._v("使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。同一个仓库可以有多个分支，各个分支相互独立，互不干扰。\n我对此的理解是：主号开了个分身去练级，如果提高了可以融合回本体，如果bug了可以舍弃，完全不影响本体。\n通过git init命令创建本地仓库时默认会创建一个master分支。")]),a._v(" "),t("h3",{attrs:{id:"_3-2-查看分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-查看分支"}},[a._v("#")]),a._v(" (3.2) 查看分支")]),a._v(" "),t("ul",[t("li",[a._v("列出所有本地分支")])]),a._v(" "),t("div",{staticClass:"language-ebnf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ebnf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token rule"}},[a._v("git branch")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("列出所有远程分支")])]),a._v(" "),t("div",{staticClass:"language-ebnf line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ebnf"}},[t("code",[t("span",{pre:!0,attrs:{class:"token rule"}},[a._v("git branch")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token rule"}},[a._v("r")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("注：如果本地仓库是通过git init获得而不是克隆则无法查看到远程分支名称。输入如下指令后再查看即可：")]),a._v(" "),t("div",{staticClass:"language-applescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-applescript"}},[t("code",[a._v("git remote update origin "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("--prune   ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新远程主机origin 整理分支")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("列出所有本地分支和远程分支")])]),a._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[a._v("git branch -a\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-3-创建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-创建分支"}},[a._v("#")]),a._v(" (3.3) 创建分支")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-mipsasm line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git branch 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-4-切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-切换分支"}},[a._v("#")]),a._v(" (3.4) 切换分支")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[a._v("git checkout 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922859.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_3-5-推送至远程仓库分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-推送至远程仓库分支"}},[a._v("#")]),a._v(" (3.5) 推送至远程仓库分支")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-arcade line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git push 远端名称 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922914.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_3-6-分支合并"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-分支合并"}},[a._v("#")]),a._v(" (3.6) 分支合并")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-livecodeserver line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git merge 被融合分支名称\n# 首先checkout到一个分支。\n# 然后选择将哪个分支融合于此。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("解决冲突： 当两个分支上对文件的修改可能会存在冲突，例如同时修改了同一个文件的同一行，这时就需要手动解决冲突，解决冲突步骤如下：\n1.手动处理文件中冲突的地方，改成我们想要的样子\n2.将解决完冲突的文件加入暂存区(add)\n3.提交到仓库(commit)\n冲突部分的内容处理如下所示：")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922977.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_3-7-删除分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-删除分支"}},[a._v("#")]),a._v(" (3.7) 删除分支")]),a._v(" "),t("ul",[t("li",[a._v("删除分支时，可能需要做各种检查")])]),a._v(" "),t("div",{staticClass:"language-mipsasm line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git branch -d 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("不做任何检查，强制删除")])]),a._v(" "),t("div",{staticClass:"language-mathematica line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-mathematica"}},[t("code",[a._v("git branch "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("D 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-标签操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-标签操作"}},[a._v("#")]),a._v(" (4) 标签操作")]),a._v(" "),t("h3",{attrs:{id:"_4-1-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-作用"}},[a._v("#")]),a._v(" (4.1) 作用")]),a._v(" "),t("p",[a._v("Git中的标签，指的是某个分支某个特定时间点的状态。通过标签很方便的切换到标记时的状态（类似拍的一张照片，已经定格）。比较有代表的是人们会使用这个功能来标记发布结点（v1.0,v1.2等）。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922920.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_4-2-查看已有标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-查看已有标签"}},[a._v("#")]),a._v(" (4.2) 查看已有标签")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-crmsh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git tag\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-3-创建标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-创建标签"}},[a._v("#")]),a._v(" (4.3) 创建标签")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-crmsh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git tag 标签名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-4-将标签推送至远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-将标签推送至远程仓库"}},[a._v("#")]),a._v(" (4.4) 将标签推送至远程仓库")]),a._v(" "),t("p",[a._v("命令：")]),a._v(" "),t("div",{staticClass:"language-arcade line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git push 远端名称 标签名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-5-检出标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-检出标签"}},[a._v("#")]),a._v(" (4.5) 检出标签")]),a._v(" "),t("p",[a._v("作用：将标签当时状态下载下来，获取当时状态下的代码。\n命令：")]),a._v(" "),t("div",{staticClass:"language-armasm line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-armasm"}},[t("code",[a._v("git checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("b 创建新分支名称 当时状态标签名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922556.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"四-在idea中操作git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-在idea中操作git"}},[a._v("#")]),a._v(" 四.在IDEA中操作Git")]),a._v(" "),t("h3",{attrs:{id:"_1-在idea中配置git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-在idea中配置git"}},[a._v("#")]),a._v(" (1) 在IDEA中配置Git")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922707.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_2-获取git仓库-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取git仓库-2"}},[a._v("#")]),a._v(" (2) 获取Git仓库")]),a._v(" "),t("p",[a._v("在IDEA中使用Git获取仓库有两种方式：")]),a._v(" "),t("ol",[t("li",[a._v("本地初始化仓库")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922679.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922893.png",loading:"lazy"}})]),a._v(" "),t("ol",[t("li",[a._v("从远程仓库克隆")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922880.png",loading:"lazy"}}),a._v(" 或者在初始界面：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922973.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_3-gitignore文件的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-gitignore文件的作用"}},[a._v("#")]),a._v(" (3) gitignore文件的作用")]),a._v(" "),t("p",[a._v("告诉git项目中的哪些文件不需要git管理，例如.idea .iml target等等。")]),a._v(" "),t("h3",{attrs:{id:"_4-本地仓库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-本地仓库操作"}},[a._v("#")]),a._v(" (4) 本地仓库操作")]),a._v(" "),t("h3",{attrs:{id:"_4-1-将文件加入暂存区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-将文件加入暂存区"}},[a._v("#")]),a._v(" (4.1) 将文件加入暂存区")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922615.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_4-2-将暂存区的文件提交到到版本库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-将暂存区的文件提交到到版本库"}},[a._v("#")]),a._v(" (4.2) 将暂存区的文件提交到到版本库")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922676.png",loading:"lazy"}}),a._v(" 常用：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922596.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_4-3-查看日志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-查看日志"}},[a._v("#")]),a._v(" (4.3) 查看日志")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922637.png",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922783.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_5-远程仓库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-远程仓库操作"}},[a._v("#")]),a._v(" (5) 远程仓库操作")]),a._v(" "),t("h3",{attrs:{id:"_5-1-查看远程仓库-添加远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-查看远程仓库-添加远程仓库"}},[a._v("#")]),a._v(" (5.1) 查看远程仓库&添加远程仓库")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922932.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_5-2-推送至远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-推送至远程仓库"}},[a._v("#")]),a._v(" (5.2) 推送至远程仓库")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922510.png",loading:"lazy"}}),a._v(" 常用：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922505.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_5-3-从远程仓库拉取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-从远程仓库拉取"}},[a._v("#")]),a._v(" (5.3) 从远程仓库拉取")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922652.png",loading:"lazy"}}),a._v(" 常用：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922558.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_6-分支操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-分支操作"}},[a._v("#")]),a._v(" (6) 分支操作")]),a._v(" "),t("h3",{attrs:{id:"_6-1-查看分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-查看分支"}},[a._v("#")]),a._v(" (6.1) 查看分支")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922750.png",loading:"lazy"}}),a._v(" 常用：（在屏幕右下角）")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922769.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_6-2-创建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-创建分支"}},[a._v("#")]),a._v(" (6.2) 创建分支")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922271.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_6-3-切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-切换分支"}},[a._v("#")]),a._v(" (6.3) 切换分支")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922265.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_6-4-将分支推送至远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-将分支推送至远程仓库"}},[a._v("#")]),a._v(" (6.4) 将分支推送至远程仓库")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922370.png",loading:"lazy"}})]),a._v(" "),t("h3",{attrs:{id:"_6-5-合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-合并分支"}},[a._v("#")]),a._v(" (6.5) 合并分支")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/5563/202312201922468.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);