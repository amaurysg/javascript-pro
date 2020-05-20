/* function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  /* if (!player.muted) {
    player.muted = true;
  } */
/*   player.play();
};

export default AutoPlay; */

function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  player.play();
  /*  player.mute(); */
};

export default AutoPlay;
