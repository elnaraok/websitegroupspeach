// Create a QR code linking to the campaign requests page.
const campaignUrl = new URL("about.html", window.location.href).href;
const campaignLink = document.getElementById("petition-link");
const qrContainer = document.getElementById("qrcode");

if (campaignLink) campaignLink.href = campaignUrl;

if (qrContainer) {
  const image = document.createElement("img");
  image.alt = "QR code linking to the campaign requests page";
  image.width = 200;
  image.height = 200;
  image.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    encodeURIComponent(campaignUrl);

  image.onerror = () => {
    qrContainer.textContent = "QR code could not load. Please refresh the page while connected to the internet.";
  };

  qrContainer.replaceChildren(image);
}
