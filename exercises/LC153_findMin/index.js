function findMin(nums) {
	let left = 0;
	let right = nums.length -1;

	if (nums.length === 1) {
		return nums[0];
	}

	if (nums[left] < nums[right]) {
		return nums[left];
	}

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		let leftVal = nums[left];
		let midVal = nums[mid];
		let midLeftVal = nums[mid - 1];
		let midRightVal = nums[mid + 1];

		if ( midRightVal < midVal) {
			return midRightVal;
		} else if (midLeftVal > midVal) {
			return midVal;
		}

		if ( midVal > leftVal) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
}

module.exports = findMin;
