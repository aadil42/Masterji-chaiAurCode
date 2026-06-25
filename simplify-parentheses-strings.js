class Solution {
  simplifyParentheses(s) {
    // s: a string of valid parentheses
    // Returns a string with outermost parentheses removed from each primitive component.
    // Time O(n) | Space O(n)
    const stack = [];
    const posToRemove = new Set();
    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(") {
            stack.push(i);
            continue;
        }
        if (stack.length === 1) {
            posToRemove.add(stack.pop());
            posToRemove.add(i);
            continue;
        }
        stack.pop();
    }
      
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
        if (posToRemove.has(i)) continue;
        newStr += s[i];
    }
    
    return newStr;
  }
}