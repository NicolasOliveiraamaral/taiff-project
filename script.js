const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureButton = document.getElementById('capture');
const goodButton = document.getElementById('good');
const badButton = document.getElementById('bad');
const result = document.getElementById('result');
const status = document.getElementById('status');
const ctx = canvas.getContext('2d');
let stream; 

window.addEventListener('load', startCamera);

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
            stream = mediaStream;
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Erro ao acessar a câmera: ", err);
        });
}

captureButton.addEventListener('click', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    video.style.display = 'none';
    canvas.style.display = 'block';
    captureButton.style.display = 'none';
    goodButton.style.display = 'block';
    badButton.style.display = 'block';
});

goodButton.addEventListener('click', () => {
    status.textContent = 'Bom';
    status.className = 'good';
    resetUI();
});

badButton.addEventListener('click', () => {
    status.textContent = 'Com Defeito';
    status.className = 'bad';
    resetUI();
});

function resetUI() {
    video.style.display = 'block';
    canvas.style.display = 'none';
    captureButton.style.display = 'block';
    goodButton.style.display = 'none';
    badButton.style.display = 'none';
    status.textContent = '';
}
