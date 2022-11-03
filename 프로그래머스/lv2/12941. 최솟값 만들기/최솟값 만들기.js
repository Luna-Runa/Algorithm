function solution(A,B){
    A = A.sort((a, b) => a < b ? 1 : -1)
    B = B.sort((a, b) => a < b ? -1 : 1)

    return A.reduce((total, _, index) => total + A[index] * B[index] ,0)
}