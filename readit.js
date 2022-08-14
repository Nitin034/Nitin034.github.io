const alert = (e) => {
    window.alert("Currently I'm working on this");
    }

    const buttons = document.getElementsByClassName("readit");
    for (const btn of buttons) {
     btn.addEventListener("click", alert);
      }