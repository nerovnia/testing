const hoursLocal = 2;
const millis = Date.now();
const dayInMilsec = 1000 * 60 * 60 * 24;
const days = Math.floor(millis / dayInMilsec);
const daysInMilsec = days * dayInMilsec;
let hours = Math.floor((millis - daysInMilsec) / (1000 * 60 *60));
const hoursInMilsec = hours * 1000 * 60 * 60 + daysInMilsec;
let minutes = Math.floor((millis - hoursInMilsec) / (1000 * 60));
const minutesInMilisec = minutes * 1000 * 60 + hoursInMilsec;
let seconds = Math.floor((Date.now() - minutesInMilisec) / 1000);
if (seconds > 59) {
  seconds -= 60;
  minutes++;
}
hours += hoursLocal;

/*
function delay() {
  // `delay` returns a promise
  return new Promise(function(resolve, reject) {
  setTimeout(setTime, 1000);
  });
}
*/
const setTime = () => {
    if(seconds === 59) {
    seconds = 0;
    if(minutes === 59) {
      minutes = 0;
      if(hours === 23) {
        hours = 0;
      } else {
        hours++;
      }
    } else {
      minutes++;
    }
  } else {
    seconds++;
  }
  console.log(`${hours}:${minutes}:${seconds}`)
}

function delay() {
  new Promise(function(resolve, reject) {
    setInterval(setTime, 1000);
    });
}


    delay();
/*
const f = async () => {
  do {
    setTimeout(setTime, 1000);
  } while (true);
}

f();
*/