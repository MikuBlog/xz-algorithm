/**
 * 和为s的连续正数序列
 * 
 示例 1：
 
 输入：target = 9
 输出：[[2,3,4],[4,5]]
 示例 2：
 
 输入：target = 15
 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 
 思路：双指针（滑动窗口）
 1. 定义两个指针，索引为1与2
 2. 如果窗口内值的和小于目标值，则右指针向右移动（增加值的和）
 3. 如果窗口内值的和大于目标值，则左指针向右移动（减少值的和）
 4. 如果窗口内的值等于目标值，则将值保存起来
 5. 直到左右指针重合或右指针已经走到尽头则没有匹配的两个数
 */
var findContinuousSequence = function(target) {
	let
		left = 1,
		right = 2,
		result = []
	while (left !== right && right < target) {
		let sum = 0
		for (let i = left; i <= right; i++) {
			sum += i
		}
		if (sum < target) {
			right++
		} else if (sum > target) {
			left++
		} else {
			let res = []
			for (let i = left; i <= right; i++) {
				res.push(i)
			}
			result.push(res)
			right++
		}
	}
	return result
}
