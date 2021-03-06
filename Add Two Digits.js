You are given a two-digit integer n. Return the sum of its digits.
Example
For n = 29, the output should be
addTwoDigits(n) = 11.

//โจทย์กำหนดตัวเลขมาให้ เช่น n = 29
//returnค่า 2 + 9 = 11

function addTwoDigits(n) {
    return n = String(n).split("").reduce((a, b) => Number(a) + Number(b));
}