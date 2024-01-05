var lengthOfLastWord = function(s) {
    let tr =s.trim()

    let arr = tr.split(" ")

    let rev = arr.reverse()

    return rev[0].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))