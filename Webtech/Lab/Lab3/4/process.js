function spin(){
    var topL = document.getElementById("box1").innerHTML;
    var topR = document.getElementById("box2").innerHTML;
    var botL = document.getElementById("box3").innerHTML;
    var botR = document.getElementById("box4").innerHTML;
    document.getElementById("box1").innerHTML = botL;
    document.getElementById("box1").style.backgroundImage = botL;
    document.getElementById("box2").innerHTML = topL;
    document.getElementById("box2").style.backgroundImage = topL;
    document.getElementById("box3").innerHTML = botR;
    document.getElementById("box3").style.backgroundImage = botR;
    document.getElementById("box4").innerHTML = topR;
    document.getElementById("box4").style.backgroundImage = topR;
}