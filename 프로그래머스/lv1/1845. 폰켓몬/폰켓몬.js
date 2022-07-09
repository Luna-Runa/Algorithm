function solution(nums) {
    let set = new Set(nums)
    
    console.log(nums.length/2)
    console.log(set.size)
    
    if (nums.length / 2 < set.size) return nums.length/2
    else return set.size
}