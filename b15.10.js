var arr=[2,7,11,15];
var b=[0,1,2,3];
var tknhiphan=(nums,target,num,b)=>{
    let dau=0;
    let cuoi=nums.length-1;
    let giua;
    if(nums[dau]+nums[num]==target) return b[dau];
    if(nums[cuoi]+nums[num]==target) return b[cuoi];
    while(dau<cuoi){
        giua=(dau+cuoi)/2;
        if(num!=giua&&nums[giua]+nums[num]==target) return b[giua];
        else{
            if(nums[giua]+nums[num]>target) cuoi=giua-1;
            else dau=giua+1;
        }
    }
} 
var sorts=(a,b)=>{
    let tam,tam1;
    for(let i=0;i<a.length-1;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                tam=arr[i];
                a[i]=a[j];
                a[j]=tam;

                tam1=b[i];
                b[i]=b[j];
                b[j]=tam1;
            }
        } 
    }
}
// sorts(arr,b);
sorts(arr,b);
for(let i=0;i<arr.length;i++){
    if(tknhiphan(arr,9,i,b)!=undefined){
        console.log("[",b[i],",",tknhiphan(arr,9,i,b),"]")
    }
}