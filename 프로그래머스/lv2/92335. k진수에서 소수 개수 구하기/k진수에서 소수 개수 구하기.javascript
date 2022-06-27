function solution(n, k) {
    var answer = 0;
    
    let arr;
    //k진수로 문자열, 0이 이어져 있는 부분 모두 제외
    arr = n.toString(k).split(/0+/);
    console.log(arr)
    
    arr.forEach(e => {
        if(e <= 1) return false;
        else {
            console.log("else : " + e)
            for(let i = 2; i <= Math.floor(Math.sqrt(e)); i++) {
                if(e % i === 0) return false;
            }
            answer++;
        }
        
    })
    
    
    return answer;
}