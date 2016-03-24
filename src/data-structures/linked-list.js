export default class LinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    if (!this.head) {
      this.head = this._createNode(value);
      this.tail = this.head;
      return;
    }

    this.tail.next = this._createNode(value);
    this.tail = this.tail.next;
  }

  find(value) {
    if (this.head.value === value) {
      return true;
    }

    let curr = this.head;

    while (curr) {
      if (curr.value === value) return true;

      curr = curr.next;
    }

    return false;
  }

  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;

    while (curr.next) {
      if (curr.next.value === value) {
        if (this.tail.value === curr.next.value) {
          this.tail = curr;
        }

        curr.next = curr.next.next;
        break;
      }

      curr = curr.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  toArray() {
    let curr = this.head;
    let arr = [];

    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }

    return arr;
  }

  _createNode(value) {
    return {
      value,
      next: null
    };
  }
}
