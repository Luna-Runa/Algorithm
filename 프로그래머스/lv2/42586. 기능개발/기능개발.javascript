function solution(progresses, speeds) {
    var answer = [];
    let counter = 0;
    let successIndex = 0;
    
    while(progresses.length > 0) {
        
        if (progresses[0] < 100) {
          //작업 속도만큼 그 뒤의 인덱스의 작업을 진행한다
          for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
          }
        } else {
            //작업이 완료되었다면
            progresses.shift();
            speeds.shift();
            counter++;
            //한번에 배포하기 위해 그 뒤의 인덱스들도 완료 여부를 검사한다.
            if(progresses[0] >= 100) {
                for(let i = 0; i < progresses.length; ) {
                    if(progresses[0] >= 100) {
                        progresses.shift();
                        speeds.shift();
                        counter++;
                    } else break;
                }
            }
            answer.push(counter);
            counter = 0;
        }
    }
       
    return answer;
}