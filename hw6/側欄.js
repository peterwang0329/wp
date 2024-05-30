let click = true
let sidebar = document.querySelector("#sidebar");

sidebar.addEventListener("mouseover", function() {
    sidebar.classList.add("div_hovered");
    sidebar.classList.add("a_hovered");
});

sidebar.addEventListener("mouseout", function() {
    sidebar.classList.remove("div_hovered");
    sidebar.classList.remove("a_hovered");
});