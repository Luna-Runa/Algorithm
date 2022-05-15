function solution(numbers) {
    
    let answer = numbers.sort((a, b) => {
        //두개 꺼내서 그대로 합친거 - 바꿔 합친거 = 양수(더 크면) 그대로.
        return ~~(b.toString()+a.toString()) - ~~(a.toString()+b.toString());
    }).join('');
    
    return answer[0] == 0? '0' : answer
}