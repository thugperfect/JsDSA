function decimalToBinary(n){
    binary = ""
    while(n>0){
        binary = (n%2) +binary;

        n = Math.floor(n/2)
    }
    return binary
}

console.log(decimalToBinary(5))