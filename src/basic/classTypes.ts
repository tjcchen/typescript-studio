// interface with props & methods
interface ClockInterface {
  currentTime: Date;
  setTime(date: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  constructor(h: number, m: number) {
    console.log('h: ', h);
    console.log('m: ', m);
  }

  setTime(date: Date) {
    this.currentTime = date;
  }

  getTime() {
    return this.currentTime.getTime();
  }
}

const clock = new Clock(10, 30);

clock.setTime(new Date());
let curTime = clock.getTime();

console.log(curTime); // current timestamp