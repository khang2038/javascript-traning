function nhan(a,b){
    return a*b;
}
function chia(a,b){
    return a/b
}
function cong(a,b){
    return a+b
}
function tru(a,b){
    return a-b
}

function maytinh(x,y,callback){
    return callback(x,y);
}

const nhanResults1= maytinh(2,4,nhan);
const nhanResults2= maytinh(2,6,nhan);
const chiaResults= maytinh(2,4,chia);

console.log(`nhan1:${nhan1} nhan2:${nhan2} chia:${chiaResults}`);