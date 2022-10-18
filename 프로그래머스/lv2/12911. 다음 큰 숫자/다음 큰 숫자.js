function solution(n) {
    let i = n + 1
    // n을 2진수로 변환 뒤 1만 추출한 스트링의 길이
    const condition = n.toString(2).match(/1/g).length
    
    while(true) {
        if (condition === i.toString(2).match(/1/g).length) break
        i++
    }
    
    return i
}