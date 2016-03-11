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

  _createNode(value) {
    return {
      value,
      next: null
    };
  }
}
