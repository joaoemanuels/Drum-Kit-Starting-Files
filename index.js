const audioMap = {
  'w': new Audio('./sounds/crash.mp3'),
  'a': new Audio('./sounds/kick-bass.mp3'),
  's': new Audio('./sounds/snare.mp3'),
  'd': new Audio('./sounds/tom-1.mp3'),
  'j': new Audio('./sounds/tom-2.mp3'),
  'k': new Audio('./sounds/tom-3.mp3'),
  'l': new Audio('./sounds/tom-4.mp3')
};

const drumElements = document.querySelectorAll(".drum");

drumElements.forEach(function (drum) {
  drum.addEventListener("click", function () {
    const key = drum.classList[0];
    const audio = audioMap[key];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      drum.style.border = "5px solid red";
      setTimeout(function () {
        drum.style.border = "";
      }, 100);
    }
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const audio = audioMap[key];
  const drum = document.querySelector(`[data-key="${key}"]`);

  if (audio && drum) {
    audio.currentTime = 0;
    audio.play();
    drum.style.border = "5px solid red";
    setTimeout(function () {
      drum.style.border = "";
    }, 100);
  }
});