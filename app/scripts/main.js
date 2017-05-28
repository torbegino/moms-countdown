console.log('Good job, you found me!');

// Set the date we're counting down to
var countDownDate = new Date("Sep 29, 2017 19:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// Set the date we're counting down to
var MomDate = new Date("Oct 1, 2017 00:00:00").getTime();

// Update the count down every 1 second
var momx = setInterval(function() {

  // Get todays date and time
  var momnow = new Date().getTime();

  // Find the distance between now an the count down date
  var momdistance = MomDate - momnow;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(momdistance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((momdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((momdistance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((momdistance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("b-day").innerHTML = days + " days " + hours + " hours "
  + minutes + " minutes " + seconds + " seconds ";

  // If the count down is finished, write some text 
  if (momdistance < 0) {
    clearInterval(x);
    document.getElementById("b-day").innerHTML = "EXPIRED";
  }
}, 1000);