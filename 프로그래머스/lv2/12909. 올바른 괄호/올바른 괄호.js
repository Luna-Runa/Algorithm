function solution(s){
    if(s[0] === ')') return false
    
    let zeroToTrue = 0
    
    for(let i of s) {
        
        zeroToTrue += i === '('? 1 : -1
        
        if(zeroToTrue < 0) return false
    }


    return zeroToTrue ? false : true;
}