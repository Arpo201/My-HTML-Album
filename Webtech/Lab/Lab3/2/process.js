function verify(){
    let F001 = document.forms["myForm"]["F001"].value;
    let F002 = document.forms["myForm"]["F002"].value;
    let F003 = document.forms["myForm"]["F003"].value;
    let F004 = document.forms["myForm"]["F004"].value;
    let F005 = document.forms["myForm"]["F005"].value;
    let F006 = document.forms["myForm"]["F006"].value;
    let F007 = document.forms["myForm"]["F007"].value;
    let F008 = document.forms["myForm"]["F008"].value;
    let F009 = document.forms["myForm"]["F009"].value;
    let F010 = document.forms["myForm"]["F010"].value;
    
    //1
    if(F001.length != 13 | isNaN(F001)){
        alert("กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง");
        return false;
    }

    //2
    if(F002 == "0"){
        alert("กรุณาเลือกคำนำหน้านาม");
        return false;
    }

    //3
    if(F003.length < 3 | F003.length > 20){
        alert("กรุณากรอกชื่อให้ถูกต้อง");
        return false;
    }

    //4
    if(F004.length < 3 | F004.length > 30){
        alert("กรุณากรอกนามสกุลให้ถูกต้อง");
        return false;
    }

    //5
    let numEnter = 0;
    let numLine1 = 0;
    let numLine2 = 0;
    if(F005.length > 0){
        numEnter++;
        for (i = 0; i < F005.length; i++){
            if (F005[i] === '\n' || F005[i] === '\r') numEnter++;
        }
        if(numEnter != 2){
            console.log("numEnter: " + numEnter);
            alert("กรุณากรอกที่อยู่ให้ถูกต้อง");
            return false;
        }
        for (i = 0; i < (F005.length)+1; i++){
            numLine2++;
            if (F005[i] === '\n' || F005[i] === '\r'){
                numLine2--;
                numLine1 = numLine2;
                numLine2 = 0;
            }
        }
        numLine2--;
        if(numLine1 < 5 | numLine2 < 5){
            alert("กรุณากรอกที่อยู่ให้ถูกต้อง");
            return false;
        }
    }else{
        console.log("numEnter: " + numEnter);
        alert("กรุณากรอกที่อยู่ให้ถูกต้อง");
        return false;
    }

    //6
    if(F006.length < 2 | !isNaN(F006)){
        alert("กรุณากรอกตำบลหรือแขวงให้ถูกต้อง");
        return false;
    }

    //7
    if(F006.length < 2 | !isNaN(F007)){
        alert("กรุณากรอกอำเภอหรือเขตให้ถูกต้อง");
        return false;
    }

    //8
    if(F008 == "0"){
        alert("กรุณาเลือกจังหวัด");
        return false;
    }

    //9
    if(F009.length != 5 | isNaN(F009)){
        alert("กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง");
        return false;
    }

    //10
    if(F010.length < 9 | F010.length > 10 | isNaN(F010)){
        alert("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
        return false;
    }
}
