const maxProfit = (arr)=>{
    let ret = 0
    for(i = 0;i<arr.length-1;i++){
        for(j = i+1;j<arr.length;j++){
            if(arr[j]-arr[i]>ret){
                ret = arr[j]-arr[i]
            }
        }
    }
    return ret
}



const altMaxProfit = (arr)=>{
    let min = arr[0]
    let profit = 0

    for(i = 0;i<arr.length-1;i++){
        if(arr[i]<min){
            min = arr[i]
        }
        if(arr[i+1]-min>profit){
            profit = arr[i+1]-min
        }
    }

    return profit
}

console.log(altMaxProfit([7,1,5,3,6,4]))


const arr = [7,1,5,3,6,4]
