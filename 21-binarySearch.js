function binarySearch(arr,k){
    let start = 0
    let end = arr.length - 1

    while(start<=end){
        let mid = Math.floor((start+end)/2)

        if(k === arr[mid]){
            return mid
        }
        if(arr[mid]<k){
            start = mid + 1 
        }else{
            end = mid - 1
        }
    }

}

console.log(binarySearch([-1,0,3,4,8,10,43,67,99],67))