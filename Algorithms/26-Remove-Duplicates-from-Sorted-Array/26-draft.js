// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Authur : pageYe
// Date   : 2017-12-30
// Result ：未通过。wrong answer.测试用例为[1,1,1]，而我输出的是[1,1]，期待为[1]


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length
    var dupCount = 0
    for(let i=0;i<len-dupCount;i++){
        for (let j=i+1;j<len-dupCount;j++){
           if(nums[i] === nums[j]) {
               dupCount++
               var temp = nums.splice(j,1)
               nums.push(temp)
               // 错误解析：由于每次将重复的数字移到了队尾，所以下个检验的数字其实是向前推进了一个，应加上`j--`
               // 或是使得 j 从后向前进行“是否重复”的检查
           }
        }
    }

    return len-dupCount
};

var testcase = [1,1,1]
var ret = removeDuplicates(testcase)
console.log(ret)