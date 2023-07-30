// function maxProfit(prices: number[]): number {
// 	let currentMin = prices[0];
// 	let maxPrice = 0;

// 	for (let index = 1; index < prices.length; index++) {
// 		if (prices[index] < currentMin) {
// 			currentMin = prices[index];
// 		}
// 		maxPrice = Math.max(maxPrice,  (prices[index] - currentMin));
// 	}


// 	return maxPrice;
// };

// const prices = [1,5,2,10];
// console.log(maxProfit(prices));

function maximumDifference(nums: number[]): number {
	let currentMin = nums[0];
	let maxDifference = -1;

	for (let index = 1; index < nums.length; index++) {
		if (nums[index] < currentMin) {
			currentMin = nums[index];
		}

		if ((nums[index] - currentMin) > maxDifference) {
			maxDifference = nums[index] - currentMin;
		}
	}

	if (maxDifference === 0) {
		return -1;
	}


	return maxDifference;
};

console.log(maximumDifference([9,4,3,2]));