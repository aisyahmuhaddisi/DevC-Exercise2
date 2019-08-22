function hasil(){
    var angka1 = document.querySelector(".number1").value;
    var angka2 = document.querySelector(".number2").value;
    var kalkulator = document.querySelector(".kalkulator").value;
    var total=0; 
    console.log(typeof angka1)
    console.log(kalkulator)
    if(kalkulator=="+"){
        total = Number(angka1) + Number(angka2);
    }
    else if(kalkulator=="-"){
        total = Number(angka1) - Number(angka2);
    }
    else if(kalkulator=="*"){
        total = Number(angka1) * Number(angka2);
    }
    else if(kalkulator==":"){
        total = Number(angka1) / Number(angka2);
    }
    document.querySelector(".hasil").innerHTML= total;
}