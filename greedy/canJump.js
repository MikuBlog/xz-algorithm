/**
 * 跳跃游戏
 
 示例 1：
 
 输入：nums = [2,3,1,1,4]
 输出：true
 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 示例 2：
 
 输入：nums = [3,2,1,0,4]
 输出：false
 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 
 * 思路：贪心算法
 * 1. 走到第一步先进行跳跃
 * 2. 跳跃后继续计算之间的可跳跃步伐的最大值
 * 3. 最终步伐到数组的最后一个数及其以后即可满足
 */
var canJump = function(nums) {
	let max = 0
	for (let i = 0; i < nums.length; i++) {
		if (max >= i) {
			max = Math.max(i + nums[i], max)
			if(max >= nums.length - 1) return true
		}
	}
	return false
};
