function solution(n) {
    const answer = new Set()
    for(let i = 1; i <= n / 2; i++) if(n % i === 0) answer.add(i)
    
    answer.add(n)
    
    return [...answer].reduce((a, b) => a + b);
}