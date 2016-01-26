/**
* Created with socket_io_chat.
* User: black9820
* Date: 2015-10-13
* Time: 01:24 PM
* To change this template use Tools | Templates.
*/

function main_schedule() {
  
  var $datepicker = $('#datepicker'),
      availableDates = ["2011.12.02", "2012.08.15", "2013.05.31", "2013.11.24"];
  
  $datepicker[0].value = this_date(); // today
  
  $.datepicker.regional['ko'] = {
  closeText: '닫기',
  prevText: '이전',
  nextText: '다음',
  currentText: '오늘',
  monthNames: ['년 1월','년 2월','년 3월','년 4월','년 5월','년 6월','년 7월','년 8월','년 9월','년 10월','년 11월','년 12월'],
  monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  dayNames: ['일','월','화','수','목','금','토'],
  dayNamesShort: ['일','월','화','수','목','금','토'],
  dayNamesMin: ['일','월','화','수','목','금','토'],
  weekHeader: 'Wk',
  dateFormat: 'yy.mm.dd',
  firstDay: 0,
  isRTL: false,
  showMonthAfterYear: true,
  yearSuffix: ''};
  $.datepicker.setDefaults($.datepicker.regional['ko']);
  	
	function available(date) {
		var thismonth = date.getMonth()+1;
		var thisday = date.getDate();
		if(thismonth<10){
			thismonth = "0"+thismonth;
		}
		if(thisday<10){
			thisday = "0"+thisday;
		}
		ymd = date.getFullYear() + "." + thismonth + "." + thisday;
	  if ($.inArray(ymd, availableDates) >= 0) {
      return [true,"",""];
    } else {
      return [false,"",""];
    }
  }
  
  $datepicker.datepicker({
   // minDate: new Date(), // past days invisible
    beforeShowDay: available,
    onSelect: function(dateText, inst) { // select day
                  select_date();
            }
  });
  
  function select_date() {
    for (var i=0; i<availableDates.length; i++) {
      if ($datepicker[0].value == $(".schedule-title > .schedule-date-div > span")[i].innerHTML) {
        $html_body_stop.delay(200).animate({scrollTop: $($(".schedule-item")[i]).offset().top - $('.header').height() - $('.schedule-datepicker-wrap').innerHeight()}, 200);
      }
    }
  };
  
  
};



