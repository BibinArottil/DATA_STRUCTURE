// Create a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();
console.log("List is empty", list.isEmpty()); // true
console.log("List size", list.getSize()); // 0
