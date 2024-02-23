const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass that to the video element, then play
async function selectMediaStream() {
    try {
        // screen capture api
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // with navigator.mediaDevices.getDisplayMedia
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('error here: ' + error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button when we click on it
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button - this is not going to reset unless we successfully request our picture in picture, if not, the button will remain disabled.
    button.disabled = false;
});

// onload
selectMediaStream();