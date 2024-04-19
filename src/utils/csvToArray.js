export default function csvToArray(csvData) {
  const lines = csvData.trim().split('\n');
  const arrayOfObjects = lines.map(line => {
    const [value, date] = line.split(',');
    return {
      day: date,
      highTmp: parseFloat(value),
    };
  });
  return arrayOfObjects;
}
