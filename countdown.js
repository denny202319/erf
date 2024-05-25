// Function to initialize or retrieve the countdown date
function initializeCountdown() {
  // Check if the countdown date is already stored in local storage
  let storedDate = localStorage.getItem("countdownDate");

  if (storedDate) {
    return new Date(storedDate);
  } else {
    // Set the new countdown date to 20 days from now
    let countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 20);
    // Store the new countdown date in local storage
    localStorage.setItem("countdownDate", countDownDate);
    return countDownDate;
  }
}

// Initialize the countdown date
var countDownDate = initializeCountdown();

// Update the countdown every 1 second
var countdownFunction = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;

  // If the countdown is over, write some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    // Optionally, display a message or take other actions
    // document.getElementById("someOtherElement").innerHTML = "EXPIRED";
  }
}, 1000);
