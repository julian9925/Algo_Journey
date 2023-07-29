function numSubarraysWithSum(nums: number[], goal: number): number {
    let left = 0;
    let right = 0;
    let count = 0;
    let sum = 0;

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
};

console.log(numSubarraysWithSum([1,0,1,0,1], 2));