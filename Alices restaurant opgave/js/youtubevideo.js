/*  Opgave: alice'S restaurant. Dette er et JavaScript dokument.
    youtubevideo.js
    DEl PRO-1 Aflevering d. 08.02.2022
    Lavet af Trine Rahbek Markussen, Hold D */

// Selvstudie dag 4. - opgave 1

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: '1o645n7OeeA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Starten kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo();
}

function onPlayerStateChange() {
  console.log("player state change");


  if (event.data == YT.PlayerState.PLAYING && !done) {

    done = true;
  }
}


var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo();
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
});

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}
