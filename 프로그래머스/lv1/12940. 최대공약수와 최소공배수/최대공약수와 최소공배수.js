const solution = (a, b) => {
    const answer = []
    
    const gcd = calcGCD(a, b)
    
    answer.push(gcd)
    answer.push(a * b / gcd)
    
    return answer;
}

const calcGCD = (a, b) => a % b === 0? b : calcGCD(b, a % b)