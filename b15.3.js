function truoc(callback){
    setTimeout(function(){
        console.log("la task 1");
        callback();
    },2000);
}

function sau(){
    setTimeout(function(){
        console.log("la task 2");
    },1000);
}

console.log("la task 3")

truoc(sau)