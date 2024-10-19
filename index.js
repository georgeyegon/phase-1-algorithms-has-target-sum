function hasTargetSum(array, target) {
  // Create a set to store numbers we've already seen
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (const number of array) {
    // Calculate the complement that would sum with 'number' to make 'target'
    const complement = target - number;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pair is found that sums to the target, return false
  return false;
}

/* 
  The Big O time complexity of this function is O(n), 
  where 'n' is the length of the input array, because 
  we're iterating through the array once and set operations 
  (add and has) are O(1) on average.
*/

/*
  Pseudocode:
  - Create an empty set called 'seenNumbers'
  - For each number in the input array:
    - Calculate its complement by subtracting the number from the target
    - If the complement is already in the set, return true
    - Otherwise, add the current number to the set
  - If no such pair is found, return false
*/

/*
  Explanation:
  We use a set to track numbers we've seen so far. For each number in the array,
  we check if its complement (the value that would sum to the target with the current number)
  exists in the set. If it does, we know we've found a pair of numbers that sum to the target.
  If we finish iterating through the array and find no such pair, we return false.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
