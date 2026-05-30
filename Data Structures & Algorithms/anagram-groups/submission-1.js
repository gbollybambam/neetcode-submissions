class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for (const str of strs) {
            const freqCount = new Array(26).fill(0);
            for (const char of str) {
                let index = char.charCodeAt(0) - 97;
                freqCount[index]++;
            }
            let key = freqCount.join(',');
            if (!res[key]) res[key] = [];
            res[key].push(str);
        }
        return Object.values(res);
    }
}
