/**
* Created with socket_io_chat.
* User: black9820
* Date: 2015-09-23
* Time: 01:39 PM
* To change this template use Tools | Templates.
*/

$('.action').on( 'mousedown', function actionEffectStart( event ){ // click action effect
  var PX = 'px',
      div = $('<div>'),
      $div = $(div[0]),
      elemOffset = $(this).offset(),
      xPos = event.pageX - elemOffset.left,
      yPos = event.pageY - elemOffset.top,
      height = $(this).width() / 2;
  
  $div.addClass('action-effect');
  $div.css('width', ( height / 2 ) + PX);
  $div.css('height', ( height / 2 ) + PX);
  $div.css('top', yPos - ( height / 4 ) + PX);
  $div.css('left', xPos - ( height / 4 ) + PX);
  
  $(this).append($div);
  $('.action-effect').addClass('effect'); // color & opacity class
  
  setTimeout(function(){
    $div.remove();
    this.blur();
  }, 300);
});