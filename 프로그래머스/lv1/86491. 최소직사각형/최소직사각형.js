function solution(sizes) {
    // 모든 명함을 가로가 길도록 정렬한 배열의 최댓값(가로)
    const width = Math.max(...sizes.map(e => Math.max(...e)))
    // 모든 명함을 세로가 길도록 정렬한 배열의 최댓값(세로)
    const length = Math.max(...sizes.map(e => Math.min(...e)))
    
    return width * length
}