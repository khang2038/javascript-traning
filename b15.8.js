var arr=[1,5,7,8,9,15,8];
var dem8=0;
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        console.log(i,"la so chan");
    }else{
        console.log(i,"la so le");
    }
    if(i==8){
        dem8++;   
    }
    if((i==5)||(i>5)){
        console.log(i);
    }
}
console.log("tong",arr[1]+arr[2]+arr[3]);
var n=arr.length;
console.log("tong cuoi",arr[n-1]+arr[n-2]+arr[n-3]);