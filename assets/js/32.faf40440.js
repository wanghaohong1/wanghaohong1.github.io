(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{328:function(_,v,t){"use strict";t.r(v);var s=t(4),r=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"数据结构与算法篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据结构与算法篇"}},[_._v("#")]),_._v(" "),v("strong",[_._v("数据结构与算法篇")])]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("数据结构与算法是被问的最多的专业课之一")]),_._v("，下面是作者的一些总结。")])]),_._v(" "),v("h3",{attrs:{id:"_1-介绍一下时间复杂度和空间复杂度。"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍一下时间复杂度和空间复杂度。"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("1. 介绍一下时间复杂度和空间复杂度。")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("时间复杂度：")])])]),_._v(" "),v("p",[_._v("时间复杂度衡量了算法运行所需的时间资源。时间复杂度分析关注的是算法在最坏情况下的时间消耗。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("空间复杂度：")])])]),_._v(" "),v("p",[_._v("空间复杂度衡量了算法运行所需的存储空间。空间复杂度分析关注的是算法在最坏情况下所使用的额外空间。")]),_._v(" "),v("h3",{attrs:{id:"_2-请说出常见的存储结构-以及这些存储结构的优缺点。★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-请说出常见的存储结构-以及这些存储结构的优缺点。★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("2. 请说出常见的存储结构，以及这些存储结构的优缺点。★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（1）顺序存储")])])]),_._v(" "),v("p",[_._v("把逻辑上相邻的元素存储在物理位置上也相邻的存储单元中，元素之间的关系由存储单元的邻接关系来体现。")]),_._v(" "),v("p",[_._v("****优点：****随机存取，每个元素占用最少的存储空间（存储密度高）；")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("缺点")])]),_._v("：只能使用相邻的一整块存储单元，因此可能产生较多的外部碎片。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（2）链式存储")])])]),_._v(" "),v("p",[_._v("不要求逻辑上相邻的元素在物理位置上也相邻，借助指示元素存储地址的指针来表示元素之间的逻辑关系。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("优点")])]),_._v("：是不会出现碎片现象，能充分利用所有存储单元（利用率高）；")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("缺点")])]),_._v("：是每个元素因存储指针而占用额外的存储空间（指针开销），且只能实现顺序存取。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（3）索引存储")])])]),_._v(" "),v("p",[_._v("在存储元素信息的同时，还建立附加的索引表。索引表中的每项称为索引项，索引项的一般形式是（关键字，地址）。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("优点")])]),_._v("：是检索速度快；")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("缺点")])]),_._v("：是附加的索引表额外占用存储空间。另外，增加和删除数据时也要修改索引表，因而会花费较多的时间。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（4）散列存储")])])]),_._v(" "),v("p",[_._v("根据元素的关键字直接计算出该元素的存储地址，又称哈希存储。")]),_._v(" "),v("p",[v("strong",[_._v("优点")]),_._v("：是检索、增加和删除结点的操作都很快；")]),_._v(" "),v("p",[v("strong",[_._v("缺点")]),_._v("：是若散列函数不好，则可能出现元素存储单元的冲突，而解决冲突会增加时间和空间开销。")]),_._v(" "),v("h3",{attrs:{id:"_3-循环比递归的效率高吗-★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-循环比递归的效率高吗-★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("3. 循环比递归的效率高吗？★")])])]),_._v(" "),v("p",[_._v("循环和递归两者是可以互换的，不能决定性的说循环的效率比递归高。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（1）递归")])])]),_._v(" "),v("p",[_._v("优点：代码简洁清晰，容易检查正确性；")]),_._v(" "),v("p",[_._v("缺点：当递归调用的次数较多时，要增加额外的堆栈处理，有可能产生堆栈溢出的情况，对执行效率有一定的影响。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（2）循环")])])]),_._v(" "),v("p",[_._v("优点：结构简单，速度快；")]),_._v(" "),v("p",[_._v("缺点：它并不能解决全部问题，有的问题适合于用递归来解决不适合用循环。")]),_._v(" "),v("h3",{attrs:{id:"_4-线性表包括了顺序表和链表-请比较它们的区别。-★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-线性表包括了顺序表和链表-请比较它们的区别。-★★"}},[_._v("#")]),_._v(" ****4. 线性表包括了顺序表和链表，请比较它们的区别。****"),v("strong",[v("strong",[_._v("★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（1）存取（读写）方式")])])]),_._v(" "),v("p",[_._v("顺序表可以顺序存取，也可以随机存取。")]),_._v(" "),v("p",[_._v("链表只能顺序存取。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（2）逻辑结构与物理结构")])])]),_._v(" "),v("p",[_._v("顺序存储：逻辑上相邻的元素，物理存储位置也相邻。")]),_._v(" "),v("p",[_._v("链式存储：逻辑上相邻的元素，物理存储位置不一定相邻，对应的逻辑关系是通过指针链接来表示的。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（3）查找、插入和删除操作")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("查找：")])])]),_._v(" "),v("p",[_._v("对于按值查找，顺序表无序时，两者的时间复杂度均为 O(n); 顺序表有序时，可采用折半查找，此时的时间复杂度为 O(logn) 。")]),_._v(" "),v("p",[_._v("对于按序号查找，顺序表支持随机访问，时间复杂度仅为 0(1), 而链表的平均时间复杂度为 O(n)。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("插入、删除：")])])]),_._v(" "),v("p",[_._v("顺序表的插入、删除操作，平均需要移动半个表长的元素。")]),_._v(" "),v("p",[_._v("链表的插入、删除操作，只需修改相关结点的指针域即可。由于链表的每个结点都带有指针域，故而存储密度不够大。")]),_._v(" "),v("h3",{attrs:{id:"_5-说说栈和队列的区别。-★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-说说栈和队列的区别。-★★"}},[_._v("#")]),_._v(" ****5. 说说栈和队列的区别。****"),v("strong",[v("strong",[_._v("★★")])])]),_._v(" "),v("p",[_._v("栈和队列都是操作受限的线性表。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("栈")])])]),_._v(" "),v("p",[_._v("对于插入到栈的元素按 “后进先出” 的规则处理，插入和删除操作都在栈顶进行，一般用定长数组存储栈元素。由于进栈和出栈都是在栈顶进行，因此要有一个 size 变量来记录当前栈的大小。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("队列")])])]),_._v(" "),v("p",[_._v("允许在一段进行插入另一端进行删除的线性表。队列顾名思义就像排队一样，对于进入队列的元素按 “先进先出” 的规则处理，在表头进行删除在表尾进行插入。")]),_._v(" "),v("h3",{attrs:{id:"_6-简要说说共享栈。-★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-简要说说共享栈。-★"}},[_._v("#")]),_._v(" ****6. 简要说说共享栈。****"),v("strong",[v("strong",[_._v("★")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/ff97cbb7d9eb4ef1ab51c69a25f9a1ee.png",loading:"lazy"}})]),_._v(" "),v("p",[_._v("让两个顺序栈共享一个一维数组空间，将两个栈的栈底分别设置在共享空间的两端，两个栈顶向共享空间的中间延伸。这样能够更有效的利用存储空间，只有在整个存储空间被占满时才发生溢出。")]),_._v(" "),v("h3",{attrs:{id:"_7-如何区分循环队列是队空还是队满-★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-如何区分循环队列是队空还是队满-★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("7. 如何区分循环队列是队空还是队满？★★")])])]),_._v(" "),v("p",[_._v("普通情况下，循环队列队空和队满的判定条件是一样的，都是 Q.front == Q.rear。")]),_._v(" "),v("p",[_._v("为了区分可采用两种方法：")]),_._v(" "),v("p",[v("strong",[_._v("方法一")]),_._v("：牺牲一个单元来区分队空和队满，这个时候 (Q.rear+1)%MaxSize == Q.front 才是队满标志。")]),_._v(" "),v("p",[v("strong",[_._v("方法二")]),_._v("：类型中增设表示元素个数的数据成员。这样，队空的条件为 Q.size == 0；队满的条件为 Q.size == MaxSize。")]),_._v(" "),v("h3",{attrs:{id:"_8-说说栈在括号匹配中的算法思想。★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-说说栈在括号匹配中的算法思想。★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("8. 说说栈在括号匹配中的算法思想。★★")])])]),_._v(" "),v("p",[_._v("1）出现的凡是左括号，则进栈；")]),_._v(" "),v("p",[_._v("2）出现的是右括号，如果栈不空而且栈顶元素是左括号，那么相匹配，否则不匹配。")]),_._v(" "),v("p",[_._v("3）表达式检验结束时，如果栈空则表明表达式中匹配正确，否则表明 “左括号” 有余")]),_._v(" "),v("h3",{attrs:{id:"_9-说说栈在后缀表达式求值的算法思想。★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-说说栈在后缀表达式求值的算法思想。★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("9. 说说栈在后缀表达式求值的算法思想。★★")])])]),_._v(" "),v("p",[_._v("例如 ABCD-*+ED/-。")]),_._v(" "),v("p",[_._v("顺序扫描表达式的每一项，然后根据它的类型做如下相应操作：")]),_._v(" "),v("p",[_._v("若该项是操作数，则将其压入栈中；")]),_._v(" "),v("p",[_._v("若该项是操作符，则连续从栈中退出两个操作数 y 和 x，形成运算指令 XY，并将计算结果重新压入栈中。")]),_._v(" "),v("p",[_._v("当表达式的所有项都扫描并处理完后，栈顶存放的就是最后的计算结果。")]),_._v(" "),v("h3",{attrs:{id:"_10-说说栈在计算机系统中的应用。★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-说说栈在计算机系统中的应用。★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("10. 说说栈在计算机系统中的应用。★★")])])]),_._v(" "),v("ol",[v("li",[_._v("函数调用：栈在函数调用中扮演着重要角色。每当一个函数被调用时，函数的参数、局部变量和返回地址等信息都会被保存在栈中的帧中。函数执行完毕后，相应的帧会被从栈中弹出，恢复上一个函数的执行。")]),_._v(" "),v("li",[_._v("表达式求值：编译器和解释器通常使用栈来求解表达式。例如，中缀表达式转换为后缀表达式时，使用栈来调整操作符的顺序。")]),_._v(" "),v("li",[_._v("括号匹配：栈也常用于括号匹配的问题。通过遍历输入字符串并将左括号入栈，当遇到右括号时，检查栈顶元素是否与之匹配。可以利用栈的后进先出（LIFO）特性来快速判断括号是否匹配。")])]),_._v(" "),v("h3",{attrs:{id:"_11-说说队列在计算机系统中的应用。★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_11-说说队列在计算机系统中的应用。★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("11. 说说队列在计算机系统中的应用。★★")])])]),_._v(" "),v("ol",[v("li",[_._v("任务调度：操作系统中的任务调度器通常使用队列数据结构来管理和调度进程或线程。")]),_._v(" "),v("li",[_._v("缓冲区管理：网络通信、磁盘 I/O 等场景中常需要使用队列来处理数据的缓冲区。")]),_._v(" "),v("li",[_._v("消息传递：消息队列是实现异步通信和解耦的重要方式。多个组件之间通过将消息放入队列来进行通信，接收者可以从队列中取出并处理消息。")])]),_._v(" "),v("h3",{attrs:{id:"_12-介绍一下-kmp-算法。★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_12-介绍一下-kmp-算法。★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("12. 介绍一下 KMP 算法。★★★")])])]),_._v(" "),v("p",[_._v("KMP 算法是一种高效的字符串匹配算法，用于在一个文本串中查找一个模式串的出现位置。KMP 算法通过利用模式串自身的信息，在匹配过程中避免不必要的回溯，从而提高匹配效率。")]),_._v(" "),v("p",[_._v("KMP 算法的核心思想是使用一个部分匹配表，也称为 next 数组，来记录模式串中每个位置的最长公共前后缀的长度。这样，在匹配失败时，可以根据部分匹配表的信息，将模式串向右移动尽可能少的步数。")]),_._v(" "),v("p",[_._v("KMP 算法的时间复杂度 O(n+m)，朴素算法的时间复杂度 O(n*m)，n 和 m 是两个串的长度。")]),_._v(" "),v("p",[v("strong",[_._v("KMP 算法的具体步骤如下：")])]),_._v(" "),v("ol",[v("li",[_._v("预处理 next 数组：对于模式串，遍历每个位置，计算该位置之前子串的最长公共前后缀的长度，并保存到 next 数组中。")]),_._v(" "),v("li",[_._v("匹配过程：从文本串的起始位置开始，用两个指针分别指向文本串和模式串的当前位置，逐个字符进行比较。")])]),_._v(" "),v("p",[_._v("如果当前字符匹配成功，则两个指针同时向后移动一位。")]),_._v(" "),v("p",[_._v("如果当前字符匹配失败：")]),_._v(" "),v("p",[_._v("根据 next 数组中的信息，将模式串向右移动尽可能少的步数。根据当前失败位置的部分匹配值，向右移动模式串的指针。")]),_._v(" "),v("p",[_._v("同时，保持文本串的指针不动，继续与模式串的新位置进行比较。")]),_._v(" "),v("p",[_._v("如果模式串的指针移到末尾，则表示匹配成功，返回在文本串中的起始位置。如果文本串的指针移到末尾，则表示未找到匹配，返回 - 1。")]),_._v(" "),v("h3",{attrs:{id:"_13-满二叉树和完全二叉树有什么区别-★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_13-满二叉树和完全二叉树有什么区别-★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("13. 满二叉树和完全二叉树有什么区别？★★")])])]),_._v(" "),v("p",[v("strong",[_._v("满二叉树")]),_._v("：对于一颗高为 h 的二叉树，结点个数为 2^h-1，表现为除了最后一层叶子结点之外，根节点以及分支结点都有两个孩子，即每一层都是满的。")]),_._v(" "),v("p",[_._v("**完全二叉树：**在满二叉树的基础上，在最后一层从右往左依次删除一定数量的叶子结点所形成的二叉树。完全二叉树的特点是叶子结点只出现在倒数第一和第二层，且如果有分支结点仅有一个孩子，那只能是左孩子。")]),_._v(" "),v("p",[_._v("满二叉树和完全二叉树可以用顺序存储结构来存储。")]),_._v(" "),v("h3",{attrs:{id:"_14-如何由遍历序列构造一棵二叉树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_14-如何由遍历序列构造一棵二叉树"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("14. 如何由遍历序列构造一棵二叉树？")])])]),_._v(" "),v("p",[v("strong",[_._v("（1）由二叉树的先序序列和中序序列可以唯一地确定一棵二叉树。")])]),_._v(" "),v("p",[_._v("在先序遍历序列中，第一个结点一定是二叉树的根结点；")]),_._v(" "),v("p",[_._v("而在中序遍历中，根结点必然将中序序列分割成两个子序列，前一个子序列是根结点的左子树的中序序列，后一个子序列是根结点的右子树的中序序列。根据这两个子序列，在先序序列中找到对应的左子序列和右子序列。在先序序列中，左子序列的第一个结点是左子树的根结点，右子序列的第一个结点是右子树的根结点。如此递归地进行下去，便能唯一地确定这棵二叉树。")]),_._v(" "),v("p",[v("strong",[_._v("（2）由二叉树的后序序列和中序序列也可以唯一地确定一棵二叉树。")])]),_._v(" "),v("p",[_._v("因为后序序列的最后一个结点就如同先序序列的第一个结点，可以将中序序列分割成两个子序列，然后采用类似的方法递归地进行划分，进而得到一棵二叉树。")]),_._v(" "),v("p",[v("strong",[_._v("（3）由二叉树的层序序列和中序序列也可以唯一地确定一棵二叉树。")])]),_._v(" "),v("p",[_._v("需要注意的是，若只知道二叉树的先序序列和后序序列，则无法唯一确定一棵二叉树。")]),_._v(" "),v("h3",{attrs:{id:"_15-简要说说线索二叉树。★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_15-简要说说线索二叉树。★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("15. 简要说说线索二叉树。★")])])]),_._v(" "),v("p",[_._v("对于 n 个结点的二叉树，在二叉链存储结构中有 n+1 个空链域（n+1 是怎么来的：m=n-1，2n-m=n+1），利用这些空链域存放在某种遍历次序下该结点的前驱结点和后继结点的指针，这些指针称为线索，加上线索的二叉树称为线索二叉树。")]),_._v(" "),v("p",[_._v("根据线索性质的不同，线索二叉树可分为前序线索二叉树、中序线索二叉树和后序线索二叉树三种。")]),_._v(" "),v("p",[_._v("线索二叉树解决了无法直接找到该结点在某种遍历序列中的前驱和后继结点的问题。")]),_._v(" "),v("h3",{attrs:{id:"_16-简要说说树的存储结构。★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_16-简要说说树的存储结构。★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("16. 简要说说树的存储结构。★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（1）双亲表示法")])])]),_._v(" "),v("p",[_._v("这种存储方式采用一组"),v("strong",[v("strong",[_._v("连续空间来存储每个结点")])]),_._v("，同时在每个结点中增设一个"),v("strong",[v("strong",[_._v("指针")])]),_._v("，指示其双亲结点在数组中的位置。")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/8ed765b27449406298d9563ef24178cc.png",loading:"lazy"}})]),_._v(" "),v("p",[_._v("该存储结构可以很快得到每个结点的双亲结点，但求结点的孩子时需要遍历整个结构。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（2）孩子表示法")])])]),_._v(" "),v("p",[_._v("孩子表示法是将"),v("strong",[v("strong",[_._v("每个结点的孩子结点都用单链表链接起来")])]),_._v("形成一个线性结构，此时 n 个结点就有 n 个孩子链表（叶子结点的孩子链表为空表）")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/8195797c6a0d4e6088c428bbf9508f6b.png",loading:"lazy"}})]),_._v(" "),v("p",[_._v("这种存储方式寻找孩子容易，而寻找双亲的操作麻烦。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（3）孩子兄弟表示法")])])]),_._v(" "),v("p",[_._v("孩子兄弟表示法以二叉链表作为树的存储结构。孩子兄弟表示法使每个结点包括三部分内容：结点值、指向结点第一个孩子结点的指针，及指向结点下一个兄弟结点的指针。")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/a38cea8a9aff4846bb88458adb6e0ae4.png",loading:"lazy"}})]),_._v(" "),v("p",[_._v("这种存储表示法比较灵活，其最大的优点是可以方便地实现树转换为二叉树的操作。这种存储方式寻找孩子容易，而寻找双亲的操作麻烦。若为每个结点增设一个 parent 域指向其父结点，则查找结点的父结点也很方便。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（4）二叉树的存储")])])]),_._v(" "),v("p",[_._v("①顺序存储：")]),_._v(" "),v("p",[_._v("按照二叉树层序遍历的顺序将结点存储于顺序表中，特别注意空节点也需要占有位置。若某结点下标为 i，则其左孩子下标为 2i，右孩子下标为 2i+1，父节点下下标为 i/2 向下取整。该存储结构适合存储完全二叉树；")]),_._v(" "),v("p",[_._v("②链式存储：")]),_._v(" "),v("p",[_._v("每个结点通常一个数据域与两个指针域，分别指向自己的左孩子和右孩子。而为了充分利用左右孩子指针，可以将左孩子指向自己的前序、中序或后序遍历的直接前序，右孩子指向直接后继，从而形成二叉线索树，方便查找。")]),_._v(" "),v("h3",{attrs:{id:"_17-简要说说二叉搜索树。★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_17-简要说说二叉搜索树。★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("17. 简要说说二叉搜索树。★★")])])]),_._v(" "),v("p",[_._v("二叉搜索树性质：非空左子树的所有键值小于其根节点的键值；非空右子树的所有键值大于其根节点的键值；左右子树都是二叉搜索树。")]),_._v(" "),v("p",[_._v("对二叉排序树进行中序遍历，即可以得到从小到大有序的关键码序列。它利用了二分的思想，可以快速查找到关键码，查找效率为 O(logn)。")]),_._v(" "),v("p",[_._v("缺点：如果按照从小到大插入构建 BST，会导致查找效率退回 O(n) 级别。")]),_._v(" "),v("p",[_._v("改进：插入时要旋转保证平衡因子绝对值不大于 1，于是产生了 AVL 树。")]),_._v(" "),v("h3",{attrs:{id:"_18-简要说说平衡二叉树。★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_18-简要说说平衡二叉树。★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("18. 简要说说平衡二叉树。★★★")])])]),_._v(" "),v("p",[_._v("二叉平衡树是一种特殊的二叉排序树，它满足对于树上的任意一个结点，其左子树的深度与右子树的深度之差的绝对值不超过 1。平衡因子可以用于描述二叉平衡树，平衡因子是某个结点的左子树深度与右子树深度之差，对于一棵二叉平衡树，其任意结点的平衡因子只能是 - 1，0 或 1。")]),_._v(" "),v("p",[_._v("缺点：如果插入操作比查询操作多，AVL 就要花费大量开销做旋转来调整节点以保证树的平衡。")]),_._v(" "),v("p",[_._v("改进：为了减少旋转开销，引入了红黑树。")]),_._v(" "),v("h3",{attrs:{id:"_19-简要说说二叉搜索树的查找、插入和删除过程。★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_19-简要说说二叉搜索树的查找、插入和删除过程。★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("19. 简要说说二叉搜索树的查找、插入和删除过程。★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("查找：")])])]),_._v(" "),v("p",[_._v("从根节点开始，如果要查找的关键码大于当前关键码，则下一个查找的结点为根节点的右子树，反之则是左子树。再以新节点为根，重复以上的查找步骤，直到查到得到匹配的关键码为止。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("插入：")])])]),_._v(" "),v("p",[_._v("基于查找操作进行，查找合适的位置进行插入。该合适的位置指的是按照查找步骤进行到的叶子节点处，若欲插入的关键码大于该叶子结点，则插入为右孩子，反之为左孩子。插入的结点必须是叶子结点。若开始树空，则直接成为根节点；若欲插入的关键码已存在，则插入失败。二叉树的构造过程也是不断插入的过程。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("删除：")])])]),_._v(" "),v("p",[_._v("同样是基于查找操作，首先查找到欲删除的结点。此时，删除结点通常包括三种情况")]),_._v(" "),v("p",[_._v("①若删除的结点是叶子结点，则可以直接将结点删去；")]),_._v(" "),v("p",[_._v("②若删除的结点只有左孩子或者右孩子，则用它的孩子代替它；")]),_._v(" "),v("p",[_._v("③若删除的结点有左右孩子，则可以寻找其中序遍历的"),v("strong",[v("strong",[_._v("直接前驱")])]),_._v("或者"),v("strong",[v("strong",[_._v("直接后继")])]),_._v("代替它，再删去该直接前驱或直接后继。")]),_._v(" "),v("h3",{attrs:{id:"_20-简要说说红黑树。★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_20-简要说说红黑树。★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("20. 简要说说红黑树。★★")])])]),_._v(" "),v("p",[_._v("红黑树中的每一个结点的颜色不是黑色就是红色。根结点和所有外部结点（NULL 节点、叶节点）的颜色是黑色。从根结点到外部结点的途中没有连续两个结点的颜色是红色。所有从根到外部结点的路径上都有相同数的黑色结点数量。对于红黑树搜索的时间复杂度为 O(logn)。")]),_._v(" "),v("h3",{attrs:{id:"_21-简要说说-b-树。★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_21-简要说说-b-树。★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("21. 简要说说 B 树。★★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("引入 B 树的原因：")])])]),_._v(" "),v("p",[_._v("若普通二叉树作为文件系统的索引，随着数据的插入，发现树的深度会变深。而文件系统的索引在磁盘上，磁盘的数据要加载到内存中才能处理，需要反复 IO 影响查询的效率，于是引入了 B 树可以作为文件系统的索引。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("B 树是多叉树，一棵 m 阶 B 树的性质：")])])]),_._v(" "),v("ol",[v("li",[_._v("每个非根节点最多 m-1 个关键字，最少 ceil(m/2)-1 个关键字；最多有 m 个分叉，最少有 ceil(m/2) 个分叉。")]),_._v(" "),v("li",[_._v("根节点最多 m-1 个关键字，最少 1 个关键字；最多有 m 个分叉，最少有 2 个分叉")]),_._v(" "),v("li",[_._v("所有的失败结点（叶子节点）都位于同一层。")]),_._v(" "),v("li",[_._v("B 树每个节点可以存放键值和数据。")])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/fdfc6dbcd3ac42c59681f2d2af07d67e.png",loading:"lazy"}})]),_._v(" "),v("h3",{attrs:{id:"_22-简要说说-b-树。★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_22-简要说说-b-树。★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("22. 简要说说 B + 树。★★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("引入 B + 树的原因：")])])]),_._v(" "),v("p",[_._v("由于 B 树每个节点存放数据，而数据相比关键字占用的空间较大，会导致每个磁盘块存放的索引项的记录会变少。B + 树的非叶子节点不存放数据，只存放指针和关键字，这样每个磁盘块就可以存放更多的记录。这样深度会减小很多，加快了 IO 速度。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("一棵 m 阶的 B + 树需满足下列条件：")])])]),_._v(" "),v("ol",[v("li",[_._v("每个非根节点最多 m 个关键字，最少 ceil(m/2) 个关键字；最多有 m 个分叉，最少有 ceil(m/2) 个分叉。")]),_._v(" "),v("li",[_._v("根节点最多 m 个关键字，最少 1 个关键字；最多有 m 个分叉，最少有 1 个分叉")]),_._v(" "),v("li",[_._v("结点的子树个数与关键字个数相等。")]),_._v(" "),v("li",[_._v("所有叶结点包含全部关键字及指向相应记录的指针，叶结点中将关键字按大小顺序排列，并且相邻叶结点按大小顺序相互链接起来。")]),_._v(" "),v("li",[_._v("所有分支结点（可视为索引的索引）中仅包含它的各个子结点中关键字的"),v("strong",[v("strong",[_._v("最大值")])]),_._v("及指向其子结点的指针。")])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/b636904978a04d4ea881bfd4c794e985.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("B + 树的应用：")])])]),_._v(" "),v("p",[_._v("在数据库中，B + 树常被用作索引结构，用于快速查找和排序大量数据。如主键索引、唯一索引、辅助索引等。")]),_._v(" "),v("p",[_._v("在文件系统中，B + 树通常用于管理磁盘上的文件块和索引节点。")]),_._v(" "),v("h3",{attrs:{id:"_23-简要说说-b-树和-b-树的区别。★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_23-简要说说-b-树和-b-树的区别。★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("23. 简要说说 B 树和 B + 树的区别。★★★★★")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/298bb558e3c74c97bb691c6ee54563e8.png",loading:"lazy"}})]),_._v(" "),v("ol",[v("li",[_._v("m 阶 B 树和 B + 树：B 树的根节点关键字个数取值 1 到 m-1，B + 树的根节点关键字取值 1 到 m；B 树非根节点关键字取值 ceil(m/2)-1 到 m-1，B + 树非根节点关键字取值 ceil(m/2) 到 m。")]),_._v(" "),v("li",[_._v("B 树分叉个数等于关键字个数 + 1，B + 树分叉个数等于关键字个数。")]),_._v(" "),v("li",[_._v("B 树的每个节点既有关键字，又有数据；B + 树的数据只在叶子上，非叶子节点只有关键字。")]),_._v(" "),v("li",[_._v("B + 树的叶子节点相互之间有一个链路，B 树没有。")]),_._v(" "),v("li",[_._v("当查找数据时，从根出发，B 树可能不需要查找到叶子节点就可以找到数据，而 B + 树要找到叶子节点才找到数据。")])]),_._v(" "),v("h3",{attrs:{id:"_24-什么是哈夫曼树-如何构造-哈夫曼树的应用★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_24-什么是哈夫曼树-如何构造-哈夫曼树的应用★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("24. 什么是哈夫曼树？如何构造？哈夫曼树的应用★★★")])])]),_._v(" "),v("p",[_._v("哈夫曼树又称为最优二叉树，其特点是，给定一组"),v("strong",[v("strong",[_._v("带权的叶子结点")])]),_._v("，"),v("strong",[v("strong",[_._v("若构造所得到的二叉树拥有最小的带权路径长度 WPL")])]),_._v("，则称该二叉树为一棵哈夫曼树。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("构造：")])])]),_._v(" "),v("p",[_._v("将带权叶子结点并入一个集合，首先在集合中挑选出两个权值最小的叶子结点进行合并得到新的结点加入集合，再将两个被选中的结点剔除出集合。在树的构造上，将这两个结点作为叶子结点衔接到合并而成的新结点上。重复以上过程直到集合中只有一个元素，哈夫曼树则完成构造。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("应用：")])])]),_._v(" "),v("p",[_._v("哈夫曼树的应用是哈夫曼编码，其特点是消除了编码前缀相同的二义性（哈夫曼编码是一种前缀编码，前缀编码就是任何一个编码都不是另外一个编码的前缀）。在哈夫曼编码中，只有哈夫曼树的叶子结点可以进行编码。")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/4148ceb0880d45eca1a91414c5697b9d.png",loading:"lazy"}})]),_._v(" "),v("h3",{attrs:{id:"_25-简单介绍一下并查集-说说如何改进-★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_25-简单介绍一下并查集-说说如何改进-★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("25. 简单介绍一下并查集，说说如何改进？★★★")])])]),_._v(" "),v("p",[_._v("并查集是一种用于解决集合"),v("strong",[v("strong",[_._v("合并和查询")])]),_._v("问题的数据结构。它能够高效地进行"),v("strong",[v("strong",[_._v("集合的合并和判断两个元素是否属于同一集合")])]),_._v("，并在实际应用中常用于解决图的连通性、最小生成树等问题。")]),_._v(" "),v("p",[_._v("在并查集中，每个元素被看作是一个节点，并以树的形式组织。每个树的根节点代表一个集合，而每个节点则指向其父节点，形成一棵树。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("并查集的基本操作：")])])]),_._v(" "),v("p",[v("strong",[_._v("Union")]),_._v("：用于将两个集合合并为一个集合。通过找到两个元素所属集合的根节点，将其中一个根节点的父节点指向另一个根节点，实现合并操作。")]),_._v(" "),v("p",[v("strong",[_._v("Find")]),_._v("：查找根节点，用于确定元素所属的集合。通过迭代地或递归向上查找父节点，直到找到根节点，即可确定所属的集合。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("改进措施：")])])]),_._v(" "),v("p",[v("strong",[_._v("路径压缩")]),_._v("：是指在进行 Find 操作时，将节点指向根节点的路径上的所有节点直接连接到根节点，可以减小树的高度，加快查找。可以使用递归或迭代的方式进行路径压缩。")]),_._v(" "),v("p",[v("strong",[_._v("按秩合并")]),_._v("：是指在进行 Union 操作时，将高度较低的树合并到高度较高的树上，从而保持树的平衡性。可以通过记录每个集合的秩（即树的高度或节点数量）来实现按秩合并。")]),_._v(" "),v("h3",{attrs:{id:"_26-简单介绍一下-dfs-和-bfs-并说说它们的区别-★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_26-简单介绍一下-dfs-和-bfs-并说说它们的区别-★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("26. 简单介绍一下 dfs 和 bfs，并说说它们的区别？★★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("dfs：")])])]),_._v(" "),v("p",[_._v("使用"),v("strong",[v("strong",[_._v("栈")])]),_._v("数据结构来辅助实现深度优先搜索。")]),_._v(" "),v("p",[_._v("dfs 是按照一个路径一直访问到底，当前节点没有未访问的邻居节点时，然后回溯到上一个节点，不断的尝试，直到访问到目标节点或所有节点都已访问。")]),_._v(" "),v("p",[_._v("dfs 不保证找到最短路径，因为它一直往深处搜索。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("bfs：")])])]),_._v(" "),v("p",[_._v("使用"),v("strong",[v("strong",[_._v("队列")])]),_._v("数据结构来辅助实现广度优先搜索。")]),_._v(" "),v("p",[_._v("bfs 是按层次访问的，先访问源点，再访问它的所有相邻节点，并且标记结点已访问，根据每个邻居结点的访问顺序，依次访问它们的邻居结点，并且标记节点已访问，重复这个过程，一直访问到目标节点或无未访问的节点为止。")]),_._v(" "),v("p",[_._v("bfs 能够保证找到的路径是最短路径，因为它按照距离起始节点的层级进行搜索。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("使用场景：")])])]),_._v(" "),v("p",[_._v("dfs 适用于"),v("strong",[v("strong",[_._v("找到一个可行解")])]),_._v("，不需要找最短路径的情况。它的空间复杂度较低，适合在深度方向上搜索，例如拓扑排序、连通性判断、回溯等问题。")]),_._v(" "),v("p",[_._v("bfs 适用于"),v("strong",[v("strong",[_._v("找到最短路径")])]),_._v("。它的时间复杂度较低，适合在广度方向上搜索，例如寻找最短路径、连通性判断、社交网络中查找关系等问题。")]),_._v(" "),v("h3",{attrs:{id:"_27-简单介绍一下最短路径算法-dijkstra、floyd-等-★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_27-简单介绍一下最短路径算法-dijkstra、floyd-等-★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("27. 简单介绍一下最短路径算法（"),v("strong",[v("strong",[_._v("Dijkstra、Floyd 等")])]),_._v("）？★★★★★")])])]),_._v(" "),v("p",[_._v("最短路径算法通常有 Bfs 算法、Dijkstra 算法和 Floyd 算法。Bfs 只能处理无权图，Dijkstra 算法可以进一步解决带权图问题，Floyd 可以进一步解决带负权边图问题。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("Bfs：")])])]),_._v(" "),v("p",[_._v("通过队列来实现，首先将单原点加入队列 。每次循环将队列中队头元素弹出，并且将与该元素所代表的结点相邻的结点加入队列，直到队列为空。每次循环代表距离加一，Bfs 可以找出单源点到其他结点的路径长度，取最小即为最短路。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("Dijkstra：")])])]),_._v(" "),v("p",[_._v("应用了"),v("strong",[v("strong",[_._v("贪心")])]),_._v("的思想，通常解决"),v("strong",[v("strong",[_._v("单源点")])]),_._v("问题，时间复杂度为 O(n²)，堆优化后是 O(nlogn)。")]),_._v(" "),v("p",[_._v("声明：vis[] 表示这个节点是否访问，vis[u]=1 表示出圈，dis[] 表示该点到原点的最短路径，u 表示圈外距离圈内最小的点，s 为源点。")]),_._v(" "),v("p",[_._v("①初始时，将所有点都在圈内，所有节点 vis[]=0，dis[]=inf，dis[s]=0。")]),_._v(" "),v("p",[_._v("②其次从圈内选择距离最小的点 u，打标记出圈 vis[u]=1。")]),_._v(" "),v("p",[_._v("③对 u 的所有出边进行松弛操作，v 是 u 所指向的节点，w 是 u->v 的权值，若 dis[u]+w<dis[v]，那么 dis[v]=dis[u]+w。")]),_._v(" "),v("p",[_._v("④重复②③直到所有节点更新完成。")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/c06829129cd34d04ae7af851ecd97e52.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("Floyd：")])])]),_._v(" "),v("p",[_._v("应用了"),v("strong",[v("strong",[_._v("动态规划")])]),_._v("的思想，通常解决"),v("strong",[v("strong",[_._v("多源点")])]),_._v("问题，时间复杂度为 O(n³)。")]),_._v(" "),v("p",[_._v("首先初始化，声明 dp 数组，dp[i][j] 表示从 i 到 j 的权值，一开始数组中值均为 inf，而后更新 dp[i][i] 所有点到自己的权值是 0。")]),_._v(" "),v("p",[_._v("输入每条边的结点和权值 u,v,w，更新 dp[u][v]=w，表示从 u 到 v 的权值是 w。")]),_._v(" "),v("p",[_._v("利用三层循环，然后逐步试探当前加入的点。")]),_._v(" "),v("p",[_._v("dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])；如果 i 到 k 的权值 + k 到 i 的权值比 i 到 j 的权值小，那么进行松弛，否则就继承原来的 dp[i][j]。")]),_._v(" "),v("p",[_._v("直到循环结束。")]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/690dbd44ceea4848a40de0c9a1620916.png",loading:"lazy"}})]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/dd13f8c5bb94498098b9c73141f0b3bf.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("其他最短路径算法补充：")])])]),_._v(" "),v("p",[_._v("****Bellman-ford 算法，****单源最短路径，能处理负权边，时间复杂度为 O(VE)")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("SPFA 算法")])]),_._v("，求单源最短路径，能处理负权边，是 "),v("strong",[v("strong",[_._v("Bellman-ford 的优化")])]),_._v("，平均时间复杂度低于 "),v("strong",[v("strong",[_._v("Bellman-ford")])]),_._v("，最坏情况仍为 O(VE)。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("A * 算法")])]),_._v("，适用于在有向图中找到从起始节点到目标节点的最短路径，通过启发式函数来估计每个节点的代价。该算法综合考虑当前节点的路径长度和启发式评估值，通过优先级队列来选择下一个扩展的节点。")]),_._v(" "),v("h3",{attrs:{id:"_28-简单介绍一下求最小生成树的算法-★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_28-简单介绍一下求最小生成树的算法-★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("28. 简单介绍一下求最小生成树的算法？★★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("Prim：")])])]),_._v(" "),v("p",[_._v("Prim 算法是一种"),v("strong",[v("strong",[_._v("贪心")])]),_._v("算法，从一个起始节点开始逐步扩展最小生成树的边。")]),_._v(" "),v("p",[_._v("首先选择一个起始节点，然后将该节点标记为已访问。")]),_._v(" "),v("p",[_._v("通过不断选择与已访问节点相连且权重最小的边，并将相连节点标记为已访问，将这条边加入到最小生成树中。")]),_._v(" "),v("p",[_._v("重复上述步骤，直到所有节点都被访问过，即构建出最小生成树。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("Kruskal：")])])]),_._v(" "),v("p",[_._v("Kruskal 算法也是一种"),v("strong",[v("strong",[_._v("贪心")])]),_._v("算法，通过按照边的权重从小到大的顺序逐步构建最小生成树。")]),_._v(" "),v("p",[_._v("将图中的所有边按照权重从小到大进行排序。")]),_._v(" "),v("p",[_._v("依次遍历排序后的边，如果当前边的两个端点不在同一棵树中（即不会形成环，常常借助并查集实现），则将该边加入最小生成树中，并将两个端点所在的树合并为一棵树。")]),_._v(" "),v("p",[_._v("重复上述步骤，直到最小生成树包含图中的所有节点。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("应用场合：")])])]),_._v(" "),v("p",[_._v("Prim 算法适合在"),v("strong",[v("strong",[_._v("稠密图")])]),_._v("中进行求解，时间复杂度为 O(v²)，其中 v 为节点数。")]),_._v(" "),v("p",[_._v("Kruskal 算法适合在边"),v("strong",[v("strong",[_._v("稀疏图")])]),_._v("中进行求解，时间复杂度为 O(eloge)，其中 e 为边数。")]),_._v(" "),v("h3",{attrs:{id:"_29-介绍一下哈希表-如何构造哈希函数-如何解决哈希冲突-★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_29-介绍一下哈希表-如何构造哈希函数-如何解决哈希冲突-★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("29. 介绍一下哈希表，如何构造哈希函数，如何解决哈希冲突？★★★★")])])]),_._v(" "),v("p",[_._v("哈希表又称为散列表，是根据"),v("strong",[v("strong",[_._v("关键字")])]),_._v("的值直接进行访问的数据结构，即它通过把关键码的值映射到表中的一个位置以加快查找速度，其中映射函数叫做哈希函数，存放记录的数组叫做哈希表。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（1）哈希函数的构造方法：")])])]),_._v(" "),v("p",[v("strong",[_._v("① 直接定址法：")])]),_._v(" "),v("p",[_._v("取关键字的某个线性函数值作为散列地址，H(key)=a*key+b。")]),_._v(" "),v("p",[v("strong",[_._v("② 除留余数法：")])]),_._v(" "),v("p",[_._v("取关键字对 p 取余的值作为散列地址，即 H(key)=key%p，p 尽量选择质数，为了使散列分布更均匀。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（2） 哈希冲突的解决方法：")])])]),_._v(" "),v("p",[v("strong",[_._v("① 开放地址法：")])]),_._v(" "),v("p",[_._v("当发生冲突时，使用一定的探测序列方法，在哈希表中寻找下一个可用的空槽位，将冲突的元素插入到这个空槽位中。常见的探测序列方法有线性探测、二次探测等。")]),_._v(" "),v("p",[v("strong",[_._v("② 链地址法")])]),_._v(" "),v("p",[_._v("将哈希表的每个索引位置看作一个链表的头节点，当发生冲突时，将冲突的元素插入到链表中即可。这样，每个索引位置都可以存储多个元素。")]),_._v(" "),v("p",[v("strong",[_._v("③ 再哈希法")])]),_._v(" "),v("p",[_._v("当发生冲突时，使用另一个哈希函数重新计算新的索引位置，直到找到一个空槽位来解决冲突。")]),_._v(" "),v("h3",{attrs:{id:"_30-介绍一下各种排序算法的性能-★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_30-介绍一下各种排序算法的性能-★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("30. 介绍一下各种排序算法的性能？★★★★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("不稳定的排序算法有：希尔排序、选择排序、堆排序、快速排序。")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/e464c01cec804fbd9ddae4e7db3141c9.png",loading:"lazy"}})]),_._v(" "),v("h3",{attrs:{id:"_31-介绍一下插入排序-★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_31-介绍一下插入排序-★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("31. 介绍一下插入排序？★★★★")])])]),_._v(" "),v("p",[_._v("插入排序的工作原理类似于整理扑克牌。")]),_._v(" "),v("p",[_._v("该算法将待排序的元素分为已排序区和未排序区，每次从未排序区中取出一个元素，插入到已排序区的适当位置，直到所有元素都被插入完毕。")]),_._v(" "),v("p",[_._v("插入排序的平均时间复杂度是 O(n²)，最坏时间复杂度是 O(n²)，空间复杂度是 O(1)，是一种稳定排序。")]),_._v(" "),v("h3",{attrs:{id:"_32-介绍一下选择排序-★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_32-介绍一下选择排序-★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("32. 介绍一下选择排序？★★★")])])]),_._v(" "),v("p",[_._v("将数组分为已排序区和未排序区。初始时，已排序区为空，而未排序区包含所有元素。")]),_._v(" "),v("p",[_._v("从未排序区中找到最小的元素，并记录其索引。")]),_._v(" "),v("p",[_._v("将最小元素与未排序区的第一个元素交换位置，将其放入已排序区的末尾。")]),_._v(" "),v("p",[_._v("重复步骤 2 和步骤 3，直到未排序区的元素全部交换完毕，得到最终的有序数组。")]),_._v(" "),v("p",[_._v("选择排序的平均时间复杂度是 O(n²)，最坏时间复杂度是 O(n²)，空间复杂度是 O(1)，是一种不稳定排序。")]),_._v(" "),v("h3",{attrs:{id:"_33-介绍一下冒泡排序-★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_33-介绍一下冒泡排序-★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("33. 介绍一下冒泡排序？★★★")])])]),_._v(" "),v("p",[_._v("它重复地遍历待排序数组，依次比较相邻的元素，并将较大的元素交换到右侧，从而逐步将最大的元素沉到数组的末尾。")]),_._v(" "),v("p",[_._v("相邻元素比较，如果前面元素比后面更大，则交换位置。第一轮把最大的元素放到末尾，第二轮把第二大的元素放到倒数第 2 个的位置，直到所有都排好序。")]),_._v(" "),v("p",[_._v("冒泡排序的平均时间复杂度是 O(n²)，最坏时间复杂度是 O(n²)，空间复杂度是 O(1)，是一种稳定排序。")]),_._v(" "),v("h3",{attrs:{id:"_34-介绍一下快速排序-★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_34-介绍一下快速排序-★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("34. 介绍一下快速排序？★★★★★★")])])]),_._v(" "),v("p",[_._v("快速排序采用了分治的思想。快速排序的核心思想是选择一个基准元素，通过将数组中的元素按照基准元素进行划分，使得左侧的元素都小于基准元素，右侧的元素都大于基准元素。然后对左右两个子数组分别进行递归排序，直到整个数组有序。")]),_._v(" "),v("p",[_._v("具体来说，选一个 pivot。例如选取最左边的元素记作 pivot。定义 i 和 j 两个指针，一开始分别指向 l 和 r，j 用来寻找比 pivot 小的元素，i 用来寻找比 pivot 大的元素，若 i 和 j 都找到而且 i<j 那么 a[i] 和 a[j] 交换，从而保证了左边的小于 pivot，右边的大于 pivot。若最后 i==j，那么将 pivot 移动到该位置。")]),_._v(" "),v("p",[_._v("快速排序的平均时间复杂度是 O(nlogn)，最坏时间复杂度是 O(n²)，空间复杂度是 O(1)，是一种不稳定排序。")]),_._v(" "),v("h3",{attrs:{id:"_35-为什么快速排序最坏情况会退化成-o-n2-★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_35-为什么快速排序最坏情况会退化成-o-n2-★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("35. 为什么快速排序最坏情况会退化成 O(n²)？★★★★★★")])])]),_._v(" "),v("p",[_._v("最坏情况发生在待排序的序列已经有序或近乎有序的情况下。在这种情况下，如果每次选择的基准元素都是当前子数组的最大或最小值，那么快速排序的分割过程将会非常不平衡，导致递归树的高度接近于 n。")]),_._v(" "),v("p",[_._v("在这种情况下，每次划分只能将序列分成一个空的子数组和一个包含 n-1 个元素的子数组，而不是将序列均匀地分成两个大小相等的子数组。")]),_._v(" "),v("h3",{attrs:{id:"_36-介绍一下归并排序-★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_36-介绍一下归并排序-★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("36. 介绍一下归并排序？★★★★★★")])])]),_._v(" "),v("p",[_._v("归并排序采用了分治的思想。归并排序的核心思想是将待排序数组逐步分割成单个元素，然后将这些单个元素合并成有序的数组。它通过不断地将两个有序的子数组合并成一个更大的有序数组，最终得到整个数组有序。")]),_._v(" "),v("p",[_._v("归并排序的平均时间复杂度是 O(nlogn)，最坏时间复杂度是 O(nlogn)，空间复杂度是 O(n)，是一种稳定排序。")]),_._v(" "),v("h3",{attrs:{id:"_37-简述一下快速排序和归并排序的优缺点-从平均最坏时间复杂度、空间复杂度、稳定性的角度-。★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_37-简述一下快速排序和归并排序的优缺点-从平均最坏时间复杂度、空间复杂度、稳定性的角度-。★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("37. 简述一下快速排序和归并排序的优缺点（从平均最坏时间复杂度、空间复杂度、稳定性的角度）。★★★★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（1）快速排序")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("优点：")])])]),_._v(" "),v("p",[_._v("①平均时间复杂度较低：快速排序的平均时间复杂度为 O(nlogn)，在大多数情况下都能够达到较好的排序效果。")]),_._v(" "),v("p",[_._v("②空间复杂度较低：快速排序通常只需要使用很少的额外空间，只需对原数组进行原地操作。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("（2）缺点：")])])]),_._v(" "),v("p",[_._v("①最坏情况下的性能：在最坏情况下，即待排序序列已经有序或近乎有序时，快速排序的时间复杂度会退化到 O(n²)，导致性能下降。")]),_._v(" "),v("p",[_._v("②不稳定性：快速排序是一种不稳定的排序算法，在交换元素的过程中可能改变相同关键字元素的相对顺序。")]),_._v(" "),v("h3",{attrs:{id:"_38-归并排序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_38-归并排序"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("38. 归并排序")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("优点：")])])]),_._v(" "),v("p",[_._v("①稳定性：归并排序是一种稳定的排序算法，它能够保持相同关键字元素的相对顺序不变。")]),_._v(" "),v("p",[_._v("②适用于外部排序：归并排序的特点使其非常适用于外部排序，即当排序的数据量太大无法完全加载到内存时，可以通过分阶段地读取和写入数据进行排序。")]),_._v(" "),v("p",[_._v("③性能稳定：归并排序的时间复杂度始终保持在 O(nlogn)，无论是最佳、最坏还是平均情况下。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("缺点：")])])]),_._v(" "),v("p",[_._v("需要额外的空间：归并排序需要额外的空间来存储临时数组，因此它的空间复杂度相对较高。")]),_._v(" "),v("h3",{attrs:{id:"_39-为什么排序需要稳定-★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_39-为什么排序需要稳定-★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("39. 为什么排序需要稳定？★★★★")])])]),_._v(" "),v("p",[_._v("排序算法的稳定性意味着对于具有相同关键字的元素，排序后它们的相对顺序保持不变。在很多实际应用中，我们需要保持数据中相等元素的顺序关系。")]),_._v(" "),v("p",[_._v("例如，在排序员工工资的数据时，如果有多名员工拥有相同的工资水平，我们可能希望按照他们的入职时间来排序，以维持他们在公司内部的先后顺序。如果使用不稳定排序，就可能打乱他们的相对顺序。")]),_._v(" "),v("h3",{attrs:{id:"_40-归并排序的最坏时间复杂度优于快排-为什么我们还是选择快排-★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_40-归并排序的最坏时间复杂度优于快排-为什么我们还是选择快排-★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("40. 归并排序的最坏时间复杂度优于快排，为什么我们还是选择快排？★★★★★★")])])]),_._v(" "),v("ol",[v("li",[_._v("快速排序通常比归并排序更快。尽管快速排序在最坏情况下的性能可能较差，但在大多数情况下，它的平均时间复杂度要比归并排序低。")]),_._v(" "),v("li",[_._v("快速排序是原地排序算法。原地排序算法是指排序过程中不需要额外的存储空间，只利用原始输入数组进行排序。")]),_._v(" "),v("li",[_._v("快速排序的实现相对简单。相比于归并排序，快速排序的实现更为简洁，代码量更少。")])]),_._v(" "),v("p",[_._v("总结：由于快速排序在平均情况下表现更好、占用更少的空间并且更易于实现。")]),_._v(" "),v("h3",{attrs:{id:"_41-介绍一下堆排序-★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_41-介绍一下堆排序-★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("41. 介绍一下堆排序？★★★★★★")])])]),_._v(" "),v("p",[_._v("堆排序可以分为两个主要步骤：建堆和排序。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("建堆的步骤如下：")])])]),_._v(" "),v("p",[_._v("若数组有 n 个元素，从第 n/2 个元素（非叶节点）开始一直到第 1 个元素，进行堆的调整。")]),_._v(" "),v("p",[_._v("对于每个非叶子节点，进行一次下沉操作，将当前节点与其子节点进行比较，如果不满足堆的性质，则交换位置。")]),_._v(" "),v("p",[_._v("重复步骤 2，直到整个数组被构建成一个堆，即满足父节点大于等于子节点（大顶堆）或父节点小于等于子节点（小顶堆）的性质。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("排序的步骤如下：")])])]),_._v(" "),v("p",[_._v("首先，将建好的堆中的根节点与最后一个元素交换位置。")]),_._v(" "),v("p",[_._v("然后，将堆的大小减 1，并对新的根节点进行一次下沉操作，以找到新的最大值。")]),_._v(" "),v("p",[_._v("重复步骤 1 和步骤 2，直到堆的大小为 1，即所有元素都排好序。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("补充：")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("堆的插入的步骤如下：")])])]),_._v(" "),v("p",[_._v("把插入的元素放在数组的末尾，数组的长度 + 1。")]),_._v(" "),v("p",[_._v("首先，该节点将其与其父节点进行比较，如果该节点的值大于父节点的值，则交换位置。")]),_._v(" "),v("p",[_._v("继续将该节点与其新的父节点进行比较，重复上述步骤，直到节点上浮到正确的位置或者达到根节点。（实际上是堆的上浮）")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("堆的下沉（堆的调整）：")])])]),_._v(" "),v("p",[_._v("用于将一个节点下沉到合适的位置以满足堆的性质。")]),_._v(" "),v("p",[_._v("从待调整节点开始，将其与其左右子节点中较大的节点进行比较，如果该节点的值小于某个子节点的值，则交换位置。")]),_._v(" "),v("p",[_._v("继续将该节点与其新的子节点进行比较，重复上述步骤，直到节点下沉到正确的位置或者达到叶子节点。")]),_._v(" "),v("h3",{attrs:{id:"_42-请你写出以上排序的代码。★★★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_42-请你写出以上排序的代码。★★★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("42. 请你写出以上排序的代码。★★★★★★")])])]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("冒泡排序：")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/8fbea36e54524ab5a02a0ea71cdf2fe1.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("选择排序：")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/0f064431ba7142b6bd6c71d9e7e4c6ad.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("插入排序：")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/55997f73f5ed41d7b65b09a93179103f.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("快速排序：")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/46da89ed16e84efc84e331ae0044838c.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("归并排序：")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/78bb4a4a7b5741a8b7d96706cfd23bf0.png",loading:"lazy"}})]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("堆排序：")])])]),_._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/8c9bb794ea2e473681073c2922e46654.png",loading:"lazy"}})]),_._v(" "),v("h3",{attrs:{id:"_43-如何解决-topk-问题-★★★★"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_43-如何解决-topk-问题-★★★★"}},[_._v("#")]),_._v(" "),v("strong",[v("strong",[_._v("43. 如何解决 TopK 问题？★★★★")])])]),_._v(" "),v("p",[_._v("TopK 问题是指在一组元素中，找出其中最大（或最小）的 K 个元素。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("排序法")])])]),_._v(" "),v("p",[_._v("将所有元素进行排序，然后取出最大（或最小）的 K 个元素即可。时间复杂度为 O(nlogn)，其中 n 为元素的个数。这种方法简单直观，但对于大规模数据来说效率较低。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("堆")])])]),_._v(" "),v("p",[_._v("使用最大堆或最小堆来解决 TopK 问题。首先构建一个大小为 K 的堆，将前 K 个元素插入堆中，然后将剩余的元素与堆顶元素进行比较，如果大于（或小于）堆顶元素，则将其替换并进行堆调整操作。时间复杂度为 O(nlogK)，空间复杂度为 O(K)。")]),_._v(" "),v("p",[v("strong",[v("strong",[_._v("快速选择算法")])])]),_._v(" "),v("p",[_._v("基于快速排序的思想，通过每次划分数组找到第 K 大（或第 K 小）的元素。将数组划分为两部分，左边的元素都大于（或小于）划分点，右边的元素都小于（或大于）划分点。如果划分点的下标为 K-1，则找到了第 K 大（或第 K 小）的元素。时间复杂度为 O(n)，空间复杂度为 O(1)。")]),_._v(" "),v("p",[_._v("原文链接："),v("a",{attrs:{href:"https://blog.csdn.net/m0_53140426/article/details/140249150",target:"_blank",rel:"noopener noreferrer"}},[_._v("计算机保研/考研面试题——数据结构与算法篇_计算机夏令营面试专业课常考题-CSDN博客"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);