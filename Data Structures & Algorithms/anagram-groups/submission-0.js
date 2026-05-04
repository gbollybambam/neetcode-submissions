class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramGroups = new Map();

        for (let str of strs) {
            const count = new Array(26).fill(0);

            for (let char of str) {
                count[char.charCodeAt(0) - 97]++;
            }

            const key = count.toString();

            if (!anagramGroups.has(key)) {
                anagramGroups.set(key, []);
            }

            anagramGroups.get(key).push(str);
        }

        return Array.from(anagramGroups.values());
    }
}
