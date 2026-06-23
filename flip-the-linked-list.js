class Solution {
    /**
     * Time O(n) | Space O(1)
     * Reverses the singly linked list.
     * @param {ListNode|null} head - The head node of the linked list.
     * @return {ListNode|null} The new head of the reversed list.
     */
    flipLinkedList(head) {
        // Your implementation goes here.
        // Remember to adjust the `next` pointers of each node.

        let pre = null;
        let curr = head;

        while (curr) {
            let next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        
        return pre; // placeholder
    }
}