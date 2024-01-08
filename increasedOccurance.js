function increasedOccurance(str){
    let res = ""
    for(i = 0;i<str.length;i+=2){
        let num = +str[i+1]
        if(i>=2 && str[i-2]>str[i]){
          
        }else{
            while(num>0){
                res = res + str[i]
                num--
            }
        }
    }
   return res
}
console.log(increasedOccurance("a2b3a3c4"))
