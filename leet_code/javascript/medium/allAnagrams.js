// Problem 438 Find All Anagrams in a String

// Approach 1

const allAnagrams1 = (s, p) => {
  const indices = [];

  const check = (idx) => {
    const letters = new Map();
    for (let k = 0; k < p.length; k++) {
      if (letters[p[k]]) {
        letters[p[k]]++;
      } else {
        letters[p[k]] = 1;
      }
    }

    for (let j = idx; j < idx + p.length; j++) {
      if (letters[s[j]]) {
        if (letters[s[j]] > 1) {
          letters[s[j]]--;
        } else {
          letters[s[j]] = false;
        }
      } else {
        return false;
      }
    }

    indices.push(idx);
  }

  for (let i = 0; i < s.length; i++) {
    check(i);
  }

  return indices;
};

/*
Solution 1:
Time Complexity: Time Limit Exceeded
Space Complexity: 
*/


// Approach 2 Sliding Window

const allAnagrams = (s, p) => {
  if (p.length > s.length) return [];
  const map = new Map(), answer = [];
  let c1, c2;
  for (let i = 0; i < s.length; i++) {
    c1 = i < p.length ? p[i] : s[i - p.length];
    c2 = s[i];
    console.log("p:  ", p)
    console.log("s:  ", s)
    console.log("index", i)
    console.log("c1:  ", c1)
    console.log("c2:  ", c2)
    if (c1 !== c2) {
      console.log(map)
      if (map.get(c1) === -1) map.delete(c1);
      else map.set(c1, map.has(c1) ? map.get(c1) + 1 : 1);
      if (map.get(c2) === 1) map.delete(c2);
      else map.set(c2, map.has(c2) ? map.get(c2) - 1 : -1);
      console.log(map)
    };
    if (map.size === 0 && i >= p.length - 1) answer.push(i - p.length + 1);
    console.log(answer)
  };
  return answer;
};

// Approach 2 Annotated
const allAnagramsAnnotated = (s, p) => {
  //  If p's length is greater than s, return an empty array because s will not contain enough characters to be considered an anagram of p
  if (p.length > s.length) return [];

  //  Initialize a hashmap called map, this will log the existence of characters as we iterate through them
  
  //  Initialize an array called answer, this will contain all indexes at which the anagram can start 
  const map = new Map(), answer = [];

  /*  Initilize the window variables:
    - c1 will keep track of the left side of the window
    - c2 will be the right side of the window, and will be the current index
  */
  let c1, c2;

  // Iterate through the entire length of s
  for (let i = 0; i < s.length; i++) {

    /*  c1:  If the current index, i, is less than the length of the anagram,
      we will set c1 to the character at the current index of p (the anagram), 
      else, we will set it to the character at the (current index - p's length) of s;
      by subtracting the length of the anagram, we can get the left side of the window 
      where the anagram could potentially start - cannot do that if index is less than p's
      length because indexing beings at 0
        c2:  Will be character at current index of s
    */
    c1 = i < p.length ? p[i] : s[i - p.length];
    c2 = s[i];
    console.log(c1, c2, i)

    /* If the characters match, we will not attempt to add them to the map;
        else, we will use 1 indicate it was a c1 character and -1 to indicate
        that it was a c2 character.  Map will check
    */
    if (c1 !== c2) {
      console.log(map)

      // If c1's character was previously found as a c2 character, delete it from the map
      if (map.get(c1) === -1) map.delete(c1);
      // Else, initialize the character's existence in the map with a value of postive 1 or increment its amount
      else map.set(c1, map.has(c1) ? map.get(c1)++ : 1);

      //If c2's character was preiously found as c1 character, delete it from the map
      if (map.get(c2) === 1) map.delete(c2);
      // Else, initialize the character's existence in the map with a value of negative 1 or decrement it
      else map.set(c2, map.has(c2) ? map.get(c2)-- : -1);

      console.log(map)
    };

    //  If the map size is 0, and the index is greater than p's last index, push into the answer array the (current index - p's length + 1 )
    if (map.size === 0 && i >= p.length - 1) answer.push(i - p.length + 1);
  };

  // Return
  return answer;
};

let s = "cbaebabacd";
let p = "abc";

console.log(allAnagrams(s, p));

/*
Solution 1:
Time Complexity: O(n)
Space Complexity: O(n)
*/