var luckyNumbers  = function(matrix) {
    let obj = {}
    let arr = [];
    
    for(i = 0;i<matrix.length;i++){
        let minRow = 100000;
        for(j = 0;j<matrix[i].length;j++){
            if(matrix[i][j]<minRow) minRow = matrix[i][j]
        }
        obj[minRow] = (obj[minRow]||0)+1
    }

    for(i = 0;i<matrix[0].length;i++){
        let maxCol = -100000
         for(k = 0;k<matrix.length;k++){
             if(matrix[k][i]>maxCol) maxCol = matrix[k][i] 
        }
        obj[maxCol] = (obj[maxCol]||0)+1
    }
    for(let m in obj){
        if(obj[m] >= 2){
            arr.push(Number(m))
        }
    }
    return arr
};

console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))
