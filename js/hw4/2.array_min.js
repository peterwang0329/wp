var a=[55,24,22,18,15,17,19]
function array_min(a){
    var c=a[0];
    for(let i in a)
        if(c>a[i])
            c=a[i];
    return c;
}
console.log(array_min(a))