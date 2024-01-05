function s(nums,val){
    let count = 0
    for(i  =0;i<nums.length;i++){
        if(nums[i] === val){
            count++
        }
    }
    return nums.length-count
}

console.log(s([0,1,2,2,3,0,4,2],2))