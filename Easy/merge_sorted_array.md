Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

declare a new array
mutate 1st array and insert

Approach:
iterate over second array outside
check each number and the next number
and if 2nd array's num is inbetween the current and next, then you insert it into the array

function merge(nums1, m, nums2, n) {
    
    let dup = [...nums1].slice(0, m);
    for (let i=0; i<nums1.length; i++) {
        nums1.pop();
    }
    while(dup.length || nums2.length) {
        if (dup[0] < nums2[0]) {
            nums1.push(dup.shift());
        } else {
            nums1.push(nums2.shift());
        }
    }

    nums1.push(...dup, ...nums2) 
    return nums1;

}

```javascript
function merge(nums1, m, nums2, n) {
    nums1 = nums1.slice(0, m);
    let sorted = [];
    while(nums1.length || nums2.length) {
        if (nums1[0] < nums2[0]) sorted.push(nums1.shift())
        else sorted.push(nums2.shift())
    }
    sorted.concat(nums1).concat(nums2);
    // nums1 = sorted;
    Object.assign(nums1, sorted);
    return nums1;
}
```