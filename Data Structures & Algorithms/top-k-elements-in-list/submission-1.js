class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = new Map();
        let buckets = Array.from({ length: nums.length + 1 }, () => []);
        let result = [];

        for (const num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        for (const [num, frequency] of countMap) {
            buckets[frequency].push(num);
        }

        for (let i = buckets.length - 1; i >= 0; i--) {
            let targetBucket = buckets[i];

            for (const element of targetBucket) {
                result.push(element);
                if (result.length === k) return result;
            }
        }
        return result;
    } 
}
