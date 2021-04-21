/**
 * 查找重复的数
 * 
 *  n + 1 个整数的数组 nums
 * 
 示例 1：
 
 输入：nums = [1,3,4,2,2]
 输出：2
 
 思路：快慢指针，从题的条件看的，数组由n + 1个数字组成，所以通过数组元素作为索引进行跳转不会产生越界，而必然会因为访问数字作为索引而产生环
 思路效仿环形链表的第二种方式，两次相遇的时候即为环的起点，也就是重复数的位置
 */
var findDuplicate = function(nums) {
	let
		snow = 0,
		fast = 0
	snow = nums[snow]
	fast = nums[nums[fast]]
	while (snow !== fast) {
		snow = nums[snow]
		fast = nums[nums[fast]]
	}
	snow = 0
	while (snow !== fast) {
		snow = nums[snow]
		fast = nums[fast]
	}
	return snow
};
