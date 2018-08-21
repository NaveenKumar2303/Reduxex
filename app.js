define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //declare var utf8: any;
    var Greeter = /** @class */ (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();
            //var str = "nicraboy";
            //var encodedStr = base1.encode("text");
            //var bytes = utf8.encode(str);
            var store = Redux.createStore(this.Counter);
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        Greeter.prototype.Counter = function (state, action) {
            switch (action.type) {
                case 'INCREMENT':
                    return state + 1;
                case 'DECREMENT':
                    return state - 1;
                default:
                    return state;
            }
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
//# sourceMappingURL=app.js.map