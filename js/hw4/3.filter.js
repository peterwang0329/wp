var numlist = [12,17,7,9,4,5,19,13]

function filter(a, f){
    let set;
    for(let i in a){
        for(let j=0;j<i;j++){
            if(a[i]<a[j]){
                set=a[i]
                a[i]=a[j]
                a[j]=set
            }
        }
    }
    var result = "[ "
    for(let i in a){
        if(check(a,i))
            result+=a[i]+" "
    }
    return result
} 

function check(a,i){
    for(let j=2;j<a[i];j++){
        if(a[i]%j==0)
            return false
    }
    return true
}

console.log(filter(numlist,check)+"]")