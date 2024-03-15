console.log("Hello 你好");


function printOdd(n) {
    for(let i=1;i<=n;i+=2){
        console.log("i=",i);
    }
}
printOdd(7);

function isPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0)
            return false;
    }
    return true;
}
function printPrime(n){
    if(isPrime(n))
        console.log(n,"is prime");
    else
        console.log(n,"isn't prime");
}
printPrime(19);