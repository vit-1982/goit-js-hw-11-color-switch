import colors from './colorlist';
import randomIntegerFromInterval from './random';

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
};

let intervalId = 0;

const interval = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      document.body.style.background =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', interval.start.bind(interval));
refs.stopBtn.addEventListener('click', interval.stop.bind(interval));
