const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(filePath)
  .toString()

input = parseInt(input)


solution(input);

function solution(input) {
  for(i = 1; i <= input; i++) console.log("*".repeat(i))
}
