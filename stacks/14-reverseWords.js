const reverseWords = (text) =>{
    let arr = text.split(" ")
    let stack = []
    let res = ""
    for(let i of arr){
        stack.push(i)
        
    }
  
    while(stack.length){
        let c = stack.pop()
        if(c){
            res = res + " " + c
        }
    }
    return res.trim()
}

console.log(reverseWords("hi hello"))