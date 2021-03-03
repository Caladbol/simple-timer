window.onload = function () {

  // Defining variables

  var mili = 0;
  var seconds = 0;
  var minutes = 0;
  var hour = 0;
  var appendTime = document.getElementById('time');
  var buttonStart = document.getElementById('Start');
  var buttonStop = document.getElementById('Stop');
  var buttonReset = document.getElementById('Reset');
  var Interval;

  // Defining the buttons

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
    
  buttonStop.onclick = function () {
    clearInterval(Interval);
  }
  
  buttonReset.onclick = function () {
    clearInterval(Interval);
    seconds = 0;
    minutes = 0;
    mili = 0;
    hour = 0;
    appendTime.innerHTML = "00:00:00:00";
  }
  
  // Core of the program

  function startTimer() {
    
    mili++;
    if (hour < 10) {
      if (minutes < 10) {
        if (seconds < 10) {
          if (mili < 10) {
            appendTime.innerHTML = "0" + hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = "0" + hour + ":0" + minutes + ":0" + seconds + ":" + mili;
            
            if (mili > 99) {
              seconds++;
              mili = 0;
              appendTime.innerHTML = "0" + hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
            }
          }
        }
        else if (seconds > 9) {
          
          if (mili < 10) {
            appendTime.innerHTML = "0" + hour + ":0" + minutes + ":" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = "0" + hour + ":0" + minutes + ":" + seconds + ":" + mili;
          }
          
          if (mili > 99) {
            seconds++;
            mili = 0;
            appendTime.innerHTML = "0" + hour + ":0" + minutes + ":" + seconds + ":0" + mili;
          }

          if (seconds > 59) {
            minutes++;
            seconds = 0;
            appendTime.innerHTML = "0" + hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
          }

        }
         
      }
      else if (minutes > 9) {
        if (seconds < 10) {
          if (mili < 10) {
            appendTime.innerHTML = "0" + hour + ":" + minutes + ":0" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = "0" + hour + ":" + minutes + ":0" + seconds + ":" + mili;
            if (mili > 99) {
              seconds++;
              mili = 0;
              appendTime.innerHTML = "0" + hour + ":" + minutes + ":0" + seconds + ":0" + mili;
            }
          }
        }
        else if (seconds > 9) {
          
          if (mili < 10) {
            appendTime.innerHTML = "0" + hour + ":" + minutes + ":" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = "0" + hour + ":" + minutes + ":" + seconds + ":" + mili;
          }

          if (mili > 99) {
            seconds++;
            mili = 0;
            appendTime.innerHTML = "0" + hour + ":" + minutes + ":" + seconds + ":0" + mili;
          }

          if (seconds > 59) {
            minutes++;
            seconds = 0;
            appendTime.innerHTML = "0" + hour + ":" + minutes + ":0" + seconds + ":0" + mili;
          }

        }

        if (minutes > 59) {
          hour++;
          minutes = 0;
          appendTime.innerHTML = "0" + hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
        }

      }

    }
    else {
      if (minutes < 10) {
        if (seconds < 10) {
          if (mili < 10) {
            appendTime.innerHTML = hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = hour + ":0" + minutes + ":0" + seconds + ":" + mili;
            
            if (mili > 99) {
              seconds++;
              mili = 0;
              appendTime.innerHTML = hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
            }
          }
        }
        else if (seconds > 9) {
          
          if (mili < 10) {
            appendTime.innerHTML = hour + ":0" + minutes + ":" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = hour + ":0" + minutes + ":" + seconds + ":" + mili;
          }
          
          if (mili > 99) {
            seconds++;
            mili = 0;
            appendTime.innerHTML = hour + ":0" + minutes + ":" + seconds + ":0" + mili;
          }

          if (seconds > 59) {
            minutes++;
            seconds = 0;
            appendTime.innerHTML = hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
          }

        }
         
      }
      else if (minutes > 9) {
        if (seconds < 10) {
          if (mili < 10) {
            appendTime.innerHTML = hour + ":" + minutes + ":0" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = hour + ":" + minutes + ":0" + seconds + ":" + mili;
            if (mili > 99) {
              seconds++;
              mili = 0;
              appendTime.innerHTML = hour + ":" + minutes + ":0" + seconds + ":0" + mili;
            }
          }
        }
        else if (seconds > 9) {
          
          if (mili < 10) {
            appendTime.innerHTML = hour + ":" + minutes + ":" + seconds + ":0" + mili;
          }
          else if (mili > 9) {
            appendTime.innerHTML = hour + ":" + minutes + ":" + seconds + ":" + mili;
          }

          if (mili > 99) {
            seconds++;
            mili = 0;
            appendTime.innerHTML = hour + ":" + minutes + ":" + seconds + ":0" + mili;
          }

          if (seconds > 59) {
            minutes++;
            seconds = 0;
            appendTime.innerHTML = hour + ":" + minutes + ":0" + seconds + ":0" + mili;
          }

        }

        if (minutes > 59) {
          hour++;
          minutes = 0;
          appendTime.innerHTML = hour + ":0" + minutes + ":0" + seconds + ":0" + mili;
        }

      }

    }

  }

}