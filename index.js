const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let interval

const createTimerAnimator = () => {
  return (seconds) => {
    if (inputEl.value < 0) {
      inputEl.value = 0;
    }

    clearInterval(interval);
     interval = setInterval(() => {

      if(seconds > 0){
        seconds--
        if (inputEl.value < 0 || timerEl.innerHTML == 0) {
          inputEl.value = 0;
          timerEl.innerHTML = 0;
        }
        const hoursLeft = Math.floor(seconds / 60 / 60) % 24;
        const minutesLeft = Math.floor(seconds / 60) % 60;
        const secondsLeft = Math.floor(seconds % 60);
      
        timerEl.innerHTML = `${ hoursLeft < 10 ? "0" + hoursLeft : hoursLeft}:${minutesLeft < 10 ? "0" + minutesLeft : minutesLeft}:${ secondsLeft < 10 ? "0" + secondsLeft : secondsLeft}`;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', function(e){
  this.value = this.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});