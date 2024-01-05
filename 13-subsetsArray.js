function subsets(arr){
    let res = []
    let temp = []
    recursiveSubsets(arr,0)
    function recursiveSubsets(arr,n){
        if(n === arr.length) return res.push([...temp])
        temp.push(arr[n])
        recursiveSubsets(arr,n+1)
        temp.pop()
        recursiveSubsets(arr,n+1)
    }
    return res
}
console.log(subsets("hello"))