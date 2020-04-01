import stringAverage from '../string-average'

describe('#stringAverage', () => {
  it('it should return n/a when the string is empty', () => {
    const result = stringAverage('')

    expect(result).toEqual('n/a')
  })
  it('it should return n/a when the string contains a number greater than 9', () => {
    const result = stringAverage('')

    expect(result).toEqual('n/a')
  })
  it('it should return the correct average from the string input', () => {
    const result = stringAverage('zero nine five two')

    expect(result).toEqual("four")
  })
})