// Task #1

let firstNumber = +prompt('Введите число ');
let subtractNumber = +prompt('Сколько отнять от вашего числа?');
let addNumber = +prompt('Сколько прибавить к результату?');
let multiplyNumber = +prompt('На сколько умножить результат?');
let divideNumber = +prompt('На сколько разделить результат?');
let totalNumber = (firstNumber - subtractNumber + addNumber) * multiplyNumber / divideNumber;

alert('(' + firstNumber + '-' + subtractNumber + '+' + addNumber + ')' + '*' + multiplyNumber + '/' + divideNumber + '=' + totalNumber);

// Task #2

let userName = "Vlasimir"; 
let userAge = 31; 
let userSkills = ['HTML',' Css', 'Js']; 
let userNameType = typeof userName; // string
let userAgeType = typeof userAge; // number
let userSkillsType = typeof userSkills // object

console.log('Переменная userName имеет тип -' + ' ' + userNameType);
console.log('Переменная userAge имеет тип -' + ' ' + userAgeType);
console.log('Переменная userSkills имеет тип -' + ' ' + userSkillsType);


// Task 3

let firstNumeric = 2;
let secondNumeric = 4;

console.log(firstNumeric.toString() + secondNumeric.toString());
