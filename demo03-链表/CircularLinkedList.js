/**
 * 循环链表
 * 普通链表和双向链表的组合
 * 循环链表与上两个链表的区别在于
 * 最后一个元素指向下一个元素的指针（tail.next）不是引用undefined，而是执行第一个元素head
 */
class Node {
    constructor (el) {
        this.element = el;
        this.next = undefined;
    } 
}

function defaultEquals (a, b) {
    return a === b;
}

 class LinkedList {

    constructor (equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    // 末尾添加元素
    push (element) {
        const node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }

            //
            current.next = node;
        }
        this.count++;
    }

    // 通过索引移除某个元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {

            let current = this.head;

            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }

            this.count--;
            return current.element;
        }
    }

    // 通过索引获取元素
    getElementAt(index) {

        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i<index && node != null; i++) {
                node = node.next;
            }
            return node;
        }

        return undefined;
    }

    // 在指定位置添加element
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) { // 在第一个位置添加
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 查到元素返回索引
    indexOf(element) {
        let current = this.head;

        for(let i=0; i<this.count && current!=null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next
        }

        return -1;
    }

    // 移除元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this.head;
    }

    toString() {
        if (this.head === null) {
            return ''
        }

        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i=1; i<this.count && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }

}

// 循环链表 继承在 基础链表之下
// 代码如下

class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (current == null) {
                    this.head = node;
                    node.next = current;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    this.head = node;
                    current.next = node;
                }
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 如果是第一项
    // 则需要将this.head 移除 将
    // 
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    let current = this.head;
                    // 修改第一项
                    this.head = current.next;
                    // 修改最后一项
                    const previous = this.getElementAt(this.size());
                    previous.next = this.head;
                }
            } else {
                let previous = this.getElementAt(index - 1);
                const current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return true;
        }
        return false;
    }
}