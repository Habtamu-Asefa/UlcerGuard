import generatePressureReading from './sensorSimulator';

export default function lifeSaveFunction(updater, on) {
  setInterval(() => {
    const pressure = generatePressureReading(on);
    updater(pressure);
  }, 3000);
}
