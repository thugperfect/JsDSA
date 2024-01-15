function insertionSort(...arr){
    for(i = 1;i<arr.length;i++){
        let key = arr[i];

        let j = i-1;

        while(j>=0 && key < arr[j]){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = key;
    }
    return [...arr]
}
console.log(insertionSort(5,4,3,2,100))