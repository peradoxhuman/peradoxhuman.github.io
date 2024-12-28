document.getElementById('convertBtn').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const resultDiv = document.getElementById('result');

    if (!videoUrl) {
        resultDiv.innerHTML = 'Please enter a valid YouTube URL.';
        return;
    }

    // Here you would typically make a request to your back-end service
    // For demonstration, we'll just simulate a successful conversion
    resultDiv.innerHTML = 'Converting...';

    // Simulate a delay for conversion
    setTimeout(() => {
        resultDiv.innerHTML = `<a href="#" download="audio.mp3">Download MP3</a>`;
    }, 2000);
});
