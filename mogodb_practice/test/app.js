var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient,
    mongoURL = "mongodb://localhost:27017/mongoDBtest";
var session = require("express-session");

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

app.use( session( {  //세션 생성
  //genid: function(req) { return genuuid(); },  //uid-safe 의존라이브러리를 이용해서 사용하는듯.
  secret: "secret_key",  //유저의 id로 세션을 관리
  key: "Rex",
  cookie: {maxAge: 1000*60*1},  //1분동안
  resave: true,  //false로 하면 request를 여러번해도 시간초과시 세션이 사라짐. true일경우, 리퀘스트마다 다시 시간이 초기화됨.
  saveUninitialized: true  //초기화되지않은 세션을 강제로 세션 저장소에 저장할 것인지.
}));

MongoClient.connect(mongoURL, function(err, db) {  //몽고디비 연결테스트?
  if (err) { console.log("에러 내용 ==> " + err); }
  console.log("몽고디비가 정상 작동하는지 검사합니다.");
  db.close();
  console.log("검사를 완료하였습니다.");
});



app.get("/mongoDBlogin", function(req, res) {
  console.log("몽고를 이용한 User 로그인 테스트 URL 접속");
  if (req.session.user_id) {
    res.redirect("/mongoDBlogin/getUser");
  }
  res.sendFile(path.join(__dirname+"/public/mongoDBuser/login.html"));  //로그인페이지로 보냄
});
app.get("/mongoDBlogin/createUser", function(req, res) {
  console.log("회원가입 페이지 출력");
  res.sendFile(path.join(__dirname+"/public/mongoDBuser/createUser.html"));  //회원가입페이지로 보냄
});

app.post("/mongoDBlogin/createUser", function(req, res) {
  console.log("회원가입 로직 시작");
  MongoClient.connect(mongoURL, function(err, db) {
    db.collection('user').insert({
      id: req.body.id,
      pw: req.body.pw,
      email: req.body.email,
      like: req.body.like
    }, function(err, result) {
      console.log("결과물은?");
      console.log(result);
      db.close();
      //res.send(result);
    });
  });
  res.sendFile(path.join(__dirname+"/public/mongoDBuser/login.html"));  //로그인페이지로 보냄
});

app.post("/mongoDBlogin/loginMongo", function(req, res) {
  console.log("로그인 유효성체크");
  console.log(req.session);
  MongoClient.connect(mongoURL, function(err, db) {
    db.collection('user').findOne(  //1개만 찾음
      {id: req.body.id},  //where 조건
      {id: 1, pw: 1},  //select 할 컬럼
      function(err, document) {
        console.log("결과물은?");
        console.log(document);  //object가 들어옴
        result = 0;  //id부터 틀린상태 (find()의 결과물이 없는경우)
        if (document && document.id === req.body.id) {
          result = 1;  //id는 존재하지만, 비밀번호는 틀린상태
          if (document.pw === req.body.pw) {
            result = 2;  //id와 pw가 정확히 맞은 상태 (로그인가능)
            req.session.user_id = document.id;  //세션 부여
            console.log("현재 로그인된 세션 ==> "+req.session.user_id);
          }
        }
        console.log("결과값은 ==> "+result);
        db.close();
        //res.status(result);
        //res.redirect("/mongoDBlogin/getUser");
        res.send(new Array(result, document));  //배열의 [0]은 상태값, [1]은 find()된 object
      }
    );
  });
});

app.get("/mongoDBlogin/getUser", function(req, res) {
  console.log("내 정보 보기 페이지 보내기");
  if (!req.session.user_id) {  //세션이 존재하지 않으면
    res.redirect("/mongoDBlogin");  //로그인페이지로 보냄
  }
  res.sendFile(path.join(__dirname+"/public/mongoDBuser/read&updateUser.html"));
});

app.get("/mongoDBlogin/getUser/getCurrentUser", function(req, res) {
  console.log("로그인한 유저의 내 정보 보기");
  console.log(req.session);
  MongoClient.connect(mongoURL, function(err, db) {
    db.collection('user').findOne(  //1개만 찾음
      { id: req.session.user_id },  //where 조건
      function(err, document) {
        db.close();
        res.send(document);
      }
    );
  });
});

app.get('/mongoDBlogin/sessionReset', function(req, res) {  //세션시간을 체크하는 request
  res.send(req.session.cookie.maxAge / 1000+"");  //문자열로 보내주어야 Ajax에서 responseText로 받을수 있다.
});

app.get('/mongoDBlogin/sessionCheck', function(req, res) {  //세션시간을 체크하는 request
  res.send(req.session.cookie.maxAge / 1000+"");  //문자열로 보내주어야 Ajax에서 responseText로 받을수 있다.
});

app.get("/mongoDBlogin/getUser/logout", function(req, res) {
  console.log("로그아웃을 진행합니다.");
  console.log(req.session);
  delete req.session.user_id;
  res.redirect("/mongoDBlogin/getUser");
});

app.post("/mongoDBlogin/getUser/update", function(req, res) {
  console.log("유저정보 업데이트를 진행합니다.");
  console.log(req.session);
  console.log(req.body);
  MongoClient.connect(mongoURL, function(err, db) {
    db.collection("user").updateOne(
      { id: req.session.user_id },  //where조건
      { $set: {
        pw: req.body.pw,
        email: req.body.email,
        like: req.body.like
      }},
      function(err, data) {
        var result = data.result.ok;
        console.log("결과는? ==> " + result);
        res.redirect("/mongoDBlogin/getUser");
        //res.sendStatus(result);
      }
    );
  });
});

app.get("/mongoDBlogin/getUser/deleteUser", function(req, res) {
  console.log("유저의 회원탈퇴를 진행합니다.");
  console.log(req.session);
  console.log(req.body);
  MongoClient.connect(mongoURL, function(err, db) {
    db.collection("user").deleteOne(
      { id: req.session.user_id },  //where조건
      function(err, data) {
        var result = data.result.ok;
        delete req.session.user_id;
        console.log("결과는? ==> " + result);
        res.redirect("/mongoDBlogin/getUser");
        //res.sendStatus(result);
      }
    );
  });
});

module.exports = app;