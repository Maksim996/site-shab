
(function($) {
  $('.progress-circle-time').circleProgress({
    // value: 0.9,
    size:40,
    fill: {
    gradient: ["#0386d0", "#2ad269"]
    },
    startAngle:-1.65,
    thickness:5

  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  });
})(jQuery);
