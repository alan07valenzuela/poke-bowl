const ingredientsChoosers = document.querySelectorAll(".poke-ingredient");
const contactUs = document.querySelector("#contact-us");
const pronunciationButton = document.querySelector("#pronunciation-sound");

ingredientsChoosers.forEach((element) => element.addEventListener("mouseover", showIngredients));
ingredientsChoosers.forEach((element) => element.addEventListener("mouseout", hideIngredients));
contactUs.addEventListener("click", alertPhoneNumber);
pronunciationButton.addEventListener("click", playProunciation);

function showIngredients() {
    this.querySelector(".ingredients").removeAttribute("hidden");
}
function hideIngredients() {
    this.querySelector(".ingredients").setAttribute("hidden", "");
}
function alertPhoneNumber() {
    alert("Call us at 555-5555");
}
function playProunciation() {
    const audio = new Audio("assets/poke.mp3");
    audio.play();
}
