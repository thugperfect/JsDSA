function maxSumSubArray(arr){
    let max = arr[0]
    let s = 0
    let e = 0
    for(i = 0;i<arr.length;i++){
        let current = 0
       

        for(j = i;j<arr.length;j++){
            current +=arr[j]

            if(current>max){
                max = current
                s = i;
                e = j
            }
        }
    }
    return {max,array:arr.slice(s,e+1)}
}


function kadaneAlgo(arr){
   let max = 0
   let sum = 0

   for(i =0;i<arr.length;i++){
    sum = sum+arr[i];

    if(sum>max){
        max = sum
    }
    if(sum<0){
        sum = 0
    }
   }
   return max
}
console.log(kadaneAlgo([-1]))