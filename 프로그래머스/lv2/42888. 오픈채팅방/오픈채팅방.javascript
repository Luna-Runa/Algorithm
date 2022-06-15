function solution(record) {
    const answer = [];
    const temp = [];
    const map = new Map();
    record.forEach(e => {
        temp.push(e.split(' '))
    })
    
    temp.forEach(e => {
        if(e[0] === "Enter" || e[0] === "Change") map.set(e[1], e[2]);
        
    })
    
    temp.forEach(e => {
        if(e[0] === "Enter") answer.push(`${map.get(e[1])}님이 들어왔습니다.`)
        else if (e[0] === "Leave") answer.push(`${map.get(e[1])}님이 나갔습니다.`)
    })

    return answer;
}