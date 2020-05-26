// ЦИКЛЫ

/*  1. Выведите с помощью цикла в консоль чисела от 1 до 100
*/
for (let i = 1; i <= 100; i++) {
    console.log(i);
}



/*2. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
*/
newArr = [];
for (let i = 1; i <= 10; i++) {
   newArr.push(Math.floor(Math.random()*10));
}
console.log(newArr);




/* 3. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
*/
newArr = [1, 3, 5, 8, 9];
let sum = 0;
for (let i = 0; i < newArr.length; i++) {
   sum += newArr[i];
}
console.log(sum); 



/* 4. Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.
*/
let minNumber = parseInt(prompt('Введите начало диапазона'));
let maxNumber = parseInt(prompt('Введите конец диапазона'));

newArr = [];
let sum = 0;
for (let i = minNumber; i <= maxNumber; i++) {
    newArr.push(i);
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(sum); 



/* 5. Сократите код используя циклы:
<script type='text/javascript'>
document.write('Число: <b>100</b>');
document.write('<br />');
document.write('Число: <b>80</b>');
document.write('<br />');
document.write('Число: <b>60</b>');
document.write('<br />');
document.write('Число: <b>50</b>');
document.write('<br />');
document.write('Число: <b>40</b>');
document.write('<br />');
document.write('Число: <b>20</b>');
document.write('<br />');
document.write('Число: <b>10</b>');
document.write('<br />');
document.write('Число: <b>0</b>');
</script>
*/
let maxNumber = 100;
let minNumber = 0;

for (let i = maxNumber; i >= minNumber; i -=10) {
    if (i != 90 && i != 70 && i != 30) {
        document.write('Число: <b>' + i + '</b> <br />');
    }
}





// МЕТОДЫ МАССИВОВ
/* 6. Даны два массива: [‘a’, ‘b’, ‘c’] и [1, 2, 3]. Объедините их вместе
*/

let arr1 = ["a", "b", "c"];
let arr2 = [1, 2, 3];
let arr3 = arr1.concat(arr2);

console.log(arr3);




/* 7. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
*/

let arr = [1, 2, 3];
arr.push(4, 5, 6);

console.log(arr);



/* 8. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
*/
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);

console.log(arr);



/* 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
*/
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

console.log(arr);



/* 10. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
*/

let arr = [3, 4, 1, 2, 7];
arr.sort();

console.log(arr);




// МАССИВЫ + ЦИКЛЫ
/* 11. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
*/
let arr = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        document.write('Число: <b>' + arr[i] + '</b> <br />');
    }
}



/* 12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

*/

let arr = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i][0] === '1' || arr[i][0] === '2' || arr[i][0] === '5') {
        document.write('Число: <b>' + arr[i] + '</b> <br />');
        console.log(arr[i]);
    }
}


/*
1. Котик
Создать объект cat, у которого будет свойство name и метод sayMeow. Этот
метод выводит сообщение вида «Barsik says: “meow”», но вместо «Barsik» - с
именем, указанным в свойстве name (т.е. должно иметь место чтение
свойства из данного объекта).
*/
var cat = {
    name: 'Barsik'
};

function sayMeow() {
    console.log(`${cat.name} says: “meow”`);
};

sayMeow();


/*
2.Пользователь
Попросить пользователя ввести своё имя, потом возраст, потом e-mail, и
сохранить все данные в один объект user, дав соответсвующие названия
свойствам. Вывести этот объект в консоль: console.log(user) – и посмотреть, как
он выглядит в консоли. Вывести этот объект на экран с помощью alert,
преобразовав его к удобочитаемой строке.
*/
user = {};

user.name = prompt('Enter your name');
user.age = prompt('Enter your age');
user.email = prompt('Enter your email');


console.log(user);
alert(`Your name is ${user.name}, your age is ${user.age} and your email is ${user.email}`);


/*

3. Перебор объекта
Создать объект с 5 любыми ключами и значениями. Для каждого свойства
вывести alert вида «ключ: значение», подставив реальные значения свойств.
Примечание: «для кажого свойства» означает, что нужно пройтись по
объекту в цикле for-in и выполнить данное действие в теле цикла.
*/
user = {
    name: 'Kate',
    age: 30,
    skills: 'css3, html5',
    pet: 'cat',
    namePet: 'Meivis'
};

for (var prop in user) {
    alert(`${prop}: ${user[prop]}`);
}


/*
7. Сравнение массивов
Как известно, массивы относятся к ссылочным типам данных. То есть, в
переменной хранится не сам массив, а ссылка на него, его адрес в памяти.
Если где-то есть точно такой же массив, попытка их сравнить приводит к
негативному результату, т.к. Сравниваются ссылки, а ссылки – разные.
Напишите функцию equals(a, b), которая принимает 2 массива и проверяет их
равенство поэлементно.
*/
function equals(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}

console.log(equals([1, 2, 3], [1, 2, 3])); // true
console.log(equals([1, 2, 3, 5], [1, 2, 3 , 5])); // false
console.log(equals([1, 2, 3, 5], [1, 2, 3, 1])); // false



/*
8. Копирование массива
Как известно, массивы относятся к ссылочным типам данных. То есть, в
переменной хранится не сам массив, а ссылка на него, его адрес в памяти. И
если записать значение такой переменной в другую, они обе будут ссылаться
на один массив. А как создать копию массива?
Напишите функцию copyArray(arr), которая принимает массив и возвращает его
копию. 
*/
var array1 = [1, 2, 3, 4, 5];
var array2 = [];


function copyArray(arr) {
    return arr.slice();
}

array2 = copyArray(array1);

array1[0] = 55;
array2[2] = 100;

console.log('Arr1: ' + array1);
console.log('Arr2: ' + array2);


/*
9. Копирование объекта
Как и массивы, объекты относятся к ссылочным типам данных. Как создать
копию объекта?
Напишите функцию copyObject(arr), которая принимает объект и возвращает его
копию. 
*/

var obj1 = {x: 4, y: 10, z: -1};
var obj2 = {};

function copyObject(obj) {
    return Object.assign({}, obj);
}

obj2 = copyObject(obj1);

obj1.x = 5;
obj2.y = 7;

console.log(obj1);
console.log(obj2);


/* 1. Имя тега исодержимое
Пройтись в цикле по всем дочерним элементам в <body> и для каждого из них вывести
сообщение с индексом элемента, названием тега (tagName – свойство DOM-элемента, а не
jQuery-коллекции) и текстовым содержимым. Использовать jQuery вместо объекта document.
*/

for (var i = 0; i < document.body.childNodes.length; i++) {
    let child = document.body.childNodes[i];
    let childName = child.tagName;
    let childText = child.innerHTML;

    if (childName != undefined) {
        console.log(`${i} ${childName}: ${childText}`);
    }
}



/*
2. Якнопка
Используя jQuery, в пустом HTML-документе создать кнопку с текстом «Я кнопка» (т.е. создать
динамически, с помощью программного кода). По клику на кнопку выводить сообщение
«Спасибо, что нажали меня» – но только один раз. Т.е. при повторных нажатиях ничего
происходить не должно.
*/

let btn = document.createElement('button');
btn.innerHTML = "Я кнопка";
document.body.append(btn);

btn.addEventListener('click', function(){
    console.log('Спасибо, что нажали меня');
});




/* 3. Вывод из input’а
Используя jQuery, в пустом HTML-документа создать инпут и кнопку. Пользователь может
вводить текст в инпут. По нажатию на кнопку вывести сообщение: «Вы ввели: ххх», где ххх –
то, что ввёл пользователь.
*/

let btn = document.createElement('button');
let input = document.createElement('input');
btn.innerHTML = "Нажми меня!";

document.body.append(input);
document.body.append(btn);

btn.addEventListener('click', function(){
    let inputText = input.value;
    console.log(`Вы ввели: ${inputText}`);
});



/*
4. 100 кнопок
С помощью цикла и функций jQuery сгенерировать 100 элементов <button>, каждый из
которых содержит текст «Кнопка Х», где Х – порядковый номер кнопки. Вставить кнопки в
HTML (можно стилизовать с помощью CSS, чтоб они выглядели интереснее). По клику на
каждую кнопку должно выводиться сообщение с текстом кнопки. Используйте делегирование
события (т.е. должен быть всего один обработчик клика на элементе <body>).
*/

let amount = 100;

for (let i = 1; i <= amount; i++) {
    let btn = document.createElement('button');
    document.body.append(btn);
    btn.innerHTML = `Кнопка ${i}`;
    btn.classList.add("btn-bg"); 

    btn.addEventListener('click', function(event){
        console.log(event.target.innerHTML);
    });
}


/* 5. Координаты курсора
С помощью HTML и CSS создать красный круг диаметром 40px. Изначально он должен быть
скрыт. По клику в любое место документа круг должен стать видимым и перемещаться в
место клика.
Подсказка: для определения координат курсора в объекте события клика используют
свойства client и clientY.
Дополнительно: сделайте перемещение анимированным, используя переходы (transition)
для свойств left и top в CSS.
*/
let round = document.createElement('div');
round.classList.add('round');
document.body.append(round);

document.addEventListener('mousedown', function showCoords(evt){
    round.classList.add('round-visible');
    round.style.top = evt.clientY - 20 + "px";
    round.style.left = evt.clientX - 20 + "px";
  }
);

/* 2. Длина числа
Напишите функцию numberLen(x), которая принимает число и возвращает
длину этого числа, т.е. количество цифр в нём. Например:
alert(numberLen(5)); // 1
alert(numberLen(30)); // 2
alert(numberLen(12345); // 5
alert(numberLen(-574); // 3
*/
function numberLen(x) {
    let lng;
    
    if (x < 0) {
        x = -x;
    } 

    lng = x.toString().length;
    console.log(lng);
}

numberLen(5);
numberLen(-306);
numberLen(1234511);
numberLen(-574);


/* 3. Обратный порядок
Дан массив items. Поменяйте порядок элементов этого массива на обратный, не
создавая второй массив. Не используйте метод массива reverse()!
*/

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = items.length-1; i >= 0; i--) {
        items.push(items[i]);
    }

    items.splice(0, items.length / 2);
    
    console.log(items);



/* 4. Сортировка
Дан массив чисел numbers. Расположите числа в этом массиве в порядке
возрастания. Не используйте метод массива sort()
*/

let numbers = [3, 23, 8, 65, 7, 1, 4, 11];
    for (let i = 0 ; i < numbers.length; i++) {

        for (let j = 0 ; j < numbers.length; j++) {

            if (numbers[j] > numbers[j+1]){
                let a = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = a;
                
            }
        }
        
    }
    
    console.log(numbers); 


/* 5.Поиск символа перебором
Дана строка str. Напишите функцию indexOf(ch), которая возвращает индекс
символа ch в этой строке, или -1 при его отсутствии. Не используйте метод
строки indexOf()!
*/

const str ='Lorem ipsum dolor, sit amet consectetur adipisicing elit';

function indexOf(ch) {
    let arr = str.split('')

    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] === ch) {
            return i;
        } 
    }
    return -1;
}

console.log(indexOf('e'));
console.log(indexOf('a'));
console.log(indexOf('q'));


/* 6. Замена подстроки
Дана строка str. Замените все символы «$» в строке на «UAH». Можно
использовать метод строки replace(). Читайте описание в интернете
*/
let str ='$Lorem ipsum dolor, sit$ amet consectetur$ adipisicing elit';
let dol = /\$/g;
let currency = 'UAH';

str = str.replace(dol, currency);

console.log(str);



/*
7. Обратный порядок
Дана строка str. Превратите её в строку с обратным порядком символов
(аналогично обратному порядку элементов в массиве).
*/

function reverse(str){
    let items = str.split('');

    for (let i = items.length-1; i >= 0; i--) {
        items.push(items[i]);
    }

    items.splice(0, items.length / 2);
    str = items.join('');

    return str;
}

console.log(reverse('Lorem ipsum dolor, sit amet consectetur adipisicing elit'));



/* 
8. Количество слов
В переменной text хранится строка с текстом. Посчитайте количество слов в
тексте, и выведите его в сообщении (alert).
Подсказка: здесь и далее можно использовать метод строки split().
*/

let text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit';
let items = text.split(' ');

console.log(items.length);


/*
9. Капитализация
Напишите функцию capitalizeWords(str), которая принимает строку и делает
первую букву каждого слова заглавной (и возвращает обновлённую строку):

var text = “всем привет, это предложение для проверки”;
var capitalText = capitalizeWords(text);\
alert(capitalText); // Всем Привет, Это Предложение Для Проверки
*/

function capitalizeWords(str) {
    let items = str.split(' ');

    for (let i = 0 ; i < items.length; i++) {
        items[i] = items[i].charAt(0).toUpperCase() + items[i].slice(1);
    }
    str = items.join(' ');
    return str;
}

let capitalText = capitalizeWords('Lorem ipsum dolor, sit amet consectetur adipisicing elit');
console.log(capitalText);



/*
10. Палиндром*
Палиндром (от др.-греч. πάλιν — «назад, снова» и др.-греч. δρóμος — «бег,
движение») – буквосочетание, слово или текст, одинаково читающееся в обоих
направлениях. Например:
• доход
• мадам
• шалаш
• арозаупаланалапуазора
• radar
Напишите функцию isPalindrom(str), которая принимает строку и проверяет,
является ли она палиндромом, т.е. возвращает true или false. Функция должна
быть нечувствительна к регистру (т.е. «А» и «а» для неё – одинаковые
символы). Ищите подсказки в интернете.
*/

function isPalindrom(str){
    str = str.toLowerCase();
    let lastItem = str.length - 1;

    for (let i = 0 ; i < str.length / 2; i++) {
        if (str[i] != str[lastItem - i]){
            return false;
        }     
    }
    return true;
}

console.log(isPalindrom('арозаупала'));
console.log(isPalindrom('мАдаМ'));


/* 
Получить число pi из Math и округлить его до 2-х знаков после точки 
*/

    let pi = Number(Math.PI.toFixed(2));
    console.log(pi);


/* 
Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51 */

    let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
    console.log('max: ', max);
    
    let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
    console.log('min: ', min);


/*
    Работа с Math.random:
    a. Получить случайное число и округлить его до двух цифр после запятой
    b. Получить случайное целое число от 0 до X. X - любое произвольное число.
*/

    let randomNumber = Number(Math.random().toFixed(2));
    console.log('randomNumber: ', randomNumber);
    
    let x = 20;
    let randomNumberX = Math.round(Math.random() * x);
    console.log('randomNumberX: ', randomNumberX);

/*
    Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)
*/

    let sum = 0.6 + 0.7;
    let rightSum = Number(sum.toFixed(2));
    console.log(rightSum);

/*
    Получить число из строки ‘100$’
*/

    let string = '100$';
    let number = parseFloat(string);
    console.log('number: ', number);
