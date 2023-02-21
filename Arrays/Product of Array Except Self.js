/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
https://leetcode.com/problems/product-of-array-except-self/description/
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let arr1 = [1]
    let arr2 = [1]

    let res = []

    for(var i = 1; i< nums.length; i++)
    {
        arr1.push(arr1[i-1]*nums[i-1])
    }

    
    for(var j = nums.length-2; j >-1; j--)
    {
        arr2.unshift(arr2[0]*nums[j+1])
    }

    for(var z=0;z<arr1.length;z++)
    {
        res.push(arr1[z]*arr2[z])
    }

    return res
};