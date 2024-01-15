function bubbleSort(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -i -1; j++) {
            if(arr[j]>arr[j+1])
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
        }
        
    }

    return arr;
}

console.log(bubbleSort([1,322,434,45,67567,878,676,86765,65,344,11,234,34,656,344]))