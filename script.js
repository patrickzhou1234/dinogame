document.addEventListener('contextmenu', event => event.preventDefault());
function check() {
  if (window.innerHeight > window.innerWidth) {
      alert("Visit this webpage in horizontal mode for better quality. ")
  }
}

function show() {
  if (document.getElementById("howtotext").style.display == "block") {
    document.getElementById("howtotext").style.display = "none";
    document.getElementById("howtobutton").innerHTML = "How to Play";
  } else {
    document.getElementById("howtotext").style.display = "block";
    document.getElementById("howtobutton").innerHTML = "Hide Menu";
  }
}
