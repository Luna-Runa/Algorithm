function solution(input) {    
    return input.toLowerCase()
        .split(' ')
        .map(word => word.replace(/^[a-z]/, char => char.toUpperCase()))
        .join(' ')
}