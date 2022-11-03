function solution(s) {
    const middle = s.length / 2
    return Number.isInteger(middle)? `${s[middle-1]}${s[middle]}` : s[Math.floor(middle)]
}