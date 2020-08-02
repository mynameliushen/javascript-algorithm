/**
 * 队列
 * 先进先出的原则 例子：排队
 */

class Queue {
    constructor() {
        this.count = 0; // 使用count属性来帮助我们控制队列的大小
        this.lowestCount = 0; // 由于我们将要从队列前端移除元素，同样需要一个变量来帮助我们追踪第一个元素
        this.items = {};    // 使用对象来存储我们的元素 也可以是数组
    }

    // 向队列尾部添加一个或多个元素
    enqueue (elem) {
        this.items[this.count] = elem;
        this.count++;
    }

    // 移除队列的第一项
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    
    // 返回队列的第一个元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    // 判断是否为空
    isEmpty() {
        return this.lowestCount === this.count;
    }

    // 返回队列包含的元素个数
    size() {
        return this.count - this.lowestCount;
    }

    // 清空列表
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    // toString
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = this.items[this.lowestCount];
        for (let i=this.lowestCount+1;i<this.count;i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('33');
// queue.enqueue(5);
// queue.enqueue(88);
// queue.dequeue();
// console.log(queue.size());
// console.log(queue.toString());
// console.log(queue.peek());

// 循环队列 - 击鼓传花游戏
function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    
    for (let i=0; i<elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }

    while (queue.size() > 1) {
        for (let i=0; i<num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }

    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl', 'Lnic'];
const result = hotPotato(names, 10);
result.eliminated.forEach(v => {
    console.log(`${v}在击鼓传花游戏中被淘汰`);
})
console.log(`获胜者:${result.winner}`)