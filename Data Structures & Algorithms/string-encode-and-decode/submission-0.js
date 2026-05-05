class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for (let str of strs) {
            encodedString += str.length + '#' + str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStr = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            const length = Number(str.substring(i, j));

            const word = str.substring(j + 1, j + 1 + length);
            decodedStr.push(word);

            i = j + 1 + length;
        }

        return decodedStr;
    }
}
