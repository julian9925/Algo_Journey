function lengthOfLIS(nums) {
	if (nums.length === 0) return 0;

	let dpSequence = new Array(nums.length).fill(1);
	let maxSoFar = 1;

	for (let j = 1; j < nums.length; j++) {
		for (let i = 0; i < j; i++) {
			if (nums[j] > nums[i]) {
				dpSequence[j] = Math.max(dpSequence[j], dpSequence[i] + 1);
			}
		}
		maxSoFar = Math.max(maxSoFar, dpSequence[j]);
	}
	return maxSoFar;
}

module.exports = lengthOfLIS;
