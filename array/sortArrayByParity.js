/**
 * 数组重新排序，偶数在前，奇数在后
 * 
 输入：[3,1,2,4]
 输出：[2,4,3,1]
 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受
 优点：省时间
 缺点：费空间
 */
var sortArrayByParity = function(A) {
	let newArr = []
	for (let i = A.length - 1; i >= 0; i--) {
		if (A[i] % 2 === 0) {
			newArr.push(A.splice(i, 1)[0])
		}
	}
	return newArr.concat(bArr)
};

/**
 优点：省空间
 缺点：费时间
 
 */
var sortArrayByParity = function(A) {
	for (let i = 0; i < A.length; i++) {
		if (!(A[i] % 2)) {
			A.unshift(A.splice(i, 1)[0])
		}
	}
	return A
};

/**
 * 优点：省空间、省时间
 * 
 * 思路：从左侧起找偶数，从右侧起找基数，找到后两者调换，时间为O(n)，空间为O(1)
 */

var sortArrayByParity = function(A) {
	let
		left = 0,
		right = A.length - 1
	while (left < right) {
		while (left < right && A[left] % 2 === 0) {
			left++
		}
		while (left < right && A[right] % 2 !== 0) {
			right--
		}
		if (left < right) {
			let temp = A[left]
			A[left] = A[right]
			A[right] = temp
		}
	}
	return A
};
