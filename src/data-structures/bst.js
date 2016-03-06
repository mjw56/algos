export default class Bst {
  root;

  constructor(init) {
    if (init) {
      this.root = this._createNode(init);
    }
  }

  add(value) {
    this._insert(this.root, value);
  }

  getRoot() {
    return this.root;
  }

  /* eslint-disable consistent-return */
  _insert(node, value) {
    if (!node) {
      node = this._createNode(value);
      return;
    }

    if (value === node.value) return;

    if (value < node.value) {
      if (!node.left) {
        node.left = this._createNode(value);
      } else {
        this._insert(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = this._createNode(value);
      } else {
        this._insert(node.right, value);
      }
    }
  }

  _createNode(value) {
    return {
      value,
      left: null,
      right: null
    };
  }
}

