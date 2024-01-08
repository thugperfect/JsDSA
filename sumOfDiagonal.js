function sumOfDiagonal(mat){
    let d1 = 0
    let d2 =0 

    for(i = 0;i<mat.length;i++){
        for(j = 0;j<mat[i].length;j++){
            if(i === j){
                d1+=mat[i][j]
            }

            if(j===mat[i].length-i-1){
                d2+=mat[i][j]
              
            }
        }
    }

    return Math.abs(d1-d2)
}

console.log(sumOfDiagonal([[1,2,3],[4,5,6],[12,8,9]]))
