/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 */
 var guess = function(num) {
     let target = 6;
     if(num > target) {
         return 1
     } else if(num < target) {
         return -1
     } else {
         return 0
     }
 }

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var guessNumber = function(n) {
//     let left = 1;
//     let right = n;

//     while(left < right) {
//         const mid = Math.floor(left + (right - left) / 2);

//         if(guess(mid) == -1) {
//             right = mid
//         } else {
//             left = mid + 1;
//         }
//     }

//     return left;
// };

// console.log(guessNumber(2)) // return 6

var guessNumber = function(n) {
    let left = 1, right = n;
    while (left < right) { 
        const mid = Math.floor(left + (right - left) / 2); 
        if (guess(mid) <= 0) {
            right = mid; //更新查找区间为[left, mid]
        } else {
            left = mid + 1; //更新查找区间为[mid+1, right]
        }
    }
    //left == right为答案
    return left;
};

console.log(guessNumber(10)) // return 6