// 1. interface with props & methods
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


// 2. static and instance sides of classes
// if you create an interface with a contruct signature and try to create a class that
// implements this interface you get an error
// interface ClockContructor {
//   new (hour: number, minute: number);
// }

// // error
// class NewClock implements ClockContructor {
//   currentTime: Date;
//   constructor (h: number, m: number){

//   }
// }

// 3. 
interface ClockConstructor {
  new (hour: number, minute: number): NewClockInterface;
}

interface NewClockInterface {
  tick(): void;
}

function createClock (ctor: ClockConstructor, hour: number, minute: number): NewClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements NewClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements NewClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick tock');
  };
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
