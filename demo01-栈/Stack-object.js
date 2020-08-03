/**
 * 创建一个基于JavaScript对象的Stack类
 */

class Stack {
    constructor () {
        this.count = 0;
        this.items = {};
    }

    // 返回栈的大小
    size () {
        return this.count;
    }

    isEmpty () {
        return this.count === 0;
    }

    push (elem) {
        this.items[this.count] = elem;
        this.count++;
    }

    pop (elem) {
        if (this.isEmpty()) {
            return undefined;
        }
        
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek () {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    clear () {
        this.items = {};
        this.count = 0;
    }

    toString () {
        if (this.isEmpty()) {
            return '';
        }

        let objString = this.items[0];
        for (let i=1;i<this.count;i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const stack = new Stack();
stack.push(3);
stack.push(8);
stack.push('c');
console.log(stack.toString());
console.log(Object.keys(stack));
console.log(Object.getOwnPropertyNames(stack));
console.log(stack.items);

// 如何保护数据结构内部元素
// 第一种： 下划线命名约定 不过这种方式只是一种约定，并不能保护数据
// 第二种： 用ES6的限定作用域Symbol实现类
// 第三种： 用ES6的WeakMap实现类

// 类属性提案，还未被应用
// class stack {
//     #count = 0;
//     #items = {};
// }