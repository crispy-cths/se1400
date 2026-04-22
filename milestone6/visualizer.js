const audioEl = document.getElementById("audioSource");
const container = document.getElementById("visualizer");

const audioMotion = new AudioMotionAnalyzer(container, {
  source: audioEl,
  height: 150,
  mode: 3,
  frequencyScale: "bark",
  minFreq: 30,
  showBgColor: false,
  overlay: true,
  smoothing: 0.7,
  fftSize: 512,
  roundBars: true,
  showScaleX: false,
  width: 400,
  height: 250,
  showPeaks: false,
});
