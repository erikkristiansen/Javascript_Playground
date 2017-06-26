
//clock and date drop
$(document).ready(function(){
    $("#currentTime").click(function(){
        $("#clock").slideToggle("slow");
    });
    $("#todaysDate").click(function(){
        $("#date").slideToggle("slow");
    });
});

//retrieves time and date
document.addEventListener('DOMContentLoaded', function(){
    var newTime = document.getElementById('nowTime'),
        newDate = document.getElementById('nowDate');


    setInterval (function(){

        var d = new Date();

        var month = formatMonth(d.getMonth());
        var date = d.getDate();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        var hours = d.getHours();
        var ampm = 'am';

        if (hours > 12) {
            hours = hours - 12;
            ampm = 'pm'
        } else if (hours === 0) {
            hours = 12;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10){
            seconds = '0' + seconds;
        }
        newTime.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        newDate.innerHTML = month + ' ' + date;
    }, 1000);

    function formatMonth(m) {
        m = parseInt(m, 10);
        if (m < 0) {
            m = 0;
        } else if (m > 11) {
            m = 11;
        }
        var monthNames = ['January', 'February','March',
        'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];

        return monthNames[m];
    }
});

//number game bounce up
$(document).ready(function(){
    $("#numGuess").click(function(){
        $("#click").show();
    });
});

//number game
    var guessLine = document.getElementById('click');
    guessLine.onclick = function () {
        var secret_number = Math.floor(1 + Math.random() * 10);
        var guess = prompt("Guess a number");
        var guess2 = null;
      if(guess == secret_number) {
        alert("You got it!");
      } else {
        if(guess < secret_number) {
          guess2 =
            prompt("Guess a number between " +
            guess + " and 10");
        } else {
          guess2 =
            prompt("Guess a number between 1 and " +
            guess);
        }
        if(guess2 == secret_number) {
          alert("You got it!");
        } else {
          alert("Wrong. The number was " +
            secret_number);
        }
      }
};
