"use strict"
function solveEquation(a, b, c) {
  let equationСoefficients = [];
  let discriminant = b**2-4*a*c;
 
  if (discriminant > 0) {
    let rootEquation1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootEquation2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    equationСoefficients.push(rootEquation1, rootEquation2);
    console.log(`Аргументы: a = ${a}, b = ${b}, c = ${c}`);
    console.log(`Корни уравнения: x1 = ${rootEquation1}, x2 = ${rootEquation2}`);
} else if (discriminant === 0) {
    let rootEquation1 = -b / (2 * a);
    equationСoefficients.push(rootEquation1);
    console.log(`Аргументы: a = ${a}, b = ${b}, c = ${c}`);
    console.log(`Корень уравнения: x1 = ${rootEquation1}`);
} else {
    console.log(`Аргументы: a = ${a}, b = ${b}, c = ${c}`);
    console.log(`Квадратное уравнение не имеет корней!!!`);
  }
  return equationСoefficients;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution; 
  let n = countMonths; 
  let P = percent / 12 / 100; 
  let monthPayment = S * (P + P / (Math.pow(1 + P, n) - 1)); 
  let totalAmount = monthPayment * n;

  console.log(+totalAmount.toFixed(2));
  
  return (+totalAmount.toFixed(2));
 }

calculateTotalMortgage(15, 0, 10000, 36);