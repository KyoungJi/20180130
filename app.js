/*
// Express 기본 모듈 불러오기
var express = require('express'), http = require('http');
//express 모듈을 사용할 때 항상 http 모듈도 함께 불러야한다.

//익스프레스 객체 생성
var app = express();

//기본 포트를 app객체에 속서으로 설정
app.set('port', process.env.PORT || 3000);  // app 객에에 정의된 함수를 호출

//Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('익스프레스 서버를 시작했습니다. :', +app.get('port'));
});
*/
/*
// 미들웨어 사용하여 처리하기
var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next){
  console.log('첫번째 미들웨어에서 요청을 처리함');
  res.writeHead('200',{'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>Express 서버에서 응답한 결과입니다.</h1>');
});

http.createServer(app).listen(3000, function(){
  console.log("Express 서버가 3000번 포트에서 시작됨.");
});
*/
/*
// 여러개의 미들웨어를 등록하여 사용하기
var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next){
  console.log('첫번째 미들웨어에서 요청을 처리함');
  req.user = 'mike';
  next();
});

app.use('/', function(req, res, next){
  console.log('두번째 미들웨어에서 요청을 처리함.');

  res.writeHead('200',{'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>Express 서버에서 '+req.user+'응답한 결과입니다.</h1>');
});

http.createServer(app).listen(3000, function(){
  console.log("Express 서버가 3000번 포트에서 시작됨.");
});
*/
/*
var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next){
  console.log('첫번째 미들웨어에서 요청을 처리함');
  res.send({name:'소녀시대',age:20});
  next();
});

app.use('/', function(req, res, next){
  console.log('두번째 미들웨어에서 요청을 처리함.');

  res.writeHead('200',{'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>Express 서버에서 '+req.user+'응답한 결과입니다.</h1>');
});

http.createServer(app).listen(3000, function(){
  console.log("Express 서버가 3000번 포트에서 시작됨.");
});
*/
/*
var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next){
  console.log('첫번째 미들웨어에서 요청을 처리함');
  res.redirect('http://google.co.kr');
  next();
});



http.createServer(app).listen(3000, function(){
  console.log("Express 서버가 3000번 포트에서 시작됨.");
});
*/
var express = require('express'), http = require('http');

var app = express();

app.use(function(req, res, next){
  console.log('첫번째 미들웨어에서 요청을 처리함');

  var userAgent = req.header('User-Agent');
  var paramName = req.query.name;

  res.writeHead('200',{'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
  res.write('<div><p>User-Agent : '+userAgent+'</p></div>');
  res.write('<div><p>Param name : '+paramName+'</p></div>');
  res.end();
});



http.createServer(app).listen(3000, function(){
  console.log("Express 서버가 3000번 포트에서 시작됨.");
});
