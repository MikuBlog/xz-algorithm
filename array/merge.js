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
