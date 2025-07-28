const SPLASHES = [
    "Golden Machine Gun!", "Now with salt!", "Sweet, sweet paradise..",
    "Hello World!", "hello", "Epic Boss Baby Win!",
    "Featuring Jay Leno!", "Shiny!", "Retroslop has never been better!",
    "Cool new toy!", "Australium!", "Read the rules!"
];
const splashElement = document.getElementById("splash");

function generateRandomSplash() {
    const text = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
    splashElement.textContent = text
}

document.addEventListener("DOMContentLoaded", generateRandomSplash);