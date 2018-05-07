const countdown = document.querySelector('.countdown');

// Set Launch Date
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();
// Log Milliseconds
console.log(launchDate);

// Update Every Second
const interval = setInterval(() => {
  console.log('interval');
  // Get today's date and time in milliseconds
  const now = new Date().getTime();
  // Distance from now to the launch date in milliseconds
  const distance = launchDate - now;
  console.log(distance);
  // Time Calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display Result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;
  // If Launch Date Passed
  if(distance < 0) {
    // Stop Countdown
    clearInterval(interval);
    // Style and Output Text
    countdown.style.color = '#17A2B8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
