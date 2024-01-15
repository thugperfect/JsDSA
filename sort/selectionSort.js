function selectionSort(...arr){
    for (let i = 0; i < arr.length -1; i++) {
        let index = i;
       for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[index]) index = j;
       }
        if(index !== i) [arr[i],arr[index]] = [arr[index],arr[i]]
    }

    return arr;
}
console.log(selectionSort(12,213,213,12,3,21,12,3213,2423242,21,3123,21312,232,124,576,45,34,323,56,67))