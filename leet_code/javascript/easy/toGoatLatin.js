const toGoatLatin = (S) => {
  const vowels = "aeiou"
  const words = S.split(' ');
  let goatSays = [];
  for (let i = 0; i < words.length; i++) {
    let gibber = []
    for (let g = 0; g <= i; g++){
      gibber.push('a')
    }

    if (vowels.includes(words[i][0].toLowerCase())) {
      goatSays.push(words[i] + "ma" + gibber.join(''))
    } else {
      goatSays.push(words[i].slice(1) + words[i][0] + "ma" + gibber.join(''))
    }
  }

  return goatSays.join(' ')
}

console.log(toGoatLatin("I speak Goat Latin"))