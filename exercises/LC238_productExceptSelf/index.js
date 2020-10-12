function productExceptSelf(nums) {
    let leftProduct = Array(nums.length).fill(1);
    let rightProduct = Array(nums.length).fill(1);
    let output = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        leftProduct[i] =  leftProduct[i - 1] * nums[i-1];
        rightProduct[nums.length - (i + 1)] = rightProduct[(nums.length - i)] * nums[(nums.length - i)];
    }

    for (let i = 0; i < output.length; i++) { 
        output[i] =  leftProduct[i] * rightProduct[i];
    }

    return output;
};

module.exports = productExceptSelf;
