/**
 * 组成一个最大数
 
 输入：nums = [3,30,34,5,9]
 输出："9534330"
 
 * 思路：
 * 1. 将数组排序再合并
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`)
  return nums.join("").replace(/^0*(\d+)$/, (str, p) => p)
};
