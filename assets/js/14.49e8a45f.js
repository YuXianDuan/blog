(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{427:function(a,e,t){"use strict";t.r(e);var s=t(2),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"学习-javascript-从吃透变量提升开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#学习-javascript-从吃透变量提升开始"}},[a._v("#")]),a._v(" 学习 JavaScript 从吃透变量提升开始")]),a._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("h3",{attrs:{id:"javascript是web开发人员必须学习的一门语言-想学好javascript-要先练好内功-只有内功深厚-我们才能走得更远。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript是web开发人员必须学习的一门语言-想学好javascript-要先练好内功-只有内功深厚-我们才能走得更远。"}},[a._v("#")]),a._v(" JavaScript是web开发人员必须学习的一门语言， 想学好JavaScript，要先练好内功 ，只有内功深厚，我们才能走得更远。")]),a._v(" "),e("ul",[e("li",[a._v("先引入一段代码：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('var myName = "lyl"\nconsole.log(myName); // 变量提升\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('console.log(myName); //undefined\nvar myName = "lyl"\n')])])]),e("p",[a._v("我们大家都知道代码是逐行运行的，所以第一段代码很好理解运结果为 lyl。 那么问题来了，为什么第二段代码先输出myName的值再声明myName 运行程序没有报错反而输出undefined呢？")]),a._v(" "),e("p",[a._v("下面就要给大家引入JavaScript里一个重要的概念：变量提升")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("变量提升：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("概念：")]),a._v(" "),e("p",[a._v('一个JS代码文件的运行分为编译阶段和执行阶段，而变量提升发生在编译阶段，当JS文件被编译时，会把变量的声明部分"提升"到代码的开头 并给这个变量赋值undefined')])])]),a._v(" "),e("p",[a._v("上面的文字可能有些抽象，下面我用一张图片来模拟变量提升过程")])])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd91ba248e6a4f4db82ffedb896a1162~tplv-k3u1fbpfcp-watermark.image",alt:"1.png"}})]),a._v(" "),e("p",[a._v("看完这张图你可能又会问一个问题 为什么myName ＝ undefined 而不是null呢？")]),a._v(" "),e("p",[a._v("这就又涉及到js的一个知识点：变量的类型由值决定")]),a._v(" "),e("p",[a._v("这样一来我们就能很好地理解为什么这段代码会输出undefined了")]),a._v(" "),e("ul",[e("li",[a._v("下面增加一点难度再看一个例子")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    showName(); // 函数showName被执行了\n    console.log(showName); //Function : showName\n    function showName() { \n     console.log('函数showName被执行了');    \n }\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    showName(); // TypeError: showName is not a function\n    console.log(showName);\n    var showName = function(){ \n    console.log('函数showName被执行了');\n }\n")])])]),e("p",[a._v("看完第一段代码你可能又会问，不是变量提升吗？怎么换成函数也不会报错呢？")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("函数提升")]),a._v(" "),e("p",[a._v("有了上面变量提升的说明，函数提升就能比较轻松的理解了，但函数提升与变量提升还是有区别的，函数提升是将整个函数声明提升到了代码开头")]),a._v(" "),e("p",[a._v("下面我依然用一张图来模拟函数的变量提升")])])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d15d60c124647a08e626f8ae9371353~tplv-k3u1fbpfcp-watermark.image",alt:"2.png"}}),a._v("\n理解了函数提升，我们再来看第二段代码，为什么同样是声明一个函数第二段代码却报错了呢？")]),a._v(" "),e("p",[a._v("我们从代码中可以看出第二段代码是以函数字面量的形式来创建一个函数，而这种方式创建函数包括了声明和赋值两部分，这就相当于我们上文讲到的变量提升，代码文件在编译阶段只把 var showName提升到了开头并赋值undefined 没有把后面的赋值语句一起提升")]),a._v(" "),e("p",[a._v("下面我依然用一张图来模拟函数字面量的变量提升\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d0425c76936489780b270e399dea35a~tplv-k3u1fbpfcp-watermark.image",alt:"3.png"}})]),a._v(" "),e("ul",[e("li",[a._v("最后用一道例题来巩固一下变量提升的知识")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("console.log(showName);\nshowName();\nvar showName = function(){\n    console.log(2);\n}\n\nfunction showName () {\n    console.log(1);\n}\nshowName()\n")])])]),e("p",[a._v("解题思路我依然用一张图为大家表示出来\n"),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce7fe8dca5784b35b95b0f69e9229b81~tplv-k3u1fbpfcp-watermark.image",alt:"4.png"}})]),a._v(" "),e("ul",[e("li",[a._v("小结")])]),a._v(" "),e("ol",[e("li",[a._v("代码是逐行运行的")]),a._v(" "),e("li",[a._v("代码文件运行时分为两个阶段，编译阶段和执行阶段")]),a._v(" "),e("li",[a._v("变量的类型由值来决定")]),a._v(" "),e("li",[a._v("所谓的变量提升， 是指在JS代码执行中， Javascript引擎(V8)，把变量的声明部分和函数的声明部分提升到开头的行为，同时会给变量设置默认值undefined")])])])}),[],!1,null,null,null);e.default=n.exports}}]);