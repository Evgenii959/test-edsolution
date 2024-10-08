import '../src/assets/styles.scss';

// burger
var burger = document.querySelector('.header__burger');
var sidebar = document.querySelector('.sidebar');
var isMenuOpen = false;
burger.addEventListener('click', function () {
  isMenuOpen = !isMenuOpen;
  burger.classList.toggle('active', isMenuOpen);
  sidebar.classList.toggle('active', isMenuOpen);
});

// slider
document.getElementById('submitButton').addEventListener('click', function () {
  var selectedSlide = document.querySelector('input[name="r"]:checked').id;
  var slideData = {};
  switch (selectedSlide) {
    case 'r1':
      slideData = {
        slideNumber: 1,
        price: '50 CR/$5'
      };
      break;
    case 'r2':
      slideData = {
        slideNumber: 2,
        price: '150 CR'
      };
      break;
    case 'r3':
      slideData = {
        slideNumber: 3,
        price: '300 CR'
      };
      break;
    case 'r4':
      slideData = {
        slideNumber: 4,
        price: '500 CR'
      };
      break;
    case 'r5':
      slideData = {
        slideNumber: 5,
        price: '1000 CR'
      };
      break;
    default:
      console.log('Слайд не выбран');
      return;
  }
  console.log('Данные отправлены:', slideData);
});

// timer

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds,
    hours;
  var interval = setInterval(function () {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor(timer % 3600 / 60);
    seconds = Math.floor(timer % 60);
    display.textContent = "".concat(hours.toString().padStart(2, '0'), " : ").concat(minutes.toString().padStart(2, '0'), " : ").concat(seconds.toString().padStart(2, '0'));
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
window.onload = function () {
  var thirtyMinutes = 60 * 30;
  var display = document.querySelector('.credit__timer');
  startTimer(thirtyMinutes, display);
};