/**
 * 寻找数组中第k大的数
 * 
 * 思路：通过快排的方式进行定位，当元素进行转移到第n个位置的时候，就知道是是否为第k大的数
 * 1. 如果k < i，则在左区间
 * 2. 如果k > i，则在右区间
 */
var findKthLargest = function(nums, k) {
	if (!nums.length) return undefined
	if (nums.length === 1) return nums[0]
	let kVal = undefined
	var quickSelect = function(nums, left, right, k) {
		if (left > right) return nums
		let
			i = left,
			j = right,
			base = nums[left]
		while (i < j) {
			while (i < j && nums[j] >= base) j--
			while (i < j && nums[i] <= base) i++
			if (i < j) {
				let temp = nums[i]
				nums[i] = nums[j]
				nums[j] = temp
			}
		}
		nums[left] = nums[i]
		nums[i] = base
		if (i === k) return kVal = base
		else if (i > k) quickSelect(nums, left, i - 1, k)
		else quickSelect(nums, i + 1, right, k)
	}
	quickSelect(nums, 0, nums.length - 1, nums.length - k)
	return kVal
};
