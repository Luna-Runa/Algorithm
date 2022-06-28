function solution(id_list, report, k) {
  var answer = [];
  let temp = new Set(report);
  report = [...temp];

  temp = [];

  report.forEach((e) => {
    temp.push(e.split(" "));
  });

  let report_list = []; //신고 당한 횟수

  id_list.forEach((name) => {
    report_list.push(temp.filter((e) => name === e[1]).length);
  });

  answer = new Array(id_list.length).fill(0); //메일 받을 갯수

  for (let i = 0; i < report_list.length; i++) {
    if (report_list[i] >= k) {
      temp.forEach((e) => {
          //id_list에서 e[0](신고자) 를 찾아 인덱스를 반환해주고 그 인덱스에 해당하는 answer를 1 증가
        if (e[1] === id_list[i])
          answer[id_list.findIndex((id) => id === e[0])] += 1;
      });
    }
  }

  return answer;
}