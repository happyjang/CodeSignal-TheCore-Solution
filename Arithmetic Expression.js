//Arithmetic คณิตศาสตร์

// Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.
// Example
// For a = 2, b = 3, and c = 5, the output should be
// arithmeticExpression(a, b, c) = true.

// ถ้า a + หรือ - หรือ * หรือ / b แล้วได้เท่ากับ c ให้ return true

function arithmeticExpression(a, b, c) {
    return ((a+b) === c) || ((a-b) === c) || ((a*b) === c) || ((a/b) === c);
    
}