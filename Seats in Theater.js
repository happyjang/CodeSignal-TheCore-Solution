// หาพื้นที่ในโรงหนังตามที่โจทย์กำหนด 
// โจทย์กำหนด จำนวนแถวทั้งแนวตั้งและแนวนอนทั้งหมดเอาไว้ให้
// โจทย์กำหนดที่นั่งในโรงหนังที่นั่งอยู่ 
// หาทางเดินไปทางออกโดยไม่ผ่านคน
// หาพื้นที่ หรือจำนวนคนที่นั่งด้านหลังและคนที่นั่งด้านซ้ายมือทั้งหมด


//Solution 1
// (จำนวนแถวแนวนอน nCols - ( col ที่โจทย์กำหนด - 1)) ต้องลบหนึ่งเพราะตัดที่ๆ ตัวเองนั่งออกไป 
// คูณด้วย (จำนวนแถวตั้งทั้งหมด nRows - row ที่โจทย์กำหนด )
// (16 - (5 - 1)) * (11 - 3) => 96

function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - (col - 1)) * (nRows - row)
}

//Solution 2
//ต่างจากแบบแรก คือ ((จำนวนแถวแนวนอน nCols - col ที่โจทย์กำหนด ) + 1 เพราะไม่รวมที่นั่งของตัวเอง
function seatsInTheater(nCols, nRows, col, row) {
    return ((nCols - col) + 1) * (nRows - row);
}