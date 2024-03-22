var a=[[2, 1],
       [3,-5],
       [4, 8]];
var b=[[1,-2],
       [7, 7],
       [-5,9]];
function matrixAdd(a,b){
    for(let i=0;i<2;i++)
        for(let j=0;j<3;j++)
            a[j][i]+=b[j][i];
        return a;
}
console.log(matrixAdd(a,b));