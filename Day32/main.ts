
let s :string[]=["a","b","c"];
let a :(number|string)[]=[1,2,3];
 a.push("hello")
                              //objects

const users={
    name:"swechchha",
    age:21
}
// user.name = 4

interface User {
    name:string,
    age:number
}
let user:User = {
    name: "John",
    age: 30,
}

 console.log(user);

       

 class App{
     printHello(){
         console.log("hello");
     }
 }       
 const app = new App();
 app.printHello()

 let uusername : string | null = "";
 console.log(uusername);
     

 type Door = "open" | "close";
 let door:Door= "open";
 console.log(door);

 let aa:any;
aa=10
aa="namaste"
aa=false
console.log(aa);


//function



function add(a,b)
{
    return a+b

}
console.log(add(1,2));
console.log(add(1,"2"));


  export {}