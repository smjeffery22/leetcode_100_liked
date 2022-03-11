// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Array => array of integers
// Target => integer
// Sum of two elements === Target
//  Return the two indices

// Loop through array
// Start with the first element (index 0)
// Add other element one by one => check if === Target
// Repeat until found

const nums = [2, 7, 11, 15];
const target = 6;

const twoSum = (nums, target) => {
	const indices = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				indices.push(i);
				indices.push(j);
				return indices;
			}
		}
	}
};

console.log(twoSum(nums, target));
