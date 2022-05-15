function solution(clothes) {
    var answer = 1;
    let a = new Map();
    for(let i = 0; i < clothes.length; i++)
        a.set(clothes[i][1], a.get(clothes[i][1])+1 || 1)
    
    a.forEach((e) => {
        answer *= e + 1
    })

    return --answer;
}