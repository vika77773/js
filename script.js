// hfusdhfyhseufhshfudsuhf
/*jsdhjahdfjhsfj*/
console.log('text');

let myVar1;

myVar1-15;

console.log(myVar1);

console.log('возраст:',myVar1);

let myName='Вика';
let myVar2=true;

myVar2=false;
console.log(myName);
console.log(myVar2);

console.log(2==2);

let n=15;
//n=n+3;
n+=3;
console.log(n);
//n=n-6;
n-=6;
console.log(n);
//n=n/3;
n/=3;
console.log(n);
//n=n+1;
n++;
console.log(n);
//n=n-1;
n--;
console.log(n);

console.log('Сидим дома ' +n+ ' недели');

let myStr='моя строка или текст';

console.log(myStr.length);

console.log(myStr.toLocaleUpperCase());

console.log(myStr.toLocaleUpperCase());


//12.04.2020

let question = confirm('Ты учишься?');
console.log(typeof question);

let question2 = prompt('Сколько тебе лет?');
console.log(question2);

let question3 = +prompt('Сколько у тебя уроков?' , 6);
console.log(question3);

let e='33';
let f=1;
e=Number(e);
console.log(Number (e));
console.log(e+f);

let question4= +prompt('Введите число' , 7);
if( question4 === 7){ console.log('Вы вели число 7');

}
else{
console.log('Вы вели другое число');
}




console.log('Вы вели число 7');


// задача 1
let money;
console.log(money);

 money=+prompt('Ваш месячный доход?' , 30000);

let addExpenses;
console.log(addExpenses);

addExpenses=+prompt('Перечислите расходы за рассчитываемый период' , 'такси, еда,одежда...');

let deposit;
console.log(deposit);

deposit=confirm('Есть ли у вас депозит в банке?');

let expenses1;
let expenses2;
let amount1;
let amount2;

expenses1=prompt('Введите обязательную статью расходов?');
console.log(expenses1);
expenses2=prompt('Введите обязательную статью расходов?');
console.log(expenses2);

amount1=prompt('Во сколько это обойдётся?');
console.log(amount1);
amount2=prompt('Во сколько это обойдётся?');
console.log(amount2);

let budgetMonth;
console.log(budgetMonth);
budgetMonth=money-amount1-amount2;

let mission;
console.log(mission);
budgetMonth=mission/budgetMonth;

let budgetDay;
console.log(budgetDay);
budgetDay=budgetMonth/30;

if(budgetDay > 1200){console.log('У вас высокий уровень дохода');}
else 
if(budgetDay > 600 && budgetDay< 1200){console.log('У вас средний уровень дохода');} 
else
if(budgetDay < 600){console.log('К сожелению, ваш уровень дохода ниже среднего');}
else
if(budgetDay < 0){console.log('Что-то пошло не так');}

 








