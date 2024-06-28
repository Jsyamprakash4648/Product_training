window.addEventListener('load',display);




const container = document.querySelector(".logodiv")
const canvas = document.querySelector("#logocanvas");
const context = canvas.getContext("2d");
canvas.width = 155;
canvas.height = 150;
context.fillStyle="white";



 

 
 
var i =0;

 

 
function display()
{  
    setInterval(draw,100);  
}
 
function draw()
{
    i++;
    switch(i)
    {
        case 1:
        {
            context.fillRect(20,90,30,30);
            container.style.transform = 'rotate(-10deg)';
            break;
        }
        case 2:
        {
            context.fillRect(20,55,30,30);
            container.style.transform = ' rotate(-20deg)';
            break;
        }
        case 3:
        {
            context.fillRect(20,20,30,30);
            container.style.transform = ' rotate(-30deg)';
            break;
        }
        case 4:
        {
            context.fillRect(55,90,30,30);
            container.style.transform = ' rotate(-40deg)';
            break;
        }
        case 5:
        {
            context.fillRect(55,55,30,30);
            container.style.transform = 'rotate(-50deg)';
            break;
        }
        case 6:
        {
            context.fillRect(55,20,30,30);
            container.style.transform = 'rotate(-60deg)';
            break;
        }
        case 7:
        {
            context.fillRect(90,90,30,30);
            container.style.transform = ' rotate(-70deg)';
            break;
        }
        case 8:
        {
            context.fillRect(90,55,30,30);
            container.style.transform = ' rotate(-80deg)';
            break;
        }
        case 9:
        {
            context.fillRect(90,20,30,30);
            container.style.transform = 'rotate(-0deg)';
            break;
        }
        case 10:
        {
            context.clearRect(90,20,30,30)
            context.translate(100,5);
            context.rotate(Math.PI /4);
            context.fillRect(10,-10,30,30);
            //context.rotate(Math.PI /4);
            setInterval(generateText,500)
            
            break;    
        }
               
    }
}


function generateText()
{

    const A=document.getElementById("syncfusionname");
    const canvas2=A.getContext("2d");
    canvas2.width=2000;
    canvas2.font="bold 50px Tahoma";
    canvas2.fillStyle="white"
    canvas2.fillText("Syncfusion",1,120);
    setInterval(message,300);
}

// 

function message() {
    const b = document.getElementById("Quote");
    const canvas3 = b.getContext("2d");
    canvas3.width = 400;
    canvas3.height = 50;
    canvas3.font = "bold 20px Helvetica";
    canvas3.fillStyle = "white";
    const text = "Deliver innovation with ease";
    let index = 0;
    function animateText() {
        
        canvas3.fillText(text.substring(0, index), 0, 25); 
        index++;
        if (index <= text.length) {
            setTimeout(animateText, 50); 
        }
    }
    animateText();
}


 
 

 
