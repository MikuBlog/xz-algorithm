/**
 * 取数组出现次数超过一半的数
 * 
 * 思路：排好序后取中间值即可
 */
var majorityElement = function(nums) {
	return nums.sort()[~~(nums.length / 2)]
};
