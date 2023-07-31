function maxSubArray(nums: number[]): number {
    let sumTable: number[] = [nums[0]];
	let maxSum = nums[0];

	for (let i = 1; i < nums.length; i++) {
		sumTable[i] = Math.max(nums[i], sumTable[i - 1] + nums[i]);
		maxSum = Math.max(maxSum, sumTable[i]);
	}
	return maxSum;

};


module.exports = maxSubArray;