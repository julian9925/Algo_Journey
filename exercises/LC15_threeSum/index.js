function threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);


    for (let i = 0; i < nums.length; i++) {
        let target = 0 - nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[i], nums[left], nums[right]]);
            

                while (nums[left] === nums[left + 1]) {
                    left++;
                }

                while (nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            }

            else if (nums[left] + nums[right] < target) {
                left++;
            } else {
                right--;
            }
        }

    }

    return res;
};

module.exports = threeSum;

// for (let i = 0; i < nums.length; i++) {
//     let target = 0 - nums[i];
//     let left = i + 1;
//     let right = nums.length - 1;

//     if (i > 0 && nums[i] === nums[i-1]) {
//         continue;
//     }

//     while (left < right) {
//         if (nums[left] + nums[right] === target) {
//          res.push([nums[i], nums[left], nums[right]]);
//          while (nums[left] === nums[left + 1]) {
//              left++;
//          }    
//          left++;
//         } else if (nums[left] + nums[right] < target) {
//              left++;
//         } else {
//              right--;
//         }
//     }
//  }