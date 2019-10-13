function loveYou(){
    var person1 = document.forms["twoPerson"]["person1"].value;
    var person2 = document.forms["twoPerson"]["person2"].value;
    var answer = person1+" love "+person2
    document.getElementById("love").value = answer;
    return false
}

function binary(){
    var num = 69
    var i = 0
    while (num != 1,0){
        num /= 2;
        console.log(num);
    }
}