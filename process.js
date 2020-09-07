var data;
var dataCpy;
var showBox = document.getElementById("showBox");

function load(id) {
  showBox.innerHTML = "";
  data = document.getElementById(id);
  dataCpy = data.cloneNode(true);
  dataCpy.style.display = "contents";
  dataCpy.id = "cpyNode";
  showBox.appendChild(dataCpy);
}
