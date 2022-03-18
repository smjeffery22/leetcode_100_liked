/*
 *  QUESTION
 */
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Constraints:
//  The number of nodes in both lists is in the range [0, 50].
//  -100 <= Node.val <= 100
//  Both list1 and list2 are sorted in non-decreasing order.

// EXAMPLES:
//  Input: list1 = [1,2,4], list2 = [1,3,4]
//  Output: [1,1,2,3,4,4]
//  Input: list1 = [], list2 = []
//  Output: []
//  Input: list1 = [], list2 = [0]
//  Output: [0]

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

/*
 *  MY ATTEMPT => Not accepted as solution
 */

// merge two arrays (lists) into one
// sort the array

// const mergeTwoLists = (list1, list2) => {
//   // return empty array if both lists are empty
//   if (list1 === [] && list2 === []) {
//     return [];
//   }

//   // combine the two lists and store it in a new array
//   // const mergedList = [...list1, ...list2];

//   // sort the merged array and return
//   // return list1.sort((a, b) => a - b);
// }

// const result = mergeTwoLists(list1, list2);

// console.log(result)

/*
 *  SOLUTION
 */

// have pointers to keep track of where the list is at
// compare list1 and list2

const mergeTwoLists = (l1, l2) => {
	const dummy = new ListNode(-Infinity);
	let prev = dummy;

  // edge case for both lists being null
	if (!list1 && !list2) {
		return list1;
	}

 // edge cases for one of the lists being null
	if (!l1) prev.next = l2;
	if (!l2) prev.next = l1;

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			prev.next = l1;
			prev = l1;
			l1 = l1.next;
		} else {
			prev.next = l2;
			prev = l2;
			l2 = l2.next;
		}
	}

	console.log('dummy:', dummy);
	return dummy.next;
};

console.log(mergeTwoLists(list1, list2));
