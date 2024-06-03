const parseRTCDate = rtcString => {
  const [hours, minutes, seconds, dayMonthYear] = rtcString.split(':');
  const [day, month, year] = dayMonthYear.split('/').map(Number);
  const hoursNum = Number(hours);
  const minutesNum = Number(minutes);
  const secondsNum = Number(seconds);
  const fullYear = 2000 + year;
  // console.log('Seconds conversion: ', rtcString);
  return new Date(fullYear, month - 1, day, hoursNum, minutesNum, secondsNum);
};

export default parseRTCDate;
