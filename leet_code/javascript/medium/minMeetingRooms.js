// Problem 253  Meeting Rooms II

// Approach 1

const minMeetingRooms = intervals => {
  const starts = intervals.concat().map(a => a[0]).sort((a,b) => a - b);
  const ends = intervals.concat().map(a => a[1]).sort((a,b) => a - b);

  let room = 0;
  let endIdx = 0;

  for (let i = 0; i < intervals.length; i++) {
    starts[i] < ends[endIdx] ? room++ : endIdx++;
  }

  return room;
};


let intervals = [[0, 30], [5, 10], [15, 20]];
console.log(minMeetingRooms(intervals));

/*
Solution 1:
Time Complexity: O(nlogn) - to sort start/end times 
Space Complexity: O(m) - memory for start/end times array
*/