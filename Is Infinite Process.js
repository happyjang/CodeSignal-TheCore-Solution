// Given integers a and b, determine whether the following pseudocode results in an infinite loop
// while a is not equal to b do
//   increase a by 1
//   decrease b by 1
// Example

// For a = 2 and b = 6, the output should be
// isInfiniteProcess(a, b) = false;
// For a = 2 and b = 3, the output should be
// isInfiniteProcess(a, b) = true.



function isInfiniteProcess(a, b) {
    if ( a > b ) return true;
    else if ( a % 2 !== b % 2 ) return true;
    else return false;
}


function isInfiniteProcess(a, b) {
    return a > b || a % 2 !== b % 2;
}
