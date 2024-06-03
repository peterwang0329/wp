var sidebar = document.getElementById("sidebar");
var menu_link = document.querySelectorAll("a.menu_link");
var now = document.querySelectorAll("a.now");

var flag = true;
var interval = null;

function toggle() {
    if (flag) {
        sidebar.style.width = "0%";
        now.forEach(now => { now.setAttribute('style', 'display: none;'); })
        menu_link.forEach(menu_link => { menu_link.setAttribute('style', 'display: none;'); })
        flag = false;
    }
    else {
        sidebar.style.width = "15%";
        interval = setInterval(() => {
            now.forEach(now => { now.setAttribute('style', 'display: block;'); })
            menu_link.forEach(menu_link => { menu_link.setAttribute('style', 'display: block;'); })
            clearInterval(interval);
        }, 1000);
        flag = true;
    }
}