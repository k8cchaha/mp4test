console.log("Hello MP4");
const statusDom = document.getElementById("status");
statusDom.innerHTML = "Loading Start";

const videoDom = document.getElementById("videoContainer");
const videoPromise = videoDom.play();

if (videoPromise !== undefined) {
  videoPromise
    .then(() => {
      statusDom.innerHTML = "Loading End, start video";
    })
    .catch((error) => {});
}
