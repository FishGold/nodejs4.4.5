/**
 * Created by zss on 2016/8/10.
 */
var http = require("http");
var url = require("url");

function start(route){
    function onRequest(request,response){
        console.dir(request);
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
        response.write("Hello World "+new Date());
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.")
}
exports.start=start;