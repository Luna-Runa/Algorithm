function solution(answers) {
    const bAnswer = [2, 1, 2, 3, 2, 4, 2, 5]
    const cAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const score = [0, 0, 0]
    const topScore = []
    
    answers.forEach((e, i) => {
        if(e === i % 5 + 1) score[0]++
        if(e === bAnswer[i % 8]) score[1]++
        if(e === cAnswer[i % 10]) score[2]++
    })
    
    const max = Math.max(...score)
    
    score.forEach((e, i) => {
        if(e === max) topScore.push(i + 1)
    })
    
    return topScore
}