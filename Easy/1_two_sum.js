// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//     Example:

// Given nums = [2, 7, 11, 15], target = 9,

//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const twoSum = function (nums, target) {
    let numbers = {};
    nums.forEach((num, i) => numbers[num] !== undefined ? numbers[num].push(i) : numbers[num] = [i]);
    for (let i=0; i < nums.length; i++) {
        let num = nums[i];
        let num2 = target - num;

        if (num === num2) {
            if (numbers[num].length > 1) {
                return [numbers[num][0], numbers[num][1]]
            } else {
                continue;
            }
        } 
        if (numbers[num] && numbers[num2]) return [numbers[num][0], numbers[num2][0]];

    }



};

// let nums = [2,7,11,15];
let nums = [5, 2, 5 ]
let target = 10;

console.log(twoSum(nums, target));