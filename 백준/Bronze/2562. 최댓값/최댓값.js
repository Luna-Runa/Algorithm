const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((e) => +e);

const solution = (input) => {
  //   console.log(input);
  let answer = Number.MIN_SAFE_INTEGER;
  let answerIndex = -1;
  input.forEach((e, i) => {
    if (answer < e) {
      answer = e;
      answerIndex = i + 1;
    }
  });
  console.log(answer);
  console.log(answerIndex);
};

solution(input);
