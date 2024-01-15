function breakingRecords(scores) {
    let high = 0;
    let low = 0;
    let max = 0;
    let min = 1000000;
    for(let i = 0;i<scores.length;i++){
        if(scores[i] > max){
            high++
        }
        if(min != 1000000 && scores[i] < min){
            low++
        }
        max  = Math.max(max,scores[i])
        min = Math.min(min,scores[i])
        console.log(max,scores[i])
     
    }
    
    return [high,low]

}

console.log(breakingRecords([10 ,5, 20, 20, 4, 5, 2, 2,5,1]))