// const pics=[
//     {url:"",caption:'Rice'},
//     {URL:'',caption:'Coconut'},
// ]
var images = ["images/brinjal.jpg", "images/coconut.jpg", "images/onion images.jpg", "images/sugar.jpg", "images/tea.jpg", "images/turmericpowder.jpg", "images/rice.jpg", "images/tomato.jpg", "images/cucumber.jpg", "images/carrot.jpg"];
var captions = ["Brinjal", "Cococnut", "Onions", "Sugar", "Lemon Tea", "Turmeric", "Rice", "Tomato", "Cucumber", "Carrot"];
// export{}
//const images=["images/rice.jpg","images/coconut.jpg","images/onion images.jpg","images/sugar.jpg","images/tea.jpg","images/turmericpowder.jpg","images/brinjal.jpg","images/tomato.jpg","images/cucumber.jpg","images/carrot.jpg"];
//const captions=["Rice","Coocnut","Onions","Sugar","Lemon Tea","Turmeric","Brinjal","Tomato","Cucumber","Carrot"];
var currentindex = 0;
var currentimage = document.getElementById("images12");
var currentcaption = document.getElementById("cap");
function rightarrowfun() {
    currentindex++;
    if (currentindex == images.length) {
        currentindex = 0;
        currentimage.src = images[currentindex];
        currentcaption.innerHTML = captions[currentindex];
    }
    else {
        currentimage.src = images[currentindex];
        currentcaption.innerHTML = captions[currentindex];
    }
}
function leftarrowfun() {
    currentindex--;
    // currentimage.src=images[currentindex];
    // currentcaption.innerHTML=captions[currentindex];
    if (currentindex < 0) {
        currentindex = images.length - 1;
        currentimage.src = images[currentindex];
        currentcaption.innerHTML = captions[currentindex];
    }
    else {
        currentimage.src = images[currentindex];
        currentcaption.innerHTML = captions[currentindex];
    }
}
