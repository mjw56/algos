export default class LinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
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

  _createNode(value) {
    return {
      value,
      next: null
    };
  }
}
