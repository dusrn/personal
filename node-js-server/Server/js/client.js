/**
* Created with socket_io_chat.
* User: black9820
* Date: 2015-09-10
* Time: 01:40 PM
* To change this template use Tools | Templates.
*/
var socket = io();

var login_check = false,
    prev_scrollTop = 0,
    $html_body_stop = $('html, body').stop(),
    $document = $(document),
    $input = $('input'),
    $textarea = $('textarea'),
    user_info_init = ["ID", 99/*grade*/, 0/*icon*/, "Name"],
    user_info = ["ID", 99/*grade*/, 0/*icon*/, "Name"];

$document.ready(function(){
  
  $(".header").click(function(){ // scroll up
    $html_body_stop.animate({scrollTop: 0}, 100);
  });
  
  function loading_end(){ // loading end function
    main_schedule();
    main_notice(); // request & receive notice item
    main_chatting(); // chatting function
  }; loading_end();
  
});

$input.focusin(function(){
  $(this).css("background-color", "rgb(243, 226, 125)");
});
$input.focusout(function(){
  $(this).css("background-color", "#fff");
});
$textarea.focusin(function(){
  $(this).css("background-color", "rgb(243, 226, 125)");
});
$textarea.focusout(function(){
  $(this).css("background-color", "#fff");
});

$('img').click(function(){
  var $modal = $('<div class="modal-window">');
  $('.content-wrap').append($modal);
  $modal.css("background-image", $(this).css("background-image"));
  $modal.stop().fadeIn(100);
  
  $modal.click(function(){
    $modal.remove();
  });
});

function this_time() { // current time (ex: 2015.9.26 23:13)
  var temp = "",
      today = new Date();
  temp += today.getFullYear() + '.';
  if (today.getMonth() < 9) {
    temp += "0";
  }
  temp += (today.getMonth() + 1) + '.';
  if (today.getDate() < 10) {
    temp += "0";
  }
  temp += today.getDate() + " ";
  temp += today.getHours() + ':';
  if (today.getMinutes() < 10) {
    temp += "0";
  }
  temp += today.getMinutes();
  return temp;
};

function this_date() {
  var temp = "",
      today = new Date();
  temp += today.getFullYear() + '.';
  if (today.getMonth() < 9) {
    temp += "0";
  }
  temp += (today.getMonth() + 1) + '.';
  if (today.getDate() < 10) {
    temp += "0";
  }
  temp += today.getDate();
  return temp;
}