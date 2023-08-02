// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,2,4], 9) --> [1,2]


// using hashmap
// function twoSum(arr, target) {
//     const numsVisited = {};
//     const res = [];

//     for(let index = 0; index < arr.length; index++) {
//         const complete = target - arr[index];
        
//         if (numsVisited[complete] !== undefined) {
//             res.push(index);
//             res.push(numsVisited[complete]);
//         }

//         numsVisited[arr[index]] = index;
//     }

//     return res;
// }


// using two pointer, must sorted as first
function twoSum(arr, target) {
    let res = [];
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] === target) {
            res = [left, right];
        }

        if (arr[left] + arr[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return res;
}

module.exports = twoSum;
