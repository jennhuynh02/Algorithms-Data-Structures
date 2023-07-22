// Problem 2:  Add two numbers

/**
 * Definition for singly-linked list.
*/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// Naive brute force approach
const getNumber = (node) => {
  const listOfNums = []

  let currentNode = node
  while (currentNode) {
    listOfNums.push(currentNode.val)
    if (currentNode.next) {
      currentNode = currentNode.next
    } else {
      currentNode = null;
    }
  }

  return BigInt((listOfNums.reverse().join('')).toString())
}

const createALinkedList = (list) => {
  if (list.length < 1) return;

  const head = new ListNode(list.pop());
  let currNode = head;

  while (list.length) {
    const newNode = new ListNode(list.pop());
    currNode.next = newNode;
    currNode = newNode;
  }

  return head;
}

const addTwoNumbers = (l1, l2) => {
  const firstNum = getNumber(l1)
  const secondNum = getNumber(l2)
  const total = firstNum + secondNum
  console.log({ firstNum, secondNum, total })

  const list = total.toString().split('') || []

  return createALinkedList(list)
}

// Approach 1
const addTwoNumbers1 = (l1, l2) => {
  const list = new ListNode(0)
  let head = list
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum);
    head = head.next

    sum = carry;
    carry = 0;
  }

  return list.next;
}

/*
Solution 1:
Time Complexity: O(max(m, n)) - will loop either m or n times, depending which is larger hence max(m,n)
Space Complexity: O(max(m, n)) - reassigns the highest number variable in the for loop
*/