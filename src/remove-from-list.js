const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  if (!list){
    return list;
  }
 
  while (list.value === k) {
    list = list.next;
  }
 
  let thisNode1 = list;
  let nextNode1 = thisNode1.next;
 
  while (nextNode1) {
    if (nextNode1.value === k) {
      thisNode1.next = nextNode1.next;

      if (thisNode1.next === null) {
        break;
      }
    }

    thisNode1 = thisNode1.next;
    nextNode1 = thisNode1.next;       
  }

  let thisNode2 = list;
  let nextNode2 = thisNode2.next;
 
  while (nextNode2) {
    if (nextNode2.value === k) {
      removeKFromList(list, k);
    }

    thisNode2 = thisNode2.next;
    nextNode2 = thisNode2.next;       
  }

  return list;
}

module.exports = {
  removeKFromList
};
