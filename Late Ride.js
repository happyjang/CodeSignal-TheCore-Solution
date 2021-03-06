//ขับรถเกินเวลาเที่ยงคืน 00.00 
//โจทย์ให้จำนวนนาทีที่เกินเที่ยงคืนมา เช่น 808
//คำนวนว่าจำนวนนาทีที่เกินมาคือเวลาเท่าไหร่ เช่น 808 => 13:28
//นำเลขนั้นมาบวกกัน 1 + 3 + 2 + 8 ได้ผลลัพท์ 14

function lateRide(n) {
    //หาชั่วโมง
    let hours = Math.floor(n / 60)
    //หานาที
    let mins = n - (hours * 60)
    //สร้าง array ใหม่และทำให้เป็น string
    let arr = (hours + "" + mins).split('');
    //หาผลรวมโดย .reduce เปลี่ยน string เป็นตัวเลข ใช้ parseTnt
    return parseInt(arr.reduce((a,b) => parseInt(a) + parseInt(b)))
}



function lateRide(n) {
    return (Math.floor(n / 60) 
    + '' 
    + (n % 60)).split('').map(Number).reduce((a, b) => a + b);
}