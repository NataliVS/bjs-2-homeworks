"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2-4*a*c;
 
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
    console.log(`Аргументы: a = ${a}, b = ${b}, c = ${c}`);
    console.log(`Корни уравнения: x1 = ${x1}, x2 = ${x2}`);
} else if (D === 0) {
    let x1 = -b / (2 * a);
    arr.push(x1);
    console.log(`Аргументы: a = ${a}, b = ${b}, c = ${c}`);
    console.log(`Корень уравнения: x1 = ${x1}`);
} else {
    console.log(`Аргументы: a = ${a}, b = ${b}, c = ${c}`);
    console.log(`Квадратное уравнение не имеет корней!!!`);
     return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let S = amount - contribution; 
  let n = countMonths; 
  let P = percent / 12 / 100; 
  let monthPayment = S * (P + P / (Math.pow(1 + P, n) - 1)); 
  let totalAmount = monthPayment * n;

  console.log(totalAmount.toFixed(2));
  
  return totalAmount.toFixed(2);
 
}

calculateTotalMortgage(10, 1000, 20000, 24);