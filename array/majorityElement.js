/**
 * 取数组出现次数超过一半的数
 * 
 * 思路：排好序后取中间值即可
 */
var majorityElement = function(nums) {
	return nums.sort()[~~(nums.length / 2)]
};

/**
 * 思路：摩尔投票法
 * 1. 先取数组第一个元素，并将票数置为1
 * 2. 如果遇到相同元素，票数 + 1，否则票数 - 1
 * 3. 如果票数为0，则重新选择新元素，并将票数置为1
 */
var majorityElement = function(nums) {
	let res = nums[0],
		votes = 1
	for (let i = 1; i < nums.length; i++) {
		if (res === nums[i]) votes += 1
		else if (res !== nums[i]) {
			votes -= 1
			if (votes === 0) {
				res = nums[i]
				votes = 1
			}
		}
	}
	return res
};
