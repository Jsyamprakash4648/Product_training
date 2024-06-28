function add()
{
    var disk=document.getElementById("key").value;
    var disval=document.getElementById("value").value;

    var key=sessionStorage.setItem(disk);

    display(disk);

}

function display(disk)
{
    
    var d=document.getElementById("displayDiv");
    var t=sessionStorage.getItem(key);

    d.innerHTML="your key is "+disk+"and value is"+t;
}