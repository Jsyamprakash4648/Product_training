let PublishedDate;
let BName;
let Price;
let AuthoName;
let AEmail;


let flag1=false;
let flag2=false;
let flag3=false;
let flag4=false;
let flag5=false;
// let flag2;
// let flag3;
// let flag4;
// let flag5;

function checlbookname()
{
    let bname=document.getElementById("bookname").value.trim();
    let regex=/[^\d]+$/;

        if(bname=="")
        {
            document.getElementById("bookname").style.color="red";
            document.getElementById("bookname").style.border="solid 2px red";

            document.getElementById("errorbname").style.color="red";
            document.getElementById("errorbname").innerHTML="should not empty please enter values";
            flag1=false;
        }
        else if(!regex.test(bname))
        {
          
            document.getElementById("bookname").style.color="red";
            document.getElementById("bookname").style.border="solid 2px red";

         //   document.getElementById("errorbname").style.visibility="visible";
            document.getElementById("errorbname").style.color="red";
            document.getElementById("errorbname").innerHTML="Numeric values not allowed";
            flag1=false;

        }
    else if(bname.length>50)
        {
            document.getElementById("bookname").style.color="red";
            document.getElementById("bookname").style.border="solid 2px red";

            document.getElementById("errorbname").style.color="red";
            document.getElementById("errorbname").innerHTML="Book name length should not exceed 50";
            flag1=false;
        }
    


    else
    {
        document.getElementById("errorbname").innerHTML="";
        document.getElementById("bookname").style.border="";
        document.getElementById("bookname").style.color="";
        
         BName=bname;
         flag1=true;
      
        
    }


}



function checkauthoremail()
{
    let aemail=document.getElementById("Authormail").value.trim();
    let regex=/^([a-zA-z0-9\.-]+)@([a-z0-9]+)(\.[a-zA-Z]+)(.[a-z]+)?$/;

    if(aemail=="")
        {
            document.getElementById("Authormail").style.color="red";
            document.getElementById("Authormail").style.border="solid 2px red";

            document.getElementById("errorAemail").style.color="red";
            document.getElementById("errorAemail").innerHTML="should not empty please enter values";
            flag2=false;
        }

    else if(!regex.test(aemail))
        {


            document.getElementById("Authormail").style.color="red";
            document.getElementById("Authormail").style.border="solid 2px red";

            document.getElementById("errorAemail").style.color="red";
            document.getElementById("errorAemail").innerHTML="Please enter valid Email Address";
            flag2=false;

        }
        
    else
    {
        document.getElementById("Authormail").style.color="";
        document.getElementById("Authormail").style.border="";

        document.getElementById("errorAemail").style.color="";
        document.getElementById("errorAemail").innerHTML="";
         AEmail=aemail;
         flag2=true;
    }
}




function checkauthorname()
{
    let aname=document.getElementById("authorname").value.trim();
    let regex=/[^\d]+$/

     if(aname=="")
        {
            document.getElementById("authorname").style.color="red";
            document.getElementById("authorname").style.border="solid 2px red";

            document.getElementById("errorAName").style.color="red";
            document.getElementById("errorAName").innerHTML="should not empty please enter values";
            flag3=false;
        }

        else if(!regex.test(aname))
        {
            document.getElementById("authorname").style.color="red";
            document.getElementById("authorname").style.border="solid 2px red";

            document.getElementById("errorAName").style.color="red";
            document.getElementById("errorAName").innerHTML="Numeric values not allowed";
            flag3=false;
        }

        else if(aname.length>50)
            {
                document.getElementById("authorname").style.color="red";
                document.getElementById("authorname").style.border="solid 2px red";
    
                document.getElementById("errorAName").style.color="red";
                document.getElementById("errorAName").innerHTML="Author name length should not exceed 50";
                flag3=false;
            }

        else if((!/^[a-zA-Z\s]+$/.test(aname)))
            {
                document.getElementById("authorname").style.color="red";
                document.getElementById("authorname").style.border="solid 2px red";
    
                document.getElementById("errorAName").style.color="red";
                document.getElementById("errorAName").innerHTML="Special characters not allowed.";
                flag3=false;
        }



        else
        {
            document.getElementById("authorname").style.color="";
                document.getElementById("authorname").style.border="";
    
                document.getElementById("errorAName").style.color="";
                document.getElementById("errorAName").innerHTML="";

                 AuthoName=aname;
                 flag3=true;
        }
    }

function checkyear()
{

    let inputdate=document.getElementById("inputdate").value.trim();
    let regex=/^([2])([0-9])([0-9])([0-9])$/;

    if(inputdate=="")
        {
            document.getElementById("inputdate").style.color="red";
            document.getElementById("inputdate").style.border="solid 2px red";

            document.getElementById("errorPublished").style.color="red";
            document.getElementById("errorPublished").innerHTML="should not empty please enter values";
            flag4=false;
        }


   else  if(!regex.test(inputdate))
        {

            document.getElementById("inputdate").style.color="red";
            document.getElementById("inputdate").style.border="solid 2px red";

            document.getElementById("errorPublished").style.color="red";
            document.getElementById("errorPublished").innerHTML="Please enter valid Published year";
            flag4=false;
        }

    else if(inputdate>2024)
        {
            document.getElementById("inputdate").style.color="red";
            document.getElementById("inputdate").style.border="solid 2px red";

            document.getElementById("errorPublished").style.color="red";
            document.getElementById("errorPublished").innerHTML="Year should not exceed 2024";
            flag4=false;
        }
    else
    {
        document.getElementById("inputdate").style.color="";
        document.getElementById("inputdate").style.border="";

        document.getElementById("errorPublished").style.color="";
        document.getElementById("errorPublished").innerHTML="";
         PublishedDate=inputdate;
         flag4=true;
    }
}



function checkprice()
{
        
        let inptprice=Number(document.getElementById("inputprice").value.trim());
        let regex=/^\d+$/;

        if(inptprice=="")
            {
                
                document.getElementById("inputprice").style.color="red";
                document.getElementById("inputprice").style.border="solid 2px red";
    
                document.getElementById("errorprice").style.color="red";
                document.getElementById("errorprice").innerHTML="should not empty please enter values";
                flag5=false;
            }
       
     else if(!regex.test(inptprice))
            {
                
                document.getElementById("inputprice").style.color="red";
                document.getElementById("inputprice").style.border="solid 2px red";
    
                document.getElementById("errorprice").style.color="red";
                document.getElementById("errorprice").innerHTML="Alphabets values not allowed";
                flag5=false;
            }
           
        else
        {
            document.getElementById("inputprice").style.color="";
            document.getElementById("inputprice").style.border="";
    
            document.getElementById("errorprice").style.color="";
            document.getElementById("errorprice").innerHTML="";
            Price=inptprice;
            flag5=true;
        }
}

let datacount=0;
let obj={};
function savedata()
{
    let cate = document.getElementById("Categoryoptions").value;
    let a=document.getElementById("bookname").value.trim();
    let b=document.getElementById("Authormail").value.trim();
    let c = document.getElementById("authorname").value.trim();
    let d=document.getElementById("inputdate").value.trim();
    let e=Number(document.getElementById("inputprice").value.trim());
    
    
    
    // if(a=="" || flag==false)
    //     {
    //         checlbookname();
    //     }
    // else if(b=="" || flag==false)
    //     {
    //         checkauthoremail();
    //     }
    // else  if(c=="" || flag==false)
    //     {
    //         checkauthorname();
    //     }
    // else if(d=="" || flag==false)
    //     {
    //         checkyear();
    //     }
    // else if(e=="" || flag==false)
    //     {
    //         checkprice();
    //     }

        if( flag1==false || flag2==false || flag3==false || flag4==false || flag5==false)
            {
                alert("please fill the details...");
            }
    
    
    else{
         if(flag1==true && flag2==true && flag3==true && flag4==true && flag5==true){
   

              obj={
                  "BOOKNAME":BName,
                  "AUTHORNAME":AuthoName,
                  "PRICE":Price,
                 "AUTHOREMAIL":AEmail,
                 "PUBLISHEDDATE":PublishedDate,
                 "CATOGORY":cate
              };
    alert("your data have been saved succesfully");
    datacount++;

    let cv=document.getElementById("bookname").value="";
        document.getElementById("authorname").value="";
        document.getElementById("inputprice").value="";
        document.getElementById("Authormail").value="";
        document.getElementById("inputdate").value="";
        flag1=false;
        flag2=false;
        flag3=false;
        flag4=false;
        flag5=false;

        }
        //clearing data in input boxes after saving 
    }   
    
}



function showdata()
{
    if(datacount==0)
        {
            alert("no data to display");
        }
    else{
    document.getElementById("container2").style.display="block";
    document.getElementById("container2").style.marginTop="2%";
    // document.getElementById("container2").style.marginTop="2%";




    document.getElementById("bookname2").innerHTML=obj.BOOKNAME+" Book Details ";
    document.getElementById("bookname22").innerHTML=obj.BOOKNAME;
    document.getElementById("Category2").innerHTML=obj.CATOGORY;
    document.getElementById("Email2").innerHTML=obj.AUTHOREMAIL;
    document.getElementById("aname2").innerHTML=obj.AUTHORNAME;
    document.getElementById("pdate2").innerHTML=obj.PUBLISHEDDATE;
    document.getElementById("price2").innerHTML=obj.PRICE;
    }

}

function cancel()
{
    let cv=document.getElementById("bookname").value="";
    document.getElementById("authorname").value="";
    document.getElementById("inputprice").value="";
    document.getElementById("Authormail").value="";
    document.getElementById("inputdate").value="";
    document.getElementById("container2").style.display="none";
}