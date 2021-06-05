interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  constructor(h: number, m: number) {
    console.log('h: ', h);
    console.log('m: ', m);
  }

  getTime() {
    return this.currentTime;
  }
}

const clock = new Clock(10, 30);
let curTime = clock.getTime();
console.log(curTime);