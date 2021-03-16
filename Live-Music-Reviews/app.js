const video = document.getElementById("video");
const artist = document.getElementById("artist");
const song = document.getElementById("song");
const concert = document.getElementById("concert");
const year = document.getElementById("year");
const text = document.getElementById("text");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentSong = 0;

// Show current
window.addEventListener("DOMContentLoaded", () => {
  getSong();
})

const getSong = () => {
  video.src = reviews[currentSong].video;
  artist.textContent = reviews[currentSong].artist;
  song.textContent = reviews[currentSong].song;
  concert.textContent = reviews[currentSong].concert;
  year.textContent = reviews[currentSong].year;
  text.textContent = reviews[currentSong].text;
}

// Show next song
nextBtn.addEventListener("click", () => {
  currentSong++;
  if(currentSong > reviews.length - 1){
    currentSong = 0;
  }
  getSong();
})

// Show previous song

prevBtn.addEventListener('click', () => {
  currentSong--;
  if(currentSong<0){
    currentSong = reviews.length -1;
  }
  getSong();
})