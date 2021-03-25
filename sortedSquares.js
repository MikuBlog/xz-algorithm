/**
 * 有序组的平方
 输入：nums = [-4,-1,0,3,10]
 输出：[0,1,9,16,100]
 解释：平方后，数组变为 [16,1,0,9,100]
 排序后，数组变为 [0,1,9,16,100]
 */
var sortedSquares = function(nums) {
    return nums.map(val => val ** 2).sort((a, b) => a - b)
};