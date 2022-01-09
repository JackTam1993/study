// 答案，不是判断是否找到，而且判断数组是否切分完成了。
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((high - low) / 2) + low;
        const num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

/**
 * 我的
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let targetIndex = undefined

    let minIndex = 0;
    let maxIndex = nums.length - 1;
    let midIndex = Math.ceil((minIndex + maxIndex) / 2);

    while(!targetIndex) {

        // 开始找找到找到为止
        if(target > nums[midIndex]) {
            minIndex = midIndex
            midIndex = Math.floor((minIndex + maxIndex) / 2) + minIndex;
        } else if(target < nums[midIndex]) {
            maxIndex = midIndex - 1
            midIndex = Math.ceil((minIndex + maxIndex) / 2) + minIndex;
        } else {
            targetIndex = midIndex;
            break;
        }
    }

    return targetIndex;
};

console.log(search([-1,0,3,5,9,12], 9))
