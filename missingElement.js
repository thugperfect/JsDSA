function missingElement(n){
    let arr = []

    for(i=0;i<n.length;i++){
        arr[n[i]-1] = 1
    }
    console.log(arr)
    for(i=0;i<arr.length;i++){
        if(!arr[i]){
            return i+1
        }
    }
}
console.log(missingElement([1,2,3,5,6,4,9]))