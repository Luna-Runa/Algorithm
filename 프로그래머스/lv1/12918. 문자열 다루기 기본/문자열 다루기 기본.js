function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false
    
    
    let answer = true
    s.split("").forEach(e => isNaN(+e) ? answer = false : "")
    
    return answer;
}