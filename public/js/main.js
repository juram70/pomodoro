$(document).ready(function() {
    // Define variables
   let value= Number($("#minitues").text());
   
    var pomodoroDuration = value * 60; // 25 minutes in seconds
    var timerInterval;
    var timerRunning = false;
    var timeRemaining = pomodoroDuration;
    function redirectToRoute(route) {
        window.location.href = route;
      }

    // Function to update the timer display
    function updateTimerDisplay() {
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;
        $('#minitues').text(minutes);
        let secondsText=seconds < 10 ? '00' : '' + seconds;
        $('#seconds').text(secondsText);
        
    }

    // Function to start the timer
    function startTimer(route) {
        // console.log(route);
        timerRunning = true;
        timerInterval = setInterval(function() {
            timeRemaining--;
            updateTimerDisplay();
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                // Timer has ended, implement your logic here
                alert('Pomodoro session ended!');
                if(route=="/"){
                redirectToRoute("/shortBreak");}else{
                    redirectToRoute("/")
                }
            }
        }, 1000); // Update timer every second
    }

    // Function to pause the timer
    function pauseTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
    }

    // Function to reset the timer
    function resetTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
        timeRemaining = pomodoroDuration;
        updateTimerDisplay();
    }

    // Click event handler for the main button   
    $('.mainbutton').on('click', function() {
        if (!timerRunning) {
            $('.mainbutton').text('PAUSE');
            startTimer($('.mainbutton').val());
        } else {
            $('.mainbutton').text('START');
            pauseTimer();
        }
    });

    // Click event handler for the reset button
    $('#resetButton').on('click', function() {
        resetTimer();
    });

    // Initialize timer display
    updateTimerDisplay();
});
