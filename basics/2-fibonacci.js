let fibonacci = (n) =>{
    if(n === 0 || n===1) return n

    let arr = [0,1]

    for(i = 2;i<n+1;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[n]
}

let revFibonacci = (n)=>{
    if(n === 0 || n===1) return n

    return revFibonacci(n-1) + revFibonacci(n-2)
}

console.log(revFibonacci(4))