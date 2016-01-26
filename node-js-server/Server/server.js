/**
* Created with socket_io_chat.
* User: black9820
* Date: 2015-09-02
* Time: 02:10 PM
* To change this template use Tools | Templates.
*/
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/view/index.html');
});

/*********************************  css  *********************************/

app.get('/css/client.css', function(req, res){
  res.sendFile(__dirname + '/css/client.css');
});

app.get('/css/normalize.css', function(req, res){
  res.sendFile(__dirname + '/css/normalize.css');
});

app.get('/css/icon.css', function(req, res){
  res.sendFile(__dirname + '/css/icon.css');
});

app.get('/css/action.css', function(req, res){
  res.sendFile(__dirname + '/css/action.css');
});

app.get('/css/side-nav.css', function(req, res){
  res.sendFile(__dirname + '/css/side-nav.css');
});

app.get('/css/main.css', function(req, res){
  res.sendFile(__dirname + '/css/main.css');
});

app.get('/css/notice.css', function(req, res){
  res.sendFile(__dirname + '/css/notice.css');
});

app.get('/css/schedule.css', function(req, res){
  res.sendFile(__dirname + '/css/schedule.css');
});

app.get('/css/photo.css', function(req, res){
  res.sendFile(__dirname + '/css/photo.css');
});

app.get('/css/chatting.css', function(req, res){
  res.sendFile(__dirname + '/css/chatting.css');
});

app.get('/css/making.css', function(req, res){
  res.sendFile(__dirname + '/css/making.css');
});

app.get('/css/sign-up.css', function(req, res){
  res.sendFile(__dirname + '/css/sign-up.css');
});

/*********************************  js  *********************************/

app.get('/js/client.js', function(req, res){
  res.sendFile(__dirname + '/js/client.js');
});

app.get('/js/action.js', function(req, res){
  res.sendFile(__dirname + '/js/action.js');
});

app.get('/js/notice.js', function(req, res){
  res.sendFile(__dirname + '/js/notice.js');
});

app.get('/js/schedule.js', function(req, res){
  res.sendFile(__dirname + '/js/schedule.js');
});

app.get('/js/side-nav.js', function(req, res){
  res.sendFile(__dirname + '/js/side-nav.js');
});

app.get('/js/chatting.js', function(req, res){
  res.sendFile(__dirname + '/js/chatting.js');
});

/*********************************  svg  *********************************/

app.get('/images/icons/menu-button.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/menu-button.svg');
});

app.get('/images/icons/arrow.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/arrow.svg');
});

app.get('/images/icons/1.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/1.svg');
});

app.get('/images/icons/2.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/2.svg');
});

app.get('/images/icons/3.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/3.svg');
});

app.get('/images/icons/vocal.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/vocal.svg');
});

app.get('/images/icons/guitar.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/guitar.svg');
});

app.get('/images/icons/bass.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/bass.svg');
});

app.get('/images/icons/drum.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/drum.svg');
});

app.get('/images/icons/keyboard.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/keyboard.svg');
});

app.get('/images/icons/what.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/what.svg');
});

app.get('/images/icons/notice-content-icon.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/notice-content-icon.svg');
});

app.get('/images/icons/diamond.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/diamond.svg');
});

app.get('/images/icons/notice.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/notice.svg');
});

app.get('/images/icons/photo.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/photo.svg');
});

app.get('/images/icons/schedule.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/schedule.svg');
});

app.get('/images/icons/schedule-content-icon.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/schedule-content-icon.svg');
});

app.get('/images/icons/video.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/video.svg');
});

app.get('/images/icons/chat.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/chat.svg');
});

app.get('/images/icons/make.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/make.svg');
});

app.get('/images/icons/home.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/home.svg');
});

app.get('/images/icons/enter.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/enter.svg');
});

app.get('/images/icons/scroll-down.svg', function(req, res){
  res.sendFile(__dirname + '/images/icons/scroll-down.svg');
});

/*********************************  jpg  *********************************/

app.get('/images/blue.jpg', function(req, res){
  res.sendFile(__dirname + '/images/blue.jpg');
});

app.get('/images/green.jpg', function(req, res){
  res.sendFile(__dirname + '/images/green.jpg');
});

app.get('/images/legion.jpg', function(req, res){
  res.sendFile(__dirname + '/images/legion.jpg');
});

app.get('/images/purple.jpg', function(req, res){
  res.sendFile(__dirname + '/images/purple.jpg');
});

app.get('/images/red.jpg', function(req, res){
  res.sendFile(__dirname + '/images/red.jpg');
});

app.get('/images/nodejs.jpg', function(req, res){
  res.sendFile(__dirname + '/images/nodejs.jpg');
});

app.get('/images/angularjs.jpg', function(req, res){
  res.sendFile(__dirname + '/images/angularjs.jpg');
});

app.get('/images/jquery.jpg', function(req, res){
  res.sendFile(__dirname + '/images/jquery.jpg');
});

app.get('/images/myphoto.jpg', function(req, res){
  res.sendFile(__dirname + '/images/myphoto.jpg');
});

app.get('/images/metallica.jpg', function(req, res){
  res.sendFile(__dirname + '/images/metallica.jpg');
});

app.get('/images/metallica2.jpg', function(req, res){
  res.sendFile(__dirname + '/images/metallica2.jpg');
});

app.get('/images/my-chemical-romance.jpg', function(req, res){
  res.sendFile(__dirname + '/images/my-chemical-romance.jpg');
});

app.get('/images/main/main1.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main1.jpg');
});

app.get('/images/main/main2.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main2.jpg');
});

app.get('/images/main/main3.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main3.jpg');
});

app.get('/images/main/main4.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main4.jpg');
});

app.get('/images/main/main5.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main5.jpg');
});

app.get('/images/main/main6.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main6.jpg');
});

app.get('/images/main/main7.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main7.jpg');
});

app.get('/images/main/main8.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main8.jpg');
});

app.get('/images/main/main9.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main9.jpg');
});

app.get('/images/main/main10.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/main10.jpg');
});

app.get('/images/main/ganji.jpg', function(req, res){
  res.sendFile(__dirname + '/images/main/ganji.jpg');
});

app.get('/images/schedule/schedule1.jpg', function(req, res){
  res.sendFile(__dirname + '/images/schedule/schedule1.jpg');
});

app.get('/images/schedule/schedule2.jpg', function(req, res){
  res.sendFile(__dirname + '/images/schedule/schedule2.jpg');
});

app.get('/images/schedule/schedule3.jpg', function(req, res){
  res.sendFile(__dirname + '/images/schedule/schedule3.jpg');
});

app.get('/images/schedule/schedule4.jpg', function(req, res){
  res.sendFile(__dirname + '/images/schedule/schedule4.jpg');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('request-notice', function(temp){
    if (temp) {
      console.log("request notice item!!")
      send_notice_item();
      console.log("sending notice item...");
    } else {
      return;
    }
  });
  
  function send_notice_item(){ // send notice item
    // DB data
    var item = [true, // last item? check value
                "총회회의록",
                "2015.11.11 11:11",
                3,
                "Lorem ipsum dolor sit amet",
                "Dolorem aliquam a libero reiciendis obcaecati doloribus ipsa",
                "Sint, perspiciatis nemo aut, rerum excepturi deleniti modi quos nihil corporis eum, maiores soluta labore, consectetur eligendi nesciunt. Placeat, incidunt! Illum placeat eligendi"];
    for (var i=0; i<15; i++) {
      if (i == 14) {
        item[0] = true;
      }
      socket.emit("notice-item", item);
    }
  };
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('chat-message', function(msg){
    io.emit('chat-message', msg);
  });
  
  socket.on('login-info', function(info){ // log-in
    var user_info = [info[0], 19/*grade*/, 2/*icon*/, "김무건"]; // DB data
    socket.emit('login-success', user_info);
    console.log(info[0] + " : user log in");
  });
  
  socket.on('logout', function(id){
    console.log(id + " : user log out");
  });
  
  socket.on('sign-up-user-data', function(user_data){
    console.log("new user sign up : " + user_data);
    socket.emit('sign-up-success', user_data);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

