const generateId = () => `id${Math.round(Math.random()*1e8).toString(16)}`;

const   totalBalance = document.querySelector('.total__balance'),
        totalMoneyIncome = document.querySelector('.total__money-income'),
        totalMoneyExpenses = document.querySelector('.total__money-expenses'),
        historyList = document.querySelector('.history__list'),
        form = document.getElementById('form'),
        operationName = document.querySelector('.operation__name'),
        operationAmount = document.querySelector('.operation__amount');
        
let dataBaseOperation = JSON.parse(localStorage.getItem('calc')) || [];





const renderOperation = operation => {

    const liClassName = operation.amount > 0 ? 'history__item-plus' : 'history__item-minus';

    const listItem = document.createElement('li');
    listItem.classList.add('history__item');
    listItem.classList.add(liClassName);

    listItem.innerHTML = `
        ${operation.description}
        <span class="history__money">${operation.amount} $</span>
        <button class="history_delete" data-id="${operation.id}">x</button>
    `;

    historyList.appendChild(listItem);
};

const updateBalance = () => {
    const resultIncome = dataBaseOperation.filter(item => item.amount > 0).reduce((result, item) => result + item.amount, 0);

    const resultExpenses = dataBaseOperation.filter(item => item.amount < 0).reduce((result, item) => result + item.amount, 0);

    totalMoneyIncome.textContent = resultIncome + ' $';
    totalMoneyExpenses.textContent = resultExpenses + ' $';
    totalBalance.textContent = (resultIncome + resultExpenses) + ' $';
}


const addOperation = (e) => {
    e.preventDefault();

    const   operationNameValue = operationName.value,
            operationAmountValue = parseInt(operationAmount.value);

    operationName.style.borderColor = '';
    operationAmount.style.borderColor = '';

    if (operationNameValue && operationAmountValue ) {
        const operation = {
            id: generateId(),
            description: operationNameValue,
            amount: operationAmountValue
        }

        dataBaseOperation.push(operation);
        init();

    } else {
        if (!operationNameValue) {
            operationName.style.borderColor = 'red';
        }
    
        if (!operationAmountValue) {
            operationAmount.style.borderColor = 'red';
        }
    }

    operationName.value = '';
    operationAmount.value = '';

};

const deleteOperation = (e) => {
    const target = e.target;
    if (target.classList.contains('history_delete')) {
        dataBaseOperation = dataBaseOperation.filter(operation => operation.id !== target.dataset.id);
        init();
    }
    
}

const init = () => {
    historyList.textContent = '';
    dataBaseOperation.forEach(renderOperation);
    updateBalance();
    localStorage.setItem('calc', JSON.stringify(dataBaseOperation));
}

form.addEventListener('submit', addOperation);
historyList.addEventListener('click', deleteOperation)

init();
