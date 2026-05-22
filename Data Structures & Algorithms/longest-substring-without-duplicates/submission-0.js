class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashSet = new Set(); // check if the character is present in the window or not
        let leftBoundary = 0;
        let maxLength = 0;

        for (let rightBoundary = 0; rightBoundary < s.length; rightBoundary++) {
            while(hashSet.has(s[rightBoundary])) {
                hashSet.delete(s[leftBoundary]);
                leftBoundary++;
            }
            hashSet.add(s[rightBoundary]);
            maxLength = Math.max(maxLength, rightBoundary - leftBoundary + 1);
        }

        return maxLength;
    }
}
