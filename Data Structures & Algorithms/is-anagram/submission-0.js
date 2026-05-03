class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const count = {};

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            count[char] = (count[char] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            let char = t[i];
            
            if (!count[char]) {
                return false;
            }

            count[char] -= 1;
        }

        return true;
    }
}
