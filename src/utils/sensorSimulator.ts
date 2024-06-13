// Function to generate pressure reading
function generatePressureReading() {
  const pressureValue = Math.floor(Math.random() * (400 - 100 + 1)) + 100;
  const currentDate = new Date();

  // Helper function to format numbers to a maximum of four significant digits
  const formatNumber = num => {
    return parseFloat(num.toFixed(4));
  };

  return {
    toe: formatNumber(pressureValue * 3),
    heel: formatNumber(pressureValue * 0.5),
    mt_1: formatNumber(pressureValue * 0.1),
    mt_5: formatNumber(pressureValue), // Ensuring this is a number
    date: currentDate,
  };
}

export default generatePressureReading;
