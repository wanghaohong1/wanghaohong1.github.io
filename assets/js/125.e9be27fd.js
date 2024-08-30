(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{420:function(n,t,r){"use strict";r.r(t);var e=r(4),i=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"string-的-intern-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string-的-intern-方法"}},[n._v("#")]),n._v(" String 的 intern() 方法")]),n._v(" "),t("blockquote",[t("p",[n._v("作者："),t("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/footprint/185541482828452",target:"_blank",rel:"noopener noreferrer"}},[n._v("小何同学"),t("OutboundLink")],1),n._v("，"),t("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/group/51122858222824",target:"_blank",rel:"noopener noreferrer"}},[n._v("编程导航星球"),t("OutboundLink")],1),n._v(" 编号 18055")])]),n._v(" "),t("blockquote",[t("p",[n._v("来源：在使用对秒杀券"),t("strong",[n._v("一人一单")]),n._v("实现过程中用"),t("strong",[n._v("悲观锁")]),n._v("用到"),t("code",[n._v("synchronized (id.toString().intern()){}")]),n._v("，实现根据用户id加锁")])]),n._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[n._v("#")]),n._v(" 问题：")]),n._v(" "),t("ol",[t("li",[n._v("String s1 = “a” + “b”; //创建了几个对象？")]),n._v(" "),t("li",[n._v("String s2 = new String(“ab”); //创建了几个对象？")]),n._v(" "),t("li",[n._v("String s3 = new String(“a”) + new String(“b”); //创建了几个对象？")]),n._v(" "),t("li",[n._v("String s4= new String(“a”) + new String(“a”); s4.intern(); //创建了几个对象？")])]),n._v(" "),t("h2",{attrs:{id:"关于intern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于intern"}},[n._v("#")]),n._v(" 关于intern()：")]),n._v(" "),t("p",[n._v("String.intern()方法是"),t("strong",[n._v("一种手动将字符串加入常量池")]),n._v("中的方法，如果有则返回，没有则是JDK７以及JDK前的区别")]),n._v(" "),t("h3",{attrs:{id:"_1-jdk7前"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-jdk7前"}},[n._v("#")]),n._v(" （1）JDK7前：")]),n._v(" "),t("p",[n._v("String调用intern()方法时回去找常量池是否存在当前内容， 如果不存在会在常量池中创造对象并做引用 如果存在则直接返回")]),n._v(" "),t("p",[t("strong",[n._v("原理")]),n._v("：JDK6中常量池位于PermGen（永久代）中，PermGen是一块主要用于存放已加载的类信息和字符串池的大小固定的区域，因此当无用的对象存储多后容易栈溢出。另外问题是堆区和PermGen隔离，容易创建多个相同值对象。")]),n._v(" "),t("h3",{attrs:{id:"_2-jdk7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jdk7"}},[n._v("#")]),n._v(" （2）JDK7")]),n._v(" "),t("p",[n._v("Jdk7将常量池从PermGen区移到了Java堆区，执行intern操作时，如果常量池"),t("strong",[n._v("已经存在")]),n._v("该字符串，则直接返回字符串引用，"),t("strong",[n._v("否则")]),n._v("复制该字符串对象的引用到常量池中并返回。")]),n._v(" "),t("p",[n._v("回到开始的问题：")]),n._v(" "),t("ol",[t("li",[n._v("String s1 = “a” + “b”; //创建了几个对象？")])]),n._v(" "),t("ul",[t("li",[n._v('最多一个。会被优化为"ab"，然后寻找常量池是否存在"ab"，不存在则创建对象')])]),n._v(" "),t("ol",[t("li",[n._v("String s2 = new String(“ab”); //创建了几个对象？")])]),n._v(" "),t("ul",[t("li",[n._v('一个或两个。new时在堆区创建一个对象，如果在常量池不存在"ab"则在常量池再创建一个')])]),n._v(" "),t("ol",[t("li",[n._v("String s3 = new String(“a”) + new String(“b”);创建了几个对象？")])]),n._v(" "),t("ul",[t("li",[n._v("至少4个，最多6个。")])]),n._v(" "),t("p",[n._v('首先new两个对象，String的加法会new一个StringBuilder，然后toString()底层会new一个String 另外可能会在常量池创建"a"，"b"')]),n._v(" "),t("ol",[t("li",[n._v("String s4= new String(“a”) + new String(“b”);s3.intern();创建了几个对象？")])]),n._v(" "),t("ul",[t("li",[n._v("至少4个，最多7个")])]),n._v(" "),t("p",[n._v('同样两个new，一个StringBuilder，一个toString()，"a"，"b"可能在常量池创建 最后**调用intern()**方法时候，会去判断"ab"是否存在 JDK7之前：不存在会在常量池new一个对象 JDK7：只创建"ab"引用，并指向堆区"ab"的StringBuilder对象地址')])])}),[],!1,null,null,null);t.default=i.exports}}]);