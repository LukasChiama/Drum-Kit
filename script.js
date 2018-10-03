document.addEventListener("keydown", (e) => { 
  const a = document.getElementById(`${e.keyCode}`);
  a.currentTime = 0;
  a.play()

  for (i = 0; i < 9; i++) {
    if (document.getElementsByClassName("key")[i].getAttribute("data-key") === `${e.keyCode}`) {
       return document.getElementsByClassName("key")[i].setAttribute("class", "playing");
    }
  }
})

document.addEventListener("keyup", (e) => {
  for (i = 0; i < 9; i++) {
    if (document.getElementsByClassName("playing")[i].getAttribute("data-key") === `${e.keyCode}`) {
      return document.getElementsByClassName("playing")[i].setAttribute("class", "key");
    }
  }
})