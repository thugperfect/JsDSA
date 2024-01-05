let twoSum = (arr,n) =>{
    for(i = 0;i<arr.length -1;i++){
        for(j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === n) return [i,j]
        }
    }
    return false
}

let objTwoSum = (arr,n)=>{
    let obj = {}

    for(i = 0;i<arr.length;i++){
        if(obj[n-arr[i]]>=0){
            return [obj[n-arr[i]],i]
        }else{
            obj[arr[i]] = i
        }
    }
}
console.log(objTwoSum([1,2,3,4,5,6,7],9))