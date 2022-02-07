function maxSubArray(nums) {
    let dp = [nums[0]];
    let maxSum = nums[0];
    
    for (let index = 1; index < nums.length; index++) {
        const num = nums[index];
        dp[index] = Math.max(dp[index - 1] + num, num);
        maxSum = Math.max(maxSum, dp[index]);
    }
    
    return maxSum;
}

module.exports = maxSubArray;
