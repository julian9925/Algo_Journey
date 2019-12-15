function rob(nums) {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return Math.max(nums[0], nums[1]);

	let maxLoot = [nums[0], Math.max(nums[0], nums[1])];

	for (let i = 2; i< nums.length; i++) {
		maxLoot.push(Math.max(maxLoot[i - 2] + nums[i], maxLoot[i - 1]));
	}
	
	return maxLoot.pop();``
}

module.exports = rob;
