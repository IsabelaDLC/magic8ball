import randomcolor from "randomcolor"

const advice = [
    "if you're good at something, never do it for free",
    "do, or do not. There is no try.",
    "It's what you do right now that makes a difference",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience",
    "You know what the trouble about real life is? There's no danger music.",
    "Idk but a bean and cheese burrito would probably solve at least one of your problems"
]

const btn = document.getElementById("advice-btn")
const adviceText = document.getElementById("advice-display")

btn.addEventListener("click", displayAdvice)

function displayAdvice {
    console.log('beeeep')
}