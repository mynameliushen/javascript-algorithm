
/**
 * 双向链表
 * 双向链表和普通链表的区别在于
 * 在链表中，一个节点只有链向下一个节点的连接
 * 在双向链表中 链接是双向的 一个链向下一个元素 另一个链向前一个元素
 * 以下具体实现方法
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


// 双向链表在普通链表的基础上衍生

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
}


class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    insert(element, index) {
        if (index>=0 && index<=this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index - 1);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return true;
        }
        return false;
    }
}