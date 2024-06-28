export{}
let m="hi how r u?";

console.log(m);

// let x=10;
// let x=8;
// //which means once we declare then we can change the value but connot decalre same again
// const s="syam";
// const s;//same but it must need decalarations values


let name:string="syam";

let sen:string=`my name is ${name} i am begginer of ts`;

console.log(sen);

let arr: number[]=[1,2,3,4];
console.log(arr[2]);

let list2:Array<number>=[1,2,3,4];


enum Colors{readonly,blue,green}

let fav:Colors=Colors.blue



//funstions

function add(number1:number,number2:number):number
{
    return number1+number2;
}

add(2,32);


//object

function fullname(person:{fname:string,lname:string})
{
    console.log(`${person.fname} and ${person.lname}`);
}

let p={fname:"syam",lname:"prakash"};
fullname(p);

class employee{
     ename:string;
     ennum:number;
    constructor(name:string,num:number)
    {
        this.ename=name;
        this.ennum=num;

    }

    greet()
    {
        console.log(`hi hw ${this.ename}`)
    }

}

let e=new employee("syam",961789);
console.log(e.ename);
e.greet();

let n:boo