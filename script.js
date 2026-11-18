// This QR code points to the campaign requests on the second page.
const campaignUrl = new URL("about.html", window.location.href).href;

const campaignLink = document.getElementById("petition-link");
const qrContainer = document.getElementById("qrcode");

if (campaignLink) campaignLink.href = campaignUrl;
if (window.QRCode && qrContainer) {
  new QRCode(qrContainer, {
    text: campaignUrl,
    width: 200,
    height: 200,
    colorDark: "#092b3a",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
