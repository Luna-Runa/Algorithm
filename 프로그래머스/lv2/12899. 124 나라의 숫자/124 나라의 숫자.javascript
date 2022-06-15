function solution(n) {
    if(n === 1) return "1";
    if(n === 2) return "2";
    if(n === 3) return "4";
    
    let answer = '';
    let arr = [];
    let i = 0;
    while (n / 3 >= 1) {
        arr[i++] = n % 3 === 0? 3 : n % 3;
        n = n % 3 === 0? Math.floor(n / 3) - 1 : Math.floor(n / 3);
    }
    arr[i++] = n;
    
    arr.reverse();
    
    arr.forEach(e => {
        if(e === 1) answer += "1";
        else if (e === 2) answer += "2";
        else if (e === 3) answer += "4";
    })
    
    return answer;
}