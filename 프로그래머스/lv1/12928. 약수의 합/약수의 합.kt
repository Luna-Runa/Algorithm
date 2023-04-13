class Solution {
    fun solution(n: Int): Int = (1..n/2).filter { n % it == 0 }.sum() + n
}