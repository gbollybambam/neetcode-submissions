class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!t || !s) return '';
        
        const targetMap = {};
        const windowMap = {};

        for (let char of t) {
            targetMap[char] = (targetMap[char] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(targetMap).length;
        let left = 0;
        let minLen = Infinity;
        let res = [-1, -1];

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            windowMap[char] = (windowMap[char] || 0) + 1;

            if (targetMap[char] && windowMap[char] === targetMap[char]) {
                have++;
            }

            while (have === need) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    res = [left , right];
                } 

                let leftChar = s[left];
                windowMap[leftChar]--;

                if (targetMap[leftChar] && windowMap[leftChar] < targetMap[leftChar]) {
                    have--;
                }
                left++;
            }
        }
        const [start, end] = res;
        return minLen === Infinity ? "" : s.substring(start, end + 1);
    }
}
