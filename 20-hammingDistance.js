function hammingString(s1,s2){
    if(s1.length !== s2.length) return -1

    let h = 0
    for(i = 0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            h++;
        }
    }
    return h
}

function hammingBinary(n1,n2){
    let s1 = n1.toString(2)


    let s2 = n2.toString(2)
 
    let r = 0
    if(s1.length<s2.length){
        while(s1.length!==s2.length){
            s1="0"+s1
        }
    }else{
        while(s1.length!==s2.length){
            s2 = "0"+s2
        }
    }
  
    for(i = 0;i<s1.length;i++){
        if(s1[i] !== s2[i]){
            r++
        }
    }
    return r


}

console.log(hammingBinary(1,4))