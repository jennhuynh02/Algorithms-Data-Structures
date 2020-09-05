// Problem 206 Reverse Linked List

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

