function solution(s) {
  let input = s
  let transCount = 0
  let deleteCount = 0
  let oldLength = 0

  while (input !== '1') {
    oldLength = input.length

    input = input.replace(/0/g, '')
    deleteCount += oldLength - input.length

    input = input.length.toString(2)

    transCount++
  }

  return [transCount, deleteCount]
}