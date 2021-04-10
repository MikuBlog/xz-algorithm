/**
 * 随机给四个人发牌，牌总数为52
 * 
 * 思路：
 * 1. 先实现数组乱序
 * 2. 然后再通过两重循环，外层4个，内层13次循环完成发牌操作
 */
function randomCard(nums, people) {
	let
		result = [],
		cardList = Array(nums).fill(0).map((val, ind) => ind + 1),
		ind = 0,
		peopleCard = ~~(nums / people)
	for (let i = 0; i < nums; i++) {
		let randomInd = ~~(Math.random() * nums)
		let temp = cardList[randomInd]
		cardList[randomInd] = cardList[i]
		cardList[i] = temp
	}
	for (let i = 0; i < people; i++) {
		for (let j = 0; j < peopleCard; j++) {
			if (!result[i]) result[i] = []
			result[i].push(cardList[i * peopleCard + j])
		}
	}
	return result
}
