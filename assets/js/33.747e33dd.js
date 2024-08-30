(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{329:function(v,_,s){"use strict";s.r(_);var t=s(4),a=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"编程语言篇-c和c"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编程语言篇-c和c"}},[v._v("#")]),v._v(" "),_("strong",[v._v("编程语言篇（C和C++）")])]),v._v(" "),_("blockquote",[_("p",[v._v("下面是笔者对于"),_("strong",[v._v("编程语言")]),v._v("（主要是 "),_("strong",[v._v("C 和 C++")]),v._v(" 的基础语法）知识点一些总结，对于"),_("strong",[v._v("保研和考研")]),v._v("均适用，对找工作的同学也有一定参考作用。")])]),v._v(" "),_("h3",{attrs:{id:"_1-指针数组和数组指针的区别-★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-指针数组和数组指针的区别-★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("1. 指针数组和数组指针的区别？★★")])])]),v._v(" "),_("p",[v._v("指针数组：指针数组是指一个数组，其中每个元素都是指针类型。这意味着数组存储的是指针的地址，而指针指向的是其他数据或对象。例如，int *ptrArray[5] 定义了一个包含 5 个整型指针的数组。")]),v._v(" "),_("p",[v._v("数组指针：数组指针是指一个指针，它指向一个数组的起始位置。数组指针本身是一个指针变量，存储的是数组的首地址。例如，int (*ptr)[5] 定义了一个指向包含 5 个整型元素的数组的指针。")]),v._v(" "),_("h3",{attrs:{id:"_2-结构体和共用体的区别-★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-结构体和共用体的区别-★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("2. 结构体和共用体的区别？★★")])])]),v._v(" "),_("p",[v._v("结构体中的成员变量分别占用独立的内存空间，并且可以同时存储不同的值。")]),v._v(" "),_("p",[v._v("共用体中的成员变量共享同一块内存空间，修改其中一个成员变量的值会影响到其他成员变量。")]),v._v(" "),_("h3",{attrs:{id:"_3-指针在底层是如何实现的-★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-指针在底层是如何实现的-★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("3. 指针在底层是如何实现的？★★")])])]),v._v(" "),_("p",[v._v("在底层，指针是通过内存地址来实现的。每个变量在内存中都有一个唯一的地址，指针存储了这个地址，并可以通过该地址找到对应变量的值。")]),v._v(" "),_("h3",{attrs:{id:"_4-指针和引用的区别是什么-★★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-指针和引用的区别是什么-★★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("4. 指针和引用的区别是什么？★★★★")])])]),v._v(" "),_("p",[v._v("指针和引用都是用于处理变量的间接访问。")]),v._v(" "),_("p",[_("strong",[v._v("（1）语法")])]),v._v(" "),_("p",[v._v("指针：指针是一个变量，存储了另一个变量的内存地址。使用星号 (*) 来声明指针类型。")]),v._v(" "),_("p",[v._v("引用：引用是目标变量的别名，它是对目标变量进行直接访问。在 C++ 中，通过使用引用符号（&）来定义引用变量。")]),v._v(" "),_("p",[_("strong",[v._v("（2）内存管理")])]),v._v(" "),_("p",[v._v("指针：指针可以被重新分配给其他变量，也可以指向空地址（NULL），并且可以通过 new 和 delete 操作符来动态地分配和释放内存。")]),v._v(" "),_("p",[v._v("引用：引用一旦被初始化，就不能再改变它所引用的变量。引用本身并不占用额外的内存，它只是目标变量的别名。")]),v._v(" "),_("p",[_("strong",[v._v("（3）空值处理")])]),v._v(" "),_("p",[v._v("指针：指针可以存储空地址，表示未指向任何有效的内存位置。")]),v._v(" "),_("p",[v._v("引用：引用必须在声明时进行初始化，并且不能引用空值（NULL），它必须引用一个有效的对象。")]),v._v(" "),_("h3",{attrs:{id:"_5-c-和-c-的-malloc-和-new-有什么区别-★★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-c-和-c-的-malloc-和-new-有什么区别-★★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("5. C 和 C++ 的 malloc 和 new 有什么区别？★★★★")])])]),v._v(" "),_("p",[v._v("C 和 C++ 中的 malloc 和 new 都用于动态分配内存，但有一些区别：")]),v._v(" "),_("p",[v._v("（1）malloc 是 C 库函数，使用时需要包含头文件 stdlib.h，而 new 是 C++ 关键字。")]),v._v(" "),_("p",[v._v("（2）malloc 只负责分配一块指定大小的内存空间，返回一个指向该空间的 void * 类型指针。new 更高级一些，它会在分配内存的同时调用"),_("strong",[_("strong",[v._v("构造函数")])]),v._v("初始化对象，并返回一个指向该对象的指针。")]),v._v(" "),_("p",[v._v("（3）malloc 返回的是 void * 指针，需要进行显式的类型转换，并且对于自定义类型的对象，需要手动调用构造函数初始化。而 new 根据对象类型自动确定所需的内存空间，并执行相应的构造函数初始化操作，无需手动转换类型。")]),v._v(" "),_("p",[v._v("（4）new 在遇到内存分配失败时会抛出 std::bad_alloc 异常，而 malloc 则返回 NULL 指针表示分配失败。")]),v._v(" "),_("h3",{attrs:{id:"_6-介绍一下-c-的模板-并说说模板的好处。★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-介绍一下-c-的模板-并说说模板的好处。★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("6. 介绍一下 C++ 的模板？并说说模板的好处。★★")])])]),v._v(" "),_("p",[v._v("C++ 模板是一种通用的编程工具，它允许在编写代码时使用参数化类型和参数化函数。")]),v._v(" "),_("p",[_("strong",[v._v("（1）****C++ 模板分为两种")]),v._v("类型：函数模板和类模板。****")]),v._v(" "),_("p",[v._v("①函数模板： 函数模板是一种定义函数的方式，其中某些类型或值可以作为参数进行通用       化。函数模板的语法如下：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("template <typename T>\n \n返回类型 函数名(参数列表)\n \n{\n \n    // 函数体\n \n}\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br")])]),_("p",[v._v("②类模板：类模板与函数模板类似，但是用于定义通用的类。类模板的语法如下：")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("template <typename T>\n \nclass 类名\n \n{\n \n    // 类成员和函数定义\n \n};\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br")])]),_("p",[_("strong",[v._v("（2）模板的好处")])]),v._v(" "),_("p",[_("strong",[v._v("通用代码")]),v._v("：模板允许编写通用的代码，可以在不同类型上执行相同的操作。通过将类型参数化，可以实现对各种数据类型的通用处理。")]),v._v(" "),_("p",[_("strong",[v._v("泛型编程")]),v._v("：C++ 模板支持泛型编程，使得可以编写与特定类型无关的代码。这样可以提高代码的重用性和可扩展性，并减少冗余代码的编写。")]),v._v(" "),_("p",[_("strong",[v._v("容器类和算法")]),v._v("：容器类和算法可以使用模板来实现，在不同类型的数据上进行通用操作。")]),v._v(" "),_("p",[_("strong",[v._v("函数重载")]),v._v("：通过函数模板，可以为不同类型的参数提供相同逻辑的函数实现。这避免了为每个类型编写多个重载函数的重复工作。")]),v._v(" "),_("h3",{attrs:{id:"_7-介绍-vector-内部的数据结构是如何实现的。★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-介绍-vector-内部的数据结构是如何实现的。★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("7. 介绍 vector 内部的数据结构是如何实现的。★★")])])]),v._v(" "),_("p",[v._v("在 C++ 中，std::vector 类是由一个动态分配的连续内存块实现的。它可以根据需要自动调整其大小，并提供了一组方法来方便地操作数据。")]),v._v(" "),_("p",[v._v("具体实现上，std::vector 通常使用一个指针（或称为迭代器）来指向内部的连续内存块。该内存块存储了容器中的元素，并且在内存中是连续分布的，这使得随机访问以及对元素的插入和删除操作变得高效。")]),v._v(" "),_("p",[v._v("当元素数量超过内部内存块的容量时，std::vector 会分配一个更大的内存块，并将原有元素复制到新的内存块中。这样，std::vector 能够自动调整其大小，以适应不同容量需求。")]),v._v(" "),_("h3",{attrs:{id:"_8-深拷贝和浅拷贝的区别是什么-★★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-深拷贝和浅拷贝的区别是什么-★★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("8. 深拷贝和浅拷贝的区别是什么？★★★★")])])]),v._v(" "),_("p",[v._v("深拷贝和浅拷贝的区别主要在于对于包含指针成员变量的对象：")]),v._v(" "),_("p",[v._v("浅拷贝仅复制指针的地址，新旧对象之间共享同一块内存。当一个对象释放内存时，会影响到其他拷贝得到的对象，容易导致悬垂指针或内存泄漏。")]),v._v(" "),_("p",[v._v("深拷贝将指针所指向的内存复制到新对象中。每个对象拥有独立的内存空间，在销毁对象时不会影响其他对象。")]),v._v(" "),_("h3",{attrs:{id:"_9-如何理解构造函数和析构函数-★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-如何理解构造函数和析构函数-★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("9. 如何理解构造函数和析构函数？★★")])])]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("构造函数：")])])]),v._v(" "),_("p",[v._v("构造函数在"),_("strong",[_("strong",[v._v("创建对象时")])]),v._v("被调用，用于初始化对象的成员变量和执行其他必要的操作。构造函数具有以下特点：")]),v._v(" "),_("p",[v._v("（1）与类同名：构造函数的名称与类名相同，没有返回类型（包括 void）。")]),v._v(" "),_("p",[v._v("（2）自动调用：在创建对象时，编译器会自动调用相应的构造函数。")]),v._v(" "),_("p",[v._v("（3）可以重载：一个类可以有多个构造函数，它们可以以不同的参数列表进行重载，用于满足不同的对象创建需求。")]),v._v(" "),_("p",[v._v("（4）初始化对象状态：构造函数负责初始化对象的成员变量，确保对象处于有效和一致的状态。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("析构函数：")])])]),v._v(" "),_("p",[v._v("析构函数在"),_("strong",[_("strong",[v._v("对象销毁时")])]),v._v("被调用，用于清理对象分配的资源、执行善后操作。析构函数具有以下特点：")]),v._v(" "),_("p",[v._v("（1）与类同名，前面加上波浪号（~）：析构函数的名称与类名相同，但在前面加上波浪号（~），没有返回类型（包括 void）。")]),v._v(" "),_("p",[v._v("（2）自动调用：在对象销毁时，编译器会自动调用相应的析构函数。")]),v._v(" "),_("p",[v._v("（3）无参数：析构函数不接受任何参数，因为它只负责当前对象的清理工作。")]),v._v(" "),_("p",[v._v("（4）不可重载")]),v._v(" "),_("h3",{attrs:{id:"_10-什么是多态-多态有什么好处-c-有哪些多态-★★★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-什么是多态-多态有什么好处-c-有哪些多态-★★★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("10. 什么是多态？多态有什么好处？C++ 有哪些多态？★★★★★")])])]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("多态的定义：")])])]),v._v(" "),_("p",[v._v("多态指同样的消息被不同类型的对象接收时导致不同的行为。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("多态的好处：")])])]),v._v(" "),_("p",[v._v("（1）代码复用")]),v._v(" "),_("p",[v._v("多态允许将"),_("strong",[_("strong",[v._v("通用的操作和行为")])]),v._v("定义在父类中，子类可以继承并重写这些方法。这样可以"),_("strong",[_("strong",[v._v("避免重复编写相似的代码")])]),v._v("，提高代码的复用性和效率。")]),v._v(" "),_("p",[v._v("（2）可扩展性")]),v._v(" "),_("p",[v._v("通过添加新的子类来扩展现有代码的功能，而无需修改现有代码。这样可以使代码具有更好的可维护性和可扩展性。")]),v._v(" "),_("p",[v._v("（3）可读性")]),v._v(" "),_("p",[v._v("多态能够使代码逻辑更加简洁明了，通过使用统一的接口和抽象的父类，可以减少代码的冗余性，使代码更易于理解和维护。")]),v._v(" "),_("p",[v._v("（4）灵活性")]),v._v(" "),_("p",[v._v("多态使得对象能够以多种形态存在和被使用。通过使用基类指针来操作不同的子类对象，可以在运行时动态地选择不同的实现，从而实现代码的灵活性和动态性。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("C++ 中的多态：")])])]),v._v(" "),_("p",[v._v("①重载多态（函数重载和运算符重载）")]),v._v(" "),_("p",[v._v("②强制多态（类型强制转换）")]),v._v(" "),_("p",[v._v("③类型参数化多态（函数模板、类模板）")]),v._v(" "),_("p",[v._v("④包含多态（继承及虚函数）")]),v._v(" "),_("h3",{attrs:{id:"_11-什么是虚函数-虚函数有什么好处-★★★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-什么是虚函数-虚函数有什么好处-★★★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("11. 什么是虚函数？虚函数有什么好处？★★★★★")])])]),v._v(" "),_("p",[v._v("虚函数是在"),_("strong",[_("strong",[v._v("父类中")])]),v._v('声明的一个函数，通过在函数声明前加上关键字 "'),_("strong",[_("strong",[v._v("virtual")])]),v._v('" 来定义。虚函数可以在'),_("strong",[_("strong",[v._v("派生类中被重写")])]),v._v("，并且通过"),_("strong",[_("strong",[v._v("基类指针或引用")])]),v._v("调用时，根据指针或引用所指向的对象类型来动态地选择调用哪个函数的实现。")]),v._v(" "),_("p",[_("strong",[v._v("虚函数的好处：")])]),v._v(" "),_("p",[v._v("（1）实现多态")]),v._v(" "),_("p",[v._v("通过基类指针或引用调用虚函数时，可以根据指向的具体对象类型来动态地决定调用哪个类的函数实现，实现不同对象的不同行为。")]),v._v(" "),_("p",[v._v("（2）动态绑定")]),v._v(" "),_("p",[v._v("通过基类指针或引用调用虚函数时，实际调用的函数实现会在运行时决定，而不是在编译时确定。这样可以根据对象的实际类型来动态地决定调用哪个函数实现，提供更大的灵活性和可扩展性。")]),v._v(" "),_("p",[v._v("（3）可以被覆盖")]),v._v(" "),_("p",[v._v("在派生类中，可以通过重写（覆盖）基类中的虚函数来改变其原有的行为，不影响其他派生类对象对该函数的调用。")]),v._v(" "),_("h3",{attrs:{id:"_12-什么是纯虚函数-★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-什么是纯虚函数-★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("12. 什么是纯虚函数？★★★")])])]),v._v(" "),_("p",[v._v('纯虚函数是在父类中声明的一个没有实现的虚函数，通过在函数声明后加上关键字 "= 0" 来定义。纯虚函数本身没有函数体，只用于接口定义和规范派生类的行为。')]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("纯虚函数的特点如下：")])])]),v._v(" "),_("p",[v._v("（1）没有函数体：纯虚函数没有具体的实现代码，只有函数声明。它相当于一个接口，要求派生类必须实现该函数。")]),v._v(" "),_("p",[v._v("（2）强制派生类实现：这样可以确保派生类都具备该函数的功能，同时也避免了在基类中给出默认实现可能引发的歧义性。")]),v._v(" "),_("p",[v._v("（3）抽象类：含有纯虚函数的类被称为抽象类。抽象类不能被实例化。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("使用纯虚函数的好处包括：")])])]),v._v(" "),_("p",[v._v("（1）接口规范：纯虚函数定义了一个接口，明确了基类和派生类之间的合约关系。通过纯虚函数，可以规范派生类需要实现的功能和行为。")]),v._v(" "),_("p",[v._v("（2）支持多态：纯虚函数在基类中作为一个可重写（覆盖）的函数存在，可以通过基类指针或引用来调用派生类的具体实现，实现多态性。")]),v._v(" "),_("h3",{attrs:{id:"_13-c-c-函数中如果-return-想返回多个值-有什么解决方案-★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-c-c-函数中如果-return-想返回多个值-有什么解决方案-★★★"}},[v._v("#")]),v._v(" 13. "),_("strong",[v._v("C/C++ 函数中如果 return 想返回多个值，有什么解决方案？★★★")])]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（1）使用全局变量，从定义变量到程序结束；")])])]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（2）使用数组、结构体或类：")])])]),v._v(" "),_("p",[v._v("定义一个结构体或类，将需要返回的多个值封装在结构体或类的成员变量中，然后将该结构体或类作为函数的返回值。这样就可以一次性返回多个值。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（3）通过引用参数传递：")])])]),v._v(" "),_("p",[v._v("定义函数参数为引用类型，函数内部修改参数的值，然后在调用函数时传入外部变量作为引用参数。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（4）通过指针参数传递：")])])]),v._v(" "),_("p",[v._v("使用指针参数传递：类似于引用参数，将函数的参数定义为指向相应类型的指针，并在函数内部修改指针指向的变量的值。通过传递变量的地址作为指针参数，函数可以将多个值返回给调用者。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("void myFunction(int* value1, float* value2, char* value3) {\n \n    *value1 = 100;\n \n    *value2 = 3.14f;\n \n    *value3 = 'a';\n \n}\n \nint main() {\n \n    int a;\n \n    float b;\n \n    char c;\n \n    myFunction(&a, &b, &c);//返回后的a,b,c都会改变\n \n    return 0;\n \n}\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br"),_("span",{staticClass:"line-number"},[v._v("12")]),_("br"),_("span",{staticClass:"line-number"},[v._v("13")]),_("br"),_("span",{staticClass:"line-number"},[v._v("14")]),_("br"),_("span",{staticClass:"line-number"},[v._v("15")]),_("br"),_("span",{staticClass:"line-number"},[v._v("16")]),_("br"),_("span",{staticClass:"line-number"},[v._v("17")]),_("br"),_("span",{staticClass:"line-number"},[v._v("18")]),_("br"),_("span",{staticClass:"line-number"},[v._v("19")]),_("br"),_("span",{staticClass:"line-number"},[v._v("20")]),_("br"),_("span",{staticClass:"line-number"},[v._v("21")]),_("br"),_("span",{staticClass:"line-number"},[v._v("22")]),_("br"),_("span",{staticClass:"line-number"},[v._v("23")]),_("br")])]),_("h3",{attrs:{id:"_14-栈溢出的可能原因-★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14-栈溢出的可能原因-★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("14. 栈溢出的可能原因？★★★")])])]),v._v(" "),_("p",[v._v("（1）"),_("strong",[_("strong",[v._v("局部变量过多或过大：")])])]),v._v(" "),_("p",[v._v("当函数中声明的局部变量数量过多、占用内存过大时，会占用大量的栈空间。如果栈空间不足以容纳这些局部变量，就会发生栈溢出。")]),v._v(" "),_("p",[v._v("（2）"),_("strong",[_("strong",[v._v("动态内存分配错误：")])])]),v._v(" "),_("p",[v._v("使用动态内存分配函数（如 malloc、new）申请了大量内存但没有正确释放，导致堆积过多的内存，进而影响栈的使用。")]),v._v(" "),_("p",[v._v("（3）"),_("strong",[_("strong",[v._v("递归调用错误：")])])]),v._v(" "),_("p",[v._v("如果在递归函数中没有正确地定义终止条件，递归可能会无限地循环调用自身，导致栈的使用超出限制。每次递归调用都会在栈上创建一个新的函数调用帧，当递归层数过多时，栈空间被耗尽。")]),v._v(" "),_("p",[v._v("（4）"),_("strong",[_("strong",[v._v("函数调用层级过深：")])])]),v._v(" "),_("p",[v._v("在函数内部频繁地调用其他函数，形成很深的调用层级，会占用大量的栈空间。如果递归层级过多或者函数调用层级过深，可能导致栈溢出。")]),v._v(" "),_("h3",{attrs:{id:"_15-简述-c-c-程序编译时的内存分配情况。★★★★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15-简述-c-c-程序编译时的内存分配情况。★★★★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("15. 简述 C/C++ 程序编译时的内存分配情况。★★★★★")])])]),v._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://i-blog.csdnimg.cn/direct/07aab6c712204a41884a6116bc3ab54b.png",loading:"lazy"}})]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（1）栈区（编译器自动分配释放、内存分配连续、存放函数参数和局部变量）")])])]),v._v(" "),_("p",[v._v("在函数的执行过程中，每次函数调用时会在栈上创建一个新的帧，用于存储函数的局部变量和返回地址。当函数执行完毕时，这个帧会被销毁。栈的内存分配和释放是自动进行的，由编译器负责管理。")]),v._v(" "),_("p",[v._v("****（2）****"),_("strong",[_("strong",[v._v("堆区（程序员分配释放、内存分配不连续、要通过指针链接）")])])]),v._v(" "),_("p",[v._v("堆的内存分配和释放需要显式地进行管理。在 C 中，使用 malloc 和 free 函数进行内存的分配和释放；而在 C++ 中，可以使用 new 和 delete 运算符进行内存的分配和释放。")]),v._v(" "),_("p",[v._v("一般由程序员分配释放， 若程序员不释放，程序结束时可能由操作系统回收。类似于链表，在内存中的分布不是连续的，它们是不同区域的内存块通过指针链接起来的。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（3）静态存储区（全局内存区）")])])]),v._v(" "),_("p",[v._v("全局内存区是用于存储全局变量、静态变量和静态常量的一块内存区域。这块内存在程序启动时被分配，并在整个程序的生命周期中一直存在，直到程序结束才被释放。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（4）常量区")])])]),v._v(" "),_("p",[v._v("常量区用于存储常量字符串和其他常量数据。这些数据在程序运行期间是只读的。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（5）程序代码区")])])]),v._v(" "),_("p",[v._v("代码区存储程序的指令，也就是可执行代码（编译后的机器代码）。")]),v._v(" "),_("h3",{attrs:{id:"_16-c-和-c-的区别是什么-★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-c-和-c-的区别是什么-★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("16. C 和 C++ 的区别是什么？★")])])]),v._v(" "),_("p",[v._v("C++ 是 C 的超集，也就是说，C++ 包括了 C 的所有基础特性，并且还增加了一些新的特性。下面列举一些 C 和 C++ 之间的主要区别：")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("面向对象编程")])])]),v._v(" "),_("p",[v._v("C++ 是一种面向对象的"),_("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[v._v("编程语言"),_("OutboundLink")],1),v._v("，而 C 是面向过程语言。因此，C++ 支持类、继承、封装、多态等一系列面向对象的概念和特性。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("标准库")])])]),v._v(" "),_("p",[v._v("C++ 标准库比 C 标准库更加完善和强大。C++ 标准库包括了很多容器类，如 vector、map、set 等，以及输入输出流、字符串处理等常用功能。这些库函数可以在许多情况下提高开发效率。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("命名空间")])])]),v._v(" "),_("p",[v._v("C++ 引入了命名空间的概念，可以避免函数命名相同的冲突。使用命名空间可以将代码按照逻辑分组，并更好地组织代码。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("异常处理")])])]),v._v(" "),_("p",[v._v("C++ 支持异常处理机制，这个机制可以增强程序的容错性和可靠性。当程序发生异常时，可以抛出异常并在可控范围内进行处理，避免程序崩溃。而 C 不支持异常处理机制。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("运算符重载")])])]),v._v(" "),_("p",[v._v("C++ 允许对运算符进行重载，可以使得运算符在处理特定类型的数据时更具有描述性。而 C 不支持运算符重载。")]),v._v(" "),_("h3",{attrs:{id:"_17-c-和-python-在底层上的区别-★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_17-c-和-python-在底层上的区别-★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("17. C++ 和 Python 在底层上的区别？★★")])])]),v._v(" "),_("p",[_("strong",[v._v("（1）****编译")]),v._v("与解释****")]),v._v(" "),_("p",[v._v("C++ 是一种编译型语言，源代码通过编译器转换为可执行的机器码才能运行。")]),v._v(" "),_("p",[v._v("Python 是一种解释型语言，代码逐行解释执行，无需编译，相对而言速度较慢。然而，Python 具有丰富的库和模块，可以通过集成高性能库（如 NumPy 和 Pandas）来提高执行效率。")]),v._v(" "),_("p",[_("strong",[v._v("（2）静态类型和动态类型")])]),v._v(" "),_("p",[v._v("C++ 是一种静态类型语言，变量的类型需要在编译时确定，并且不能随意更改。")]),v._v(" "),_("p",[v._v("Python 是一种动态类型语言，变量的类型在运行时确定，并且可以随意更改。")]),v._v(" "),_("p",[_("strong",[v._v("（3）内存管理")])]),v._v(" "),_("p",[v._v("C++ 中开发人员需要"),_("strong",[_("strong",[v._v("手动管理内存")])]),v._v("，包括分配和释放内存。这可能导致内存泄漏和野指针等问题。")]),v._v(" "),_("p",[v._v("Python 使用"),_("strong",[_("strong",[v._v("垃圾回收机制")])]),v._v("，"),_("strong",[_("strong",[v._v("自动处理内存管理")])]),v._v("，开发人员无需手动分配和释放内存。")]),v._v(" "),_("h3",{attrs:{id:"_18-c-和-java-的区别-★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_18-c-和-java-的区别-★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("18. C++ 和 Java 的区别？★★")])])]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（1）语法风格")])]),v._v("：C++ 是一种面向过程和面向对象的语言，语法相对较为灵活，可以直接操作内存和指针。而 Java 是一种纯面向对象的语言，语法较为严谨，所有的代码都必须定义在类中。")]),v._v(" "),_("p",[v._v("****（2）"),_("strong",[_("strong",[_("strong",[v._v("平台")]),v._v("依赖性")])]),v._v("：C++ 编译生成的程序可以在不同平台上运行，包括 Windows、Linux 和 macOS 等。而 Java 程序需要在 Java 虚拟机（JVM）上运行，因此具有更高的平台依赖性。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（3）内存管理")])]),v._v("：C++ 允许手动管理内存，开发人员需要自行分配和释放内存。而 Java 使用自动内存管理机制（垃圾回收），开发人员无需显式地处理内存分配和释放。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（4）异常处理")])]),v._v("：C++ 使用 try-catch 语句来捕获和处理异常，开发人员可以自定义异常类型。而 Java 使用 try-catch-finally 块来处理异常，并且提供了统一的异常类层次结构。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（5）执行速度")])]),v._v("：由于 C++ 更接近底层语言，其执行速度通常比 Java 更快。而 Java 通过 JVM 的即时编译器进行优化，因此在某些情况下可能具有更好的性能。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("（6）应用领域")])]),v._v("：C++ 主要用于系统级开发、游戏开发和性能敏感的应用程序。Java 主要用于企业级应用程序、移动应用开发和大型跨平台项目。")]),v._v(" "),_("h3",{attrs:{id:"_19-c-和-java-的面向对象多态性的区别-★★"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_19-c-和-java-的面向对象多态性的区别-★★"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("19. C++ 和 Java 的面向对象多态性的区别？★★")])])]),v._v(" "),_("p",[v._v("（1）C++ 中需要使用关键字 virtual 显式声明虚函数，而 Java 中所有非静态方法默认都是虚函数，不需特别声明。")]),v._v(" "),_("p",[v._v("（2）C++ 中使用指针或引用调用虚函数时，需要通过基类的指针或引用来实现多态性；而 Java 中任何对象引用都可以实现多态性。")]),v._v(" "),_("p",[v._v("（3）C++ 中通过纯虚函数和抽象类来定义接口，派生类必须实现这些纯虚函数；而 Java 中没有纯虚函数的概念，可以通过接口（interface）来定义规范。接口中的方法必须由实现类提供具体实现。")]),v._v(" "),_("h3",{attrs:{id:"_20-python-和-java-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_20-python-和-java-的区别"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("20. Python 和 Java 的区别？")])])]),v._v(" "),_("p",[v._v("（1）语法风格：Python 具有简洁、优雅的语法风格，注重可读性，使用缩进来表示代码块。而 Java 语法较为严谨，使用大括号来表示代码块。")]),v._v(" "),_("p",[v._v("（2）应用领域：Python 适用于广泛的领域，如数据分析、机器学习、科学计算、Web 开发等。Java 主要用于企业级应用程序开发、Android 应用开发和大型系统开发等。")]),v._v(" "),_("p",[v._v("（3）执行方式：Python 是解释型语言，在运行时由解释器逐行解释执行。而 Java 是编译型语言，源代码首先被编译成字节码，然后在 Java 虚拟机（JVM）上执行。")]),v._v(" "),_("p",[v._v("（4）平台依赖性：Python 程序可以在多个平台上运行，包括 Windows、Linux 和 macOS 等。而 Java 程序需要依赖 JVM 来实现跨平台性。")]),v._v(" "),_("p",[v._v("（5）内存管理：Python 使用自动内存管理机制（垃圾回收），开发人员无需手动管理内存。而 Java 也提供了垃圾回收机制，但开发人员可以通过手动操作对象的引用来进行内存管理。")]),v._v(" "),_("p",[v._v("（6）编程风格：Python 强调代码的简洁和可读性，鼓励使用简单明了的语句和表达式。而 Java 更注重面向对象的编程范式，需要明确定义类、方法和接口等。")]),v._v(" "),_("p",[v._v("（7）生态系统：Python 拥有强大的第三方库和工具支持，如 NumPy、Pandas、Django 等，可以快速开发各种应用。Java 也有丰富的库和框架，如 Spring、Hibernate 等，适用于大型企业级项目。")]),v._v(" "),_("h3",{attrs:{id:"_21-面向对象编程和面向过程编程的区别-面向对象编程的性质是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_21-面向对象编程和面向过程编程的区别-面向对象编程的性质是什么"}},[v._v("#")]),v._v(" "),_("strong",[_("strong",[v._v("21. 面向对象编程和面向过程编程的区别，面向对象编程的性质是什么？")])])]),v._v(" "),_("p",[_("strong",[v._v("区别：")])]),v._v(" "),_("p",[v._v("面向对象编程的特点使得代码更易于理解、扩展和维护，提高了代码的重用性和可靠性。它强调的是将问题中的实体和行为映射到代码中的对象和方法，更贴近实际问题的描述和思考方式。")]),v._v(" "),_("p",[v._v("而面向过程编程则关注解决问题的步骤和流程，更加直接和线性。")]),v._v(" "),_("p",[_("strong",[_("strong",[v._v("面向对象编程性质：")])])]),v._v(" "),_("p",[v._v("继承性：一个类可以继承另一个已存在的类的属性和方法，减少了代码重复，并支持代码的扩展和修改。")]),v._v(" "),_("p",[v._v("封装性：将相关的数据和方法封装在对象中，隐藏内部实现细节并提供公共接口。")]),v._v(" "),_("p",[v._v("多态性：相同的消息可以被不同的对象类型处理，提供了灵活性和可扩展性。")]),v._v(" "),_("p",[v._v("抽象性：通过接口和抽象类定义通用规范，屏蔽细节，便于代码设计和维护。")]),v._v(" "),_("p",[v._v("原文链接："),_("a",{attrs:{href:"https://blog.csdn.net/m0_53140426/article/details/140251828",target:"_blank",rel:"noopener noreferrer"}},[v._v("计算机保研/考研面试题——编程语言篇（C和C++）_保研复试编程能力-CSDN博客"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=a.exports}}]);