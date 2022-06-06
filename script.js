const hamButton = document.getElementById("hamButton");
const mobNav = document.getElementById('mobNav')
hamButton.addEventListener('click', hamOpen);
function hamOpen() {
    mobNav.classList.toggle('hidden')
    mobNav.classList.toggle('flex')

}
