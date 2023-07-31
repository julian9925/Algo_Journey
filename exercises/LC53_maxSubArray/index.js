function maxSubArray(nums) {
    var sumTable = [nums[0]];
    var maxSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
        sumTable[i] = Math.max(nums[i], sumTable[i - 1] + nums[i]);
        maxSum = Math.max(maxSum, sumTable[i]);
    }
    return maxSum;
}
;
module.exports = maxSubArray;
