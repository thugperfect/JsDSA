let palindrome =(n)=>{
    let x = ""+n

    let arr = x.split("").reverse().join("")

    return x === arr

}


let altPalindrome = (n) =>{
    if(n<0) return false
    let num = n
    let res = 0
    while(num>0){
        let temp = num%10

        res = res*10 + temp

        num =Math.floor(num/10)
    }

    return n === res
}

let recursionPalindrome = (n) =>{
    
    let str = ""+n

    if(str.length === 0 || str.length === 1) return true

    if(str[0] === str[str.length-1]){
      return  recursionPalindrome(str.slice(1,-1))
    }

    if(str.length!==0){
        return false
    }
}

console.log(recursionPalindrome(111))