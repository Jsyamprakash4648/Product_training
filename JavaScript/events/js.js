function funshoww()
{
    if(confirm("are u sure u want ton cinform ...?"))
        {
            alert("you selected yes to form submitting ");

            let d=Number(prompt("enter numerator? "));
            let n=Number(prompt("enter denominator ? "));
            return true
        }
    else
    {
        alert("u choosen cnacel so form not submitting ");
        document.getElementById("btn").style.background="red";
    }

   
}