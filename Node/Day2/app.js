console.log("start");


setTimeout(()=>{
    A=()=>{
        console.log("Async Task - 1");
        process.nextTick((X=()=>{
            console.log("nextTick - 2");
        }),0)
    }
},0);

setTimeout(
  (B = () => {
    console.log("Async Task-2");
  }),
  2000,
);


setImmediate(()=>{
    E=()=>{
        console.log("Imeediate check task.");
        
    }
})

process.nextTick(()=>{
    C=()=>{
        console.log("nextTick -1");
    }

    setTimeout((Y=()=>{
        console.log("Y function");
        
    }))

    
})