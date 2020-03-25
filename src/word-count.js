/*
  Word Count Kata
  Given a phrase, count the occurrences of each word in that phrase.

  For example for the input "olly olly in come free", output a hash of:
  olly: 2
  in: 1
  come: 1
  free: 1
*/

const wordCount = (wordInput) => {
  if (wordInput === '') return {}

  let finalMap = {}

  let wordArr = wordInput.split(' ')

  // I wrote this to pass the second test case, but removed it
  // since the reduce function takes care of input with single ans multiple words
  // if (wordArr.length === 1) {
  //   finalMap[wordArr[0]] = 1
  //   return finalMap
  // }

  return wordInput.split(' ').reduce((wordMap, word) => {
    if (!(word in wordMap)) {
      wordMap[word] = 0
    }
    wordMap[word]++

    return wordMap
  }, {})
}

export default wordCount