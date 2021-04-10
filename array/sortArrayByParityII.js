/**
 * 奇偶对半
 输入：[4,2,5,7]
 输出：[4,5,2,7]
 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 */
var sortArrayByParityII = function(nums) {
	let
		aArr = [],
		bArr = [],
		newArr = [],
		aTimes = 0,
		bTimes = 0
	for (let i = 0; i < nums.length; i++) {
		if (!(nums[i] % 2)) {
			aArr.push(nums[i])
		} else {
			bArr.push(nums[i])
		}
	}
	for (let j = 0; j < aArr.length + bArr.length; j++) {
		if (!(j % 2)) {
			newArr.push(aArr[aTimes])
			aTimes++
		} else {
			newArr.push(bArr[bTimes])
			bTimes++
		}
	}
	return newArr
};

/**
 * 思路：双指针
 * 1. 左指针从最左端开始，每次走两步；右指针从最右端开始，每次走两步（即左指针走偶数索引，右指针走奇数索引）
 * 2. 当左指针走到为奇数，右指针走到为偶数的时候，两者相交即可
 * 3. 最后交换完毕即可
 */
var sortArrayByParityII = function(nums) {
	let
		left = 0,
		right = nums.length - 1
	while (left < nums.length - 1 && right >= 0) {
		while (left < nums.length - 1 && right >= 0 && nums[left] % 2 === 0) {
			left += 2
		}
		while (left < nums.length - 1 && right >= 0 && nums[right] % 2 !== 0) {
			right -= 2
		}
		if (left < nums.length - 1 && right >= 0) {
			let temp = nums[left]
			nums[left] = nums[right]
			nums[right] = temp
		}
	}
	return nums
};
