// Problem 206 Reverse Linked List

// Iterative
const reverseLinkedList = head => {
  let previous = null;
  while (head) {
    const next = head.next;
    head.next = previous;
    previous = head;
    head = next;
  };
  return previous;
};

// Recursive
const reverseLinkedList2 = head => {
  const helper = (current, prev) => {
    if (current === null) return prev;
    let next = current.next;
    current.next = prev;
    return helper(next, current);
  };
  return helper(head, null);
};

