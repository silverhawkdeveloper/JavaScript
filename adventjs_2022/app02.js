const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año

/**
 * * Function to count overtime per year.
 * @param {Number} year Year to calculate.
 * @param {Array} holidays Holiday arrays.
 * @returns Return overtime and days.
 */
function countHours(year, holidays) {
    let hours = 0;
    let days = 0;
    holidays.forEach(function(element) {
        const date = new Date(year + ',' + element);
        if (date.getDay() != 0 && date.getDay() != 6) {
            hours += 2;
            days++;
        }
    });
    return hours;
}