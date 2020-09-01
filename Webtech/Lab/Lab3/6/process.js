function random(){
    var award = Math.floor(Math.random() * 1000000).toString(10);
    var front3 = Math.floor(Math.random() * 1000).toString(10);
    var back3 = Math.floor(Math.random() * 1000).toString(10);
    var back2 = Math.floor(Math.random() * 100).toString(10);
    document.getElementById("award").innerHTML = verifyNum(award, 6);
    document.getElementById("front3").innerHTML = verifyNum(front3, 3);
    document.getElementById("back3").innerHTML = verifyNum(back3, 3);
    document.getElementById("back2").innerHTML = verifyNum(back2, 2);
    return false;
}

function verifyNum(strNum, numDigit){
    while(strNum.length != numDigit){
        strNum = "0" + strNum;
    }
    return strNum;
}