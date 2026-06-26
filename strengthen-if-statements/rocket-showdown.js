class Solution {
  asteroidCollision(asteroids) {
    // asteroids: array of integers representing asteroids
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let currAst = asteroids[i];
        
        if (stack.length && this.willColide(stack[stack.length - 1], currAst)) {
            if (Math.abs(stack[stack.length - 1]) === Math.abs(currAst)) {
                stack.pop();
                continue;
            }
            if (Math.abs(stack[stack.length - 1]) < Math.abs(currAst)) {
                stack.pop();
            }
        }

        if (!stack.length) {
            stack.push(currAst);
            continue;
        }
        if (this.sameSign(currAst, stack[stack.length - 1])) {
            stack.push(currAst);
            continue;
        }
        if (this.willNeverColide(stack[stack.length - 1], currAst)) {
            stack.push(currAst);
        }
        
    }
      
    return stack;
  }

   sameSign(a, b) {
       if (a > 0 && b > 0) return true;
       if (a < 0 && b < 0) return true;
       return false;
   }
   willColide(a, b) {
       if (a > 0 && b < 0) return true;
       return false;
   }
   willNeverColide(a,b) {
       if (a < 0 && b > 0) return true;
       return false;
   }
}
const inst = new Solution();
const asteroids = [5,-1,2,-2,10,-8];

const ans = inst.asteroidCollision(asteroids);
console.log('ans', ans);