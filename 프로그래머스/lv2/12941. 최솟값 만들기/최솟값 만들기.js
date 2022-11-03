function solution(A,B){
    A = A.sort((a, b) => a - b)
    B = B.sort((a, b) => b - a)

    return A.reduce((total, _, index) => total + A[index] * B[index] ,0)
}