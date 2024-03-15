function isPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0)
            return false;
    }
    return true;
}
function printPrime(n){
    if(isPrime(n))
        console.log("3. ",n,"is prime");
    else
        console.log("3. ",n,"isn't prime");
}
printPrime(19);
