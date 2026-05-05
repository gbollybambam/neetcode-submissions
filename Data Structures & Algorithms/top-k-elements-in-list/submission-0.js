class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();
        for (let num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1)
        }

        const buckets =  new Array(nums.length + 1).fill().map(() => []);
        for (let [num, freq] of countMap) {
            buckets[freq].push(num);
        }

        const results = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                for (let n of buckets[i]) {
                    results.push(n);

                    if (results.length === k) {
                        return results;
                    }
                }
            }
        }
    } 
}
