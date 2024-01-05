function secondLargest(arr){
    let u = Array.from(new Set(arr))

    u.sort((a,b)=>b-a)
    if(u.length>1){
        return u[1]
    }
    else{
        return false
    }
}

function altSecondLargest(arr){
    let lar1 = Number.NEGATIVE_INFINITY
    let lar2 = Number.NEGATIVE_INFINITY

    for(i = 0;i<arr.length;i++){
        if(arr[i]>lar1){
            lar2 = lar1
            lar1 = arr[i]
        }

        if(arr[i]<lar1 && arr[i]>lar2){
            lar2 = arr[i]
        }
    }

    return lar2
}

console.log(altSecondLargest([1,2,1,1,2,3,1,1,3,2,5,2,6,7,0,892,221,1221]))