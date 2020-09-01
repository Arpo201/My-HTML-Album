function collapse(i) {
  var coll = document.getElementsByClassName("mark");
  if (coll[i].innerHTML == "+") {
    coll[i].innerHTML = "-";
  } else {
    coll[i].innerHTML = "+";
  }
}
