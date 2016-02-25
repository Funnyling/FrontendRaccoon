(function () {

    var bindFunction = function (eventName, callback, onceFlag) {
        this._events[eventName] = !this._events[eventName] ? [] : this._events[eventName];

        this._events[eventName].push({
            func: callback,
            once: onceFlag
        });
    };

    var Observable = function () {
        this._events = [];
    };

    Observable.prototype.on = function (eventName, callback) {
        bindFunction.call(this, eventName, callback, false);
    };

    Observable.prototype.one = function (eventName, callback) {
        bindFunction.call(this, eventName, callback, true);
    };

    Observable.prototype.fire = function (eventName) {
        var args = Array.prototype.slice.call(arguments, 1);
        var self = this;
        this._events[eventName].forEach(function (event) {
            event.func.apply(null, args);
            if (event.once) {
                self.unbind(eventName, event.func);
            }

        });
    };

    Observable.prototype.unbind = function (eventName, func) {
        if (!func) {
            this._events[eventName] = [];
        } else {
           this._events[eventName].forEach(function (event, index, events) {
               if (func === event.func) {
                   events.splice(index, 1);
               }
           })
        }
    };

    this.Observable = Observable;
})();

var obj = new Observable();

obj.one('one', function (a) {
    console.log('first' + a);
    obj.one('one', function () {
        console.log('second');
    });
});

obj.fire('one', 1);
obj.fire('one');