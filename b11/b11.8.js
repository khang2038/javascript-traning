let x="";
const myobj={
    name:"tran",
    age:30,
    cars:[
        {name:"ford",models:["fiesta","forcus","Mustang"]},
        {name:"BWM",models:["320","X3","X5"]},
        {name:"Fiat",models:["500","panda"]}
    ]
};
for(let i in myobj.cars){
    x+="<h2>"+myobj.cars[i].name+"</h2>";
    for(let j in myobj.cars[i].models){
        x+=myobj.cars[i].models[j]+"<br>"
    }
}