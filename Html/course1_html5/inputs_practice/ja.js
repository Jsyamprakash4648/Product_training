function dofirst()
{
    const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(175,75);
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.stroke();
}



function dosecond()
{
    const c = document.getElementById("canvas2");
const ctx = c.getContext("2d");

// Create linear gradient
const grad=ctx.createLinearGradient(10,10, 200,0);
grad.addColorStop(0, "orange");
grad.addColorStop(1, "darkred");

// Fill rectangle with gradient
ctx.fillStyle = grad;
ctx.fillRect(10,10, 280,130);
}
function twothings()
{
    dofirst();
    dosecond();
    textshadow();

}


function textshadow()
{
    let A=document.getElementById('canvas3');
    canvas3=A.getContext('2d');

    canvas3.shadoOffSetX=4;
    canvas3.shadowOffSetY=4;
    canvas3.shadowBlur=6;
    canvas3.shadowColor='rgba(0,0,225,0.5)';



    canvas3.font="bold 36px Tohoma";
    canvas3.textAlign="end";
    canvas3.fillText("hi this is example for text in shadowing in canvas",500,100);







}



// var X=document.getElementById("button1");
// X.addEventListener('onclick',add,false);

// function add()
// {
//     var disk=document.getElementById("key").value;
//     var disval=document.getElementById("value").value;

//     var c=sessionStorage.setItem(disk);

//     display(disk);
// }

// function display(disk)
// {
    
//     var d=document.getElementById("displayDiv");
//     var t=sessionStorage.getItem('c');

//     d.innerHTML="your key is "+d+"and value is"+t;
// }

function add()
{
    var disk=document.getElementById("key").value;
    var disval=document.getElementById("value").value;

    var c=sessionStorage.setItem('key',disk);

    display(key);

}

function display(disk)
{
    
    var d=document.getElementById("displayDiv");
    var t=sessionStorage.getItem(key);

    d.innerHTML="your key is "+d+"and value is"+t;
}




window.addEventListener('load',twothings(),false);



