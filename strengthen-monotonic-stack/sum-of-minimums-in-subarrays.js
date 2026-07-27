class Solution {
  sumOfMinimumsInSubarrays(arr) {
    // arr: an array of integers
    // Return the sum of minimums of all subarrays modulo 10^9 + 7

    const mod = 10**9 + 7;
      
    const prevSmaller = this.getPrevSmaller(arr);
    const nextSmaller = this.getNextSmaller(arr);

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i] * (i - prevSmaller[i]) * (nextSmaller[i] - i);
    }
    return total;
  }

  getPrevSmaller(arr) {

      const stack = [];
      const prevSmaller = Array(arr.length).fill(-1);

      for (let i = 0; i < arr.length; i++) {
          while (stack.length && arr[i] <= arr[stack[stack.length-1]]) {
              stack.pop();
          }
          if (stack.length) {
              prevSmaller[i] = stack[stack.length - 1];
          }
          stack.push(i);
      }
      return prevSmaller;
  } 
    
  getNextSmaller(arr) {
      
      const stack = [];
      const nextSmaller = Array(arr.length).fill(arr.length);

      for (let i = arr.length - 1; i > -1 ; i--) {
          while (stack.length && arr[i] < arr[stack[stack.length-1]]) {
              stack.pop();
          }
          if (stack.length) {
              nextSmaller[i] = stack[stack.length - 1];
          }
          stack.push(i);
      }
      return nextSmaller;
  }
}