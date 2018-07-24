/**
 * 
 * @param {30} a 
 * @param {18} b 
 */
function evclid(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (a > 0 && b > 0) { // если оба числа равны нулю, то НОД нет
        if (a == b) return a; // если a == b - то это число и есть НОД
        else if (a > b) {
            a = a % b; // находим остаток и заменяем          
        } else if (b > a) {
            b = b % a; // находим остаток и заменяем
        }
    }
    return a + b;
}
