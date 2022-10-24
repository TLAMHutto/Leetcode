// var twoSum = function(nums, target) {
//     var hash = {};
//     for (var i = 0; i < nums.length; i++) {
//         var diff = target - nums[i];
//         if (hash[diff] !== undefined) {
//         return [hash[diff], i];
//         }
//         hash[nums[i]] = i;
//     }
// }
// var lengthOfLIS = function(nums){
//     var dp = [];
//     for (var i = 0; i < nums.length; i++) {
//         dp[i] = 1;
//         for (var j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }
//     return dp.reduce(function(a, b) {
//         return Math.max(a, b);
//     } , 0);
// }
// var lengthOfLongestSubstring = function(s) {
//     var hash = {};
//     var start = 0;
//     var max = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (hash[s[i]] !== undefined) {
//             start = Math.max(start, hash[s[i]] + 1);
//         }
//         hash[s[i]] = i;
//         max = Math.max(max, i - start + 1);
//     }
//     return max;
// };
// var myAtoi = function(s){
//     var num = parseInt(s);
//     if (isNaN(num)) {
//         return 0;
//     }
//     if (num > Math.pow(2, 31) - 1) {
//         return Math.pow(2, 31) - 1;
//     }
//     if (num < Math.pow(-2, 31)) {
//         return Math.pow(-2, 31);
//     }
//     return num;
// }
// var isPalindrome = function(x){
//     if (x < 0) {
//         return false;
//     }
//     var str = x.toString();
//     var len = str.length;
//     for (var i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// var maxArea = function(height) {
//     var start = 0;
//     var end = height.length - 1;
//     var max = 0;
//     while (start < end) {
//         max = Math.max(max, Math.min(height[start], height[end]) * (end - start));
//         if (height[start] < height[end]) {
//             start++;
//         } else {
//             end--;
//         }
//     }
//     return max;
// };
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return '';
//     }
//     var prefix = strs[0];
//     for (var i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1);
//         }
//     }
//     return prefix;
// };
// var mergeKLists = function(lists) {
//     var dummy = new ListNode(0);
//     var cur = dummy;
//     var heap = [];
//     for (var i = 0; i < lists.length; i++) {
//         if (lists[i] !== null) {
//             heap.push(lists[i]);
//         }
//     }
//     heap.sort(function(a, b) {
//         return a.val - b.val;
//     });
//     while (heap.length > 0) {
//         var node = heap.shift();
//         cur.next = node;
//         cur = cur.next;
//         if (node.next !== null) {
//             heap.push(node.next);
//         }
//     }
//     return dummy.next;
// };

// const arr = ['Red', 'Green', 'Blue', 'Yellow', 'Pink'];

// function randomColor() {
//     return arr[Math.floor(Math.random() * arr.length)];
// }
// console.log(randomColor());

// function humanReadable (seconds) {
  
//     let hours = Math.floor(seconds / 3600)
//     let minutes = Math.floor((seconds % 3600) / 60)
//     seconds = Math.floor((seconds % 3600) % 60)
//     if(hours < 10) {
//         hours = '0' + hours
//     }
//     if(minutes < 10) {
//         minutes = '0' + minutes
//     }
//     if(seconds < 10) {
//         seconds = '0' + seconds
//     }
//     return `${hours}:${minutes}:${seconds}`
// }
// function solution(year) {
//     let century = Math.floor(year / 100)
//     if(year % 100 > 0) {
//         century++
//     }
//     return century
// }
// console.log(solution(1705))
// function solution(inputString) {
//     let reversed = inputString.split('').reverse().join('')
//     return inputString === reversed
// }

// function solution(inputArray) {
//     // Given an array of integers, find the pair of adjacent elements that has the largest product and return that product
//     let largest = inputArray[0] * inputArray[1]
//     for(let i = 1; i < inputArray.length - 1; i++) {
//         let product = inputArray[i] * inputArray[i + 1]
//         if(product > largest) {
//             largest = product
//         }
//     }
//     return largest

// }
// console.log(largestTwo([3, 6, -2, -5, 7, 3]))
// function solution(n){
//     let area = 1
//     for (let i = 1; i < n; i++) {
//         area += i * 4
//     }
//     return area
// }
// console.log(solution(3))
function solution(statues) {
    let sorted = statues.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < sorted.length - 1; i++) {
        let diff = sorted[i + 1] - sorted[i]
        if (diff > 1) {
            count += diff - 1
        }
    }
    return count
}
console.log(solution([6, 2, 3, 8]))