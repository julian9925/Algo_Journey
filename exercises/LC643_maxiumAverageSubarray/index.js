function findMaxAverage(nums, k) {
    var maxSum = 0;
    var startRange = nums.length - k;
    for (var windowStart = 0; windowStart < startRange; windowStart++) {
        var sum = 0;
        for (var index = windowStart; index < windowStart + k; index++) {
            sum += nums[index];
            console.log(nums[index]);
        }
        console.log('sum:', sum);
        maxSum = Math.max(maxSum, sum);
        console.log('max sum:', maxSum);
    }
    return maxSum / k;
}
;
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
