function numSubarraysWithSum(nums, goal) {
    var left = 0;
    var right = 0;
    var count = 0;
    var sum = 0;
    while (right < nums.length) {
        sum += nums[right];
        while (left < right && sum > goal) {
            sum -= nums[left];
            left++;
        }
        if (sum === goal) {
            count++;
        }
        right++;
    }
    return count;
}
;
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
