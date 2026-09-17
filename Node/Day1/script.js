console.log("start");

setTimeout(()=>{
    console.log("Asyn Task-1");
    
},2000)

setTimeout(()=>{
    console.log("Async Task - 2");
},2000)

console.log("End");

function Greet(){
    console.log("hello  developer ");
    
}
const hello = Greet();

const Greet2=()=>{
    console.log("Namaste, dev");
    
}
Greet2();
