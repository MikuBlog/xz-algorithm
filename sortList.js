var sortList = function(head) {
	if (!head) return null
	let newArr = []
	while (head) {
		newArr.push(head)
		head = head.next
	}
	newArr.sort((a, b) => a.val - b.val)
	for (let i = 0; i < newArr.length; i++) {
		if (i === newArr.length - 1) {
			newArr[i].next = null
			break
		}
		newArr[i].next = newArr[i + 1]
	}
	return newArr[0]
};
