class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (let char of s) {
            if (char in closeToOpen) {
                // check if the top of the stack is the key
                if (stack.length > 0 && closeToOpen[char] === stack.at(-1)) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
