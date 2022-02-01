//mini exercises for functions lecture 02/01

function returnFive() {
    return 5;
}
//console.log(returnFive());

function isFive(num) {
    if (num === 5) {
        return true;
    } else {
        return false;
    }
}
//console.log(isFive(5));

function isShortWord(str) {
    if (str.length < 5) {
        return true;
    } else {
        return false;
    }
}
//console.log(isShortWord("short"));

function isSameLength(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}
//console.log(isSameLength("five", "cats"));

function getSmallerSegment(str, num) {
    return str.substring(0, num).toLowerCase();
}
//console.log(getSmallerSegment("Codeup", 2));