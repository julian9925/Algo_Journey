function minTargetSumSubsetWindow(targetSum, nums) {
	let windowStart = 0;
	let currentSum = 0;
	let subsetWindow = Infinity;

	for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
		currentSum += nums[windowEnd];
		while (currentSum >= targetSum) {
			subsetWindow = Math.min(subsetWindow, windowEnd - windowStart + 1);
			currentSum -= nums[windowStart];
			windowStart++;
		}
	}

	return subsetWindow;
}

console.info(minTargetSumSubsetWindow( 8, [4,2,2,7,8,1,2,8,10]));

module.exports = minTargetSumSubsetWindow;
