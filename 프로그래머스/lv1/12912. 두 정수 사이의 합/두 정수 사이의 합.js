function solution(a, b) {
    // 1 + 100, 2 + 99, ... 50번
     return (a + b) * (Math.abs(b - a) + 1) / 2;
}