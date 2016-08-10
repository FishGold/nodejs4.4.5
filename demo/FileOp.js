/**
 * Created by zss on 2016/8/10.
 * 常用文件操作
 */
var fs = require("fs");
var fileOp = {};
//删除
fileOp.unlink = function(){
    fs.unlink("./temp/hello",(err) => {
        if ( err )  throw err;
        console.log("successfully deleted /temp/hello");
    });
}
module.exports = fileOp;
