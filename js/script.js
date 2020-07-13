// Task #1

let userNumber = +prompt('Введите число ');
let valueToSubstract = +prompt('Сколько отнять от вашего числа?');
let valueToAdd = +prompt('Сколько прибавить к результату?');
let valueToMultiply = +prompt('На сколько умножить результат?');
let valueToDivide = +prompt('На сколько разделить результат?');
let totalValue = (userNumber - valueToSubstract + valueToAdd) * valueToMultiply / valueToDivide;

alert(`(${userNumber} - ${valueToSubstract} + ${valueToAdd}) * ${valueToMultiply} / ${valueToDivide} = ${totalValue}`);

// Task #2

let userName = "Vlasimir"; 
let userAge = 31; 
let userSkills = ['HTML',' Css', 'Js']; 
let userNameTypeof = typeof userName; // string
let userAgeTypeof = typeof userAge; // number
let userSkillsTypeof = typeof userSkills // object

console.log(`Переменная userName имеет тип - ${userNameTypeof}`);
console.log(`Переменная userAge имеет тип - ${userAgeTypeof}`);
console.log(`Переменная userSkills имеет тип - ${userSkillsTypeof}`);



// Task 3

// let firstNumeric = 2;
// let secondNumeric = 4;

// console.log(firstNumeric.toString() + secondNumeric.toString());
