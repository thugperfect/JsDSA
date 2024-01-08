function sortDates(arr){
    let resArr = []
    
    let aa  = arr.sort((a,b)=>{
        let [dA,yA] = a.split("-").map(Number)
        let [dB,yB] = b.split("-").map(Number)
        if(yA!==yB){
            return yA-yB
        }
        else{
            return dA-dB
        }
    })
    return aa
    
}

console.log(sortDates(["12-2004","18-1987","12-1999","12-2030","31-1966"]))