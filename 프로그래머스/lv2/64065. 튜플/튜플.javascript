function solution(s) {
  var answer = [];

  s = s.slice(2, -2).split("},{");

  let arr = [];

  s.forEach((e) => {
    arr.push(e.split(","));
  });


  arr.sort((a, b) => a.length - b.length);


  arr.forEach((e) => {
    e.forEach((e2) => {
      if (!answer.includes(~~e2)) answer.push(~~e2);
    });
  });

  return answer;
}