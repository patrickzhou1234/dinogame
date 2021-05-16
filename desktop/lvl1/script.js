document.addEventListener('contextmenu', event => event.preventDefault());
window.addEventListener("keydown", jumpcharacter, false); 
score = 0
restartcounter = 0
function resize() {
  document.getElementById("character").style.width = window.innerHeight/4 + 'px';
  document.getElementById("character").style.height = window.innerHeight/4 + 'px';
  document.getElementById("character").style.top = window.innerHeight/4 + 'px';
  document.getElementById("cactus").style.width = window.innerHeight/16 + 'px';
  document.getElementById("cactus").style.height = window.innerHeight/8 + 'px';
  document.getElementById("cactus").style.top = window.innerHeight/2 - window.innerHeight/8 + 'px';
  document.getElementById("ground").style.borderLeft = window.innerWidth + 'px solid green';
  document.getElementById("ground").style.top = window.innerHeight/2 + 'px';
}

setInterval(function() {
  var dinotop = document.getElementById("character").offsetTop;
  var cactusleft = document.getElementById("cactus").offsetLeft;
  var dinodim = window.innerHeight/4;
  var cactusheight = (window.innerHeight/2 - window.innerHeight/8) - window.innerHeight/4;
  var cactusmaxwidth = window.innerHeight/16;
  if (cactusleft<dinodim && cactusleft>-cactusmaxwidth && dinotop>cactusheight) {
    var cactuslastfound = document.getElementById("cactus").offsetLeft;
    document.getElementById("cactus").style.animation = "none";
    document.getElementById("deadaudio").play();
    document.getElementById("cactus").style.left = cactuslastfound + 'px';
    document.getElementById("character").setAttribute("src", "https://rb.gy/iudwjq")
    document.getElementById("gameover").style.display = "block"
    document.getElementById("restartbutton").style.display = "block";
  } else if (score<1000) {
    ++score;
    document.getElementById("score").innerHTML = score;
  } else {
    document.getElementById("cactus").style.animation = "none";
    document.getElementById("reachedaudio").play();
    document.getElementById("cactus").remove();
    document.getElementById("door").style.display = "block";
    document.getElementById("pass").style.display = "block";
    document.getElementById("character").setAttribute("src", "https://rb.gy/cgmm10");
  }
}, 10)

function jumpcharacter(event) {
  if (event.keyCode == "32") {
    if (document.getElementById("character").getAttribute("src") == "https://rb.gy/iudwjq") {
      return;
    } else if (restartcounter>0 && score == "0") {
      return;
    } else if (document.getElementById("nextlevel").style.display == "block") {
      return;
    } else if (document.getElementById("door").style.display == "block") {
      document.getElementById("character").setAttribute("src", "https://rb.gy/ozinc2");
      document.getElementById("character").classList.add("dinotodoor");
      setTimeout(dinostopmove, 3000);
    } else {
      document.getElementById("character").classList.add("animate");
      document.getElementById("jumpaudio").play();
      setTimeout(removejump, 600);
    }
  } else if (event.keyCode == "13" && document.getElementById("restartbutton").style.display == "block") {
    restart()
  } else {
    return;
  }
}

function dinostopmove() {
  document.getElementById("character").setAttribute("src", "https://rb.gy/cgmm10");
  document.getElementById("nextlevel").style.display = "block";
}

function removejump() {
  document.getElementById("character").classList.remove("animate");
}

function restart() {
  restartcounter+=1
  score = 0;
  document.getElementById("gameover").style.display = "none";
  document.getElementById("restartbutton").style.display = "none";
  document.getElementById("cactus").style.left = (window.innerHeight - window.innerHeight/16)+ "px";
  document.getElementById("cactus").style.animation = "cactusmove 1s infinite linear";
  document.getElementById("character").setAttribute("src", "https://rb.gy/ozinc2");
}
