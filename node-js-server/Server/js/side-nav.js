/**
* Created with socket_io_chat.
* User: black9820
* Date: 2015-09-23
* Time: 02:04 PM
* To change this template use Tools | Templates.
*/


var current_page = 0,
    sign_up_page_check = false,
    side_nav_check = false,
    icons = ["what-icon", "vocal-icon", "guitar-icon",
             "bass-icon", "keyboard-icon", "drum-icon"],
    roles = [".?.", ".V.", ".G.", ".B.", ".K.", ".D."],
    main_title_name = ["CHAOS", "SCHEDULE", "MAKING",
                      "NOTICE", "PHOTO", "CHATTING", "SIGN-UP"],
    $user_icon = $('.user-icon'),
    $user_name0 = $('.user-name')[0],
    $user_level0 = $('.user-level')[0],
    $user_login_wrap_stop = $('.user-login-wrap').stop(),
    $user_login_success_wrap_stop = $('.user-login-success-wrap').stop();

$('.overlay').click(function(){
  if (side_nav_check) {
    side_nav_up();
  }
});

$('.side-nav-toggle').click(function(){
  side_nav_up();
});

function side_nav_up() {
  var $side_nav_stop = $('.side-nav').stop(),
      $nav_stop = $('.side-nav > nav').stop(),
      $overlay_stop = $('.overlay').stop();
  if (side_nav_check) {
    side_nav_check = false;
    $side_nav_stop.animate({left: "-100%"}, 200);
    $nav_stop.animate({left: "-100%"}, 200);
    $overlay_stop.animate({opacity: 0}, 200);
    $overlay_stop.delay(200).css("display", "none");
  } else {
    side_nav_check = true;
    $side_nav_stop.animate({left: 0}, 200);
    $nav_stop.animate({left: 0}, 200);
    $overlay_stop.animate({opacity: 0.75}, 200);
    $overlay_stop.delay(200).css("display", "block");
  }
};

$(".side-nav-item-name").click(function(){ // router
  var $section = $("section"),
      $item = $(".side-nav-item-name");
  side_nav_up();
  for (var i=0; i<$section.length; i++) {
    if (this == $item[i]) {
      if (current_page == i) {
        return;
      }
      else {
        $($section[current_page]).stop().delay(200).slideUp(200);
        current_page = i;
        $($section[current_page]).stop().delay(400).slideDown(200);
        $(".main-title")[0].innerHTML = main_title_name[current_page];
        if (main_title_name[current_page] == "CHATTING") {
          $('.scroll-down').stop().fadeOut();
          $html_body_stop.delay(450).animate({scrollTop: prev_chatting_scroll_position}, 200);
          $('.insert-area').val('');
        }
      }
    }
  }
});

$('.log-in-button').click(function(){ // log-in
  var $user_login_id = $('.user-login-id'),
      $user_login_pw = $('.user-login-pw'),
      $user_login_id_val = $user_login_id.val(),
      $user_login_pw_val = $user_login_pw.val();
  
  if (sign_up_page_check) {
    sign_up_page_fadeOut();
    return;
  }
  if ($user_login_id_val && $user_login_pw_val) {
    var info = new Array(2);
    info[0] = $user_login_id_val;
    info[1] = $user_login_pw_val;
    socket.emit('login-info', info); // sending id & pw
  } else { // Sign-up
    sign_up_page_check = true;
    $('.side-nav-list').stop().fadeOut(200);
    $('.sign-up').stop().delay(200).fadeIn(200);
    button_change(false);
  }
  $user_login_id.val('');
  $user_login_pw.val('');
});

socket.on('login-success', function(id){ // log-in success message with user infomation
  log_in(id);
});

$('.log-out-button').click(function(){ // log-out
  log_out();
});

function log_in(id) { // log-in process
  var $item = $(".side-nav-list-item");
  
  $user_login_wrap_stop.fadeOut(200);
  for (var i=0; i<user_info.length; i++) {
    user_info[i] = id[i];
  }
  $user_icon.removeClass(icons[0]).addClass(icons[user_info[2]]);
  change_element_text($user_level0, user_info[1] + roles[user_info[2]]);
  change_element_text($user_name0, user_info[3]);
  $user_login_success_wrap_stop.delay(250).fadeIn(200);
  
  login_check = true;
  
  if (login_check) { // add menu items
    for (var i=3; i<$item.length; i++) {
      $($item[i]).stop().fadeIn(200);
    }
  }
};

function log_out() { // log-out process
  var $item = $(".side-nav-list-item");
  
  socket.emit('logout', user_info[0]);
  login_check = false;
  
  $user_login_success_wrap_stop.fadeOut(200);
  for (var i=0; i<user_info.length; i++) {
    user_info[i] = user_info_init[i];
  }
  $user_icon.removeClass(icons[user_info[2]]).addClass(icons[0]);
  change_element_text($user_level0, user_info[1] + roles[user_info[2]]);
  change_element_text($user_name0, user_info[3]);
  $user_login_wrap_stop.delay(250).fadeIn(200);
  
  if (!login_check) { // remove menu items
    for (var i=3; i<$item.length; i++) {
      $($item[i]).stop().fadeOut(200);
    }
  }
  
  button_change(false);
};

$('.user-login-id').keydown(function(e){ // button change
  if (e.keyCode != 8) {
    button_change(true);
  } else {
    if ($('.user-login-id').val().length == 1) {
      button_change(false);
    }
  }
});

function button_change(temp) { // button change
  if (temp) {
    change_element_text($('.button-text')[0], 'Log-in');
  } else {
    change_element_text($('.button-text')[0], 'Sign-up');
  }
};

function change_element_text(element, text) {
  $(element).text(text);
  $(element).append('<img>'); // to use vertical-align
};


/*********************************   Sign-up control   *********************************/

$('.sign-up-cancel-button').click(function(){
  sign_up_page_fadeOut();
});

function sign_up_page_fadeOut() {
  sign_up_page_check = false;
  $('.sign-up').stop().fadeOut(200);
  $('.side-nav-list').stop().delay(200).fadeIn(200);
};

$('.sign-up-button').click(function(){
  var user_data = ["ID", "PW", "Name", "Age",
                  "Phone", "Xth", "Gender", "Role"],
      $input_data = $('.sign-up-answer > input'),
      $select_data = $('.sign-up-answer > select');
  for (var i=0; i<$input_data.length; i++) {
    user_data[i] = $($input_data[i]).val();
    if (!user_data[i]) {
      return;
    }
  }
  for (var i=$input_data.length; i<$select_data.length; i++) {
    user_data[i] = $($select_data[i]).val();
    if (!user_data[i]) {
      return;
    }
  }
  socket.emit('sign-up-user-data', user_data);
});

socket.on('sign-up-success', function(user_data){ // receive success message
  var $input_data = $('.sign-up-answer > input');
  for (var i=0; i<$input_data.length; i++) {
    $($input_data[i]).val('');
  }
  sign_up_page_fadeOut();
});