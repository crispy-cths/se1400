const audio = document.getElementById("audioSource");
const volup = document.getElementById("volup");
const pause = document.getElementById("pause");
const voldown = document.getElementById("voldown");

pause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
