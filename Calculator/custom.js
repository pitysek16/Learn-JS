/*
Калькулятор

Создайте в HTML два числовых поля ввода (type=“number”). Между ними
поместите <select> с четырьмя опциями: «+» (выбрана по умолчанию), «-», «*» и
«/». Справа разместите кнопку «=». Далее создайте пустой элемент <output>,
куда будет выводиться результат.
Пользователь может ввести два числа, выбрать операцию из списка, нажать на
кнопку «=», и на экране должен появиться результат вычисления.
Можете расширить выбор операций, добавив «^» (возведение в степень),
«mod» (остаток от деления, оператор %) и «hypo» (гипотенуза, вычисление
длины гипотенузы по двум катетам по теореме Пифагора).
*/

let button  = document.getElementById('btn');
let result = document.getElementById("result");

button.addEventListener('click', () =>{
    let res;

    let num1 = parseInt(document.getElementById('num_1').value);
    let num2 = parseInt(document.getElementById('num_2').value);

    let select1 = document.getElementById("selectId");
    let value = select1.options[select1.selectedIndex].value;

    if (value === '-') {
        res = num1 - num2;
    } else if (value === '+') {
        res = num1 + num2;
    }  else if (value === '/') {
        res = num1 / num2;
    } else if (value === '*') {
        res = num1 * num2;
    } else if (value === '^'){
        res = Math.pow(num1,num2);
    } else if (value === 'mod'){
        res = num1 % num2;
    } else {
        res = Math.hypot(num1,num2);
    }

    result.innerText = res;

});





