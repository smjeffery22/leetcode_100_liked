// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/*
 *  MY ATTEMPT
 */

// Array => array of integers
// Target => integer
// Sum of two elements === Target
//  Return the two indices

// Loop through array
// Start with the first element (index 0)
// Add other element one by one => check if === Target
// Repeat until found

const nums = [2, 7, 11, 15];
const target = 17;

// const twoSum = (nums, target) => {
//   // const indices = []; no need to include this array, can just return indices in an array

// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				// indices.push(i);
// 				// indices.push(j);
// 				return [i, j];
// 			}
// 		}
// 	}
// };

// console.log(twoSum(nums, target));

// Time complexity: quadratic O(n^2) => two loops
// Space complexity: O(1) => constant - not allocating any extra memory

/*
 *  OPTIMAL SOLUTION
 */

// Come up with an algorithm that is less than O(n^2) time complexity?
//  Loop through array only once => O(n)

// Loop through array
// Create a storage (new object)
// Check if Target - element exists in the storage
//  If yes, return two incides
//  If no, add element and index

const twoSum = (nums, target) => {
  const storage = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (storage[diff] !== undefined) {
      return [storage[diff], i];
    } else {
      storage[nums[i]] = i;
    }
  }
}

console.log(twoSum(nums, target));