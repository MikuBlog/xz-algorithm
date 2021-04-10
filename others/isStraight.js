var isStraight = function(nums) {
	let leave = 0
	nums.sort((a, b) => a - b)
	for (let i = 0; i < nums.length; i++) {
		if (i === nums.length - 1) {
			break
		} else if (nums[i] === 0) {
			leave--
		} else if (nums[i + 1] && nums[i] && nums[i + 1] - nums[i] === 0) {
			return false
		} else if (nums[i + 1] - nums[i] !== 1) {
			leave += nums[i + 1] - nums[i]
		}
	}
	return leave > 1 ?
		false :
		true
};
