# Javascript 数据结构与算法

对于计算机科学，算法是最基础的概念。

首要原因是数据结构和算法可以很高效地解决常见问题。

于此同时，如果你想入职最好的IT公司（如谷歌、亚马逊，微软还有中国的阿里、字节等等），这都是大厂必考。

## 栈 Stack

栈是一种遵从先进后出（LIFO）原则的有序集合

它可以基于数组实现 也可以基于对象实现

## 队列

### 基础队列 Queue

队列是遵循先进先出（FIFO）原则的一组有序的项

队列在末尾添加新元素，并从顶部移除元素

在现实生活中，最常见的例子就是：排队

### 双端队列 Deque

双端队列是一种允许我们同时从前端和后端添加和移除元素的特殊队列

它同时遵守了先进先出和后进先出的原则

可以说是它是把队列和栈相结合的一种数据结构

## 链表

### 普通链表 LinkedList

数组可能是最常用的数组结构，然后这种数据结构有一个缺点：数组的大小是固定的，从数组的起点或中间插入或移除项的成本很高，因为需要移动元素

所以相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其它元素

链表使用指针

### 双向链表 DoublyLinkedList

双向链表与普通链表的区别在于：
在链表中，一个节点只有链向下一个节点的链接；而在双向链表中，链接是双向的；一个链向下一个元素，另一个链向前一个元素

