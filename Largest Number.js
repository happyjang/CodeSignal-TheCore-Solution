//Given an integer n, return the largest number that contains exactly n digits.
//Example
//For n = 2, the output should be
//largestNumber(n) = 99


//โจทย์กำหนดจำนวนหลักมา เช่น n = 2 return ตัวเลขสูงสุดของเลข 2 หลักคือ 99
// Math.pow ใช้หาค่ายกกำลัง เช่น Math.pow(10, n) ค่าของ n = 2 => 10*10 
// ลบด้วย -1 ก็จะได้ค่าสูงสุดของเลขแต่ละหลักออกมา เช่น 9, 99, 999, 9999, 99999, 999999

//Solution 1

function largestNumber(n) {
    return Math.pow(10, n) -1;      
}

//Solution 2 คล้าย 1 แต่ใช้ ** ก็คือการคุณยกกำลัง

function largestNumber(n) {
    return (10**n) -1;
}

//Solution 3
// string.repeat(จำนวน) ใช้สำหรับสั่ง repeat string ตามจำนวนหรือตัวแปรที่กำหนดใน ( )

function largestNumber(n) {
    return Number('9'.repeat(n));
}