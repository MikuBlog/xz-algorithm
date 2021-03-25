/**
 * 山脉数组的峰顶索引
 
 输入：arr = [0,1,0]
 输出：1
 找出峰顶的位置
 */
var peakIndexInMountainArray = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			return i
		}
		if (arr[i] > arr[i + 1]) {
			return i
		}
	}
};
