
const alert = (e) => {
    window.alert("Currently I'm working on it");
}

const buttons = document.getElementsByClassName("popup");
for (const btn of buttons) {
    btn.addEventListener("click", alert);
}