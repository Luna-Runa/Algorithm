function solution(arr, divisor) {
    const answer = arr.filter(e => Number.isInteger(e / divisor))
    
    return answer.length === 0? [-1] : answer.sort((a, b) => a - b);
}