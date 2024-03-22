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
console.log(daysInYear(1991)); //1991年
console.log(daysInYear(2000)); //2000年
console.log(daysInYear(2004)); //2004年