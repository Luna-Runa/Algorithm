function solution(N, road, K) {
  let answer = 0;
  const queue = [];
  const distances = {};
  let currentCity;

  //객체 초기화
  for (let i = 1; i <= N; i++) {
    if (i === 1) {
      distances[i] = { load: [], cost: [], short: 0 };
      queue.push([i, 0]);
    } else {
      distances[i] = { load: [], cost: [], short: Infinity };
      queue.push([i, Infinity]);
    }
  }

  //각 마을간 관계 저장
  road.forEach((e) => {
    let [from, to, cost] = e;

    distances[from] = {
      load: [...distances[from].load, to],
      cost: [...distances[from].cost, cost],
      short: distances[from].short,
    };

    distances[to] = {
      load: [...distances[to].load, from],
      cost: [...distances[to].cost, cost],
      short: distances[to].short,
    };
  });
  //console.log(distances);

  //console.log(queue);

  while (queue.length) {
    currentCity = queue.shift()[0];
    if (currentCity || distances[currentCity].short !== Infinity) {
      distances[currentCity].load.forEach((neighbor, i) => {
        //console.log(`${currentCity} 마을의 인접 마을 : ${neighbor}`);

        //지금 방문한 마을에서 해당 인접마을에 가는 비용 계산
        //1에서 2로 갈때 1, 1에서 4로 갈때 2
        let newShort =
          distances[currentCity].short + distances[currentCity].cost[i];
        let oldShort = distances[neighbor].short;
        if (newShort < oldShort) {
          distances[neighbor].short = newShort;
          queue.push([neighbor, newShort]);
        }
      });
    }
  }

  //console.log(distances);
  for (let i = 1; i <= N; i++) {
    //console.log(distances[i].short);
    if (distances[i].short <= K) answer++;
  }

  return answer;
}