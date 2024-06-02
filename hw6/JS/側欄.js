let sidebar = document.getElementById("sidebar");
let a = document.querySelectorAll("a");

var flag =false;

function toggle() {
    if(flag){
        sidebar.style.width = 10 + "vh";
        sidebar.style.height = 7 +"vh";
        flag = false;
    }
    else{
        sidebar.style.width = 18 + "vh";
        sidebar.style.height = 99 +"vh";
        a.forEach(a =>{
            a.setAttribute('style','display: block;');
            a.addEventListener('mouseover',() => {
                a.style.transform = 'scale(1.2)';
                a.style.backgroundColor = 'rgb(198, 196, 172)';
            })
            a.addEventListener('mouseout',() => {
                a.style.transform = 'scale(1)';
                a.style.backgroundColor = 'rgb(225, 223, 194)';
                a.style.border ='rgb(225, 223, 194)';
            })
        });
        flag = true;
    }
}