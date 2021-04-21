/**
 * 合并两个有序数组
 * 
 * 思路：先合并，后快排
 * 时间复杂度：O(m + logn)
 * 空间复杂度：O(1)
 */
var merge = function(nums1, m, nums2, n) {
	for (let i = 0; i < n; i++) {
		nums1[m + i] = nums2[i]
	}
	nums1.sort((a, b) => a - b)
};

/**
 * 思路：创建一个新数组+双指针比对排序
 */
var merge = function(nums1, m, nums2, n) {
	let
		sortArr = [],
		l1 = 0,
		l2 = 0
	while (l1 < m || l2 < n) {
		if (l1 === m) {
			sortArr.push(nums2[l2++])
		} else if (l2 === n) {
			sortArr.push(nums1[l1++])
		} else if (nums1[l1] > nums2[l2]) {
			sortArr.push(nums2[l2++])
		} else {
			sortArr.push(nums1[l1++])
		}
	}
	for (let i = 0; i < m + n; i++) {
		nums1[i] = sortArr[i]
	}
};

/**
 * 思路：由于nums1后面带0，所以可以从后往前覆盖，挑选最大值覆盖到nums1的后面去
 */
var merge = function(nums1, m, nums2, n) {
	let
		l1 = m - 1,
		l2 = n - 1,
		len = m + n - 1,
		curVal
	while (l1 >= 0 || l2 >= 0) {
		if (l1 < 0) {
			curVal = nums2[l2--]
		} else if (l2 < 0) {
			curVal = nums1[l1--]
		} else if (nums1[l1] < nums2[l2]) {
			curVal = nums2[l2--]
		} else {
			curVal = nums1[l1--]
		}
		nums1[len--] = curVal
	}
};
