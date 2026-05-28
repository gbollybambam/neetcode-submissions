class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let maxArray = [];
        let dequeue = [];

        for (let right = 0; right < nums.length; right++) {
            while (dequeue.length > 0 && nums[right] > nums[dequeue.at(-1)]) {
                dequeue.pop();
            }

            dequeue.push(right);

            if (dequeue.length > 0 && dequeue[0] < (right - k + 1) ) {
                dequeue.shift();
            }

            if (right >= k - 1) {
                maxArray.push(nums[dequeue[0]]);
            }
        }
        return maxArray;
    }
}
