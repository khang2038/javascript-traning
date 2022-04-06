const obj={};
Object.defineProperty(obj,"reset",{
    get : function(){
        this.counter=0;
    }
});
Object.defineProperty(obj,"increment",{
    get : function(){this.counter++;}
});
Object.defineProperty(obj,"decrement",{
    get : function(){this.counter--;}
});
Object.defineProperty(obj,"add",{
    set : function(value) {this.counter+=value;}
});
