/**
 * 栈的压入、弹出序列
 
 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 输出：true
 解释：我们可以按以下顺序执行：
 push(1), push(2), push(3), push(4), pop() -> 4,
 push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 示例 2：
 
 输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
 输出：false
 解释：1 不能在 2 之前弹出。
 
 思路：双指针 + 辅助栈
 1. 用一个辅助栈模拟push的过程，每次push，pushInd向后移动一位
 2. 当一个辅助栈中的最后一个元素匹配到弹出队列中的第一位，则将helplist弹出一个，并将popInd向后移动一位
 3. 当入栈操作全部完成后，只剩下弹出栈的操作，那么用辅助栈的最后一个元素与弹出栈的剩余元素比对，直到弹出栈的popInd为最大值则弹出栈顺序正确，否则有一个不匹配则不为正确的弹出栈顺序
 */
var validateStackSequences = function(pushed, popped) {
	let pushedInd = 0,
		popInd = 0,
		helpList = []
	while (popInd < popped.length) {
		while (pushedInd < pushed.length) {
			if (helpList[helpList.length - 1] === popped[popInd]) {
				helpList.pop()
				popInd++
				continue
			}
			helpList.push(pushed[pushedInd])
			pushedInd++
		}
		if (helpList[helpList.length - 1] === popped[popInd]) {
			helpList.pop()
			popInd++
		} else {
			return false
		}
	}
	return true
};
