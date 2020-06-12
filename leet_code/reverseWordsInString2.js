function reverseWords(s) {
  let sentence = "";
    for (let i = 0; i < s.length; i++) {
      sentence = sentence + s[i]
    }

  words = sentence.split(" ");

  let newSent = [];
  for (let i = words.length - 1; i >= 0; i--) {
    words[i].split('').forEach(char => {
      newSent.push(char);
    })
    if (i !== 0) newSent.push(" ");
  }

  for (let i = 0; i < s.length; i++) {
      s[i] = newSent[i];
  }
}
s = 
["a"," ","b"]
console.log(reverseWords(s));