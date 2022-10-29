function solution(input) {
    const numArray = input.split(" ").map(e => +e)

    return `${Math.min(...numArray)} ${Math.max(...numArray)}`;
}