const validBrackets = (str)=>{
    let stack = []


    for(i = 0;i<str.length;i++){
        if(str[i] === '('){
            stack.push(")")
        }
        else if(str[i] === '{'){
            stack.push("}")
        }
        else if(str[i] === "["){
            stack.push(']')
        }else{
            if(stack.pop() !== str[i]){
                console.log("Exec")
                return false
            }
        }
    }
  
    return stack.length === 0
}
console.log(validBrackets("()(){}"))