/*
Code exercise: String Average
You are given a string of numbers between 0-9.
Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string.
Eg: "zero nine five two" -> "four"
If the string is empty or includes a number greater than 9, return "n/a"
*/

const stringAverage = (input) => {
  if (input === '') return 'n/a'
  let inputArr = input.split(' ')

  const inputToNumMap = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
  }

  const inputToStringMap = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  }

  let sum = 0

  for (let item of inputArr) {
    if (!(item in inputToNumMap)) {
      return 'n/a'
    }

    sum += inputToNumMap[item]
  }

  const num = Math.floor(sum / inputArr.length)

  return inputToStringMap[num]
}

export default stringAverage