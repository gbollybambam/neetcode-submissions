class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, () => new Set());
        let cols = Array.from({ length: 9 }, () => new Set());
        let grids = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let target = board[r][c];
            
                if (target === '.') continue;

                let boxIndex = Math.floor(r/3) * 3 + Math.floor(c/3);

                if (rows[r].has(target) || cols[c].has(target) || grids[boxIndex].has(target)) {
                    return false;
                } else {
                    rows[r].add(target);
                    cols[c].add(target);
                    grids[boxIndex].add(target);
                }
            }
        }
        return true;
    }
}