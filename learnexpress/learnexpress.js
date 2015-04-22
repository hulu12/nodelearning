var express = require('express');
var app = express();

//设置静态资源
app.use(express.static(__dirname+'/public'));



//设置模板引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//设置端口
app.set('manuel_port',process.env.PORT||3000);


//路由信息
app.get('/',function(req, res) {
	res.render('home');
});
app.get('/about',function(req, res) {
	var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:randomFortune});

});


//定制404页面
app.use(function(req,res,next) {
	res.status(404);
	res.render('404');
});


//定制500页面
app.use(function(err,req,res,next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});


//数组
var fortunes=[
	"conquer your fears on they will conquer you",
	"hello pang",
	"hello yexing"
];


var server = app.listen(app.get('manuel_port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});