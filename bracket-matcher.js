class Solution {
  isValid(s) {
    // s: input string containing '(', ')', '{', '}', '[' and ']' only
    // Return true if the string is valid, otherwise return false

      const stack = [];
    
      let i = 0;
      const pairSet = {
          ")": "(" ,
          "}": "{",
          "]": "[" 
      }
      
      while (i < s.length) {

          if (pairSet[s[i]]) {
              if (stack[stack.length - 1] !== pairSet[s[i]]) return false;
              stack.pop();
              i++;
              continue;
          }

          stack.push(s[i]);
          i++;
      }

      return stack.length === 0;
  };
}