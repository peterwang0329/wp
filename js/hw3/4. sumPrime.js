var x=0;
var n=20;
function isprime(n){
    for(let i=2;i<n;i++)
        if(n%i==0)
            return false;
    return true;
}
for(let i=2;i<n;i++){
    if(isprime(i))
        x+=i;
    else
        continue;
}
console.log(x);