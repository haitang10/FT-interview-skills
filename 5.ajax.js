/**
 * @Author: 王贺
 * @Date:   2018-12-22T19:21:55+08:00
 * @Last modified by:   王贺
 * @Last modified time: 2019-01-02T16:42:18+08:00
 */
 /*
 XMLHttpRequest 对象的工作流程
     1. 创建XMLHttpRequest 实例,并做兼容性处理
     2. 发送http请求
     3. 接受并处理服务器传回的数据
     4. 更新网页数据

更多内容详见
https://wangdoc.com/javascript/bom/xmlhttprequest.html
https://www.jianshu.com/p/2be2e4f1fc8e
https://segmentfault.com/a/1190000008950789
  */

var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveObject('Microsoft.XMLHTTP')
// XMLHttpRequest.open()方法用于指定 HTTP 请求的参数，
// 或者说初始化 XMLHttpRequest 实例对象。它一共可以接受五个参数。
xhr.open('GET', 'http://www.baidu.com', true)

// 所有XMLHTTPRequest对象的事件绑定都应该放在send() 方法前
xhr.onreagystatechange = function() {
    if(xhr.readyState === 4){
        // 请求结束，处理服务器返回的数据
        if(xhr.status === 200 || xhr.status === 304){
            console.log(xhr.responseText)
        }
        else{
            console.error(xhr.statusText)
        }
    }
    else{
        // 加载中
    }
}
xhr.onerror = function(e) {
    console.error(xhr.statusText)
}
// 请求成功完成）的监听函数
xhr.onload = function() {
    if(xhr.status === 200 || xhr.status === 304){
        console.log(xhr.responseText)
    }
    else{
        console.error(xhr.statusText)
    }
}

xhr.send()
