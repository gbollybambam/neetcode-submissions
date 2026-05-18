class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) return 0;

        let left = 0;
        let right = height.length - 1;

        let maxLeft = height[left]; 
        let maxRight = height[right];

        let totalWater = 0;

        while (left < right) {
            if (maxLeft < maxRight) {
                left++;
                maxLeft = Math.max(maxLeft, height[left]);
                totalWater += maxLeft - height[left]
            } else {
                right--;
                maxRight = Math.max(maxRight, height[right]);
                totalWater += maxRight - height[right];
            }
        }
        return totalWater;
    }
}
