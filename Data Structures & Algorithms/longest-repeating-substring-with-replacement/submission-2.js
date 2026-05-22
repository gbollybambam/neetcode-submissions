class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length === 0) return 0;

        let left = 0;
        let maxWindowSize = 0;

        let hashTable = {};
        let maxFrequency = 0;


        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            hashTable[char] = (hashTable[char] || 0) + 1;

            maxFrequency = Math.max(maxFrequency, hashTable[char]);

            if ((right - left + 1) - maxFrequency > k) {
                hashTable[s[left]] = hashTable[s[left]] - 1;
                left++;
            }
            maxWindowSize = Math.max(maxWindowSize, right - left + 1)
        }
        return maxWindowSize;
    }
}



