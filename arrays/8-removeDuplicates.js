function removeDuplicates(arr) {
  for (i = 1; i < arr.length; i++) {
    if(arr[i-1] === arr[i]){
      arr.splice(i-1,1)
      i--;
    }
  }
  return arr.length
}

console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 7]));

function altRemoveDuplicates(arr) {
  if(!arr.length) return 0
  let i = 0

  for(j = i+1;j<arr.length;j++){
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }
  }
  return i+1
}

console.log(altRemoveDuplicates([0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 7]));
