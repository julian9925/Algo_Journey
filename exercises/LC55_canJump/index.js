function canJump(nums) {
	let dpPositions = Array(nums.length).fill(false);
	dpPositions[0] = true;

	for (let i = 1; i < nums.length; i++) {
		for(let j = 0; j < i; j++) {
			if (dpPositions[j] && j + nums[j] >= i) {
				dpPositions[i] = true;
				break;
			}
		}
	}

	return dpPositions[dpPositions.length - 1];
}

module.exports = canJump;
