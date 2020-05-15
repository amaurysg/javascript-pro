const video = document.querySelector("video");
const button = document.querySelector("button");

function mediaPlayer(config) {
  this.media = config.el;
}

mediaPlayer.prototype.play = function () {
  this.media.play();
};

mediaPlayer.prototype.pause = function () {
  this.media.pause();
};

/*   const player = new mediaPlayer({ el: video });
      button.onclick = () => {
        if (player.media.paused) {
          player.play();
        } else {
          player.pause();
        }
      }; */

const player = new mediaPlayer({ el: video });
button.onclick = () => {
  player.media.paused ? player.play() : player.pause();
};
