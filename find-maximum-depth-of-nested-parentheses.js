class Solution {
//   Time O(n) | Space O(1)
  maxDepth(s) {
    let max = 0;
    let curr = 0;
      for (let i = 0; i < s.length; i++) {
          if (s[i] === ")") {
              max = Math.max(max, curr);
              curr -= 1;
              continue;
          }
          if (s[i] === "(") {
              curr += 1;
          }
      }

      return max;
  }
    
}