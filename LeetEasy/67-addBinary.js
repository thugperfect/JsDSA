// only for integer sizes
var addBinary = function (a, b) {
  let numA = parseInt(a, 2);
  let numB = parseInt(b, 2);

  return (numA + numB).toString(2);
};

// for all binary

let allBinary = (s1, s2) => {
  let carry = 0;
  let res = "";
  let len = Math.max(s1.length, s2.length);

  if (s1.length < s2.length) {
    while (s1.length !== s2.length) {
      s1 = "0" + s1;
    }
  } else {
    while (s1.length !== s2.length) {
      s2 = "0" + s2;
    }
  }

  for (i = len-1; i >=0; i--) {
   
   let sum  = Number(s1[i]) + Number(s2[i]) + carry

   res = sum%2 + res

   if(sum>1){
    carry = 1
   }else{
    carry = 0
   }
  }
  return carry === 1 ? "1"+res : res;
};

console.log(allBinary("11", "1"));
