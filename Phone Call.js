//Some phone usage rate may be described as follows:

//first minute of a call costs min1 cents,
//each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
//each minute after 10th costs min11 cents.
//You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

//Example

//For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be
//phoneCall(min1, min2_10, min11, s) = 14.

// โจทย์กำหนดอัตราค่าโทรศัพท์นาทีที่1 (min1) นาทีที่ 2 -10 (min2_10) นาทีที่ 11 เป็นต้นไป (min11) 
// โจทย์กำหนดจำนวนเงิน cents ไว้ให้
// หาว่าจากเงินที่โจทย์กำหนดไว้ สามารถโทรได้สูงสุดกี่นาที

function phoneCall(min1, min2_10, min11, s) {
    
    //เวลาเริ่มต้นคือ 0
    let time = 0;
    
    //คำนวนเวลานาทีแรก
    if ( s >= min1 ) {
        s -= min1;
        time += 1;
    }
    
    //คำนวนเวลานาทีที่ 2-10
    //จำนวนเงิน cents (s) ที่ยกมาจาก if แรก มากกว่าหรือเท่ากับอัตราค่าโทรนาทีที่ 2 - 10หรือไม่
    if ( s >= min2_10 ) {        
        
        // หาจำนวนนาที โดย จำนวนเงินที่ยกมาจาก if แรก หารด้วยอัตราค่าโทรนาทีที่ 2 - 10 
        // กำหนดว่านาทีสูงสุดของเคสนี้อยู่ที่ 9 นาที (เพราะเริ่มจากนาทีที่ 2 - 10) 
        //ใช้ Math.min() เก็บค่าจำนวนนาทีที่ต่ำที่สุด (ไม่ให้เกิน 9 นาที)
        let m = Math.min(9, (s / min2_10));
        
        // time มีค่าเป็น 1 มาจาก if แรก เมื่อมาบวกกับ m สูงสุด 9 ก็จะได้ไม่เกิน 10
        time += m;
        
        // เงินคงเหลือจาก if แรก ลบด้วย ( อัตราค่าโทรนาทีที่ 2 - 10 คูณกับ m ซึ่งค่าสูงสุดคือ 9 )
        s -= (min2_10 * m);
    }
    
    //คำนวนเวลานาทีที่ 11 เป็นต้นไป
    //จำนวนเงิน cents (s) ที่ยกมาจาก if ที่สองมากกว่าหรือเท่ากับอัตราค่าโทรนาทีที่ 2 - 10หรือไม่
    if ( s >= min11 ) {
    
    //เวลาที่ยกยอดมาจาก if ที่สอง บวกกับ (ยอดเงินที่ยกยอดมาจาก if ที่สอง หารด้วย อัตราค่าโทรนาทีที่ 11 เป็นต้นไป)
        time += (s / min11);    
    }
    
    //Math.floor ใช้ round down คือตัดเศษทิ้งทั้งหมด
    return Math.floor(time)  

}