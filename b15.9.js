var hocsinh={
    firstname:"tran",
    lastname:"khang",
    fullname: function(){
      return  this.firstname+" "+this.lastname
    }
}
hocsinh.tuoi=18;
console.log(hocsinh.fullname(),hocsinh.tuoi);