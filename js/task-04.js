//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');



btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
});

















