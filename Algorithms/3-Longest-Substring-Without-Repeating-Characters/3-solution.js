// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Authur : pageYe
// Date   : 2017-12-21


// [solution 1]
// using HashSet as a sliding window.
// A sliding window is an abstract concept commonly used in array/string problems. A window is a range of elements in the array/string which usually defined by the start and end indices, i.e. [i, j) (left-closed, right-open). A sliding window is a window "slides" its two boundaries to the certain direction. For example, if we slide [i, j) to the right by 1 element, then it becomes [i+1, j+1) (left-closed, right-open).
// Back to our problem. We use HashSet to store the characters in current window [i, j)(j = i initially). Then we slide the index j to the right. If it is not in the HashSet, we slide j further. Doing so until s[j] is already in the HashSet. At this point, we found the maximum size of substrings without duplicate characters start with index i. If we do this for all i, we get our answer.
/**
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
// 提出一个问题：为什么 j (右边界)碰到最大限度 n 就停止了，不继续让 i 往右边试探，解析里面明明说的是"doing for all i"
// 因为在发现重复 character 之前，按照这个规则，窗口内的 substring 都是无重复的。而当右边界(j)达到极限以后，有两种情况: substring 中各字符为 unique 或不为 unique, 逻辑推理一下就知道各个情况都是当前态最大.



// [solution optimized]
// The above solution requires at most 2n steps. In fact, it could be optimized to require only n steps. Instead of using a set to tell if a character exists or not, we could define a mapping of the characters to its index. Then we can skip the characters immediately when we found a repeated character.
// The reason is that if s[j] have a duplicate in the range [i, j) with index j'​​ ,
// we don't need to increase i little by little. We can skip all the elements in the range [i, j']
// ​​and let ii to be j' + 1 directly.
/**
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