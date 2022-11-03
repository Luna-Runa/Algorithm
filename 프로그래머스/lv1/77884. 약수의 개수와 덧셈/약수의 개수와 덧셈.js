const divisor = (n) => {
    let answer = 0
    for(let i = 1; i <= n / 2; i++) if(n % i === 0) answer++
    return answer++
}

function solution(left, right) {
    let answer = 0
    for(let i = left; i <= right; i++) answer += divisor(i) % 2 ? i : -i
    
    return answer;
}