/**
 * 广度优先搜索（BFS）
 
 let hashObj = {
 	start: ["second", 'third', 'fourth'],
 	second: ["fith", "sixth"],
 	third: ["end"],
 	fourth: ["fith"],
 	fith: ["end"],
 	sixth: ["seventh"],
 	seventh: ["end"],
 	end: []
 }
 
 返回值: 2
 */
var bfs = function(hashObj, target) {
	if (!hashObj) {
		return -1
	}
	let arr = hashObj.start,
		long = 0
	while (arr.length) {
		let newArr = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === target) {
				return ++long
			} else {
				newArr = newArr.concat(hashObj[arr[i]])
			}
		}
		arr = newArr
		long++
	}
	return long
}
