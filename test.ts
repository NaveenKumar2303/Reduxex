import app = require("./app");

var el = document.getElementById('content');
var greeter = new app.Greeter(el);
greeter.start();
