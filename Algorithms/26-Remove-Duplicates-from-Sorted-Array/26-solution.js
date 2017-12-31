// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// Authur : pageYe
// Date   : 2017-12-30


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len = nums.length
    var dupCount = 0
    for(let i=0;i<len-dupCount;i++){
        for (let j=len-dupCount-1;j>=i+1;j--){
           if(nums[i] === nums[j]) {
               dupCount++
               nums.push(nums.splice(j,1))
            }
        }
    }

    return len-dupCount
};

var testcase = [1,1,1]
var ret = removeDuplicates(testcase)
console.log(ret)