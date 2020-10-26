function maxProfit(nums) {
	let maxProfit = 0;
	let bestBuyPrice = nums[0];

	for (let index = 0; index < nums.length; index++) {
		const currentPrice = nums[index];
		bestBuyPrice = (currentPrice < bestBuyPrice) ? currentPrice : bestBuyPrice;
		maxProfit = Math.max(maxProfit, currentPrice - bestBuyPrice);
	}

	return maxProfit;
}

module.exports = maxProfit;
