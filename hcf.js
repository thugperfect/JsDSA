function hcf(num1,num2){
    let a = Math.max(num1,num2)

    let b = Math.min (num1,num2)
    let res = 0
    for(i  =1;i<=b ;i++){
        if(a%i === 0 && b%i === 0){
            res = i
        }
    }
    return res
}

console.log(hcf(20,60))