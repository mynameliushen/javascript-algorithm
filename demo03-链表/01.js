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

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) { // 在第一个位置添加
                
            }
        }
    }

}

// const list = new LinkedList();
// list.push(15);
// console.log(list)
// list.push(20);
// console.log(list);