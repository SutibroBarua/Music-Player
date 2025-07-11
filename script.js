const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const shuffleBtn = document.getElementById("shuffle");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playlist = [
    { title: "New York", artist: "Ja Rule", file: "music/NewYork.mp3", cover: "images/NewYork.jpg" },
    { title: "Chasing The Wind", artist: "Lanie Gardner", file: "music/Chasing the wind.mp3", cover: "images/Chasing The Wind.jpg" },
    { title: "Myself", artist: "Nav", file: "music/Nav Myself.mp3", cover: "images/Myself.jpeg" },
  ];
  
  

  let current = 0;
  let isPlaying = false;
  

  function loadSong(index) {
    const track = playlist[index];
    audio.src = track.file;
    title.textContent = track.title;
    artist.textContent = track.artist;
    document.getElementById("cover").src = track.cover;

  }

  function playPause() {
    if (isPlaying) {
      audio.pause();
      playBtn.textContent = "▶️";
    } else {
      audio.play();
      playBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
  }

  playBtn.addEventListener("click", playPause);
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % playlist.length;
    loadSong(current);
    if (isPlaying) audio.play();
  });
  
  prevBtn.addEventListener("click", () => {
    current = (current - 1 + playlist.length) % playlist.length;
    loadSong(current);
    if (isPlaying) audio.play();
  });
  
  shuffleBtn.addEventListener("click", () => {
    current = Math.floor(Math.random() * playlist.length);
    loadSong(current);
    if (isPlaying) audio.play();
  });
  
  volume.addEventListener("input", () => {
    audio.volume = volume.value;
  });
  
  audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  });
  
  progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
  });
  
  loadSong(current);