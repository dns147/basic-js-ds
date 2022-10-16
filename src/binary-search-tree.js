const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(value = null, left = null, right = null) {
    this.data = value;
    this.left = left;
    this.right = right;
  }

  root() {
    return (this.data) ? this : null;
  }

  add(data) {
    if (!this.data) {
      this.data = data;
      return;
    }

    if (data <= this.data) {
      if (this.left) {
        this.left.add(data);
      } else {
        this.left = new BinarySearchTree(data);
      }
    } else {
      if (this.right) {
        this.right.add(data);
      } else {
        this.right = new BinarySearchTree(data);
      }
    }
  }

  has(data) {
    if (data === this.data) {
      return true;
    } else if (this.left && data < this.data) {
      return this.left.has(data);
    } else if (this.right && data > this.data) {
      return this.right.has(data);
    } else {
      return false;
    }
  }

  find(data) {
    if (data === this.data) {
      return this;
    } else if (this.left && data < this.data) {
      return this.left.find(data);
    } else if (this.right && data > this.data) {
      return this.right.find(data);
    } else {
      return null;
    }
  }

  remove(data) {
    if (this.data === null) {
      return null;
    } else if (data < this.data) {
      this.left = this.left.remove(data);
    } else if (data > this.data) {
      this.right = this.right.remove(data);
    } else {
      if (data === this.data && this.left === null && this.right) {
        this.data = this.right.data;
        this.left = this.right.left;
        this.right = this.right.right;
        return this;
      }

      if (data === this.data && this.right === null && this.left) {
        this.data = this.left.data;
        this.left = this.left.left;
        this.right = this.left.right;
        return this;
      }

      if (data === this.data && this.left === null && this.right === null) {
        this.data = null;
        return null;
      }

      if (data === this.data && this.right && this.left) {
        const max = this.maxRight(this.right);
        this.remove(max);
        this.data = max;
        return this;
      }
    }

    return this;
  }

  maxRight(node = this) {
    if (node.left === null) {
      return node.data;
    } else {
      return node.left.maxRight();
    }
  }

  min() {
    if (this.left === null) {
      return this.data;
    } else {
      return this.left.min();
    }
  }

  max() {
    if (this.right === null) {
      return this.data;
    } else {
      return this.right.max();
    }
  }
}

module.exports = {
  BinarySearchTree
};