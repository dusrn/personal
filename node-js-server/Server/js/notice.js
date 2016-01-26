/**
* Created with socket_io_chat.
* User: black9820
* Date: 2015-09-23
* Time: 01:40 PM
* To change this template use Tools | Templates.
*/

function main_notice(){
  
  var notice_item_number = 0,
      first_notice_item = true;
  
  function request_notice_item() {
    var temp = true;
    socket.emit('request-notice', temp);
  }; request_notice_item();
  
  socket.on('notice-item', function(item){ // receive notice item
    notice_item_number++;
    var $notice0 = $('.notice')[0],
        html = '<article class="notice-item">' +
              '<a class="notice-title">' +
                '<div class="notice-title-icon"></div>' +
                '<div class="notice-title-div"><span>' + item[1] + '</span></div>' +
                '<div class="notice-date-div"></div>' +
                '<div class="notice-date-div"><span class="notice-date">' + item[2] + '</span></div>' +
              '</a>' +
              '<div class="notice-hide">';
    
    for (var i=0; i<item[3]; i++) {
      html += '<p></p><div class="notice-content-icon"></div><p>' + item[i+4] + '</p>';
    }
    html += '</div>' + '</article>';
    
    if (first_notice_item) { // initialization
      $notice0.innerHTML = html;
      first_notice_item = false;
    } else {
      $notice0.innerHTML += html;
    }

    if (item[0]) { // notice event function
      notice_event();
    }
  });
  
  function notice_event(){ // notice events
    
    $('.notice-title').click(function(){ // click event function
      var $this = $(this), 
          content = $this.next('.notice-hide'),
          $content = $(content),
          $content_stop = $content.stop(),
          $icon_stop = $($this.children('.notice-title-icon')).stop(),
          offset = $this.offset(),
          parent = $this.parent();
      if ($content.is(':visible')) { // content is visible
        $content_stop.slideUp(200);
        parent.css('background-color', 'rgba(0,0,0,0)');
        $this.css('color', '#FF9191');
        $icon_stop.fadeOut(200);
      } else { // content is not visible
        $html_body_stop.delay(200).animate({scrollTop: offset.top - $('.header').height() - 8}, 200);
        parent.css('background-color', '#d1d1d1');
        $this.css('color', '#000');
        $content_stop.slideDown(200);
        $icon_stop.fadeIn(200);
      }
    });

  };
  
};





