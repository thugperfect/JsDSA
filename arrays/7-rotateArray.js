const rotateArray = (arr, r) => {
  let size = arr.length;
  if (r > size) {
    r = r % size;
  }
  let spliced = arr.splice(size - r, size);
  arr.unshift(...spliced);
  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5], 3));

const altRotateArr = (arr, r) => {
  reverse(arr, 0, arr.length - 1);

  reverse(arr, 0, r - 1);
  reverse(arr, r, arr.length - 1);

  function reverse(arr, s, e) {
    while (s < e) {
      temp = arr[s];
      arr[s++] = arr[e];
      arr[e--] = temp;
    }
    return arr;
  }
  return arr;
};

console.log(altRotateArr([1, 2, 3, 4, 5], 3));
