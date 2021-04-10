/**
 * 打乱数组
 * 
 输入
 ["Solution", "shuffle", "reset", "shuffle"]
 [[[1, 2, 3]], [], [], []]
 输出
 [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
 
 解释
 Solution solution = new Solution([1, 2, 3]);
 solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
 solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
 solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]

 */
var Solution = function(nums) {
    this.list = nums
    this.cache = [...nums]
};

Solution.prototype.reset = function() {
    return this.list = [...this.cache]
};

Solution.prototype.shuffle = function() {
    for(let i = 0; i < this.list.length; i ++) {
        let randomInd = ~~(Math.random() * this.list.length)
        let temp = this.list[i]
        this.list[i] = this.list[randomInd]
        this.list[randomInd] = temp
    }
    return this.list
};