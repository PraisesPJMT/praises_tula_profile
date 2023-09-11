const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const updateClock = () => {
  const currentDate = new Date();

  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

  currentDayOfTheWeek.textContent = dayOfWeek;
  currentUTCTime.textContent = formattedTime;
};

updateClock();

setInterval(updateClock, 1000);
