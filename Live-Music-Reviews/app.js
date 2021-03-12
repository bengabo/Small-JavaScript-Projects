const video = document.getElementById("video");
const artist = document.getElementById("artist");
const song = document.getElementById("song");
const concert = document.getElementById("concert");
const year = document.getElementById("year");
const text = document.getElementById("text");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  video.src = reviews[currentItem].video;
  artist.textContent = reviews[currentItem].artist;
  song.textContent = reviews[currentItem].song;
  concert.textContent = reviews[currentItem].concert;
  year.textContent = reviews[currentItem].year;
  text.textContent = reviews[currentItem].text;

  })