function solution(n) {
    let total = 0
    let result = 0
    const condition = n / 2
    for(let i = 1; i <= condition; i++) {
        total = i
        // console.log(`start: ${total}`)
        for(let j = i+1; total + j <= n; ) {
            // console.log(`total + j: ${total + j}`)
            total += j++
        }
        if(total === n) result++
        // console.log(`result: ${result}`)
    }

    return ++result
}