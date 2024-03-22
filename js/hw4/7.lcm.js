var a=30,b=50
function lcm(a,b){
    if(a%b==0)
        return b;
    else
        return lcm(b,a%b);
}

console.log(a*b/lcm(a,b));