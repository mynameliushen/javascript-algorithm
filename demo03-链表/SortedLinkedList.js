/**
 * 有序链表
 * 有序链表是指保持元素有序的链表结构
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

// 有序链表 代码如下：

const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    } 
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class SortedLinkedList extends LinkedList {

    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }


    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
        
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for(; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i
            }
            current = current.next;
        }
        return i;
    }
}