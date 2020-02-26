/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let merged = [];
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            merged.push(nums1.shift());
        } else {
            merged.push(nums2.shift());
        }
    }

    let remain = nums1.length ? nums1 : nums2;
    merged = merged.concat(remain);
    let middle = (merged.length - 1) / 2;
    return (merged[Math.floor(middle)] + merged[Math.ceil(middle)]) / 2;
};
// @lc code=end
