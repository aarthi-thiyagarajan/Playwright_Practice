//Variables & data types
let isactive:boolean=true;
let haspermission:boolean=false;
let rank:number=34;
let colour:string="purple";

let ranking:any=34;
ranking="thirty four";

//Arrays
let names:string[]=["aarthi","jagan","chezhiyan"];
names.push("Rathi");
let nameout:string=names[0];
console.log(nameout);
console.log(names);

//Tuples
let ourtuple:[number, boolean, string];
ourtuple=[3,false,"stringvalue"];

//Objects
const car:{model:string, nameplate:number, isactive:boolean} = { model:"BMW", nameplate:2345, isactive:true};
car.isactive=false;
console.log(car);

//with optional properties
const cars:{model:string, year?:number}={model:"bmw"};
console.log(cars)

//interface
interface Rectangle{
    width:number,
    height:number
}
const objectgiven:Rectangle={
    width:20,
    height:79
}
//Functions
const whatobject=():void=>{
    console.log("arrowfunction")
}
function gettime():void{

}
function getstime():number{
    return new Date().getTime();
}
function multiply(a:number, b:number):number{
    return a*b;
}
//conditional statements
let a:number = 2;
let b:number = 3;
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("b is greater than a")
}
//loops
for(let i=0;i<10;i++){
   console.log(i+1)
}

//classes & objects
class Shapes{
    public funcshape=():void=>{
        console.log("shapes")
    }
}
const objectclass = new Shapes()
objectclass.funcshape();

//Constructor
class Person{
    name:string
    constructor(name:string){
        this.name=name
    }
    getname=():string=>{
        return this.name
    }
}
const objperson= new Person("jony")
objperson.getname()

//Async & Await

