/*  Opgave: alice'S restaurant. Dette er et JavaScript dokument.
    youtubevideo.js
    DEl PRO-1 Aflevering d. 08.02.2022
    Lavet af Trine Rahbek Markussen, Hold D */

// Selvstudie dag 4. - opgave 1 (se også youtubevideo.js, lyd.js, index.html og css.style)

window.addEventListener("scroll", function() {

  let mySound = document.getElementById("myaudio");
  let lyd = document.getElementById("lyd");

// test
  console.log("Is the #lyd visible or not? " + elFllVsbl(lyd));

// Start og stop lyden
  if (elFllVsbl(lyd)) {
    if (!(mySound.curentTime > 0)) {
      mySound.play();
    }
  } else {
    mySound.pause();
    mySound.currentTime = 0;
  }
})

// Funktionen
function elFllVsbl( el ) {
  return (
      el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
