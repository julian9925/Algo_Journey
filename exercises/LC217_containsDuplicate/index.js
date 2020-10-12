function containsDuplicate(nums) {
    const numsAppear = {};

    for (let i = 0; i < nums.length ; i++) {
        const num = nums[i];
        if (numsAppear[num]) {
            return true;
        } else {
            numsAppear[num] = true;
        }
    }

    return false;
};

module.exports = containsDuplicate;
