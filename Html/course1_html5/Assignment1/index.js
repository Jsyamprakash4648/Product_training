function DisplayDetails()
{
    
    let name=document.getElementById("inputname").value;
    let mail=document.getElementById("inputmail").value;
    let number=document.getElementById("inputnumber").value;

    let url=document.getElementById("inputurl").value;

    let text=document.getElementById("inputtext").value;


    // let Arr=[name,mail,number,url,text];
    // var key=sessionStorage.length+1;


    sessionStorage.setItem('name2',name);
    sessionStorage.setItem('mail2',mail);
    sessionStorage.setItem('number2',number);
    sessionStorage.setItem('url2',url);
    sessionStorage.setItem('text2',text);
    adding();

    // name.innerHTML="";
    // mail.innerHTML="";
    // number.innerHTML="";
    // url.innerHTML="";
    // text.innerHTML="";


}
function adding()
{
    let div1=document.getElementById("second_div");
    // div1.innerHTML="";

    let name3=sessionStorage.getItem('name2');
    let mai3=sessionStorage.getItem('mail2');
   let number3= sessionStorage.getItem('number2');
   let url3= sessionStorage.getItem('url2');
   let text3= sessionStorage.getItem('text2');




    div1.innerHTML+="We have received: <br><br>name : "+name3+"<br><br> Emial Address: "+mai3+"<br><br>Phone: "+number3+"<br><br> website: "+url3+"<br><br>Message: "+text3+"<br>";

//    for(var i=1;i<sessionStorage.length;i++)
//     {
      
//         div1.innerHTML+="<div>We have received: <br><br>name : "+name3+"<br><br> Emial Address: "+mai3+"<br><br>Phone: "+number3+"<br><br> website: "+url3+"<br><br>Message: "+text3+"</div>";

//     }
  
let v=document.getElementById("form1").reset();




}