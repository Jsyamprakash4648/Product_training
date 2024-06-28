var cars=["audi","scoda","verna"];

for(var i=0;i<cars.length;i++)
    {
        console.log(cars[i]);
    }



    // type 2
cars.push("benze");
for(var i=0;i<cars.length;i++)
    {
        console.log(cars[i]);
    }

//type 1
    var obj={
        name:"syam",
        age:23,
        gender:"male"

    }

    console.log(obj.name);

//type2

function carss(name,age,gender)
{
    this.age=age;
    this.name=name;
    this.gender=gender;
    this.Add=function(a,b)
    {
        var c=a+b;
        return c;
        
    }
}


