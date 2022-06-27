function solution(files) {
    var answer = [];
    
    const list = Array.from(Array(files.length), () => new Array(3));
    
    console.log(files)
    console.log("------------")
    
    let temp = [];
    let tt = [];
    
    files.forEach((e, i) => {
        temp = [];
        tt = e.match(/([^0-9]+)(\d+)(.*)/);
        console.log(e, i)
        console.log("HEAD : " + tt[1])
        temp.push(tt[1])
        console.log("NUMBER : " + tt[2])
        temp.push(tt[2])
        console.log("TAIL : " + tt[3])
        temp.push(tt[3])
        console.log("temp : " + temp)
        list[i] = temp
        console.log("------------")
    })
    console.log("------------")
    console.log(list)
    console.log("-------------")
    
    let upper = []
    
    list.sort((a, b) => {
        //두 HEAD가 다르다면 HEAD 기준 사전 순으로 
        if (a[0].toUpperCase() !== b[0].toUpperCase()) 
            return a[0].toUpperCase() < b[0].toUpperCase()? -1 : 1
        //두 HEAD가 같고 NUMBER가 다르다면 NUMBER 숫자 순으로
        else if (a[1] !== b[1])
            return ~~a[1] - ~~b[1]
        else
            //두 HEAD와 NUMBER가 같으면 들어온 순서대로 (그대로)
            return 0;
    })
    
    console.log(list)
    
    console.log("------------")
    
    list.forEach(e => {
        answer.push(e[0] + e[1] + e[2])
    })
    
    console.log(answer)
    
    return answer;
}