// 977. Squares of a Sorted Array

// Given an array of integers A sorted in non - decreasing order, return an array of the squares of each number, also in sorted non - decreasing order.

//     Example 1:

// Input: [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
// Example 2:

// Input: [-7, -3, 2, 3, 11]
// Output: [4, 9, 9, 49, 121]

const sortedSquares = function (A) {
    let squared = [];
    A.forEach(ele => squared.push(ele * ele));
    return squared.sort((a, b) => a - b);
};