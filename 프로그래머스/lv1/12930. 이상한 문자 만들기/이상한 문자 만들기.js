function solution(sentence) {
    let answer = []
    let tempWords = ""
    // 1 = 대문자, -1 = 소문자
    let sign = 1
    sentenceArr = sentence.split(" ")
    
    sentenceArr.forEach((words, index) => {
        sign = 1
        tempWords = ""

        for(const char of words) {
            tempWords += sign === 1 ? char.toUpperCase() : char.toLowerCase()
            sign *= -1
        }
        answer.push(tempWords)
    })
    
    return answer.join(" ");
}