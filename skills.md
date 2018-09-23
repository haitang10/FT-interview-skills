@@ -0,0 +1,140 @@
1. 课程安排：                                             切忌浮躁！！！

    1.1 模拟一面：
          面试技巧  页面布局类
          CSS盒模型  DOM 事件类
          HTTP 协议  原型链
          面向对象  通信
          前端安全  前端算法

    1.2 模拟二面：
          面试技巧
          渲染机制
          js 运行机制
          页面性能
          错误监控

    1.3 模拟三面：
          面试技巧
          业务能力
          团队协作能力
          带人能力

    1.4 模拟终面：
          面试技巧
          职业竞争力
          职业规划

2. 面试准备
    2.1 如何看待面试，面试究竟是什么？ 选拔 ？筛选？
    2.2 校招，社招的区别？ 知识，经验，能力
    2.3 一面 基础知识 二面 基本原理 三面   HR
    2.4 职位描述分析 (JD)


3. 一面

    3.1 页面布局 见 layout.html
        假设高度已知，请写出三栏布局，其中左栏，右栏宽度300px,中间自适应。
        技术实现：float 绝对定位 grid 表格 flex

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

    3.2 CSS 盒模型
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


    3.3 DOM 事件
        基本概念: DOM 事件的级别
                 DOM 事件模型
                 DOM 事件流
                 描述dom 事件捕获的具体流程

    3.4 HTTP 协议类

        3.4.1 HTTP 协议主要特点
              无连接 无状态 灵活 简单快速
        3.4.2 HTTP 协议报文组成
              请求报文 相应报文
              1，请求行或者响应行  方法 协议版本  状态码
              2，Header（请求的 Header 中 Host 字段是必须的，其他都是可选）
              3，\r\n\r\n（连续两个换行回车符，用来分隔Header和Body）
              4，Body（可选）

        HTTP 协议方法   GET POST PUT  DELETE
        GET POST 区别
        HTTP 状态码
          1 指示信息
          2 成功 200 OK
          3 重定向
          4 客户端错误  403 访问被禁止 404  资源不存在
          5 服务器错误

        持久连接 管线化

    3.5 原型链类
        创建对象的几种方法
        原型 构造函数 实例 原型链
        instanceof 的原理
        new 运算符

    3.6 面向对象类



    3.7 通信类
        同源策略和限制
        协议 域名 端口 任一一个不一样都是跨域

        前后端如何通信 AJAX WebSocket CORS
        如何创建 AJAX
        跨域通信的几种方式

    3.8 算法类 快排 选择 希尔
