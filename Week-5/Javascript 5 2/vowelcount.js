function countVowelsRegex() {
    let matchingInstances = text.match(/[aeiou]/gi);
  
    if (matchingInstances) {
      console.log(`The text contains ${matchingInstances.length} vowel(s)`)
  
      return matchingInstances.length
    } else {
      return 0
    }
  }