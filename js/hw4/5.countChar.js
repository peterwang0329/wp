var abc="Hello vedal987!"
var count=[],char=[],a=1,counter=0;
function countChar(str){
    for(let i in str){
        let set=str[i];
        for(let j in count){
            if(set==char[j]){
                a=0
                count[j]++
            }
        }
        if(a==1){
            count[counter]=1
            char[counter]=abc[i]
            counter++
        }
        else
            a=1;
    }
    for(let i in count){
        console.log(char[i]+':'+count[i])
    }
}

countChar(abc);