let metronome = new Metronome();
let tempo = document.getElementById("tempo");
tempo.textContent = metronome.tempo;

let playPauseIcon = document.getElementById("play-pause-icon");

let playButton = document.getElementById("play-button");
playButton.addEventListener("click", function () {
  metronome.startStop();

  if (metronome.isRunning) {
    playPauseIcon.className = "pause";
  } else {
    playPauseIcon.className = "play";
  }
});

let tempoChangeButtons = document.getElementsByClassName("tempo-change");
for (let i = 0; i < tempoChangeButtons.length; i++) {
  tempoChangeButtons[i].addEventListener("click", function () {
    metronome.tempo += parseInt(this.dataset.change);
    tempo.textContent = metronome.tempo;
  });
}
