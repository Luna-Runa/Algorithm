function solution(str1, str2) {
  var answer = 0;

  let A = [],
    B = [];
  let U = [];
  let N = [];

  //대문자로 치환
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  console.log(str1);
  console.log(str2);

  //특수문자는 제외하고 집합 생성
  function set(S, arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (/^[A-Z]*$/g.test(arr[i] + arr[i + 1])) {
        S.push(arr[i] + arr[i + 1]);
      }
    }
  }

  set(A, str1);
  set(B, str2);

  console.log("A : " + A);
  console.log("B : " + B);

  //교집합 로직
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        console.log("!!");
        console.log(A[i]);
        N.push(A[i]);
        A.splice(i--, 1);
        B.splice(j--, 1);
        break;
      }
    }
  }
  //교집합과 A와 B를 합쳐 합집합
  U.push(...N);
  U.push(...A);
  U.push(...B);
  console.log("U : ");
  console.log(U);

  if(N.length === 0 && U.length === 0) return 65536;
  if (N.length === 0) return 0;
  if (U.length === 0) return 65536;
  return Math.floor((N.length / U.length) * 65536);
}