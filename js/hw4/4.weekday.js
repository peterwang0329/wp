var weeks={Monday:1,Tuesday:2,Wednesday:3,Thusday:4,Friday:5,Saturday:6,Sunday:0}
var str=['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];

function weekday(str){
    var c = ""
    for(let i in str)
        c+= weeks[str[i]] + " "
    return c
}

console.log(weekday(str))