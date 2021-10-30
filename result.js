document.getElementById("name").innerHTML=document.getElementById("name").innerText+localStorage.getItem("name");
var result=0;
if(localStorage.getItem("A1")=="AryaBhatt"){
    result++;
}
if(localStorage.getItem("A2")=="India"){
    result++;
}
if(localStorage.getItem("A3")=="Shakuntala Devi"){
    result++;
}
if(localStorage.getItem("A4")=="Rabindranath Tagore"){
    result++;
}
if(localStorage.getItem("A5")=="Hockey"){
    result++;
}
if(localStorage.getItem("A6")=="Brazil"){
    result++;
}
if(localStorage.getItem("A7")=="Thomas Alva Edison"){
    result++;
}
if(localStorage.getItem("A8")=="Wireless fidelity"){
    result++;
}
if(localStorage.getItem("A9")=="12"){
    result++;
}
if(localStorage.getItem("A10")=="dr.A.P.J Abdul kalam"){
    result++;
}
if(result>=5)
{
    document.getElementById("desc").innerHTML="Well Done..<br>You have successfully passed the test.<br>";
    document.getElementById("status").innerHTML="Passed";
    document.getElementById("status").style.color="Green";
}
else{
    document.getElementById("desc").innerHTML="Hard Luck..<br>You need to work on your General Knowledge.<br>";
    document.getElementById("status").innerHTML="Failed";
    document.getElementById("status").style.color="Red";

}
document.getElementById("score").innerHTML=document.getElementById("score").innerText+result;
console.log(result);