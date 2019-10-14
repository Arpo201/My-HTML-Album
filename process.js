function loveYou(){
    var person1 = document.forms["twoPerson"]["person1"].value;
    var person2 = document.forms["twoPerson"]["person2"].value;
    var answer = person1+" love "+person2
    document.getElementById("love").value = answer;
    return false
}
function plusCss(){
    var a, b, c;
    a = Number(document.forms["plusForms"]["num_1"].value);
    b = Number(document.forms["plusForms"]["num_2"].value);
    c = a+b;
    document.getElementById("plus").innerHTML = c;
    return false
}
function binary(){
    var num = 69
    var str = ""
    while (num != 1,0){
        str += num%2
        num /= 2;
    console.log(str);
    }
}