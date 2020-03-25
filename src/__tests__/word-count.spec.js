import wordCount from '../word-count'

describe('#wordCount', () => {
  it('should return empty hash when the input is empty', () => {
    let wordInput = ''

    expect(wordCount(wordInput)).toEqual({})
  })

  it('should return a hash with 1 key-val pair when input is a single word', () => {
    let wordInput = 'olly'

    expect(wordCount(wordInput)).toEqual({
      olly: 1
    })
  })

  it('should return a hash with the count when input is a sentence', () => {
    let wordInput = 'olly olly in come free'

    expect(wordCount(wordInput)).toEqual({
      olly: 2,
      in: 1,
      come: 1,
      free: 1
    })
  })
})
