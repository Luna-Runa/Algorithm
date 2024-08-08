function solution(citations) {
    let answer = 0;
    
    const descendingCitations = citations.sort((a, b) => b - a)
    
    descendingCitations.forEach((citation, index) => {
        if(citation > index) answer++
    })
    
    return answer;
}