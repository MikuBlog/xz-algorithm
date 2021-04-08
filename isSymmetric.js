/**
 * 是否为对称树
 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 
     1
    / \
   2   2
  / \ / \
 3  4 4  3
 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 
     1
    / \
   2   2
    \   \
    3    3
 
 思路：使用层次遍历（借用了图的bfs），使用了双指针判断是否对称
 */
var isSymmetric = function(root) {
	if (!root) {
		return true
	}
	let arr = [root]
	while (arr.length) {
		let newArr = []
		for (let i = 0; i < arr.length; i++) {
			newArr.push(arr[i].left, arr[i].right)
		}
		if (!jutify(newArr)) {
			return false
		}
		arr = newArr.filter(val => val)
	}
	return true
};

var jutify = function(arr) {
	let left = 0,
		right = arr.length - 1
	while (left < right) {
		if (arr[left] == null && arr[right] == null) {
			left++
			right--
		} else if (arr[left] == null || arr[right] == null) {
			return false
		} else if (arr[left].val === arr[right].val) {
			left++
			right--
		} else {
			return false
		}
	}
	return true
}


/**
 * 思路：前序遍历（dfs）
 * 判断根节点的左子树和右子树是否相等转化为 ---> 判断左子树的左节点的值是否等于右子树右节点的值，左子树右节点的值是否等于右子树左节点的值即可
 */
var isSymmetric = function(root) {
	if (!root) return false
	return dfs(root.left, root.right)
};

var dfs = function(left, right) {
	if (!left && !right) {
		return true
	}
	if (!left || !right) {
		return false
	}
	if (left.val === right.val) {
		return dfs(left.left, right.right) && dfs(left.right, right.left)
	} else {
		return false
	}
}
