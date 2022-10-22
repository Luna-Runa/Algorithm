function solution(n, left, right) {
    // ---------- Solution 1.
//     const answer = []
    
//     // left부터 시작해서 right까지 행과 열의 숫자를 계산해 그 부분만 반복해서 값 채우기.
//     for(let i = left; i < right + 1; i++) {
//         const row = Math.floor(i / n)
//         const col = i % n
//         answer.push(row > col? row + 1 : col + 1)
//     }
        
//     return answer
    // ---------- 완전히 해결했지만 변수 선언, for문 사용이 마음에 안들어서 리팩토링
    
    // ---------- Solution 2-1.
    //   return new Array(right + 1 - left).fill(0).map((_, answerIndex) => {
    //     const realIndex = answerIndex + left
    //     const row = Math.floor(realIndex / n)
    //     const col = realIndex % n
    //     return Math.max(row, col) + 1
    // })
    // ---------- 가독성 좋은 버전
        
    // ---------- Solution 2-2.
    return new Array(right + 1 - left)
        .fill(0)
        .map((_, i) => Math.max(Math.floor((i + left) / n), (i + left) % n) + 1)
    // ---------- 변수 선언 x 버전
}