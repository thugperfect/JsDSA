let newSqrt = (x) =>{
    if(x<2) return x
    
    let s = 0;
    let e = x/2

    while(s<=e){
        let mid = Math.floor((s+e)/2)

        if(mid*mid <= x && x < (mid+1)*(mid+1)){
            return mid
        }
        if(mid*mid > x){
            e = mid -1
        }else{
            s = mid+1
        }
    }
}

console.log(newSqrt(4))