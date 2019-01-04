---
title: 前端面试技巧与知识点整理
tags:
  - 面试
  - null
  - null
date: 2018-09-19 23:02:11
categories: 学习笔记
password:
---

![](https://haitang10-blog.oss-cn-beijing.aliyuncs.com/%E9%9D%A2%E8%AF%95.JPG)

此文章整理自慕课网前端跳槽面试技巧

GitHub 地址

[https://github.com/haitang10/FT-interview-skills](https://github.com/haitang10/FT-interview-skills)

<!-- more -->


# 1. 课程安排：  切忌浮躁！！！
此仓库整理自慕课网前端跳槽面试技巧

## 1.1 模拟一面：
	面试技巧  页面布局类  CSS盒模型  DOM 事件类 HTTP 协议  原型链    面向对象  通信  前端安全  数据结构和算法

## 1.2 模拟二面：
    面试技巧  渲染机制  js 运行机制  页面性能 错误监控

## 1.3 模拟三面：
    面试技巧  业务能力 团队协作能力  带人能力

## 1.4 模拟终面：
    面试技巧  职业竞争力  职业规划

----------

# 2. 面试准备

    2.1 如何看待面试，面试究竟是什么？ 选拔 ？筛选？
    2.2 校招，社招的区别？ 知识，经验，能力
    2.3 一面 基础知识 二面 基本原理 三面   HR
    2.4 职位描述分析 (JD)

----------

# 3. 一面 #

## 3.1 页面布局 见 layout.html

 假设高度已知，请写出三栏布局，其中左栏，右栏宽度300px,中间自适应。技术实现：float 绝对定位 grid 表格 flex

### 1. float
    1. 左栏左浮动，固定宽度，右栏右浮动，固定宽度，中间不管。和书写顺序有关。左右中
       需要注意的是 在写HTML 的时候一定要先写left div,再写right div ，最后写center div
       原因是浏览器解析HTML时按先后顺序，先写center的话因为center 默认display为block，占据一行，
       接下来解析 right div 的css float right 会在下一行的右端浮动，而不是这一行！！！
       当然可以令right 部分float的margin-left 为-300 px,

    2. 中间float:left，margin-left /right = 300px,左右float：left, margin 为-100%和-300px,
       目的就是浮动到上一行，书写顺序有关，中左右,并且还要把中间那栏用一个div包裹

### 2. absolute 定位
    1. 左中右全部绝对定位，左右left right 为0,中间left,right为300px,元素顺序无所谓
        position 是相对于第一个非static元素进行定位的。会脱离常规流，所以有时会覆盖元素。
        这个位置并不需要为div 的父元素section 设置position reletive ,
        因为absolute 定位在未设置left top 等属性时是按照其原来位置进行排列的。指定了就是相对于body
        详细情况见 https://www.jianshu.com/p/a3da5e27d22b
		所以不给section加relative 属性时，三栏还是在这一行，但是已经不占据空间了，后面的section会看不到，
        但是考虑到之后的section ，最好还是给 absolute section 增加 position relative 属性
        把 article 限定在section 里面

    2. 左右absolute，中间static，用margin撑开

### 3. flex 布局
    参考 https://zhuanlan.zhihu.com/p/25303493

### 4. table 表格布局

### 5. grid 网格布局

### 6. 几种布局方式优缺点，

float 书写顺序很重要，float和absolute 都可以结合margin，二者都会脱离文档流。
去掉高度一定的话，只有flex和table可以自适应

 总结： 语义化，不要总是div基础知识扎实

 变通： 上下高度固定，中间自适应，两栏布局


##  3.2 CSS 盒模型 ##

### 基本概念： 标准模型 + IE 模型  二者区别
    content padding border margin
    IE模型 宽和高包括content padding border
    css 设置这两种模型  box-sizing: content-box /border-box
    JS 设置获取盒模型对应的宽和高
     dom.style.width/height 只能取到内联样式的
     dom.currentStyle.width/height 取到当前的渲染之后的（只有IE 支持）
     window.getComputedStyle(dom).width/height

### 边距margin 重叠 , BFC(解决重叠，清除浮动),见 box.html

[https://zhuanlan.zhihu.com/p/25321647](https://zhuanlan.zhihu.com/p/25321647)

[https://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/](https://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/)


    基本概念原理
    如何创建 float值不为none position 不为static和relative table overflow不为visiable(auto,hiddion)
    使用场景


## 3.3 DOM 事件 ##

[ https://www.cnblogs.com/lvdabao/p/3265870.html]( https://www.cnblogs.com/lvdabao/p/3265870.html)
[ https://wangdoc.com/javascript/events/model.html#%E7%9B%91%E5%90%AC%E5%87%BD%E6%95%B0]( https://wangdoc.com/javascript/events/model.html#%E7%9B%91%E5%90%AC%E5%87%BD%E6%95%B0)
[ https://segmentfault.com/a/1190000007082623]( https://segmentfault.com/a/1190000007082623)


基本概念:
### 1. DOM 事件的级别
    DOM 0 element.onclick = function(){}
    DOM 2 element.addEventListener('click', function(){}, false)  element.removeEventListener('click', function(){}, false)
    DOM 3 element.addEventListener('keyup', function(){}, false) 在 DOM 2 的基础上新增了更多的事件类型

### 2. DOM 事件模型：三种
    浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。JavaScript 有三种方法，可以为事件绑定监听函数。

    1. DOM 0 级事件模型，事件发生后没有传播的概念，没有事件流。
       事件发生，马上处理，完事，就这么简单。监听函数只是元素的一个属性值，通过指定元素的属性值来绑定监听器。书写方式有两种：
       HTML代码中指定属性值：<input type=”button” onclick=”func1()” />
       在js代码中指定属性值：document.getElementsByTagName(‘input’)[0].onclick = func1

	2. IE事件模型，目标+冒泡阶段，没有捕获（IE 8 之前）
       绑定监听函数attachEvent(eventType, handler)
       移除  attachEvent(eventType, handler)

	3. DOM 2 级事件模型 捕获阶段-目标阶段-冒泡阶段

### 3. DOM 事件流
	DOM2 级事件规定事件流包括三个阶段 捕获阶段》目标阶段》冒泡阶段

### 4. 描述dom 事件捕获的具体流程
    window>document>element(html)>element(body)>div
    冒泡相反
### 5. Event 对象的常见应用
    event.preventDafault() 阻止标签的默认行为，比如说 a 标签， 可以阻止它的默认跳转行为。
    event.stopPropagation() 阻止事件向父级传播 阻止冒泡
    event.stopImmediatePropagation() 阻止该节点所有传播
    event.currentTarget 绑定监听函数的节点
    event.target        当前真正点击的节点
### 6. 自定义事件
    var eve = new Event('test'); //通过new Event 创建事件
    ev.addEventListener('test', function () { //注册事件
           console.log('test dispatch');
    });
    setTimeout(function () {
           ev.dispatchEvent(eve);  //触发事件
    }, 1000);

    var eve = new CustomEvent('test')


##  3.4 HTTP 协议类 ##
https://www.zhihu.com/search?type=content&q=http%20%E6%97%A0%E8%BF%9E%E6%8E%A5

### 1. HTTP 协议主要特点
面向连接短连接（连接一次就会断掉）无状态(无法区分两次连接的身份)灵活 简单快速

### 2. HTTP 协议报文组成

  请求报文 相应报文

    1，请求行  方法(get) 页面地址 协议版本
    2，请求头 很多key-value 值，包括host, user-agent等等 Header（请求的 Header 中 Host 字段是必须的，其他都是可选）
    3，\r\n\r\n（连续两个换行回车符，用来分隔Header和Body）
    4，Body（可选）

    相应报文
    1，响应行 协议/版本(HTTP/1.1)  状态码  200 OK
    2. 响应头
    3，\r\n\r\n（连续两个换行回车符，用来分隔Header和Body）
    4，Body（可选）

### 3. HTTP 协议方法
	GET  获取资源
    POST 传输资源
    PUT  更新资源
    DELETE 删除资源
    HEAD  获取报文头部
### 4. GET POST 区别

    5. get把请求的数据放在url上，即HTTP协议头上，其格式为： 以?分割URL和传输数据，参数之间以&相连  数据如果是英文字母/数字，原样发送，
    如果是空格，转换为+， 如果是中文/其他字符，则直接把字符串用BASE64加密，及“%”加上“字符串的16进制ASCII码”。
    post把数据放在HTTP的包体内（requrest body）。

    4. get 请求在url 中传送的参数有长度限制。提交的数据最大是2k（原则上url长度无限制，那么get提交的数据也没有限制咯？限制实际上取决于浏览器，(大多数)浏览器通常都会限制url长度在2K个字节，即使(大多数)服务器最多处理64K大小的url。也没有卵用。）。
    post理论上没有限制。实际上IIS4中最大量为80KB，IIS5中为100KB。

    GET产生一个TCP数据包，浏览器会把http header和data一并发送出去，服务器响应200(返回数据);
    POST产生两个TCP数据包，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)。

    1. GET在浏览器回退时是无害的，POST会再次提交请求。

    2. GET请求会被浏览器主动cache，而POST不会，除非手动设置。

    3. GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

      GET产生的URL地址可以被Bookmark，而POST不可以。
      GET请求只能进行url编码，而POST支持多种编码方式。
      GET只接受ASCII字符的参数的数据类型，而POST没有限制

### 5. HTTP 状态码
    1 指示信息- 请求已被接收，继续处理
    2 成功    -  请求已被成功接收 200 OK
    3 重定向  -  完成请求必须进行更进一步的操作
    4 客户端错误  请求有语法错误，请求无法实现 403 访问被禁止 404  资源不存在
    5 服务器错误  服务器未能实现合法的请求

### 6. 持久连接 keep-alive

[https://blog.csdn.net/Misszhoudandan/article/details/80967033](https://blog.csdn.net/Misszhoudandan/article/details/80967033)

	 HTTP 1.1 支持持久连接  1.0 不支持
     非持久连接时，每个请求/ 响应客户端和服务端都要新建一个连接，完成之后立即断开连接。（HTTP 是面向连接，短连接的协议）
	 持久连接时，使客户端到服务端的连接持续有效，当出现对服务器的后继请求时，keep-alive避免了重新建立连接
### 7. 管线化

     在持久连接的情况下，某个连接上消息的传递类似于
     请求1->响应1->请求2->响应2->请求3->响应3->
     管线化   将多个HTTP请求整批发送，在发送过程中不用等待对方响应
     请求1->请求2->请求3->响应1->响应2->响应3->


## 3.5 原型链类 2018.12.13 更新##

[https://wangdoc.com/javascript/oop/new.html](https://wangdoc.com/javascript/oop/new.html)

[https://wangdoc.com/javascript/oop/prototype.html](https://wangdoc.com/javascript/oop/prototype.html)


### 1.创建对象的几种方法 ###
	  // 原型链指向Object，字面量的方式
	  var o1  = {name:'o1'}
	  var o11 = new Object({name:'o11'})

	  // 构造函数
	  var M = function(){this.name = 'o2'}
	  var o2 = new M()
	 // 利用 Object,create()，以P为原型，生成实例对象
	  var P = {name:'o3'}
	  var o3 = Object.create(P)
	// o3 本身没有name属性，name是在他的原型 P上的
    浏览器中输出结果
    o1
    {name: "o1"}name: "o1"__proto__: Object
    o11
    {name: "o11"}name: "o11"__proto__: Object
    o2
    M {name: "o2"}name: "o2"__proto__: Object
    o3
    {}
通过构造函数为实例对象定义属性，虽然很方便，但是有一个缺点。同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。
###2. 原型(prototype)构造函数 实例 原型链###

![](http://haitang10-blog.oss-cn-beijing.aliyuncs.com/18-12-13/96056899.jpg)

	- 函数才有prototype属性， 对象没有
	- 函数的原型对象有一个constructor属性，指向构造函数
	- 构造函数通过new,在其原型对象的基础上产生一个实例，
	- 实例对象没有prototype属性，但是有__proto__属性，指向函数的原型对象
	- object.prototype 是原型链的顶端

	- 实例对象有 __proto__ 属性，指向函数的prototype,函数也有
	- 函数也有__proto__ 属性  M.__proto__ === Function.prototype // true
	- 凡是定义在Object.prototype对象上面的属性和方法，将被所有实例对象共享


### 3. instanceof 的原理

	用来判断一个对象是否是一个构造函数的实例，
	根本在于判断构造函数的原型对象（prototype属性）是否在这个实例对象的原型链上，
	也就是实例对象的—__proto__ 属性和 构造函数的prototype属性是否引用的同一个地址

	M.prototype.__proto__ === Object.prototype // true
	o2 instanceof Object //true
	用instanceof判断实例对象的构造函数时不严谨，所以要用constructor属性确认，
	o2.__proto__.constuctor === M //true
	o2.__proto__.constuctor === Object //false

	再直接一点利用 Object.getPrototypeOf(o2).constructor === M / Object 判断



### 4. new 运算符

3. new的原理，它后面的函数依次执行下面的步骤：
            1. 创建一个空对象，作为将要返回的对象实例。
            2. 将空对象的原型指向构造函数的prototype属性。
            3. 开始执行构造函数
            4. 将这个空对象赋值给函数内部的this关键字。
            4. 继续执行构造函数内部的代码。
            5. 构造函数如果return另一个对象，new的结果是这个对象


也就是说，构造函数内部，this指的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。
构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。

如果return语句返回的是一个跟this无关的新对象，new命令会返回这个新对象，而不是this对象。这一点需要特别引起注意。

        var Vehicle = function (){
          this.price = 1000;
          return { price: 2000 };
        };

        (new Vehicle()).price
        // 2000
上面代码中，构造函数Vehicle的return语句，返回的是一个新对象。new命令会返回这个对象，而不是this对象。

用代码表示，其中fun 为构造函数，类比于M

	var new2 = function(fun) {
		// 1.创建一个空对象，作为将要返回的对象实例。
        //2. 将空对象的原型指向构造函数的prototype属性。
		var o = Object.create(fun.prototype)
		// 开始执行函数，并绑定this
		var k = fun.call(o)  
		return ((typeof k === "object") ? k : o)
	}


## 3.6 面向对象类 12.15 更新 见oop.html ##

### 1. 类和实例

### 2. 类和继承,5种方法

## 3.7 通信类 2019.1.2 update##
https://wangdoc.com/javascript/bom/same-origin.html
### 1.同源策略和限制
	同源：同一个协议 域名 端口（默认80））协议 域名 端口 任一一个不一样都是跨域
	限制：不是一个源的文档无法操控另一个源的文档，表现在
	cookie localStorage indexDB 无法获取
	DOM 无法获得
	AJAX请求无法获得（ajax只能同源通信,可以发送，但浏览器会拒绝接受响应）
    jsonp ,webSocket CORS 解决AJAX无法跨域

### 2.前后端如何通信

	AJAX （同源通信）
	WebSocket 一种新的通信协议，不受同源策略限制
	CORS     W3C标准，支持跨域通信，也支持同源

### 3.如何创建 AJAX  见 ajax.js
	XMLHttpRequest 对象的工作流程
        1. 创建XMLHttpRequest 实例
        2. 发送http请求
        3. 接受并处理服务器传回的数据
        4. 更新网页数据
	兼容性处理
	事件的触发条件
	事件的触发顺序


### 4.跨域通信的几种方式  10.7 更新 ,2019.1.2 update
跨域通信大致分为三种场景，每个场景又对应不同的方法
一是跨全域，ajax和后端通信，例如jsonp,webSocket CORS
另一种是iframe页面，窗口间的通信，通过hash,,postMessage 等
还有就是共享cookie，设置document.domian，因为浏览器规定不同源不能共享cookie

1. JSONP

		就是利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。
		当需要通讯时，本站脚本动态创建一个<script>元素，地址指向第三方的API网址，形如：    
		<script src="http://www.example.net/api?param1=1&param2=2"></script>     
		并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。     
		第三方产生的响应为json数据的包装（故称之为jsonp，即json padding），形如: callback({"name":"hax","gender":"Male"})
		这样浏览器会调用callback函数，并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。

2. Hash   URL里面#后面的部分  页面不刷新  search URL里面？后面的部分，页面会刷新

3. postMessage  跨域同于都可以

	[https://blog.csdn.net/zhuzhupozhuzhuxia/article/details/76795472](https://blog.csdn.net/zhuzhupozhuzhuxia/article/details/76795472)

	[https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

4. WebSocket  是一种网络通信协议，
	不受同源策略限制
		[http://www.ruanyifeng.com/blog/2017/05/websocket.html](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

5. CORS W3C新标准，它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制,目前所有浏览器都支持了

	[http://www.ruanyifeng.com/blog/2016/04/cors.html](http://www.ruanyifeng.com/blog/2016/04/cors.html)

## 3.8 前端安全类

[https://blog.csdn.net/adrianzqt/article/details/77801635?locationNum=8&fps=1](https://blog.csdn.net/adrianzqt/article/details/77801635?locationNum=8&fps=1)

### 1.CSRF  跨站请求伪造，Cross-site request forgery

攻击原理是：
A 网站某个接口存在漏洞，用户登录过A网站，A服务器下发cookie到浏览器
用户打开B网站，B引诱或者主动发送一个伪造的请求到A，假装是受信任的用户
可以是get请求或者POST（利用表单跨域），这时浏览器会带着cookie发送请求到A网站，


防御措施：服务器下发token到cookie里，并把token写在A表单里，这样发送请求的时候就会验证cookie的token和表单里的token是否一致，

	Token验证  
	Referer 验证
	隐藏令牌

### 2.XSS 跨域脚本攻击  cross-site scripting
原理：是向页面注入js代码
防御方法：要坚持一个原则：永远不要相信用户的输入，对每一条输入都进行验证

##  3.9 数据结构和算法类  ##

10.09 更新

### 快速排序 选择排序希尔排序

[https://segmentfault.com/u/mangguowulidemao](https://segmentfault.com/u/mangguowulidemao)



### 堆栈 队列 链表 ，树，图，见下链接

[http://huang303513.github.io/2016/12/08/Javascript%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95(%E4%B8%80).html](http://huang303513.github.io/2016/12/08/Javascript%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95(%E4%B8%80).html)

[https://juejin.im/post/5b6c4976f265da0f4f1669ac](https://juejin.im/post/5b6c4976f265da0f4f1669ac)

[https://juejin.im/entry/58330cbfa0bb9f005a0fed62](https://juejin.im/entry/58330cbfa0bb9f005a0fed62)

[https://juejin.im/entry/58759e79128fe1006b48cdfd](https://juejin.im/entry/58759e79128fe1006b48cdfd)


### 递归

[https://segmentfault.com/a/1190000009857470](https://segmentfault.com/a/1190000009857470)

----------
# 4. 二面   10.14更新

## 4.1 渲染机制
[https://wangdoc.com/javascript/bom/engine.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E7%BB%84%E6%88%90](https://wangdoc.com/javascript/bom/engine.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E7%BB%84%E6%88%90)
### 1.什么是DOCTYPE 和作用

		DTD 告诉浏览器我是什么文档类型
		DOCTYPE 声明文档类型，告诉浏览器当前DTD，浏览器根据这个选择哪个引擎来解析渲染
		HTML 5
		<!DOCTYPE HTML>
		HTML 4.0 两个版本
		严格模式和传统模式

### 2.浏览器渲染过程，快速简洁把事情描述清楚

[https://yuchengkai.cn/docs/zh/frontend/browser.html#%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6](https://yuchengkai.cn/docs/zh/frontend/browser.html#%E6%B8%B2%E6%9F%93%E6%9C%BA%E5%88%B6)

浏览器的渲染机制一般分为以下几个步骤
注意，解析css和js 都会阻塞HTML的渲染
js会阻塞dom树解析和渲染
css加载不会阻塞DOM树的解析
css加载会阻塞DOM树的渲染
css加载会阻塞后面js语句的执行、

		1. 处理 HTML 并构建 DOM 树。
		2. 处理 CSS 构建 CSSOM 树。
		3. 将 DOM 与 CSSOM 合并成一个渲染树。render tree
		4. 根据渲染树来布局，计算每个节点的位置。
		5. 调用 GPU 绘制，合成图层，显示在屏幕上。

### 3.reflow 和 repaint

- 渲染树转换为网页布局，称为“布局流”（flow）；布局改变或是节点的几何尺寸改变称为reflow

- 布局显示到页面的这个过程，称为“绘制”（paint）。
  节点外观改变需要repaint,不影响布局，不会触发回流
- 它们都具有阻塞效应，并且会耗费很多时间和计算资源。
- 回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

触发reflow

- 增加，删除，修改dom节点
- 移动dom位置，或者搞一个动画
- 改变 window 大小
- 改变字体
- 添加或删除样式，display： none position
- 定位或者浮动

优化技巧

	读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，然后立刻写入，接着再读取一个 DOM 节点。
	缓存 DOM 信息。
	不要一项一项地改变样式，而是使用 CSS class 一次性改变样式。
	使用documentFragment操作 DOM
	动画使用absolute定位或fixed定位，这样可以减少对其他元素的影响。
	只在必要时才显示隐藏元素。
	使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重流时执行，而不是立即要求页面重流。
	使用虚拟 DOM（virtual DOM）库。

### 4.布局Layout

----------

## 4.2 js运行机制

[https://wangdoc.com/javascript/async/general.html#%E5%8D%95%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B](https://wangdoc.com/javascript/async/general.html#%E5%8D%95%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B)

### 1. 单线程模型

单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。

注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。


### 2. 同步任务和异步任务

程序里面所有的任务，可以分成两类：同步任务（synchronous）和异步任务（asynchronous）。

同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。在执行栈里。

异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行，也就是说，异步任务不具有”堵塞“效应。

举例来说，Ajax 操作可以当作同步任务处理，也可以当作异步任务处理，由开发者决定。如果是同步任务，主线程就等着 Ajax 操作返回结果，再往下执行；如果是异步任务，主线程在发出 Ajax 请求以后，就直接往下执行，等到 Ajax 操作有了结果，主线程再执行对应的回调函数。

异步任务：
setTimeout and setinterval
DOM 事件 addEventListener，点击按钮拉住了，因为主线程，执行栈不空
ES 6 中 的promise

### 3.任务队列和事件循环

	for (var i = 0; i < 4; i++) {
		// 过1秒后把这个任务放到异步队列
    	setTimeout(function() {
        console.log(i)
    	}, 1000)
	}
	输出 4444
	for (let i = 0; i < 4; i++) {
    	setTimeout(function() {
        console.log(i)
    	}, 1000)
	}
	1 秒后输出 0123

JavaScript 运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。（实际上，根据异步任务的类型，存在多个任务队列。为了方便理解，这里假设只存在一个队列。）

首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。

异步任务的写法通常是回调函数。一旦异步任务重新进入主线程，就会执行对应的回调函数。如果一个异步任务没有回调函数，就不会进入任务队列，也就是说，不会重新进入主线程，因为没有用回调函数指定下一步的操作。

JavaScript 引擎怎么知道异步任务有没有结果，能不能进入主线程呢？答案就是引擎在不停地检查，一遍又一遍，只要同步任务执行完了，引擎就会去检查那些挂起来的异步任务，是不是可以进入主线程了。这种循环检查的机制，就叫做事件循环（Event Loop）。维基百科的定义是：“事件循环是一个程序结构，用于等待和发送消息和事件（a programming construct that waits for and dispatches events or messages in a program）”。

### 4.异步操作的模式

总结：理解单线程 理解任务队列（同步和异步）

那些语句放入异步任务队列， 放入异步队列的时机


 EventLoop 事件循环机制 主线程空了之后，js 引擎不断去任务队列中检查，看这些异步任务是否可以进入主线程执行，
 [https://www.jianshu.com/p/12b9f73c5a4f](https://www.jianshu.com/p/12b9f73c5a4f)
<link rel="dns-prefetch" href="//host_name_to_prefetch.com">

## 4.3 页面性能类
### 1. 阻塞
注意，解析css和js 都会阻塞HTML的渲染
js会阻塞dom树解析和渲染
css加载不会阻塞DOM树的解析
css加载会阻塞DOM树的渲染
css加载会阻塞后面js语句的执行、

如果这样

	<head>
    <meta charset="utf-8">
    <title></title>
    <style link=""></style>
	<script src=""></script>
  	</head>
css 加载阻塞js执行，js执行又会阻塞dom树解析，
### 2. 提升页面性能的方法有哪些？
1. 资源压缩合并，减少合同谈判请求
2. 非核心代码异步加载 ，异步加载方式和区别
3. 利用浏览器缓存，缓存的分类，缓存的原理
4. 使用CDN(浏览器第一次打开的时候)
5. 预解析DNS
	1. 加link标签,
	<"link" rel="dns-prefetch" href="//host_name_to_prefetch.com">
	2. meta 标签，强制开启a标签dns预解析
	<meta http-equiv="x-dns-prefetch-control" content="on">

### 3. 异步加载 ，见 性能优化.html
1. 异步加载的方式
	1. 动态脚本加载，即动态创建script标签
	2. defer
	3. async 使用另一个进程下载脚本，下载时不会阻塞渲染
	4.
		浏览器开始解析 HTML 网页。
		解析过程中，发现带有async属性的script标签。
		浏览器继续往下解析 HTML 网页，同时并行下载<script>标签中的外部脚本。
		脚本下载完成，浏览器暂停解析 HTML 网页，开始执行下载的脚本。
		脚本执行完毕，浏览器恢复解析 HTML 网页。
2. 异步加载的区别
	1. defer 是在HTML解析,渲染完之后才会执行，如果是多个，按照加载的顺序执行，也就是说，遇到有defer标志的标签，先异步加载，等HTML解析完，按照加载时的顺序依次执行，
	2. async 是在script加载完之后立即执行，执行完继续解析HTML。如果是多个script，执行顺序和加载顺序无关，也就是哪个先加载完，哪个先执行。


### 4.浏览器缓存 资源文件缓存到磁盘，浏览器直接从磁盘读取数据，关键在于服务器发送响应的时候会在响应头加上一些字段

1. 强缓存，在过期时间内直接读取本地资源副本，不会再和服务器通信了,服务器发送响应头，expires   

		expires http1.0 版本 绝对时间 ，服务器下发的，有可能和浏览器不一样
		Cache-Control 1.1 版本  相对时间 Cache-Control： max-age = 3600， 以相对时间为准

2. 协商缓存.资源副本过期时间到了，浏览器会和服务器验证资源是否发生变化

		Last-Modified: 上次修改的时间，服务器发的响应头
		if-Modified-Since : 浏览器响应头的key，过期时间到了，浏览器会跟服务端验证修改时间
		缺点是有可能资源的内容不变但是修改时间变了，这样会重新向服务器获取资源，造成浪费
		Etag： 由资源内容计算而得，服务器发给浏览器
		if-None-Match ；浏览器发送http请求的时候

## 4.4 错误监控
对于代码运行错误，通常的办法是使用 window.onerror 拦截报错。该方法能拦截到大部分的详细报错信息，但是也有例外

对于跨域的代码运行错误会显示 Script error. 对于这种情况我们需要给 script 标签添加 crossorigin 属性
对于某些浏览器可能不会显示调用栈信息，这种情况可以通过 arguments.callee.caller 来做栈递归
对于异步代码来说，可以使用 catch 的方式捕获错误。比如 Promise 可以直接使用 catch 函数，async await 可以使用 try catch

但是要注意线上运行的代码都是压缩过的，需要在打包时生成 sourceMap 文件便于 debug。

对于捕获的错误需要上传给服务器，通常可以通过 img 标签的 src 发起一个请求。
### 1.前端错误分类
即计时运行错误：代码错误
资源加载错误

### 2.错误捕获方式
1. 即时运行错误

	 	try...catch   window.onerror
跨域的js 运行错误捕获

		1. 客户端 script 标签添加 crossorigin 属性
		2. 服务端 js 资源响应头加上 Access-Control-Allow-Origin：*
2. 资源加载错误（不会冒泡）  

		object.onerror(节点上绑定error事件)
		performance.getEntries
		Error 事件捕获   
		window.addEventListener('error', function(e) {
			console.log('捕获', e)
		)

### 3.上报错误的基本原理
通常可以通过 img 标签的 src 发起一个请求

----------
## 5.三面





----------


参考资料：
