const body = document.body;
const darkModeBtn = document.getElementById("dark-mode-button");

function ModeEvent(event) {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    const btn = event.target;
    if (btn.value == "Dark Mode") btn.value = "Light Mode";
    else btn.value = "Dark Mode";
}

function createBtn() {
    darkModeBtn.value = "Dark Mode";
    darkModeBtn.addEventListener("click", ModeEvent);
}

function init() {
    createBtn();
    body.classList.add("light-mode");
}

init();