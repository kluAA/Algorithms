// Given two arrays, write a function to compute their intersection.

//     Example 1:

// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]
// Example 2:

// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [9, 4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

function intersection(nums1, nums2) {
    let visited = new Set();
    let intersection = new Set();
    nums1.forEach(num => visited.add(num));
    nums2.forEach(num => visited.has(num) ? intersection.add(num) : null);
    return Array.from(intersection);
}