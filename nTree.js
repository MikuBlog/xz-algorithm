let node = {
	name: 'root',
	value: 1,
	children: [{
			value: 2,
			children: [{
					value: 6,
					children: []
				},
				{
					value: 7,
					children: []
				}
			]
		},
		{
			value: 3,
			children: [{
					value: 8,
					children: []
				},
				{
					value: 9,
					children: []
				},
				{
					value: 10,
					children: []
				}
			]
		},
		{
			value: 4,
			children: []
		},
		{
			value: 5,
			children: []
		}
	]
}
/**
 * 多叉树的dfs
 * 思路：递归
 */
function dfs(node, arr) {
	if (!node) return []
	arr.push(node.value)
	if (node.children.length) {
		for (let i = 0; i < node.children.length; i++) {
			dfs(node.children[i], arr)
		}
	}
	return arr
}

/**
 * 多叉树的bfs
 * 思路：while循环
 */
function bfs(node) {
	if (!node) return []
	let arr = [node],
		valueList = [node.value]
	while (arr.length) {
		let newArr = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].children.length) {
				for (let j = 0; j < arr[i].children.length; j++) {
					newArr.push(arr[i].children[j])
					valueList.push(arr[i].children[j].value)
				}
			}
		}
		arr = newArr
	}
	return valueList
}
