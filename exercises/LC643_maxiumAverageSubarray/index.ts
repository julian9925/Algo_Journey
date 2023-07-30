// function findMaxAverage(nums: number[], k: number): number {
// 	if (k === 1) {
// 		return Math.max(...nums);
// 	}

//     let maxSum = Number.NEGATIVE_INFINITY;
//     let startRange = nums.length - k + 1;

//     for(let windowStart = 0; windowStart < startRange; windowStart++) {
//         let sum = 0
//         for(let index = windowStart; index < windowStart + k; index++) {
//             sum += nums[index];
//         }

//         maxSum = Math.max(maxSum, sum);
//     }

//     return maxSum/k
// };

// Time complexity is O(nk)

// better solution

function findMaxAverage(nums: number[], k: number): number {
	// caculate locale sum
	let sum = 0;
	for (let i = 0; i < k; i++) {
		sum += nums[i];
	}

	let maxSum = sum;
	for (let i = k; i < nums.length; i++) {
		sum = sum - nums[i-k] + nums[i]
		maxSum = Math.max(maxSum, sum);
	}
	
    return maxSum/k
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));