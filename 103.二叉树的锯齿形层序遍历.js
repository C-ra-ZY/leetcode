/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }

    let tasks=[root],result=[],level=0;
    while(tasks.length){
        let tempTasks=[];
        if(!result[level]){
            result[level]=[];
        }
        // console.log(JSON.stringify(tasks,undefined,2))

        while(tasks.length){
            let task=tasks[level%2?"pop":"shift"]();
            result[level].push(task.val)
            if(level%2){

                task.right && tempTasks.unshift(task.right)
                task.left && tempTasks.unshift(task.left)
            }else{
                task.left && tempTasks.push(task.left)
                task.right && tempTasks.push(task.right)
            }
        }

        /* for(let task of tasks){
            result[level].push(task.val)
            if(level%2){
                task.right && tempTasks.unshift(task.right)
                task.left && tempTasks.unshift(task.left)
            }else{
                task.right && tempTasks.push(task.right)
                task.left && tempTasks.push(task.left)
            }
        } */
        level++;
        tasks=tempTasks;
    }
    return result
};
// @lc code=end

