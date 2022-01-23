/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let left = head;
    let right = head;
    for(let i = 0; i < n;i++) {
        right = right.next;
    }

    // right为undefined的时候或者下一个节点为空的时候判断一下，直接不要第一个节点
    if(!right || head.next == undefined) {
        return head.next
    }

    // 快慢指针，如果right到了尽头，left的下一个节点就是要删除的节点。
    while(right && right.next != null) {
        left = left.next;
        right = right.next;
    }

    left.next = left.next.next;

    return head;
};
