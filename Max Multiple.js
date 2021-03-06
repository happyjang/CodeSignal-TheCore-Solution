//Given a divisor and a bound, find the largest integer N such that:
//	• N is divisible by divisor.
//	• N is less than or equal to bound.
//	• N is greater than 0.
//It is guaranteed that such a number exists.
//Example
//For divisor = 3 and bound = 10, the output should be
//maxMultiple(divisor, bound) = 9.

//ด้วยตัวหารและขอบเขตให้ค้นหาจำนวนเต็ม N ที่ใหญ่ที่สุดดังนี้:
// N หารด้วยตัวหารได้
// N น้อยกว่าหรือเท่ากับขอบเขต
// N มากกว่า 0
// รับประกันว่ามีจำนวนดังกล่าว

function maxMultiple(divisor, bound) {
    return bound - (bound % divisor) 
}