define(["require", "exports", "./app"], function (require, exports, app) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var el = document.getElementById('content');
    var greeter = new app.Greeter(el);
    greeter.start();
});
//# sourceMappingURL=test.js.map