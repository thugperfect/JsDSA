function subsets(arr){
    let res = []
    let temp = []
    recursiveSubsets(arr,0)
    function recursiveSubsets(arr,n){
        if(n === arr.length) return res.push([...temp].join())
        temp.push(arr[n])
        recursiveSubsets(arr,n+1)
        temp.pop()
        recursiveSubsets(arr,n+1)
    }
   
    res.sort();
    let ind =0
    for(i = 1;i<res.length;i++){
        if(res[ind] !== res[i]){
            ind++;
            res[ind] =res[i]
        }
    }
    return ind+1
}
console.log(subsets("deed"))