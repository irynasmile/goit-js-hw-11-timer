import './sass/main.scss';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.days = document.querySelector(`${this.selector} [data-value="days"]`);
    this.hours = document.querySelector(
      `${this.selector} [data-value="hours"]`,
    );
    this.mins = document.querySelector(`${this.selector} [data-value="mins"]`);
    this.secs = document.querySelector(`${this.selector} [data-value="secs"]`);
  }

  
  updateTimer({ days, hours, mins, secs }) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }
  setTimer() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = timerInterval(this.targetDate - currentTime);
      this.updateTimer(time);
    }, 1000);
  }
}
  const timerInterval  = time => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
};

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 27, 2021 12:00:00'),
});

newTimer.setTimer();