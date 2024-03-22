var a=[2,2];
var b=[3,1];
function vectorAdd(a,b){
    for(let i in a)
        a[i]+=b[i];
    return a;
}
console.log(vectorAdd(a,b));