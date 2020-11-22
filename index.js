// let block = document.querySelector("div.timer");

// // время в днях до конца акции
// let day = new Date().getDay();
// let text = "до конца акции осталось: ";

// if (day == 3) {
//   block.innerHTML = text + (7 - day) + " дней";
// }

// время в часах и минутах до конца акции

//Дата до которой таймер
let dateX = new Date("December 26, 2020 12:00:00").getTime();

// Создавем интервал отсчета в 1 секунду
let x = setInterval(function () {
  // сегодняшняя дата и время
  let now = new Date().getTime();
  // расстояние между датой и сегодня
  let distance = dateX - now;
  // калькулация дней часов минут и секунд
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // отображаем результаты в  id="timer"
  document.getElementById("timer").innerHTML =
    days +
    " дней " +
    hours +
    " часов " +
    minutes +
    " минут " +
    seconds +
    " секунд ";

  // если время вышло пишем текст
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Время истекло";
  }
}, 1000);
