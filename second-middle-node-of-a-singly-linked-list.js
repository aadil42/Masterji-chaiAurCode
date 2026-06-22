class Solution {
    /**
     * Time O(n) | Space O(1)
     * Find the middle node of a singly linked list. If the list has an even number of nodes, return the second middle node.
     * @param {Object} head - The head node of the linked list (ListNode with properties 'val' and 'next').
     * @return {Object|null} The middle ListNode, or null for an empty list.
     */
    middleNode(head) {
        // Your implementation here
        const targetNode = Math.floor(this.getLen(head)/2)+1;
        let idx = 1;

        while (head) {
            if (idx === targetNode) return head;
            head = head.next;
            idx += 1;
        }
        
        return null;
    }

    getLen(head) {
        let count = 0;

        while (head) {
            count += 1;
            head = head.next;
        }
        return count;
    }
}