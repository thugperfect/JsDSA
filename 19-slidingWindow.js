var maxSlidingWindow = function (nums, k) {
  let q = [];

  let res = [];

  for (i = 0; i < nums.length; i++) {
    if(q.length>0 && q[0]<=i-k){
        q.shift()
    }

    while(q.length>0 && nums[q[q.length-1]]<nums[i]){
        q.pop()
    }

    q.push(i)

    if(i>=k-1){
        res.push(nums[q[0]])
    }
  }
  return res
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
