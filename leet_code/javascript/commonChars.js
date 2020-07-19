const commonChars = (A) => {
    firstWord = A[0].split('');
    letterBank = {};

    for (let i = 0; i < firstWord.length; i++) {
      if (Object.keys(letterBank).includes(firstWord[i])) {
        letterBank[firstWord[i]] += 1;
      } else {
        letterBank[firstWord[i]] = 0;
        letterBank[firstWord[i]] += 1;
      }
    }

    for (let i = 1; i < A.length; i++) {
      counter = {};
      let word = A[i].split('');
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (Object.keys(letterBank).includes(char) && Object.keys(counter).includes(char)) {
          counter[char] += 1;
        } else if (Object.keys(letterBank).includes(char) && !Object.keys(counter).includes(char)) {
          counter[char] = 0;
          counter[char] += 1;
        } else {
          letterBank[char] = 0;
        }
      }

      for (let i = 0; i < Object.keys(letterBank).length; i++) {
        let char = Object.keys(letterBank)[i];
        if (!Object.keys(counter).includes(char)) {
          letterBank[char] = 0;
        }
        
        if (counter[char] !== letterBank[char]) {
          if (letterBank[char] > counter[char]) {
            letterBank[char] = counter[char];
          } else {
            counter[char] = letterBank[char];
          }
        }
      }
    }

    let result = []
    for (let i = 0; i < Object.keys(letterBank).length; i++) {
      let char = Object.keys(letterBank)[i];
      if (letterBank[char] > 0) {
        for (let i = 0; i < letterBank[char]; i++) {
          result.push(char);
        }
      }
    }

    return result;
};

A = ["bella","label","roller"]

A = ["cool","lock","cook"]