const SPLASHES = [
    "Golden Machine Gun!", "Now with salt!", "Sweet, sweet paradise..",
    "Hello World!", "hello", "Epic Boss Baby Win!",
    "Featuring Jay Leno!", "Shiny!", "Retroslop has never been better!",
    "Cool new toy!", "Australium!", "Read the rules!",
    "Boss Baby Epic Moments!", "Boss Baby Epic Fails!", "Don't run near the pool!",
    "Pool's closed!", "Buttsecks!", "Check out the maps!",
    "Free 2 Play!", "Engineering a website!", "Check out the frag comp!",
    "script.js", "index.html", "style.css", "bossbaby.bossbaby",
    "Rush B!", "Featuring Gordon Freeman!", "Look it's Gordon!",
    "Dang!", "rm -rf", "Delete System32!", "Better than sex!",
    "I can't believe it's not causal!", "Quit smoking!", "Read this!",
    "Don't read this!", "Hat Simulator 2007", "Med Down!",
    "I'm watching you.", "EGHAUHAHAHAH! BOO!", "Check out the events!",
    "Behold mortals!", "Merasmus has come!", "Welcome to your DOOM!",
    "Check out TF2 Classic!"
];
const splashElement = document.getElementById("splash");

function generateRandomSplash() {
    const splashShuffle = SPLASHES.sort(() => 0.5 - Math.random())
    const splash = Math.floor(Math.random() * splashShuffle.length)
    const text = splashShuffle[splash];

    splashElement.textContent = text
}

document.addEventListener("DOMContentLoaded", generateRandomSplash);