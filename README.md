# FT-interview-skills

# 1. 课程安排：  切忌浮躁！！！
此仓库整理自慕课网前端跳槽面试技巧

## 1.1 模拟一面：
          面试技巧  页面布局类
          CSS盒模型  DOM 事件类
          HTTP 协议  原型链
          面向对象  通信
          前端安全  前端算法

## 1.2 模拟二面：
          面试技巧
          渲染机制
          js 运行机制
          页面性能
          错误监控

## 1.3 模拟三面：
          面试技巧
          业务能力
          团队协作能力
          带人能力

## 1.4 模拟终面：
          面试技巧
          职业竞争力
          职业规划

# 2. 面试准备 
    2.1 如何看待面试，面试究竟是什么？ 选拔 ？筛选？
    2.2 校招，社招的区别？ 知识，经验，能力
    2.3 一面 基础知识 二面 基本原理 三面   HR
    2.4 职位描述分析 (JD)


# 3. 一面 #

## 3.1 页面布局 见 layout.html

 假设高度已知，请写出三栏布局，其中左栏，右栏宽度300px,中间自适应。技术实现：float 绝对定位 grid 表格 flex

        3.1.1 float
          1. 左栏左浮动，固定宽度，右栏右浮动，固定宽度，中间不管。和书写顺序有关。
            需要注意的是 在写HTML 的时候一定要先写left div,再写right div ，最后写center div
            原因是浏览器解析HTML时按先后顺序，先写center的话因为center 默认display为block，占据一行，
            接下来解析 right div 的css float right 会在下一行的右端浮动，而不是这一行！！！
            当然可以令right 部分float的margin-left 为-300 px,

          2. 中间设margin-left /right,左右采用-margin float, 左面margin-left：-100% 右面 margin-left：-300 px,目的就是浮动
            到上一行，HTML 书写顺序无关。

        3.1.2 absolute 定位
          1. 左中右全部绝对定位，左右left right 为0中间不管,
              position 是相对于第一个非static元素进行定位的。会脱离常规流，所以有时会覆盖元素。
              这个位置并不需要为div 的父元素section 设置position reletive ,
              因为absolute 定位在未设置left top 等属性时是按照其原来位置进行排列的。指定了就是相对于body
              详细情况见 https://www.jianshu.com/p/a3da5e27d22b
              但是考虑到之后的section ，最好还是给 absolute section 增加 position relative 属性
              把 article 限定在section 里面
          2. 左右absolute，中间static，用margin撑开

        3.1.3 flex 布局
          参考 https://zhuanlan.zhihu.com/p/25303493

        3.1.4  table 表格布局

        3.1.5  grid 网格布局

        3.1.6 几种布局方式优缺点，float 书写顺序很重要，float和absolute 都可以结合margin，二者都会脱离文档流。
              去掉高度一定的话，只有flex和table可以自适应

        总结： 语义化，不要总是div基础知识扎实
        变通： 上下高度固定，中间自适应，两栏布局


##  3.2 CSS 盒模型 ##

        基本概念： 标准模型 + IE 模型  二者区别
        content padding border margin
        IE模型 宽和高包括content padding border
        css 设置这两种模型  box-sizing: content-box /border-box
        JS 设置获取盒模型对应的宽和高
          dom.style.width/height 只能取到内联样式的
          dom.currentStyle.width/height 取到当前的渲染之后的（只有IE 支持）
          window.getComputedStyle(dom).width/height

        边距margin 重叠
        BFC(解决重叠，清除浮动)
         https://zhuanlan.zhihu.com/p/25321647
         https://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/
          基本概念
          原理
          如何创建 float值不为none position 不为static和relative table overflow不为visiable(auto,hiddion)
          使用场景


## 3.3 DOM 事件 ##

[ https://www.cnblogs.com/lvdabao/p/3265870.html]( https://www.cnblogs.com/lvdabao/p/3265870.html)
[ https://wangdoc.com/javascript/events/model.html#%E7%9B%91%E5%90%AC%E5%87%BD%E6%95%B0]( https://wangdoc.com/javascript/events/model.html#%E7%9B%91%E5%90%AC%E5%87%BD%E6%95%B0)
[ https://segmentfault.com/a/1190000007082623]( https://segmentfault.com/a/1190000007082623)


            基本概念:
            1. DOM 事件的级别
              DOM 0 element.onclick = function(){}
              DOM 2 element.addEventListener('click', function(){}, false)  element.removeEventListener('click', function(){}, false)
              DOM 3 element.addEventListener('keyup', function(){}, false) 在 DOM 2 的基础上新增了更多的事件类型

            2. DOM 事件模型：三种
                浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。JavaScript 有三种方法，可以为事件绑定监听函数。

                1. DOM 0 级事件模型，事件发生后没有传播的概念，没有事件流。
                    事件发生，马上处理，完事，就这么简单。监听函数只是元素的一个属性值，通过指定元素的属性值来绑定监听器。书写方式有两种：
      　　　        HTML代码中指定属性值：<input type=”button” onclick=”func1()” />
      　　　　      在js代码中指定属性值：document.getElementsByTagName(‘input’)[0].onclick = func1
                2. IE事件模型，目标+冒泡阶段，没有捕获（IE 8 之前）
                      绑定监听函数attachEvent(eventType, handler)
                      移除  attachEvent(eventType, handler)
                3. DOM 2 级事件模型 捕获阶段-目标阶段-冒泡阶段

            3. DOM 事件流

                DOM2 级事件规定事件流包括三个阶段 捕获阶段》目标阶段》冒泡阶段

            4. 描述dom 事件捕获的具体流程
                window>document>element(html)>element(body)>div
                冒泡相反
            5. Event 对象的常见应用
                event.preventDafault() 阻止标签的默认行为，比如说 a 标签， 可以阻止它的默认跳转行为。
                event.stopPropagation() 阻止事件向父级传播 阻止冒泡
                event.stopImmediatePropagation() 阻止该节点所有传播
                event.currentTarget 绑定监听函数的节点
                event.target        当前真正点击的节点
            6 自定义事件
            var eve = new Event('test'); //通过new Event 创建事件
              ev.addEventListener('test', function () { //注册事件
                  console.log('test dispatch');
              });
              setTimeout(function () {
                  ev.dispatchEvent(eve);  //触发事件
              }, 1000);

              var eve = new CustomEvent('test')


##  3.4 HTTP 协议类 ##


        3.4.1 HTTP 协议主要特点
              无连接（连接一次就会断掉）无状态(无法区分两次连接的身份)灵活 简单快速

        3.4.2 HTTP 协议报文组成
              请求报文 相应报文
              1，请求行或者  方法(get) 页面地址 协议版本
              2，请求头 很多key-value 值，包括host, user-agent等等 Header（请求的 Header 中 Host 字段是必须的，其他都是可选）
              3，\r\n\r\n（连续两个换行回车符，用来分隔Header和Body）
              4，Body（可选）
              相应报文
              1，响应行 协议/版本(HTTP/1.1)  状态码  200 OK
              2. 响应头
              3，\r\n\r\n（连续两个换行回车符，用来分隔Header和Body）
              4，Body（可选）

        3.4.3 HTTP 协议方法
                GET  获取资源
                POST 传输资源
                PUT  更新资源
                DELETE 删除资源
                HEAD  获取报文头部

        3.4.4 GET POST 区别
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




        3.4.5 HTTP 状态码
              1 指示信息- 请求已被接收，继续处理
              2 成功    -  请求已被成功接收 200 OK
              3 重定向  -  完成请求必须进行更进一步的操作
              4 客户端错误  请求有语法错误，请求无法实现 403 访问被禁止 404  资源不存在
              5 服务器错误  服务器未能实现合法的请求

        3.4.6 持久连接 keep-alive
        https://blog.csdn.net/Misszhoudandan/article/details/80967033
            HTTP 1.1 支持持久连接
            非持久连接时，每个请求/ 响应客户端和服务端都要新建一个连接，完成之后立即断开连接。（HTTP 是无连接的协议）

            持久连接时，使客户端到服务端的连接持续有效，当出现对服务器的后继请求时，keep-alive避免了重新建立连接
        3.4.7 管线化
            在持久连接的情况下，某个连接上消息的传递类似于
            请求1->响应1->请求2->响应2->请求3->响应3->
            管线化   将多个HTTP请求整批发送，在发送过程中不用等待对方响应
            请求1->请求2->请求3->响应1->响应2->响应3->

## 3.5 原型链类 ##
https://wangdoc.com/javascript/oop/new.html
https://wangdoc.com/javascript/oop/prototype.html
### 1.创建对象的几种方法 ###
	  // 原型链指向Object
	  var o1  = {name:'o1'}
	  var o11 = new Object({name:'o11'})
	  // 构造函数
	  var M = functon(){this.name = 'o2'}
	  var o2 = new M()

	  var P = {name:'o3'}
	  var o3 = Object.create(P)
    浏览器中输出结果
    o1
    {name: "o1"}name: "o1"__proto__: Object
    o11
    {name: "o11"}name: "o11"__proto__: Object
    o2
    M {name: "o2"}name: "o2"__proto__: Object
    o3
    {}

###原型(prototype)构造函数 实例 原型链###
object.prototype 是原型链的顶端
函数才有prototype 对象没有
实例对象有 __proto__ 函数也有
凡是定义在Object.prototype对象上面的属性和方法，将被所有实例对象共享

        instanceof 的原理
        new 运算符

## 3.6 面向对象类 ##



## 3.7 通信类 ##

- 同源策略和限制

		协议 域名 端口 任一一个不一样都是跨域 
		同源：同一个协议 域名 端口（默认80））
		限制：不是一个源的文档无法操控另一个源的文档，表现在
		cookie localStorage indexDB 无法获取
		DOM 无法获得
		AJAX请求无法获得（ajax只能同源通信）
		   


- 前后端如何通信 

	AJAX 
	WebSocket 不受同源策略限制
	CORS     支持跨域通信，也支持同源



- 如何创建 AJAX
		


- 跨域通信的几种方式

	1. JSONP
		
			就是利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。
			当需要通讯时，本站脚本创建一个<script>元素，地址指向第三方的API网址，形如：    
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

 CSRF  跨站请求伪造，Cross-site request forgery

攻击原理是：A 网站某个接口存在漏洞，用户登录过A网站

防御措施：
 	
	Token验证  
	Referer 验证 
	隐藏令牌
	
XSS 跨域脚本攻击  cross-site scripting
向页面注入js代码
	
##  3.9 算法类 快排 选择 希尔 ##
- 排序
- 堆栈
- 递归
- 波兰式和逆波兰式

排序
[https://segmentfault.com/u/mangguowulidemao](https://segmentfault.com/u/mangguowulidemao)

快速排序 
选择排序
希尔排序
堆栈 队列 链表

[https://juejin.im/post/5b6c4976f265da0f4f1669ac](https://juejin.im/post/5b6c4976f265da0f4f1669ac)

[https://juejin.im/entry/58330cbfa0bb9f005a0fed62](https://juejin.im/entry/58330cbfa0bb9f005a0fed62)

[https://juejin.im/entry/58759e79128fe1006b48cdfd](https://juejin.im/entry/58759e79128fe1006b48cdfd)

递归
[https://segmentfault.com/a/1190000009857470](https://segmentfault.com/a/1190000009857470)