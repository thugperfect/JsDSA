console.log(cyclicSort([3,2,1,4,5,8,7,6]))

function cyclicSort(arr){
    let i =0;
    while (i<arr.length) {
        let correctIndex = arr[i] -1;

        if(arr[i] !==arr[correctIndex]){
            swap(arr,i,correctIndex);
        }
        else{
            i++
        }
    }
    return arr;
}

function swap(arr, f,l){
    let temp = arr[f];
    arr[f] = arr[l];
    arr[l] =temp;
}