/**
 * 比较版本号
 
 示例 1：
 
 输入：version1 = "1.01", version2 = "1.001"
 输出：0
 解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
 示例 2：
 
 输入：version1 = "1.0", version2 = "1.0.0"
 输出：0
 解释：version1 没有指定下标为 2 的修订号，即视为 "0"
 示例 3：
 
 输入：version1 = "0.1", version2 = "1.1"
 输出：-1
 解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2
 示例 4：
 
 输入：version1 = "1.0.1", version2 = "1"
 输出：1
 示例 5：
 
 输入：version1 = "7.5.2.4", version2 = "7.5.3"
 输出：-1
 
 * 思路：
 * 1. 拆分版本，利用竖式进行比较
 * 2. 如果数字能直接比较出大小，直接返回结果
 * 3. 如果缺数字，先补0,然后继续比较
 * 4. 如果循环比较没有结果，则返回0
 */
var compareVersion = function(version1, version2) {
	version1 = version1.split(".")
	version2 = version2.split(".")
	let len = Math.max(version1.length, version2.length)
	for (let i = 0; i < len; i++) {
		if (+version1[i] > +version2[i]) return 1
		else if (!version1[i] && !(version1[i] = 0) && version1[i] < version2[i]) return -1
		else if (!version2[i] && !(version2[i] = 0) && version1[i] > version2[i]) return 1
		else if (+version1[i] < +version2[i]) return -1
	}
	return 0
};
