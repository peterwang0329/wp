function daysInYear(n){
    if(n%4!=0)
        return 365;
    else if(n%100!=0)
        return 366;
    else if(n%400!=0)
        return 365;
    else
        return 366;
}
console.log("1900年有"+daysInYear(1900)+"天"); //1900年
console.log("1991年有"+daysInYear(1991)+"天"); //1991年
console.log("2000年有"+daysInYear(2000)+"天"); //2000年
console.log("2004年有"+daysInYear(2004)+"天"); //2004年