const DoublyLinkedList = function () {
  const virtualHead = new ListNode();
  const virtualTail = new ListNode();
  virtualHead.next = virtualTail;
  virtualTail.prev = virtualHead;
  this.virtualHead = virtualHead;
  this.virtualTail = virtualTail;
};

DoublyLinkedList.prototype.addHead = function (node) {
  node.next = this.virtualHead.next;
  node.next.prev = node;
  node.prev = this.virtualHead;
  this.virtualHead.next = node;
};

DoublyLinkedList.prototype.addTail = function (node) {
  node.prev = this.virtualTail.prev;
  node.prev.next = node;
  node.next = this.virtualTail;
  this.virtualTail.prev = node;
};

DoublyLinkedList.prototype.getHead = function () {
  if (!this.isEmpty()) {
    return this.virtualHead.next;
  }
};

DoublyLinkedList.prototype.getTail = function () {
  if (!this.isEmpty()) {
    return this.virtualTail.prev;
  }
};

DoublyLinkedList.prototype.removeHead = function () {
  if (!this.isEmpty()) {
    return this.virtualHead.next.remove();
  }
};

DoublyLinkedList.prototype.removeTail = function () {
  if (!this.isEmpty()) {
    return this.virtualTail.prev.remove();
  }
};

DoublyLinkedList.prototype.isEmpty = function () {
  return this.virtualHead.next === this.virtualTail;
};

DoublyLinkedList.prototype.toString = function () {
  const strArr = ["head"];
  let node = this.virtualHead.next;
  while (node !== this.virtualTail) {
    strArr.push(node.val);
    node = node.next;
  }
  strArr.push("tail");
  return strArr.join(" <-> ");
};

const ListNode = function (val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

ListNode.prototype.remove = function () {
  if (this.prev) {
    this.prev.next = this.next;
  }
  if (this.next) {
    this.next.prev = this.prev;
  }
  return this;
};

module.exports = { DoublyLinkedList, ListNode };
