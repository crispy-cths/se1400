const audioEl = document.getElementById('audioSource');
const container = document.getElementById('container');

const audioMotion = new AudioMotionAnalyzer(container, {
  source: audioEl,
  height: 150,
  mode: 3,
  frequencyScale: "bark",
  minFreq: 30,
  bgAlpha: 0,
  smoothing: 0.7,
  fftSize: 512,
  roundBars: true,
  barSpace: 0,
  mirror: 0,
  showScaleX: false,
  showPeaks: false
});
