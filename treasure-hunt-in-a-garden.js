class Solution {
  shortestPathBinaryMatrix(grid) {
    // grid: 2D array representing the binary matrix
    // brute force with dfs.
      const ROW = grid.length;
      const COL = grid[0].length;
      // [r, c]
      const directions = [
          [-1,0],
          [-1,1],
          [0, 1],
          [1, 1],
          [1, 0],
          [1, -1],
          [0, -1],
          [-1, -1]
      ];
      
      const isOutOfBound = (r,c) => {
          if (r < 0) return true;
          if (r === ROW) return true;
          if (c < 0) return true;
          if (c === COL) return true;

          return false;
      }

      const cache = new Map();
      const visited = new Set();

      const getHash = (r, c) => `${r}#${c}`;
      
      const isInCache = (r, c) => {
          const hash = getHash(r, c);
          if (cache.has(hash)) return true;
          return false;
      }

      const getFromCache = (r, c) => {
          const hash = getHash(r, c);
          return cache.get(hash);
      }

      const setInCache = (r, c, val) => {
          const hash = getHash(r, c);
          cache.set(hash, val);
      }

      const isEnd = (r, c) => {
          if (r === ROW - 1 && c === COL - 1) return true;
          return false;
      }

      const markVisited = (r, c) => {
          const hash = getHash(r, c);
          
          visited.add(hash);
      }

      const unMarkVisited = (r, c) => {
          const hash = getHash(r, c);
          visited.delete(hash);
      }

      const isVisited = (r, c) => {
          const hash = getHash(r, c);
          if (visited.has(hash)) return true;
          return false;
      }
      
      const dfs = (r, c) => {

          if (isVisited(r, c)) return Infinity;
          if (isOutOfBound(r,c)) return Infinity;
          if (grid[r][c] === 1) return Infinity;
          if (isInCache(r,c)) return getFromCache(r,c);
          if (isEnd(r, c)) return 1;

          let currMinPath = Infinity;

          markVisited(r,c);
          for (let i = 0; i < directions.length; i++) {
              const nextR = r+directions[i][0];
              const nextC = c+directions[i][1];
              currMinPath = Math.min(1 + dfs(nextR, nextC), currMinPath);
          }    
          unMarkVisited(r,c);
          
          setInCache(r, c, currMinPath);
          return currMinPath;
      }

      const shortestPath = dfs(0, 0);
      if (shortestPath === Infinity) return -1;
      return shortestPath;
  }
}