//n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
//Example
//For n = 3 and m = 10, the output should be
//candies(n, m) = 9.
//Each child will eat 3 pieces. So the answer is 9.

// ใช้ในการคำนวน หารจำนวนเงินหรือสิ่งของโดยแบ่งให้เท่าๆ กัน จากนั้นหาผลรวมแบบปัดเศษทิ้ง
// โจทย์กำหนดเลขมาให้ 2 ตัว 
// หาค่าที่ได้จากผลหาร โดยปัดเศษทิ้ง
// เช่น 10 หาร 3 = 3 จากนั้น หาผลที่ได้คือ 3 * 3 = 9

// solution คือ นำค่า m ไปหารกับ n ก่อนจนเหลือเศษ  จากนั้น m ลบด้วยเศษ ก็จะได้ผลลัพท์ออกมา

function candies(n, m) {
   return m - (m % n)     
}
