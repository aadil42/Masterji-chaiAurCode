class Solution {
    queue = [];
    directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    visited = new Set();

    isOutOfBound(row, col, grid) {

        const COL = grid[0].length;
        const ROW = grid.length;

        if (row === ROW) return true;
        if (col === COL) return true;
        if (row < 0) return true;
        if (col < 0) return true;
        return false;
    }
    addRottenOrangesToQueue(grid) {

        const row = grid.length;
        const col = grid[0].length;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 2) {
                    this.queue.push([r,c]);
                }
            }
        }
    }

    hasFreshOrange(grid) {

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) return true;
            }
        }
        return false;
    }

    bfs(grid) {

        let time = 0;

        while (this.queue.length) {
            let currentLevel = this.queue.length;
            while (currentLevel) {
                currentLevel -= 1;
                const cell = this.queue.shift();
                const currRow = cell[0];
                const currCol = cell[1];

                grid[currRow][currCol] = 2;

                for (let i = 0; i < this.directions.length; i++) {
                    const nextRow = currRow + this.directions[i][0];
                    const nextCol = currCol + this.directions[i][1];

                    if (this.isOutOfBound(nextRow, nextCol, grid)) continue;
                    if (this.visited.has(`${nextRow}-${nextCol}`)) continue;
                    if (grid[nextRow][nextCol] === 2) continue;
                    if (grid[nextRow][nextCol] === 0) continue;
                    
                    this.visited.add(`${nextRow}-${nextCol}`);

                    this.queue.push([nextRow, nextCol]);
                }
            }

            time += 1;
        }

        return time;
    }

    orangesRotting(grid) {
        // debugger;
        this.addRottenOrangesToQueue(grid);
        const minTime = this.bfs(grid);
        if (this.hasFreshOrange(grid)) return -1;
        if (minTime === 0) return 0;
        return minTime-1;
    }
}

const myObj = new Solution();

const grid = [[2,1,1],[0,1,1],[1,0,1]];

myObj.orangesRotting(grid);
