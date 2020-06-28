function myName(){
    console.log("Ping");
}
function say(what){
    what();
}
say(myName);
// Ping



function say(){
    return function myName(){
        console.log("ping");
    }
}

var nameFn = say();
nameFn(); 
//ping