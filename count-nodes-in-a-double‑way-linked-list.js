class Solution {
  /**
   * Time O(n) | Space O(1)
   * Counts the number of nodes in a doubly linked list.
   * @param {Object|null} head - The head node of the doubly linked list (or null for empty list).
   * Each node is expected to have the shape `{ val: number, prev: Object|null, next: Object|null }`.
   * @returns {number} The total number of nodes.
   */
  countNodes(head) {
    // Your implementation here

    let count = 0;
    while (head) {
        count += 1;
        head = head.next;
    }
    return count;
      
  }
}