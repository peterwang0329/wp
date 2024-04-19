let click = true
let sidebar = document.querySelector("div");
function toggle(){
    if(click){
        click = false
        sidebar.style.width = "20%"
    }
    else{
        click = true
        sidebar.style.width = "10%"
    }
}