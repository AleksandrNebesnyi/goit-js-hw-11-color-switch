// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// warning Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.


import { colors } from "./colors.js";
import { randomIntegerFromInterval } from "./random-integer.js";

const DELAY_INTERVAL = 1000;
let Interval = null;
const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};



refs.btnStart.addEventListener("click", (event) => {
  Interval = setInterval(() => {
    console.log("click");
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, DELAY_INTERVAL);
//   refs.btnStart.setAttribute("disabled", true);
  refs.btnStart.disabled = true;
  console.log(refs.btnStart.disabled);
});

refs.btnStop.addEventListener("click", (event) => {
  if (Interval) {
      clearInterval(Interval);
    //    refs.btnStart.removeAttribute("disabled");
    refs.btnStart.disabled = false;
    console.log(refs.btnStart.disabled);
  }
});


