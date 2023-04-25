//Selecting elements
const hour = document.querySelector(".hours");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const timer = document.querySelector(".container");
const startBtn = document.querySelector("#start");

let stop;
let milli = 0,
  sec = 0,
  min = 0,
  hours = 0;

//function to start the timer
function timerStart() {
  //to avoid mutiple click problem
  startBtn.disabled = true;

  //timer fuction
  stop = setInterval(() => {
    milli += 1000;
    if (milli == 1000) {
      milli = 0;
      sec++;
      if (sec == 60) {
        sec = 0;
        min++;
        if (min == 20) {
          min = 0;
          hours++;
        }
      }
    }

    //changing the timer each second in DOM
    seconds.innerText = String(sec).padStart(2, "0");
    minutes.innerText = String(min).padStart(2, "0");
    hour.innerText = String(hours).padStart(2, "0");
  }, 1000);
}

//function to stop the timer
function timerStop() {
  //to avoid mutiple click problem
  startBtn.disabled = false;

  //creating a section for keeping record of times at which the watch in stopped
  const div = document.createElement("div");
  div.setAttribute("class", "output");

  const p_hrs = document.createElement("p");
  const span_hrs = document.createElement("span");
  span_hrs.setAttribute("class", "hour");
  span_hrs.innerText = String(hours).padStart(2, "0");

  p_hrs.append(span_hrs);
  div.append(p_hrs);

  const p_min = document.createElement("p");
  const span_min = document.createElement("span");
  span_min.setAttribute("class", "minute");
  span_min.innerText = String(min).padStart(2, "0");

  p_min.append(span_min);
  div.append(p_min);

  const p_sec = document.createElement("p");
  const span_sec = document.createElement("span");
  span_sec.setAttribute("class", ".second");
  span_sec.innerText = String(sec).padStart(2, "0");

  p_sec.append(span_sec);
  div.append(p_sec);

  const button = document.createElement("button");
  button.setAttribute("id", "delete");
  button.innerText = "X";
  button.onclick = () => (div.style.display = "none");
  div.append(button);

  timer.append(div);

  //stopping the timer function
  clearInterval(stop);
}

//function to reset the timer
function timerReset() {
  //to avoid mutiple click problem
  startBtn.disabled = false;

  (milli = 0), (sec = 0), (min = 0), (hours = 0);
  seconds.innerText = "--";
  minutes.innerText = "--";
  hour.innerText = "--";
}
