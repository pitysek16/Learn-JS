/*
 Доска для рисования

Используя цикл в JavaScript сгенерируйте 4000
элементов <div> и добавьте их в элемент <body>.
Каждому div добавьте обработчик события, который при
наведении курсора мыши будет добавлять элементу
класс «fill», делая его красным.

С помощью событий mousedown и mouseup элемента
body сделайте так, чтобы обработчик наведения мыши
срабатывал только при нажатой кнопке мыши. Таким
образом, получится доска для рисования. Зажав кнопку
мыши и перемещая её по доске, можно рисовать.
*/

let canPaint = false;


function paint() {
    let amountBlocks = 4000;
for (i = 0; i < amountBlocks; i++) {
    let blocks = document.createElement('div');
    document.body.append(blocks);

    blocks.addEventListener("mousedown", function() {
        canPaint = true;
    });

    blocks.addEventListener("mouseup", function() {
        canPaint = false;
    });

    blocks.addEventListener("mouseover", function(e) {
        if (canPaint) {
            e.target.classList.add('fill');
        }     
    });
}
}

paint();
