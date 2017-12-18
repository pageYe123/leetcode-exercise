// https://leetcode.com/problems/two-sum/description/
// misunderstand of the problem

// var addTwoNumbers = function(l1, l2) {
//     var carry = null
//     var indexL1 = l1.length -1, indexL2 = l2.length - 1
//     var maxIndex = Math.max(indexL2, indexL1)
//     var currentIndex = 0
//     var target = []
//     while(currentIndex <= maxIndex){
//        let val1 = l1[currentIndex] || 0
//        let val2 = l2[currentIndex] || 0
//        target[currentIndex] = (val1 + val2) % 10 + carry
//        carry = Math.floor((val1 + val2) / 10)
//        currentIndex++
//     }
//     if(carry > 0){
//         target[maxIndex+1] = carry
//     }
//     return target
// };
// var l1 = [2, 4, 3]
// var l2 = [5, 6, 4]

var addTwoNumbers = function(l1, l2) {
    var carry = 0
    var target = new ListNode(0)
    var p = target
    while(l1!=null || l2!=null || carry > 0){
        let v1 = v2 = 0
        if(l1){
            v1 = l1.val
            l1 = l1.next
        }
        if(l2){
            v2 = l2.val
            l2 = l2.next
        }
        let sum = v1 + v2 + carry
        val = sum % 10
        carry = Math.floor(sum / 10)
        p.next = new ListNode(val)
        p = p.next
    }
    return target.next
};


var l1 = constructLinkedList([1])
var l2 = constructLinkedList([9, 9])
var result = addTwoNumbers(l1, l2)
console.log(result)

function ListNode(val) {
        this.val = val;
        this.next = null;
}
function constructLinkedList(arr){
    var target = new ListNode(arr[0])
    var p = target
    for(var i=1, v;v=arr[i];i++){
        p.next = new ListNode(arr[i])
        p = p.next
    }
    return target
}


