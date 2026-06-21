class Solution {
    /**
     * Time O(n) | Space O(1)
     * Removes every k-th node from a singly linked list.
     * @param {ListNode|null} head - The head of the linked list.
     * @param {number} k - The interval (1‑based) of nodes to remove.
     * @return {ListNode|null} The head of the modified list.
     */
    removeEveryKthNode(head, k) {
        // Your implementation here

        // take care of the edge cases. 

        const len = this.getLen(head);
        
        if (k === 1) return null;
        if (len < k) return head;
        
        let idx = 1;
        let curr = head;
        let pre = new ListNode(null);
        pre.next = curr;

        while (curr) {
            if (this.isFactorOf(idx, k)) {
                pre.next = curr.next;
                pre = curr;
                curr = curr.next;
                idx++;
                continue;
            }
            pre = curr;
            curr = curr.next;
            idx++;
        }
        
        return  head// return the new head (null if the list becomes empty)
    }

    
    getLen(head) {
        let count = 0;
        while (head) {
            count++;
            head = head.next;
        }
        return count;
    }
    isFactorOf(product, multiplicand) {
        return !(product%multiplicand);
    }
}

/**
 * Definition for singly‑linked list node (for reference).
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */