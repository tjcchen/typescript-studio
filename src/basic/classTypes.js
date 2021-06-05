var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
        console.log('h: ', h);
        console.log('m: ', m);
    }
    Clock.prototype.getTime = function () {
        return this.currentTime;
    };
    return Clock;
}());
var clock = new Clock(10, 30);
var curTime = clock.getTime();
console.log(curTime);
