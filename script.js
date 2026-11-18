// Replace this value with the public URL of your petition before publishing.
// Example: https://www.change.org/p/improve-baku-drainage
const PETITION_URL = "PASTE_YOUR_PETITION_URL_HERE";

const petitionLink = document.getElementById("petition-link");
const qrContainer = document.getElementById("qrcode");
const note = document.getElementById("petition-note");
const isConfigured = /^https?:\/\//i.test(PETITION_URL) && !PETITION_URL.includes("PASTE_YOUR_PETITION_URL_HERE");

if (isConfigured) {
  petitionLink.href = PETITION_URL;
  note.textContent = "Your signature can help bring attention to this issue.";
  if (window.QRCode && qrContainer) {
    new QRCode(qrContainer, {
      text: PETITION_URL,
      width: 200,
      height: 200,
      colorDark: "#092b3a",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
} else {
  petitionLink.addEventListener("click", (event) => event.preventDefault());
  if (qrContainer) {
    qrContainer.innerHTML = '<div class="qr-placeholder">Add the petition URL in <strong>script.js</strong> to generate your QR code.</div>';
  }
}
