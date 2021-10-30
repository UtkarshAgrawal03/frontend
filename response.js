function save(){
    var obj=new Object();
    var name=document.getElementById("name").value;
    console.log(name);
    if(name=="")
    {
        alert("Please Enter your name and Submit Again");
    }
    else{
        localStorage.setItem("name",name);
    }
    //Saving responses;
   if(document.querySelector('input[name="Q1"]:checked')==null||
   document.querySelector('input[name="Q2"]:checked')==null||
   document.querySelector('input[name="Q3"]:checked')==null||
   document.querySelector('input[name="Q4"]:checked')==null||
   document.querySelector('input[name="Q5"]:checked')==null||
   document.querySelector('input[name="Q6"]:checked')==null||
   document.querySelector('input[name="Q7"]:checked')==null||
   document.querySelector('input[name="Q8"]:checked')==null||
   document.querySelector('input[name="Q9"]:checked')==null||
   document.querySelector('input[name="Q10"]:checked')==null)
   {
    alert("Please answer all and Submit Again");
   }
   else
   {
   /* obj.Q1=document.querySelector('input[name="Q1"]:checked').value;
    obj.Q2=document.querySelector('input[name="Q2"]:checked').value;
    obj.Q3=document.querySelector('input[name="Q3"]:checked').value;
    obj.Q4=document.querySelector('input[name="Q4"]:checked').value;
    obj.Q5=document.querySelector('input[name="Q5"]:checked').value;
    obj.Q6=document.querySelector('input[name="Q6"]:checked').value;
    obj.Q7=document.querySelector('input[name="Q7"]:checked').value;
    obj.Q8=document.querySelector('input[name="Q8"]:checked').value;
    obj.Q9=document.querySelector('input[name="Q9"]:checked').value;
    obj.Q10=document.querySelector('input[name="Q10"]:checked').value;*/
    localStorage.setItem("A1",document.querySelector('input[name="Q1"]:checked').value);
    localStorage.setItem("A2",document.querySelector('input[name="Q2"]:checked').value);
    localStorage.setItem("A3",document.querySelector('input[name="Q3"]:checked').value);
    localStorage.setItem("A4",document.querySelector('input[name="Q4"]:checked').value);
    localStorage.setItem("A5",document.querySelector('input[name="Q5"]:checked').value);
    localStorage.setItem("A6",document.querySelector('input[name="Q6"]:checked').value);
    localStorage.setItem("A7",document.querySelector('input[name="Q7"]:checked').value);
    localStorage.setItem("A8",document.querySelector('input[name="Q8"]:checked').value);
    localStorage.setItem("A9",document.querySelector('input[name="Q9"]:checked').value);
    localStorage.setItem("A10",document.querySelector('input[name="Q10"]:checked').value);

    window.location.assign("file:///C:/Users/Utkarsh/review.html");
}
   

   
  // obj.Q2=document.querySelector('input[name="Q2"]:checked').value;
   
  /*  */
   
    console.log(obj);
}