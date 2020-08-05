// 创建集合类
class Set {
    constructor() {
        this.items = {};
    }

    // 如果元素在集合中，返回true，否则返回false
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
        // 为什么不用 this.items.hasOwnProperty(element); ?
        // 具体原因请看书籍 120页 《学习 Javascript 数据结构与算法》
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    // 获取对象的数量 方法一
    size() {
        return Object.keys(this.items).length;
    }

    // 获取对象的数量 方法二
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

}