window.onload = function () {
  // Prompt user for the countdown date
  const targetDateInput = prompt(
    "Enter the date you're counting down to (YYYY-MM-DD):"
  );

  // Validate if the input is a proper date
  const targetDate = new Date(targetDateInput);
  if (isNaN(targetDate)) {
    alert("Invalid date format. Please use YYYY-MM-DD.");
    return;
  }

  // Start the countdown
  setInterval(function () {
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent =
      hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent =
      minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent =
      seconds < 10 ? "0" + seconds : seconds;

    if (timeDifference < 0) {
      clearInterval(this);
      document.querySelector(".header p").textContent = "The Time has Arrived!";
      document.querySelector(".timer").style.display = "none";
    }
  }, 1000);
};
