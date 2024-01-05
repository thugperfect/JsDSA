const multiply = (arr) =>{
    
    if(arr.length === 0){
        return 1
    }
    
    return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
}

console.log(multiply([1,2,3,4]))

function range(s,e){

    if(s>e){
        return []
    }
    let ret = range(s,e-1)

    ret.push(e)
    return ret
}
console.log(range(0,99))