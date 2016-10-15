// Javascript for homepage

// When page loads
$(window).load(function() {
  $("#header").load("../header.html"); // Load the header file

  // Flipclock
  var targetDate = new Date("October 31, 2016 00:00:00"); // Target time
  var currentTime = new Date(); // Current time
  var diff = targetDate.getTime() / 1000 - currentTime.getTime() / 1000;

  var clock = $('.countdown-clock').FlipClock(diff, {
		clockFace: 'DailyCounter'
	});


})
