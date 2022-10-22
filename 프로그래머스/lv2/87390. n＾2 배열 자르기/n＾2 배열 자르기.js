function solution(n, left, right) {
    // const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // // 중첩 루프를 돌면서 i(열 인덱스)가 j(행 인덱스)보다 큰 경우 i + 1, 아닌 경우 j + 1로 채우기
    // const fillArr = arr.map((row, i) => row.map((col, j) => i > j? i + 1 : j + 1))
    // return fillArr.flat().slice(left, right + 1)
    
    // return new Array(n)
    //     .fill(new Array(n).fill(0))
    //     .map((row, i) => row.map((col, j) => i > j? i + 1 : j + 1))
    //     .flat()
    //     .slice(left, right + 1)
    
//     const answer = []
//     let row = -1
//     for(let i = 0; i < n * n; i++) {
//         const col = i % n
//         if(col === 0) row++
//         answer.push(row > col? row + 1 : col + 1)
//     }
    
//     return answer.slice(left, right + 1)
    
    const answer = []
    
    for(let i = left; i < right + 1; i++) {
        const row = Math.floor(i / n)
        const col = i % n
        answer.push(row > col? row + 1 : col + 1)
    }
        
    return answer
}