var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
        console.log('h: ', h);
        console.log('m: ', m);
    }
    Clock.prototype.setTime = function (date) {
        this.currentTime = date;
    };
    Clock.prototype.getTime = function () {
        return this.currentTime.getTime();
    };
    return Clock;
}());
var clock = new Clock(10, 30);
clock.setTime(new Date());
var curTime = clock.getTime();
console.log(curTime); // current timestamp
