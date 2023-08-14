(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{352:function(t,s,a){"use strict";a.r(s);var r=a(7),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"push默认行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#push默认行为"}},[t._v("#")]),t._v(" push默认行为")]),t._v(" "),s("h2",{attrs:{id:"一-遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-遇到的问题"}},[t._v("#")]),t._v(" 一. 遇到的问题")]),t._v(" "),s("p",[t._v("在本地新建一个分支，添加代码后push，提示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown123.oss-cn-beijing.aliyuncs.com/img/20230618010314.png",alt:""}})]),t._v(" "),s("p",[t._v("之所以出现这样的警告，和git的push默认配置push.default有关，push.default的配置选项有五个："),s("strong",[t._v("nothing")]),t._v("、"),s("strong",[t._v("current")]),t._v("、"),s("strong",[t._v("upstream")]),t._v("、"),s("strong",[t._v("simple")]),t._v("、"),s("strong",[t._v("matching")]),t._v("。它们的作用分别为：")]),t._v(" "),s("h2",{attrs:{id:"二-默认行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-默认行为"}},[t._v("#")]),t._v(" 二. 默认行为")]),t._v(" "),s("p",[s("code",[t._v("nothing")]),t._v(": 直接push会出错，需要显式的指出推送的远程分支，例如:git push origin master；")]),t._v(" "),s("p",[s("code",[t._v("current")]),t._v(": 推送时只会推送当前所在的分支到远程同名分支，如果远程分支不存在相应的同名分支，则创建该分支；")]),t._v(" "),s("p",[s("code",[t._v("upstream")]),t._v(": 推送当前分支到它的upstream分支上，这个模式只适用于推送到与拉取数据相同的仓库(比如central workflow)；")]),t._v(" "),s("p",[s("code",[t._v("simple")]),t._v(": 在中央仓库工作流程模式下，只能推送到与本地分支名一致的upstream分支中，如果推送的远程仓库和拉取数据的远程仓库不一致，那么该模式会像current模式一样进行操作。因为该选项对于新手来说是最安全的，所以在git 2.0中，simple是push.default的默认值配置项(2.0以前的默认配置项是matching)；")]),t._v(" "),s("p",[s("code",[t._v("matching")]),t._v(":推送本地和远程都存在的同名分支。")]),t._v(" "),s("h2",{attrs:{id:"三-修改默认行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-修改默认行为"}},[t._v("#")]),t._v(" 三. 修改默认行为")]),t._v(" "),s("p",[t._v("命令：")]),t._v(" "),s("div",{staticClass:"language-git line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-git"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地配置")]),t._v("\ngit config push.default <current>\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置")]),t._v("\ngit config -g push.default <current>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"四-查看配置信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-查看配置信息"}},[t._v("#")]),t._v(" 四. 查看配置信息")]),t._v(" "),s("p",[t._v("在.git里面有个config文件")]),t._v(" "),s("p",[t._v("命令："),s("code",[t._v("cat config")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://markdown123.oss-cn-beijing.aliyuncs.com/img/20230618011224.png",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);