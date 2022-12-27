class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedLists {
  constructor() {
    this.headNode = null;
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  append(value) {
    if (this.headNode == null) {
      this.prepend(value)
    } else {
      let tmp = this.headNode;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      };
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    if (this.headNode == null) return 0;

    let tmp = this.headNode;
    let count = 0;

    while (tmp != null) {
      tmp = tmp.nextNode;
      count++;
    }

    return count;
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    let tmp = this.headNode;

    while (tmp != null) {
      tmp = tmp.nextNode;
      if (tmp.nextNode == null) return tmp.value;
    }
  }

  at(index) {
    let count = 0;
    let tmp = this.headNode;

    while (tmp != null) {
      if (count === index) return tmp.value;
      tmp = tmp.nextNode;
      count++
    }

    return null;
  }

  pop() {
    let tmp = this.headNode;

    while (tmp != null) {
      if (tmp.nextNode.nextNode == null) {
        tmp.nextNode = null;
      };
      tmp = tmp.nextNode;
    }
  }

  contains(value) {
    let tmp = this.headNode;

    while (tmp != null) {
      if (tmp.value === value) {
        return true;
      }
      tmp = tmp.nextNode;
    }

    return false;
  }

  find(value) {
    let count = 0;
    let tmp = this.headNode;

    while (tmp != null) {
      if (tmp.value === value) return count;
      tmp = tmp.nextNode;
      count++
    }

    return null;
  }

  toString() {
    let listArray = [];
    let tmp = this.headNode;

    while (tmp != null) {
      listArray.push(tmp.value);
      if (tmp.nextNode == null) listArray.push('null');
      tmp = tmp.nextNode;
    }

    return listArray.join(' -> ');
  }

  insertAt(value, index) {
    if (index > this.size()) {
      console.log(`Error: Index doesn't exist`);
      return;
    }

    if (index === 0) {
      let newNode = new Node(value, this.headNode);
      this.headNode = newNode;
      return;
    }

    let count = 0;
    let tmp = this.headNode;

    while (count < index) {
      if (count === index - 1) {
        let newNode = new Node(value, tmp.nextNode)
        tmp.nextNode = newNode;
      }
      tmp = tmp.nextNode;
      count++
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let count = 0;
    let tmp = this.headNode;

    while (count < index) {
      if (count === index - 1) {
        tmp.nextNode = tmp.nextNode.nextNode
      }
      tmp = tmp.nextNode;
      count++
    }
  }
}