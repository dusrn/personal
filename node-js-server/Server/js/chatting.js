/**
* Created with socket_io_chat.
* User: black9820
* Date: 2015-09-24
* Time: 02:47 PM
* To change this template use Tools | Templates.
*/

var prev_chatting_scroll_position = 0;

function main_chatting() {
  
  var chatting_auto_scroll = true,
      $insert_area = $('.insert-area'),
      $scroll_down = $('.scroll-down'),
      $scroll_down_stop = $scroll_down.stop(),
      chatting_page_first = true;
      $messages = $('.messages');
  
  $document.scroll(function(){ // scroll event value
    var $document_scrollTop = $document.scrollTop();
    if ($document_scrollTop < prev_scrollTop) {
      chatting_scroll_down_fadeIn(); // chatting.js / scroll-down button fadein
    }
    prev_scrollTop = $document_scrollTop;
  });
  
  $('.insert').click(function(e){ // send message or enter button click
    if ($insert_area.val() == '') {
      insert_area_focus();
      return;
    } else if (login_check) { // login check
      var msg = $($('.user-level')[0]).text() + $($('.user-name')[0]).text() + " : " + $insert_area.val();
      socket.emit('chat-message', msg);
    }
    $insert_area.val('');
    chatting_scroll_down_fadeOut();
    insert_area_focus();
    e.preventDefault();
  });

  $insert_area.click(function(){ // focus delay
    insert_area_focus();
  });

  function insert_area_focus(){
    $insert_area.stop().delay(200).focus();
  };

  $scroll_down.click(function(){ // scroll down button click
    chatting_scroll_down(0);
    chatting_scroll_down_fadeOut();
  });

  function chatting_scroll_down_fadeIn(){
    chatting_auto_scroll = false;
    $scroll_down_stop.fadeIn(200);
  };

  function chatting_scroll_down_fadeOut(){
    chatting_auto_scroll = true;
    $scroll_down_stop.fadeOut(200);
  };

  function chatting_scroll_down(prev){
    var to_scrollTop = $messages.height();
    if (to_scrollTop > prev) {
      prev = to_scrollTop;
      $html_body_stop.animate({scrollTop: prev}, 200);
    } else {
      $html_body_stop.delay(450).animate({scrollTop: prev}, 200);
    }
    prev_chatting_scroll_position = prev;
  };

  socket.on('chat-message', function(msg){ // receive message
    if (login_check) { // login check
      $messages.append($('<p>').text(msg));

      if (chatting_auto_scroll) {
        chatting_scroll_down(prev_chatting_scroll_position);
      } else {
        return;
      }
    }
    else { // no-login
      return;
    }
  });
  
};

