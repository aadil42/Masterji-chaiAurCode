class Solution {
    /**
     * Time O(n) | Space O(1)
     * Reverses a doubly linked list in‑place.
     * @param {Object|null} head - The first node of the list (or null for empty list).
     * The node is expected to have the shape { val: number, prev: Object|null, next: Object|null }.
     * @returns {Object|null} - The new head of the reversed list.
     */
    flipDoublyLinkedList(head) {
        // Your implementation here
        head = this.reverseRightToLeft(head);
        this.reverseLeftToRight(head);
        return head;
    }
    reverseRightToLeft(head) {
        let pre = null;
        let curr = head;

        while (curr) {
            let next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        return pre;
    }
    
    reverseLeftToRight(head) {
        let next = null;
        let curr = head;

        while (curr) {
            let pre = curr.pre;
            curr.pre = next;
            next = curr;
            curr = pre;
        }
    }
}