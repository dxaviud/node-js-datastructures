const { DoublyLinkedList, ListNode } = require("./DoublyLinkedList");

// Solving LRUCache problem from LeetCode (https://leetcode.com/problems/lru-cache/) using DoublyLinkedList

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.map = {};
  this.ll = new DoublyLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  console.log("state:", this);
  console.log("ll:", this.ll.toString());
  console.log("get", key);
  if (key in this.map) {
    const node = this.map[key].remove();
    this.ll.addHead(node);
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  console.log("state:", this);
  console.log("ll:", this.ll.toString());
  console.log("put", key, value);
  if (key in this.map) {
    const node = this.map[key].remove();
    node.val = value;
    this.ll.addHead(node);
  } else {
    if (this.size === this.capacity) {
      const node = this.ll.removeTail();
      delete this.map[node.key];
      this.size--;
    }
    const node = new ListNode(value);
    node.key = key;
    this.map[key] = node;
    this.ll.addHead(node);
    this.size++;
  }
};

module.exports = LRUCache;
