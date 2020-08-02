/**
 * 双端队列
 * 是允许我们同时从前端和后端添加和移除元素的特殊队列
 */

class Deque {

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    isEmpty() {
        return this.count === this.lowestCount;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    toString() {
        
    }

    size() {
        return this.count - this.lowestCount;
    }

    addFront(elem) {
        if (this.isEmpty()) {
            this.addBack(elem);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = elem;
        } else {
            for (let i=this.count;i>0;i--) {
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = elem;
        }
    }

    // 向末尾添加元素
    addBack(elem) {
        this.items[this.count] = elem;
        this.count++;
    }

    // 移除前端的第一个元素
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    // 移除末尾元素
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.lowestCount++;
        return result;
    }

    // 查看双端队列前端的第一个元素
    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.count - 1];
    }

}

// const deque = new Deque();
// const { log } = console;

// log(deque.isEmpty());
// deque.addFront(3);
// deque.addFront(11);
// log(deque.size());
// deque.addBack(33);
// log(deque.isEmpty());
// log(deque.size());
// log(deque);

// deque.addFront('zhang san');
// deque.addBack('li si');
// deque.removeFront();
// deque.removeBack();
// log(deque);


// 回文数
function palindromeChecker(aString) {
    if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
        return false;
    }

    const deque = new Deque();

    const lowerString = aString.toLocaleLowerCase().split(' ').join();

    let isEqual = true;
    let firstChar,lastChar;

    for (let i=0; i<lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}

console.log(palindromeChecker('1001'))

