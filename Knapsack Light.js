// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?
// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.
// Example
// 	• For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
// knapsackLight(value1, weight1, value2, weight2, maxW) = 10.



//โจทย์กำหนด น้ำหนัก และ มูลค่า สิ่งของ 2 อย่างเอาไว้ให้ พร้อมน้ำหนักสูงสุดที่รับได้
//ให้ return มูลค่าของสิ่งของ ที่ไม่เกินน้ำหนักสูงสุด

function knapsackLight(value1, weight1, value2, weight2, maxW) {
    
    if (maxW < weight1 && maxW < weight2) {
        return 0;
    }
    