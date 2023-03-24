const solution = (arr1, arr2) => {
    const answer = Array.from({ length: arr1.length }, () => []);
    
    arr1.forEach((e, i) => {
        e.forEach((e2, j) => {
           answer[i].push(e2 + arr2[i][j])
        })        
    })
    
    return answer;
}