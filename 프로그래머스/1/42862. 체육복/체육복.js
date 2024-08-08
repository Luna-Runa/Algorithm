function solution(n, lostMemberList, reserveMemberList) {
    let answer = n
    
    // reserve에서 '진짜로 빌려줄 수 있는 멤버'만 가려낸 배열이 필요.
    let helpableMemberList = reserveMemberList.filter(member => !lostMemberList.includes(member)).sort()
    
    // 마찬가지로 lost에서 '진짜로 체육복이 필요한 멤버'만 가려낸 배열 필요
    let needHelpMemberList = lostMemberList.filter(member => !reserveMemberList.includes(member)).sort()
    
    console.log(helpableMemberList)
    console.log(needHelpMemberList)
    
    // lost의 앞 뒤로 도움을 줄 수 있는 멤버가 있다면 answer 유지, 없다면 answer--
    needHelpMemberList.forEach(lostMember => {
        const beforeMember = lostMember - 1
        
        if (helpableMemberList.includes(beforeMember)) {
            console.log('before delete', beforeMember)
            helpableMemberList = helpableMemberList.filter(member => member !== beforeMember)
            return
        }
        
        const afterMember = lostMember + 1
        
        if (helpableMemberList.includes(afterMember)) {
            console.log('after delete', afterMember)
            helpableMemberList = helpableMemberList.filter(member => member !== afterMember)
            return
        }
        
        answer--;
    })
    
    return answer;
}