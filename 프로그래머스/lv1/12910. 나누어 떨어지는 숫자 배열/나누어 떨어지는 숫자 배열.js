function solution(arr, divisor) {
    const answer = []
    arr.forEach(e => {
        if(Number.isInteger(e / divisor)) answer.push(e)
    })
    
    return answer.length === 0? [-1] : answer.sort((a, b) => a - b);
}