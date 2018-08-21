//import base1 = require("base-64");
//import utf = require("utf8");
import redux1 = require("redux");
//declare var Redux: any;
//declare var utf8: any;
export class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        //var str = "nicraboy";
        //var encodedStr = base1.encode("text");
        //var bytes = utf8.encode(str);
        const store = Redux.createStore(this.Counter);
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

    public Counter(state: any, action: any) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    }

}
