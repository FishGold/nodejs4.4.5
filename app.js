console.log("app.js start!");
// 引入 events 模块
var obj1 = require("my/demo1-3.js");
var obj2 = require("my/demo1-4.js");

//demo1.main();
//obj1.buffer();
//obj1.fun1();
//obj2.fun3();
//var server = require("./server");
//var router =  require("./router");
//server.start(router.route);
var fileOp = require("./demo/FileOp");
fileOp.unlink();