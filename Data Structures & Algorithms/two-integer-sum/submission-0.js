class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = {};

        for (let i = 0; i < nums.length; i++) {
            const difference =  target - nums[i];
            if (difference in numMap) {
                return [numMap[difference], i]
            }

            numMap[nums[i]] = i;
        }

        return [];
    }
}
