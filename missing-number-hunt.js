class Solution {
  /**
   * Time O(n) | Space O(1)
   * Finds the missing number in the array.
   * @param {number[]} arr - Array of distinct integers from 1 to n with exactly one missing.
   * @returns {number} The missing integer.
   */
  findMissingNumber(arr) {
    // Your implementation here
    return this.getTotalOfSeries(arr.length+1) - this.getTotal(arr);
  }
  
  getTotalOfSeries(n) {
      return (1 + n)*(n/2);
  }
  getTotal(arr) {
      return arr.reduce((acc, curr) => acc+curr, 0);
  }
}