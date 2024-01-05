const anagram = (str1,str2) =>{
    if(str1.length !== str2.length) return false
    let s1 = str1.split("").sort().join("")
    let s2 = str2.split("").sort().join("")
    return s1 === s2
}


const objAnagram = (str1,str2) =>{
    if(str1.length !== str2.length) return false

    let o1 = {}
    let o2 = {}

    for(i = 0;i<str1.length;i++){
        o1[str1[i]] = (o1[str1[i]] || 0) +1
        o2[str2[i]] = (o2[str2[i]] || 0) +1
    }
    for(let key in o1){
        if(o1[key] !== o2[key]){
            return false
        }
    }

    return true
}

console.log(objAnagram("abc","boc"))