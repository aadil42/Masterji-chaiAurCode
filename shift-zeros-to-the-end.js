class Solution {
  /**
   * Shifts all zeros in the array to the end while preserving the order of non‑zero elements.
   * @param {number[]} arr - The input integer array.
   * @returns {number[]} A new array with zeros moved to the end.
   */
  swap({arr, leftMostZeroPosition, i}) {
      let temp = arr[i];
      arr[i] = arr[leftMostZeroPosition];
      arr[leftMostZeroPosition] = temp;
  }
    
  // Time complexity O(n)
  // Space compelxity O(1)
  shiftZerosToEnd(arr) {
    // Your implementation here

    let leftMostZeroPosition = -1;
    
    for (let i = 0; i < arr.length; i++) {
        if (leftMostZeroPosition > 0 && arr[i] !== 0) {
            this.swap({arr, leftMostZeroPosition, i});
        }

        if (arr[i] === 0 && arr[leftMostZeroPosition] !== 0) {
            if (leftMostZeroPosition === -1) {
                leftMostZeroPosition = i;
            } else {
                leftMostZeroPosition += 1;
            }
        }
    }

    return arr;
  }
}