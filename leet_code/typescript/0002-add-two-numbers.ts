// ─── 1. Problem ───────────────────────────────────────────────────────────────
/**
 * 2. Add Two Numbers
 * Medium · https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Examples:
 *   Input:  l1 = [2,4,3], l2 = [5,6,4]           →  Output: [7,0,8]
 *           Explanation: 342 + 465 = 807
 *   Input:  l1 = [0], l2 = [0]                   →  Output: [0]
 *   Input:  l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] →  Output: [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 *   The number of nodes in each linked list is in the range [1, 100].
 *   0 <= Node.val <= 9
 *   It is guaranteed that the list represents a number that does not have
 *   leading zeros.
 *
 * Definition for singly-linked list (provided by LeetCode):
 *   class ListNode {
 *       val: number
 *       next: ListNode | null
 *       constructor(val?: number, next?: ListNode | null) {
 *           this.val = (val===undefined ? 0 : val)
 *           this.next = (next===undefined ? null : next)
 *       }
 *   }
 */

// ─── 2. Solution ──────────────────────────────────────────────────────────────

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

// Original (LeetCode submission)
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const getListNumber = (listNode: ListNode): number => {
    const fullNum: string[] = [];
    let currNode: ListNode | null = listNode;

    while (currNode) {
      const val = currNode.val;
      fullNum.push(val.toString());

      if (currNode.next) {
        currNode = currNode.next;
      } else {
        currNode = null;
      }
    }

    return fullNum.length ? Number(fullNum.reverse().join("")) : 0;
  };

  const firstNum = getListNumber(l1!);
  const secondNum = getListNumber(l2!);

  const totalNum = (firstNum + secondNum).toString().split("").reverse();

  const newList = new ListNode(Number(totalNum[0]), null);

  let newCurrNode = newList;
  for (let i = 1; i < totalNum.length; i++) {
    const nextNewNode = new ListNode(Number(totalNum[i]));
    newCurrNode.next = nextNewNode;
    newCurrNode = nextNewNode;
  }

  return newList;
}

// Cleaned up
function addTwoNumbersClean(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    carry = Math.floor(sum / 10);
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}

// ─── 3. Complexity ────────────────────────────────────────────────────────────
// Original:
//   Time:  O(m + n)  — traverse both lists, then build result
//   Space: O(m + n)  — digit arrays/strings before rebuilding list
//
// Cleaned up:
//   Time:  O(max(m, n))
//   Space: O(max(m, n))  — output list only; no intermediate number conversion
