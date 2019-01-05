/**
 * @Author: 王贺
 * @Date:   2019-01-03T16:02:51+08:00
 * @Last modified by:   王贺
 * @Last modified time: 2019-01-05T22:44:50+08:00
 */



#js 的数据结构与算法

----------

# 1.用数组构建栈和队列，链表
# 2.利用object 创建集合，字典，散列表
# 3. 树和图
# 4.各种排序方法实现
参考文章
https://juejin.im/entry/58759e79128fe1006b48cdfd 和下面的是同一个作者
http://huang303513.github.io/2016/12/08/Javascript%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95(%E4%B8%80).html

----------
1.数组
1.1 js数组的方法
见https://wangdoc.com/javascript/stdlib/array.html#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95

        every:      对数组中的每一项运行给定的函数，如果该函数对每一项都返回true，则返回true。   判断数组中每个元素是不是都满足
        some:       对数组中的每一项运行给定函数，如果任一项返回true，则返回true。                有一个满足就行
        filter:     对数组中的每一项运行给定函数，返回改函数会返回true的项组成的数组。             过滤数组不满足的剔除掉
        forEach:    对数组中的每一项运行给定函数，这个方法没有返回值。
        map:        对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

        indexOf: 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1。
        lastIndexOf: 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值。
        reverse: 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成现在的第一个。
        sort: 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数。sort的参数函数本身接受两个参数，表示进行比较的两个数组成员。如果该函数的返回值大于0，表示第一个成员排在第二个成员后面；其他情况下，都是第一个元素排在第二个元素前面。
        toString: 将数组作为字符串返回。
        valueOf: 和toString相似，将数组作为字符串返回。

        push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。
        pop方法用于删除数组的最后一个元素，并返回该元素。注意，该方法会改变原数组。
        shift()方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。
        unshift()方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。
        join()方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。
        concat方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。
        slice方法用于提取目标数组的一部分，返回一个新数组，原数组不变。
        splice方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。注意，该方法会改变原数组。

        reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，
        reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。
1.2 迭代器函数
        var isEven = function(x,index,array) {
            return (x%2 === 0) ? true : false
        }
        var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        var result = numbers.every(isEven)
        var map = numbers.map(isEven)
        console.log(map)

        1.将数组所有元素连在一起
        var myReduce= numbers.reduce(function(a,b) {
            return a + '' + b
        })
        console.log(myReduce)
        numbers.join('')

        2.计算数组的和
        console.log(numbers.reduce(function(a,b) {
            return a + b
        }))

        3.排序,从小到大
        numbers.sort(function(a,b){
            return a-b
        })

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
2.数组构建栈，先进后出，我们需要实现添加、删除元素、获取栈顶元素、已经是否为空，栈的长度、清除元素等几个基本操作。下面是基本定义。

2.1 构造函数实现栈

function Stack() {
    this.items = []
}
Stack.prototype = {

    constructor: Stack,
    // 1.添加元素
    push: function(element) {
        this.items.push(element)
    },
    // 2.删除元素
    pop: function(element) {
        this.items.pop(element)
    },
    // 3.获取栈顶元素
    peek: function() {
        return this.items[this.items.length - 1]
    },
    // 4.已经是否为空
    isEmpty: function() {
        return this.items.length === 0
    },
    // 5.清除元素
    clear: function() {
        this.items = []
    },
    // 6.栈的长度
    size:function(){
        return this.items.length;
      },
    // 7.打印
    print: function(){
        console.log(this.items.toString())
      }
}

2.2 class 实现栈

class Stack1 {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        this.items.pop()
    }
    peek() {
        return this.items[this.getCount() - 1]
    }
    getCount() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length === 0
    }

}

2.3 通过栈实现正整数10进制转二进制，原理是除2取余数，入栈，最后依次出栈，正好先进后出  10 1010

const divideBy22 = function(number) {

    if (number <= 0){
        return '请输入正整数'
    }
    let stack = new Stack1()
    let rem
    let decString = ''
    // 不停除2取余数入栈
    while(number > 0) {
        rem = number%2
        stack.push(rem)
        number = Math.floor(number/2)
    }
    // 栈非空，最后依次出栈
    while(!stack.isEmpty()) {
        decString += stack.pop().toString()
    }
    return decString

}
divideBy22()

function divideBy2(number) {
    if (number <= 0){
        return '请输入正整数'
    }
    let stack = new Stack()
    let rem
    let decString = ''
    // 不停除2取余数入栈
    while(number > 0) {
        rem = number%2
        stack.push(rem)
        number = Math.floor(number/2)
    }
    // 栈非空，最后依次出栈
    while(!stack.isEmpty()) {
        decString += stack.pop().toString()
    }
    return decString
}

2.4  LeetCode 20 匹配序号，原理是设置map ,循环将字符串入栈遇到不是一个方向的就入栈出栈看和是否为0
map={
    '(':'-1',
    ')':'1',
    '[':'-2',
    ']':'2',
    '{':'-3',
    '}':'3'
}

function isValid(s) {
    首先可以对s进行验证，比如是否为字符串，长度是否为偶数，第一个括号的方向
    let map={
        '(':'-1',
        ')':'1',
        '[':'-2',
        ']':'2',
        '{':'-3',
        '}':'3'
    }
    let stack = []
    // 循环将字符串入栈,遇到不是一个方向的就入栈出栈看和是否为0
    for(let i=0; i<s.length; i++) {
         if(map[s[i]]<0) {
             stack.push(s[i])
         }
         // 方向不同就和上一个相加
         else {
             let last = stack.pop()
             if(map[last] + map[s[i]] !=== 0) return false
         }
    }
    if(stack.length === 0) return false
    return true
}
——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
3.队列，单链队列，循环队列

单链队列出队的时间复杂度是O(n),因为要遍历整个队列
单链队列入队和出队时尾部指针和头部指针+1
class Queue {
    constructor() {
        this.queue = []
        this.name = 'duilie'
    }
    enQueue(ele) {
        this.queue.push(ele)
    }
    deQueue() {
        this.queue.shift()
    }
    getHeader() {
        return this.queue[0]
    }
    isEmpty() {
        return this.queue.length === 0
    }
}

// 循环队列
class SqQueue {
    constructor(length) {
        this.queue = new Array(length + 1)
        this.first = 0
    }
}
// 优先队列，使用继承
class PriorityQueue1 extends Queue{
    constructor() {
        super()
    }
    print() {
        console.log(this.queue)
    }
    enqueue(element, priority) {
        // 首先定义一个对象，包含元素和优先级
        let queueElement = {
            'element':element,
            'priority': priority
        }
        // function QueueElement(tempelement,temppriority){
        //     this.element = tempelement;
        //     this.priority = temppriority;
        // }
        // var queueElement = new QueueElement(element,priority);
        // 如果队列为空，就添加这个对象
        if(this.isEmpty()){
            this.queue.push(queueElement)
        }
        // 如果队列不为空，遍历队列，比较将要入列的元素的优先级，数值小的排在前面，利用splice方法，插入后break
        else{
            let added = false;
            for(let i = 0; i < this.queue.length;i++){
                if(queueElement.priority < this.queue[i].priority) {
                    this.queue.splice(i,0,queueElement)
                    added = true
                    break
                }
            }
            // 如果队列中优先级都比要插入的对象高，那就放到队尾，用added表示有没有插入进去
            if(!added){
                this.queue.push(queueElement)
            }
        }
    }
}
var sed = new PriorityQueue1()
sed.enqueue('a',6)
