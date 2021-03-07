// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

// Example

// For a = 2, b = 7, and c = 2, the output should be
// extraNumber(a, b, c) = 7.

//เช็คเลขที่หาคู่ไม่ได้ใน array แล้ว return ค่านั้นออกมา

function extraNumber(a, b, c) {
    let arr = [a, b, c].sort((a,b) => a-b)
    return arr[0] === arr[1] ? arr[2] : arr[0]

}


function extraNumber(a, b, c) {
return a === b ? c : a === c ? b : a
}

function extraNumber(a, b, c) {
    return a ^ b ^ c
}