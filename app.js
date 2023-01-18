console.log("Hello MP4");
const statusDom = document.getElementById("status");
const videoDom = document.getElementById("videoContainer");
try {
  statusDom.innerHTML = "Loading Start";
  const videoPromise = videoDom.play();

  if (videoPromise !== undefined) {
    videoPromise
      .then(() => {
        statusDom.innerHTML = "Loading End, start video";
      })
      .catch((error) => {
        statusDom.innerHTML = error;
      });
  }
} catch (error) {
  statusDom.innerHTML = error;
}
