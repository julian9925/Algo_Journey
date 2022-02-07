function maxArea(height) {
    let maxVolume = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const volume = Math.min(height[left], height[right]) * width;
        maxVolume = Math.max(maxVolume, volume);
        console.info(maxVolume, volume);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVolume;
}

module.exports = maxArea;
