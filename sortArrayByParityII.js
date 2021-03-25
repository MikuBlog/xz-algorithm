/**
 * 奇偶对半
 输入：[4,2,5,7]
 输出：[4,5,2,7]
 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 */
var sortArrayByParityII = function(nums) {
    let 
        aArr = [],
        bArr = [], 
        newArr = [],
        aTimes = 0,
        bTimes = 0
    for(let i = 0; i < nums.length; i ++) {
        if(!(nums[i] % 2)) {
            aArr.push(nums[i])
        }else {
            bArr.push(nums[i])
        }
    }
    for(let j = 0; j < aArr.length + bArr.length; j ++) {
        if(!(j % 2)) {
            newArr.push(aArr[aTimes])
            aTimes ++ 
        }else {
            newArr.push(bArr[bTimes])
            bTimes ++ 
        }
    }
    return newArr
};