class Solution {
    /**
     * Time O(n) | Space O(1)
     * Deletes a node from a doubly linked list.
     * @param {Object|null} head - The head node of the list (or null if the list is empty).
     * @param {Object|null} target - The node that must be removed (or null).
     * @returns {Object|null} The (possibly new) head of the list after deletion.
     */
    deleteNode(head, target) {
        // Your implementation here

        let pre = null;
        let curr = head;
        head.pre = pre;
        if (target === head) {
            pre = head;
            head = head.next;
            pre.next = null;
            if (head) {
                head.pre = null;
            }
            return head;
        }

        while (curr) {
            if (curr === target) {
                pre.next = curr.next;
                if (curr.next) {
                    curr.next.pre = pre;
                }
                curr.next = null;
                curr.pre = null;
                return head;
            }
            pre = curr;
            curr = curr.next;
        }
        
        return null; // default empty value
    }
}
