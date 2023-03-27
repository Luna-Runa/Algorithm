const solution = (n) => {
    const memo = [0, 1]

    // 반복문을 통해 F(n)까지의 배열을 완성
    for(let index = 2; memo[n] === undefined; index++) {
        const current = (memo[index-1] + memo[index-2]) % 1234567

        memo.push(current)
    }

    return memo[n]
}