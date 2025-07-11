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
    { title: "New York", artist: "Ja Rule", file: "music/NewYork.mp3" },
    { title: "Chasing The Wind", artist: "Lanie Gardner", file: "music/Chasing the wind.mp3" },
    { title: "Myself", artist: "Nav", file: "music/Nav Myself.mp3" },
  ];

  let current = 0;
  let isPlaying = false;
  