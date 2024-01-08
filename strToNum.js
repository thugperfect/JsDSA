
function fn(arr){
    let sl = arr.split(" ")

    let obj = {
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9,
        "zero":0
    }
    let strN = ''
    for(i = 0;i<sl.length;i++){
        strN += obj[sl[i]]
    }
    return strN
}

console.log(fn("one two three four"))