/**
 * @Author: 王贺
 * @Date:   2018-10-08T10:11:54+08:00
 * @Last modified by:   王贺
 * @Last modified time: 2019-01-02T21:35:27+08:00
 */



//1.利用script标签异步加载
    // 就是利用<script>标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。
    // 当需要通讯时，本站脚本动态创建一个<script>元素，地址指向第三方的API网址，形如：
    // <script src="http://www.example.net/api?param1=1&param2=2"></script>
    // 并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。
    // 第三方产生的响应为js代码块，是 <script>callback({"name":"hax","gender":"Male"})</script>
    // 是json数据的包装（故称之为jsonp，即json padding），形如: callback({"name":"hax","gender":"Male"})
    // 这样浏览器会调用callback函数，(全局函数)并传递解析后json对象作为参数。本站脚本可在callback函数里处理所传入的数据。


    // 注册全局函数
    <script type="text/javascript">
        function handleResponse(response){
                console.log(response);
        }
    </script>
    // 动态创建script标签，并把函数名传到URL地址里,服务端返回的是js代码块，把script标签插入页面中
    <script type="text/javascript">
        window.onload = function() {

        var oBtn = document.getElementById('btn');

        oBtn.onclick = function() {

            var script = document.createElement("script");
            script.src = "https://api.douban.com/v2/book/search?q=javascript&count=1&callback=handleResponse";
            document.body.insertBefore(script, document.body.firstChild)
        }
    }
    </script>

    // 2.HSAH
    // 利用hash，场景是当前页面A通过ifame嵌入了跨域页面B， A 给B发消息
    // A中代码

    var B = document.querySelector('iframe')
    B.src = B.src + '#' + 'data'
    // B中代码，监听hash是否发生变化
    window.onhashchange = function(){
        var data = window.location.hash
    }
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage
// 3.postMessage
    // postMessage是html5引入的API可以更方便、有效、安全的解决这些问题。
    // 多窗口之间消息传递(newWin = window.open(..));页面与嵌套的iframe消息传递
    // otherWindow.postMessage(message, targetOrigin, [transfer]);

    // 窗口A（http:A.com）向跨域的窗口B(http:B.com)发送信息 A.html 和 B.html
    // A中代码  首先在A中引用一个B窗口的对象 比如iframe
    // var iframe = document.querySelecor('iframe')
    // iframe.contentWindow.postMessage('data', 'http:B.com')
    var baidu = window.open('https://www.baidu.com')
    baidu.postMessage('data', 'http://B.com')
    window.addEventListener('message', function(event){
        console.log(event.orign)//http:B.com
        console.log(event.source)//B.window 的引用
        console.log(event.data)


    // B 中代码，监听
    window.addEventListener('message', function(event){
        console.log('origin',event.origin)//http:A.com 发送消息的网址
        console.log('source',event.source)//A.window的一个引用,发送消息的窗口
        console.log(event.data)
        if(event.origin !== 'http:A.com') return

        event.source.postMessage('hello,A','http:A.com')
    })



//4.WebSocket
18629368559
