const millis = Date.now();
const dayInMilsec = 1000 * 60 * 60 * 24;
const days = Math.floor(millis / dayInMilsec);
const daysInMilsec = days * dayInMilsec;
const hours = Math.floor((millis - daysInMilsec) / (1000 * 60 *60));
const hoursInMilsec = hours * 1000 * 60 * 60 + daysInMilsec;
const minutes = Math.floor((millis - hoursInMilsec) / (1000 * 60));
const minutesInMilisec = minutes * 1000 * 60 + hoursInMilsec;
let seconds = Math.floor((Date.now() - minutesInMilisec) / 1000);
if (seconds > 59) {
  seconds -= 60;
  minutes++;
}

console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);

console.log(Date.now() - millis);
