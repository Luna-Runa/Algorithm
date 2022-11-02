function solution(num) {
    let i = 0
    
    while (i < 500) {
        if(num === 1) return i
        num = num % 2
            ? num * 3 + 1
            : num / 2
        i++
    }
    
    return -1
}