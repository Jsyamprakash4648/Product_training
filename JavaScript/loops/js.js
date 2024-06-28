var num=10;
console.log("using for loop");
for(var i=0;i<num;i++)
    {
        if(i==2) continue;
        console.log(i);
    }

// while loop 
console.log("using for while loop");

var str=["syam","vincent","siva"];

var i=0;
while(i<str.length)

    {
        if(str[i]=="siva") break;
        console.log("key: "+i+" value: "+str[i]);
        i++;
    }


console.log("using do while loop");
var num=["a","b","c","d","e"];

var b=0;
do{
    console.log(str[b]);
    b++;
}while(b<str.length);