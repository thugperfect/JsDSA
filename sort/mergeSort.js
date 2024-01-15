function mergeSort(arr){
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2)

    let start = mergeSort(arr.slice(0,mid));
    let end = mergeSort(arr.slice(mid));

    return merge(start,end)
}

function merge(a,b){
    let sortedArr = []
    while (a.length && b.length) {
        
        if(a[0]<b[0]){
            sortedArr.push(a.shift())
        }else{
            sortedArr.push(b.shift())
        }
    }

    return [...sortedArr,...a,...b]
}

console.log(mergeSort([7,9,0,7,65,5,4,2,1,'ww']))