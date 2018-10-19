$('#targeted-circle').circleProgress({
    startAngle: -1.6,
    lineCap: 'round',
    value: 0.8,
    size: 120,
    fill: {
      gradient: ["#ff9a48", "#d54655"],
      gradientAngle: Math.PI / 4,
    }
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(Math.round(100 * stepValue ) + '<i>%</i>');
  });
  $('#goals-acheived-1-circle').circleProgress({
    startAngle: -1.6,
    lineCap: 'round',
    value: 0.45,
    size: 120,
    fill: {
      gradient: ["#2ed663", "#f6da30"],
      gradientAngle: Math.PI / 4,
    }
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(Math.round(100 * stepValue ) + '<i>%</i>');
  });
  $('#untargeted-circle').circleProgress({
    startAngle: -1.6,
    lineCap: 'round',
    value: 0.6,
    size: 120,
    fill: {
      gradient: ["#fe9948", "#f2814c"],
      gradientAngle: Math.PI / 4,
    }
  }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').html(Math.round(100 * stepValue ) + '<i>%</i>');
  });
  $('#goals-acheived-2-circle').circleProgress({
    startAngle: -1.6,
    lineCap: 'round',
    value: 0.5,
    size: 120,
    fill: {
      gradient: ["#2cd663", "#b9d940"],
      gradientAngle: Math.PI / 4,
    }
  }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').html(Math.round(100 * stepValue ) + '<i>%</i>');
  });
  $('#campaign-circle').circleProgress({
    startAngle: -1.6,
    lineCap: 'round',
    value: 0.7,
    size: 120,
    fill: {
      gradient: ["#ff9a48", "#d54655"],
      gradientAngle: Math.PI / 4,
    }
  }).on('circle-animation-progress', function(event, progress,stepValue) {
    $(this).find('strong').html(Math.round(100 * stepValue ) + '<i>%</i>');
  });