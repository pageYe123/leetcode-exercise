// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Authur : pageYe
// Date   : 2017-12-18
// Result ：未通过。Time Limit Exceeded 说明算法效率不高 Last executed input:"sorgkfnblteamisesmshbwshxjqdaeftvzzfeogrinsuvkapzswaqojpxcuagzvbywhflpwveqpcdprcjoe"

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = s.length
    // 一个有价值的参考命名是 allUnique。“有重复”的反义词就是“全独有”，他们返回的 boolean 值也正好相反。
    let checkRepeated = function (str) {
        let hashTable = {}
        for (let i = 0, v; v = str[i]; i++) {
            if (hashTable[v]) {
                return true
            }
            hashTable[v] = true
        }
        return false
    }
    for (let length = s.length; length > -1; length--) {
        for (let j = 0; j <= s.length - length; j++) {
            let dummy = s.substr(j, length)
            let repeated = checkRepeated(dummy)
            if (repeated === false) {
                return length
            }
        }
    }

}

// 其他总结
// Java solution 中 lengthOfLongestSubstring 函数的返回值命名为 ans 因为是正好对上 public class Solution {} 这个外围的类名。