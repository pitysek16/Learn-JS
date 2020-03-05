

/*

6. TODO-list
Это ваш первый полноценный UI-компонент, приближённый к реальной жизни, так что
важно попытаться выполнить это задание.
Разработайте HTML-разметку и таблицы стилей для списка TODO. Например, можно
использовать обычный список <ul> и как-то прилично стилизовать его элементы. В каждом
пункте списка должна быть кнопка «Х», изначально скрытая, которая появляется справа
только по наведению курсора на пункт списка. Добавьте внизу поле ввода и кнопку «+
Добавить».
А теперь, когда список выглядит прилично, наполните его логикой (т.е. сделайте его рабочим).
По максимуму используя jQuery, сделайте, чтобы пункты списка удалялись по клику на кнопки
«Х»; новые пункты должны добавляться при вводе текста в поле ввода и нажатии на «+
Добавить»; при попытке добавить пустой пункт выводить какое-то сообщение об ошибке и
ничего не добавлять в список.

*/

let ol = document.getElementById('todolist');
let input = document.querySelector('[name="addList"]');
let form = document.getElementById('formList');
let completedText = document.getElementById('completed');
let notCompletedText = document.getElementById('notCompleted');

const TASKS = [
    {
        id: 1,
        title: 'task1',
        isDone: false,
    },
    {
        id: 2,
        title: 'task2',
        isDone: false,
    },
    {
        id: 3,
        title: 'task3',
        isDone: false,
    }
];


function renderList(){
    ol.innerHTML = '';

    for (let i = 0; i < TASKS.length; i++) {
        let task = TASKS[i];

        let newLi = document.createElement('li');
        let newLiSpan = document.createElement('span');
        newLiSpan.innerText = task.title;

        let btnDel = document.createElement('button');
        btnDel.innerText = 'X';
        btnDel.addEventListener('click', ()=> {
            let {id} = task;
            for (let j = 0; j < TASKS.length; j++){
                if(TASKS[j].id === id){
                    TASKS.splice(j, 1);
                    break;
                }
            }
            renderList();
        });

        let doneCh = document.createElement('input');
        doneCh.type = 'checkbox';
        doneCh.checked = task.isDone;
        doneCh.addEventListener('change', () => {
            task.isDone = !task.isDone;
            calcCompl();
        });       
        
        ol.appendChild(newLi);
        newLi.appendChild(doneCh);
        newLi.appendChild(newLiSpan);
        newLi.appendChild(btnDel);
        
    }
    calcCompl();
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let {value} = input;

    if (value) {
        let newTask = {
            id:  Date.now(),
            title: value,
            isDone: false,
        };
        TASKS.push(newTask);
        renderList();
        input.value = '';
    } else {
        alert('Please, type a new task');
    }

});

function calcCompl(){
    completed = 0;
    notCompleted = 0;
    
    for (let i = 0; i < TASKS.length; i++) {
        let task = TASKS[i];
        task.isDone ? completed++ : notCompleted++; 
    }

    completedText.innerText = completed;
    notCompletedText.innerText = notCompleted;
};

renderList();

