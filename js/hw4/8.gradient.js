//var f = 2*x*x + 3*y*y + z*z
var h=0.01;  //求極限
var graf=[];
function gradient(f, p){    //f為方程式,p為座標
    for(let i in p){
        p[i]+=h;
        let j=f(p);
        p[i]-=h;
        graf[i] =(j-f(p))/h;   //graf為梯度 公式: graf = lim(f(x+h)-f(x))/h ,即 x 的偏微分,若有y,則將 x 改為 y 即可
        
    }
    return graf;
}
function f(p){
    return 2*p[0]*p[0] + 3*p[1]*p[1]+ p[2]*p[2]; //p=[x, y, z]
}

var p=[1,2,1];
console.log(gradient(f,p)); //f為方程式,p為座標