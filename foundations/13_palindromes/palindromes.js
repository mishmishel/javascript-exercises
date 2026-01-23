const palindromes = function (str) {
    lower = str.toLowerCase();
    noPunctuation = lower.replace(/[,!.]/g, "");
    formatted = noPunctuation.replaceAll(" ", "");
    let i = 0
    let j = formatted.length - 1
    while (i < j) {
        console.log(i + ' ' + formatted[i]);
        console.log(j + ' ' + formatted[j]);
        if (formatted[i] != formatted[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
