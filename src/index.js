// burger
const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');

let isMenuOpen = false;

burger.addEventListener('click', function () {
  isMenuOpen = !isMenuOpen;
  burger.classList.toggle('active', isMenuOpen);
  sidebar.classList.toggle('active', isMenuOpen);
});

// slider
document.getElementById('submitButton').addEventListener('click', function () {
  const selectedSlide = document.querySelector('input[name="r"]:checked').id;
  let slideData = {};

  switch (selectedSlide) {
    case 'r1':
      slideData = { slideNumber: 1, price: '50 CR/$5' };
      break;
    case 'r2':
      slideData = { slideNumber: 2, price: '150 CR' };
      break;
    case 'r3':
      slideData = { slideNumber: 3, price: '300 CR' };
      break;
    case 'r4':
      slideData = { slideNumber: 4, price: '500 CR' };
      break;
    case 'r5':
      slideData = { slideNumber: 5, price: '1000 CR' };
      break;
    default:
      console.log('Слайд не выбран');
      return;
  }

  console.log('Данные отправлены:', slideData);
});

// timer

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds,
    hours;

  const interval = setInterval(() => {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor((timer % 3600) / 60);
    seconds = Math.floor(timer % 60);
    display.textContent = `${hours.toString().padStart(2, '0')} : ${minutes
      .toString()
      .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  const thirtyMinutes = 60 * 30;
  const display = document.querySelector('.credit__timer');
  startTimer(thirtyMinutes, display);
};
