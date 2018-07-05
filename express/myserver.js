let express = require('express');
let app = express();
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/',function (req,res) {
   res.send('this is test message!');
});
app.get('/json',function (req,res) {
   let myjson = {
       name:'盒装牛奶',
       price:'价格',
       date:'2018年1月1日'
   };
   res.send(myjson);
});
let server = app.listen(8081,function () {
   let host = server.address().address
   let port = server.address().port
    console.log('host,port',host,port);
});
