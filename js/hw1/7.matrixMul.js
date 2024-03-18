var a=[[1,-2,-7],
       [7, 7, 7],
       [-5,9, 6]];
var b=[[2, 1],
       [3,-5],
       [4, 8]];
var c =[[0,0],[0,0],[0,0]];
//var c= new Array(a.length).fill(0).map(() => new Array(b[0].length).fill(0)); by Copliot
function matrixMul(a,b){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<b[0].length;j++){
            for(let k=0;k<a[0].length;k++){
                c[i][j]=c[i][j]+a[i][k]*b[k][j];
            }
        }
    }
   return c;
}

console.log(matrixMul(a,b));