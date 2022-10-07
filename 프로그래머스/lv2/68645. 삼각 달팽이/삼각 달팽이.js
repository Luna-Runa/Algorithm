function solution(n) {
  const direction = {
    down: 0,
    right: 1,
    up: 2,
  };
  const answer = Array.from(Array(n), () => new Array(n));
  let x = -1, y = 0;
  let element = 1;
    
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === direction.up) x--, y--;
      else i % 3 === direction.down ? x++ : y++;

      answer[x][y] = element++;
    }
  }
    
  return answer.flat();
}