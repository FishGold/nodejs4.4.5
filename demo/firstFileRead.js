/**
 * Created by zss on 2016/8/4.
 */
var fs = require("fs");
//var data  = fs.readFileSync("./nodevars.bat");
//console.log(data.toString());
//console.log("end!");
fs.readFile('./nodevars.bat',function(err,data){
    if(err)
        return console.error(err);
    console.log(data.toString())
});
console.log("程序执行结束！");