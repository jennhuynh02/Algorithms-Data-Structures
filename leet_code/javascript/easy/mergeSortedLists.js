function mergeLists(l1, l2) {
  if (!(l1 && l2)) {
    return l1 || l2;
  }

  let head = null;

  if (l1.val < l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }

  let temp = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }

    temp = temp.next;
  }

  if (l1) temp.next = l1;
  if (l2) temp.next = l2;

  return head;
};