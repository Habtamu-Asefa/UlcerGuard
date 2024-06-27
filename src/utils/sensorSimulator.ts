function generatePressureReading(on = 1) {
  const pressureValue = Math.floor(Math.random() * 100) + 100;
  const rt1 = Math.floor(Math.random() * 2);
  const rt2 = Math.floor(Math.random() * 2);
  const rt3 = Math.floor(Math.random() * 2);
  const rt4 = Math.floor(Math.random() * 2);

  // Helper function to format numbers to a maximum of four significant digits
  const formatNumber = num => parseFloat(num.toFixed(4));

  const currentDate = new Date();
  return {
    toe: formatNumber(pressureValue * rt1),
    heel: formatNumber(pressureValue * rt2),
    mt_1: formatNumber(pressureValue * rt3),
    mt_5: formatNumber(pressureValue * rt4),
    date: currentDate,
    isPeak: on,
  };
}

export default generatePressureReading;
