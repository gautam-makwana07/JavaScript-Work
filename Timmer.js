// 1. Modal Logic
const modal = document.getElementById("offer-modal");
const closeBtn = document.getElementById("close-modal");
const downloadZone = document.getElementById("download-zone");

// Show modal after 5 seconds
setTimeout(() => {
    downloadZone.style.display = "none"; // Hide downloader
    modal.style.display = "block";       // Show offer
}, 5500);

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 2. Download Progress Logic
let count = 0;
const bar = document.getElementById("bar");
const percentText = document.getElementById("percent-text");
const statusText = document.getElementById("status-text");

const downloadInterval = setInterval(() => {
    if (count <= 100) {
        // FIX: Use backticks for template literals
        bar.style.width = `${count}%`; 
        percentText.textContent = `${count}%`;
        count++;
    } else {
        statusText.textContent = "Download Complete!";
        clearInterval(downloadInterval);
    }
}, 4); // 40ms * 100 = 4 seconds total duration