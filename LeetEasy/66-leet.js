var plusOne = function(digits) {
    if(digits.length>15){
    let lasttwo = digits.splice(digits.length-2,2)
    let sum = ""+(+lasttwo.join("")+1)
    if(lasttwo[0]===0){
        sum= "0"+ sum
    }
    for(i = 0;i<sum.length;i++){
        digits.push(Number(sum[i]))
    }
    return digits
}else{
    let str = digits.join("")
    let sum = ""+(1+Number(str))
    
    let arr = [];

    for(i = 0;i<sum.length;i++){
        arr.push(+sum[i])
    }
    return arr
}
};



var pOne = function(digits) {
    let t = false

    let rev =digits.reverse()

    for(i = 0;i<rev.length;i++){
        let num = 0
        num = rev[i]+1
        if(rev[i]+1 === 10){
            rev[i] = 0
            t = true
        }else{
            rev[i] = num
            t = false
            break
        }
    }
    if(t) rev.push(1)

    return rev.reverse()
}
console.log(pOne([9,9,9]))
