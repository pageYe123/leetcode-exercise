// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Authur : pageYe
// Date   : 2017-12-21

/**
 * solution 1
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length
    let hash = {}
    let ans = 0, i = 0, j = 0
    while (i < n && j < n) {
        // try to extend the range [i, j]
        if (!hash.hasOwnProperty(s.charAt(j))) {
            hash[s.charAt(j++)] = true
            ans = Math.max(ans, j - i)
        } else {
            delete hash[s.charAt(i++)]
        }
    }
    return ans
};

let testcase = "axsbddbb"
//              01234567
let ans = lengthOfLongestSubstring(testcase)
console.log(ans);



// The above solution requires at most 2n steps. In fact, it could be optimized to require only n steps. Instead of using a set to tell if a character exists or not, we could define a mapping of the characters to its index. Then we can skip the characters immediately when we found a repeated character.
// The reason is that if s[j] have a duplicate in the range [i, j) with index j'​​ ,
// we don't need to increase i little by little. We can skip all the elements in the range [i, j']
// ​​and let ii to be j' + 1 directly.
/**
 * solution optimized
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length, ans = 0
    let hashMap = {} // current index of character, begin from 1
    // try to extend the range [i, j]
    for (let j = 0, i = 0; j < n; j++) {
        if (hashMap.hasOwnProperty(s.charAt(j))) {
            i = Math.max(hashMap[s.charAt(j)], i)
        }
        ans = Math.max(ans, j - i + 1)
        hashMap[s.charAt(j)] = j + 1 // record the next position of `i`
    }
    return ans
};

let testcase = "abdcdbb"
//              01234567
let ans = lengthOfLongestSubstring(testcase)
console.log(ans);