/**
 * 第四章 栈与队列
 * 栈是一种遵从后进先出(LIFO)原则的有序集合
 * 创建一个基于数据的栈
 * */
class Stack {
    constructor() {
        this.items = [];
    }

    // 向栈添加元素
    push(elem) {
        this.items.push(elem);
    }

    // 向栈移除元素
    pop(elem) {
        return this.items.pop();
    }

    // 查看栈顶元素
    peek() {
        return this.items[this.items.length - 1];
    }

    // 查看栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    // 清空栈
    clear() {
        this.items = [];
    }
}

// 使用栈
const stack = new Stack();
console.log(stack.isEmpty());   // 查看栈是否为空
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.pop();
console.log(stack.size());
