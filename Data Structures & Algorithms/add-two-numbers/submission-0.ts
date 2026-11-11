/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class ListNode {
//     val: number;
//     next: ListNode | null;

//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let carry = 0;
        let dummyHead  = new ListNode(0);
        let currentNode = dummyHead;

        while (l1 !== null || l2 !== null || carry !== 0) {
            const a = l1 ? l1.val : 0;
            const b = l2 ? l2.val : 0;

            const sum = a + b + carry;
            carry = Math.floor(sum / 10);
            const val = sum % 10;

            currentNode.next = new ListNode(val);
            currentNode = currentNode.next;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummyHead.next;
    }
    
}
